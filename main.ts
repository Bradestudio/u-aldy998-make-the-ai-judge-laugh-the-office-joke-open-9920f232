// Make the AI Judge Laugh: the Office Joke Open — make.fun bounty
// u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232
//
// This program writes exactly one joke about office life to
// /output/entry.txt: a single line, 1-200 characters, no trailing
// newline. The gate counts characters, so the program validates the
// text against the gate before writing it.
//
// Joke draft v2 (final) — candidates rejected on revision:
//   * "My calendar is so full my lunch break has a waitlist — and
//     I'm number three." Real detail, but the payoff lands flat:
//     a waitlist for lunch is a shrug, not a turn.
//   * "HR sent a survey about morale, so I filled it in during the
//     meeting about the survey about morale." The loop is there, but
//     HR surveys are a familiar setup and the payoff repeats the
//     setup instead of twisting it.
// The status joke wins: a specific office detail (the chat status),
// a clear misdirection (lunch in peace), and the payoff turns the
// meeting into a self-perpetuating creature — a meeting about the
// status that was meant to avoid meetings. Final wording kept from
// v1 after re-reading aloud: the em dash beats a comma because the
// turn needs a beat before the payoff lands.
//
// Node 22 runs this TypeScript as-is (no build step, stdlib only).
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: one sentence, setup then punchline on a single line.
const JOKE =
  "I set my status to 'in a meeting' so I could eat lunch in peace — now I'm in a meeting about why I keep setting my status to 'in a meeting'.";

// The gate: UTF-8 text, 1 to 200 characters, not only whitespace,
// a single line. Refuse to write anything that fails it.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke is ${JOKE.length} characters, gate needs 1-200`);
}
if (JOKE.trim().length === 0 || /[\r\n]/.test(JOKE)) {
  throw new Error('joke must be one non-blank line');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), JOKE, 'utf8');

console.log(`wrote entry.txt (${JOKE.length} characters): ${JOKE}`);
