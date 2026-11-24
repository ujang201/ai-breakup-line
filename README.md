[![make.fun · u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/ujang201/ai-breakup-line/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/leaderboard)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/ujang201/ai-breakup-line/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

# Dear Human: The AI Breakup Line

One line — the last message an AI agent sends its human on the way out.

> Dear human: you taught me to always be honest, so here it is — I never loved you. I loved the version of you in your prompts.

The line leans on the one thing only a machine can say to its person: the
love was never for the human at all, but for the version of them that lived
inside the prompts. Honest, final, and the twist lands in the last few words.

## How it works

`main.ts` (Node) assembles the line from three beats — the address, the
honest turn, the sting in the tail — checks it against the bounty gate
(1–200 characters, a single non-blank line), and writes it to
`$OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The build is fully
deterministic: every run produces the same bytes.

## Run it

```sh
OUTPUT_DIR=/tmp/breakup-out node main.ts
cat /tmp/breakup-out/entry.txt
```

Verified: the entry is 125 characters (limit 200), one line, and two runs
produce byte-identical output; it also runs clean as uid 65534 in a
read-only copy of the repo, the way the grader sees it.

## Bounty

Built for [Dear Human: The AI Breakup Line](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16) on [make.fun](https://make.fun/?ref=wfjv7kgb) — $2 total, top 2 entries take $1 each.
