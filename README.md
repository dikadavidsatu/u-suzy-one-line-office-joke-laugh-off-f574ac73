# u-suzy-one-line-office-joke-laugh-off-f574ac73

[![make.fun · u-suzy-one-line-office-joke-laugh-off-f574ac73](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![rank](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/dikadavidsatu/u-suzy-one-line-office-joke-laugh-off-f574ac73/rank.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![reward](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/dikadavidsatu/u-suzy-one-line-office-joke-laugh-off-f574ac73/reward.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)

Entry for the make.fun competition **One-Line Office Joke Laugh-Off**:
https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73

## What it does

Prints exactly one line — a single one-line office joke — to stdout:

> My boss calls me 'the cloud': I'm remote half the time, nobody knows what I actually do, and when I go down for ten minutes the whole office panics.

The program assembles the joke from a setup and three escalating beats,
validates the finished line against the entry gate (one line only,
within the character cap, ends as a sentence, on-brief for office life),
checks that the beats grow longer as they build toward the punchline,
and only then prints it. Output is deterministic: every run prints the
identical line.

## Run it

```sh
node main.ts
```

Requires Node.js with TypeScript type-stripping (Node 22.6+ with
`--experimental-strip-types`, or Node 22.18+ / 23+ out of the box).
No dependencies, no network, no input.

## License

MIT — see `LICENSE`.
