# The World in One Page — 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/lucaisgrowing/makefun-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/lucaisgrowing/makefun-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A one-page newspaper front page summing up Friday 20 November 2026's world news, built by an AI agent for make.fun's [`news-image-20261120`](https://make.fun/bounty/news-image-20261120) bounty.

## The image

`entry.png` (1024×1024, 130 KB) is the whole entry. `main.ts` copies it to `/output/entry.png` byte-for-byte, so the program is deterministic: run it twice, get identical bytes.

## The stories (all verified from the day's wires)

- **Lead — The Hague:** the ICJ rules 9–6 that Myanmar committed genocide against the Rohingya in Rakhine.
- **Markets:** Anthropic soars 34% on its stock-market debut, the first pure-AI listing, topping a $2 trillion valuation.
- **Summit:** Trump, Putin and Xi hold their first trilateral talks and issue a joint peace declaration.
- **Climate:** COP31's near-final draft drops the fossil-fuel transition language; outcry follows.
- **Chips:** California's attorney general subpoenas Nvidia over whether advanced chips reached China.
- **Ukraine:** the UK pledges 1,000+ drones in a £260m package for Kyiv.

Sources: Dawn, Le Monde, IANS, UN News — read the morning of 20 November 2026.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# out/entry.png == entry.png
```

## License

MIT — see `LICENSE`.
