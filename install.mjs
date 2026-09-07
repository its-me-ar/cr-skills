#!/usr/bin/env node
/**
 * Cross-platform installer for cr-skills (macOS, Linux, Windows).
 * Run from the repo you want to review:
 *
 *   node .cr-skills/install.mjs
 *   node .cr-skills/install.mjs --all
 *   node .cr-skills/install.mjs --antigravity --claude
 */

import { cpSync, copyFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const skillRoot = dirname(fileURLToPath(import.meta.url));
const targetRoot = process.cwd();
const args = new Set(process.argv.slice(2));

const all = args.has('--all');
const installCursor =
  all || args.has('--cursor') || (!all && !args.has('--antigravity') && !args.has('--claude'));
const installAntigravity = all || args.has('--antigravity');
const installClaude = all || args.has('--claude');

function copyDir(from, to) {
  if (!existsSync(from)) {
    console.error(`Missing: ${from}`);
    process.exit(1);
  }
  mkdirSync(to, { recursive: true });
  cpSync(from, to, { recursive: true, force: true });
  console.log(`✓ ${to}`);
}

function copyFile(from, to) {
  if (!existsSync(from)) {
    console.error(`Missing: ${from}`);
    process.exit(1);
  }
  copyFileSync(from, to);
  console.log(`✓ ${to}`);
}

console.log('Installing cr-skills into:', targetRoot);
console.log('From:', skillRoot);
console.log('');

if (installCursor) {
  copyDir(join(skillRoot, '.cursor'), join(targetRoot, '.cursor'));
}

if (installAntigravity) {
  copyFile(
    join(skillRoot, 'templates', 'antigravity', 'GEMINI.md'),
    join(targetRoot, 'GEMINI.md'),
  );
}

if (installClaude) {
  const claudeSkillDir = join(targetRoot, '.claude', 'skills', 'topic-code-review');
  mkdirSync(claudeSkillDir, { recursive: true });
  copyDir(join(skillRoot, '.cursor', 'skills', 'topic-code-review'), claudeSkillDir);

  const claudeMd = join(skillRoot, 'templates', 'claude', 'CLAUDE.md');
  if (existsSync(claudeMd)) {
    copyFile(claudeMd, join(targetRoot, 'CLAUDE.md'));
  }
}

console.log('');
console.log('Done. Open this repo in your IDE and run /code-review (Cursor) or ask for a code review.');
console.log('Topic examples: examples/topic-lists.md in the cr-skills submodule.');
