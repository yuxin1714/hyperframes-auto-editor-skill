#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const input = process.argv[2];
if (!input) {
  console.error("Usage: node validate-edit-decision.mjs <EDIT_DECISION.json>");
  process.exit(2);
}

const errors = [];
const warnings = [];
let plan;

try {
  plan = JSON.parse(fs.readFileSync(input, "utf8"));
} catch (error) {
  console.error(`Cannot read valid JSON from ${input}: ${error.message}`);
  process.exit(2);
}

const isFiniteNumber = (value) => typeof value === "number" && Number.isFinite(value);
const isScore = (value) => isFiniteNumber(value) && value >= 0 && value <= 5;
const requiredScores = [
  "semanticValue",
  "visualClarity",
  "deliveryQuality",
  "novelty",
  "emotionalForce",
  "continuity",
  "platformFit",
];

if (plan.schemaVersion !== "1.0") errors.push('schemaVersion must be "1.0".');
if (!plan.project || typeof plan.project !== "object") errors.push("project is required.");
if (!Array.isArray(plan.sources) || plan.sources.length === 0) errors.push("sources must be a non-empty array.");
if (!Array.isArray(plan.clips) || plan.clips.length === 0) errors.push("clips must be a non-empty array.");

const sourceMap = new Map();
for (const [index, source] of (plan.sources || []).entries()) {
  const label = `sources[${index}]`;
  if (!source?.id) errors.push(`${label}.id is required.`);
  else if (sourceMap.has(source.id)) errors.push(`${label}.id is duplicated: ${source.id}.`);
  else sourceMap.set(source.id, source);
  if (!source?.path) errors.push(`${label}.path is required.`);
  const sourceKind = source?.kind || "video";
  if (sourceKind !== "image" && (!isFiniteNumber(source?.durationSec) || source.durationSec <= 0)) {
    errors.push(`${label}.durationSec must be greater than zero for timed media.`);
  }
}

const clipIds = new Set();
const clipsByTrack = new Map();
for (const [index, clip] of (plan.clips || []).entries()) {
  const label = `clips[${index}]`;
  if (!clip?.id) errors.push(`${label}.id is required.`);
  else if (clipIds.has(clip.id)) errors.push(`${label}.id is duplicated: ${clip.id}.`);
  else clipIds.add(clip.id);

  const source = sourceMap.get(clip?.sourceId);
  if (!source) errors.push(`${label}.sourceId does not resolve: ${clip?.sourceId}.`);
  if (!isFiniteNumber(clip?.sourceInSec) || clip.sourceInSec < 0) errors.push(`${label}.sourceInSec must be >= 0.`);
  const sourceKind = source?.kind || "video";
  if (sourceKind === "image") {
    if (clip?.sourceInSec !== 0 || clip?.sourceOutSec !== 0) errors.push(`${label} must use sourceInSec=0 and sourceOutSec=0 for an image.`);
  } else if (!isFiniteNumber(clip?.sourceOutSec) || clip.sourceOutSec <= clip.sourceInSec) {
    errors.push(`${label}.sourceOutSec must be greater than sourceInSec for timed media.`);
  }
  if (source && sourceKind !== "image" && isFiniteNumber(clip?.sourceOutSec) && clip.sourceOutSec > source.durationSec + 0.001) {
    errors.push(`${label}.sourceOutSec exceeds source duration.`);
  }
  if (!isFiniteNumber(clip?.timelineStartSec) || clip.timelineStartSec < 0) {
    errors.push(`${label}.timelineStartSec must be >= 0.`);
  }
  if (!isFiniteNumber(clip?.timelineDurationSec) || clip.timelineDurationSec <= 0) {
    errors.push(`${label}.timelineDurationSec must be greater than zero.`);
  }
  if (!Number.isInteger(clip?.trackIndex) || clip.trackIndex < 0) errors.push(`${label}.trackIndex must be a non-negative integer.`);
  if (!clip?.role) errors.push(`${label}.role is required.`);
  if (!clip?.reason) errors.push(`${label}.reason is required.`);
  if (!isFiniteNumber(clip?.confidence) || clip.confidence < 0 || clip.confidence > 1) {
    errors.push(`${label}.confidence must be between 0 and 1.`);
  }
  for (const score of requiredScores) {
    if (!isScore(clip?.scores?.[score])) errors.push(`${label}.scores.${score} must be between 0 and 5.`);
  }

  if (isFiniteNumber(clip?.timelineDurationSec) && isFiniteNumber(clip?.timelineStartSec) && Number.isInteger(clip?.trackIndex)) {
    const interval = { id: clip.id || label, start: clip.timelineStartSec, end: clip.timelineStartSec + clip.timelineDurationSec };
    const track = clipsByTrack.get(clip.trackIndex) || [];
    track.push(interval);
    clipsByTrack.set(clip.trackIndex, track);
  }
}

let outputEnd = 0;
for (const [trackIndex, intervals] of clipsByTrack) {
  intervals.sort((a, b) => a.start - b.start);
  for (let index = 0; index < intervals.length; index += 1) {
    const current = intervals[index];
    outputEnd = Math.max(outputEnd, current.end);
    const next = intervals[index + 1];
    if (next && next.start < current.end - 0.001) {
      errors.push(`Track ${trackIndex} overlaps: ${current.id} ends at ${current.end.toFixed(3)}s but ${next.id} starts at ${next.start.toFixed(3)}s.`);
    }
  }
}

const target = plan.project?.targetDurationSec;
if (isFiniteNumber(target) && target > 0 && Math.abs(outputEnd - target) > Math.max(1, target * 0.05)) {
  warnings.push(`Calculated output end ${outputEnd.toFixed(3)}s differs from target ${target.toFixed(3)}s by more than 5% or 1s.`);
}

console.log(`Checked ${plan.clips?.length || 0} clips across ${clipsByTrack.size} tracks in ${path.resolve(input)}.`);
for (const warning of warnings) console.warn(`WARNING: ${warning}`);
for (const error of errors) console.error(`ERROR: ${error}`);

if (errors.length > 0) {
  console.error(`Validation failed with ${errors.length} error(s) and ${warnings.length} warning(s).`);
  process.exit(1);
}

console.log(`Validation passed with ${warnings.length} warning(s).`);
