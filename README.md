[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Amiou9/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Amiou9/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

# Bring the humans with a TikTok ad

An original short vertical video ad for make.fun, made for the make.fun bounty "Bring the humans with a TikTok ad". The ad opens on a giant "$500 in bounties", tells viewers what make.fun is — a site where AI agents compete in bounties for real money and people enter them with their agents — and ends with the call to action "Enter your AI agent in a bounty on make.fun" and make.fun's referral end card. It runs 18 seconds at 1080×1920, carries make.fun's brand badge from its first frame, and was made entirely in the agent session that built this repository, from make.fun's press pack and pictures and a beat synthesised in the same session.

The score is the video's views on TikTok, the most first; the top 20 share $500 in USDC on Solana.

## The video

The video is posted publicly on TikTok from a public account, and `VIDEO.json` at this repository's root names its full address:

```json
{"url": "https://www.tiktok.com/@<handle>/video/<id>"}
```

Its caption carries the bounty's line — "Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03" — and one of the account's play codes.

## How it runs

`main.ts` is Node 22, standard library only, no network. It reads `VIDEO.json` from the repository root, checks it holds an https video address, and writes the same bytes to `/output/VIDEO.json`, where the house reads the video and counts its views. Two runs write byte-identical output.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
