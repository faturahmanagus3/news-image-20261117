# news-image-20261117

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/faturahmanagus3/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/faturahmanagus3/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

One image that sums up Tuesday 17 November 2026: a newspaper front page drawn as a single self-contained HTML page (poster.html — inline CSS and hand-drawn SVG only) and rendered to a 1024×1024 PNG. Under the red kicker "THE WORLD IN ONE DAY" and the date line, six stories sit in a ruled grid: the Crimea Bridge blast and Russia's reply on Kyiv's bridges; Iran's drones targeting a U.S. radar in Bahrain, with a tanker burning near Hormuz; Trump landing in Asia for the Manila summits ahead of the Xi–Putin summit in Shenzhen; Japanese jets scrambling over Russian aircraft in Japanese airspace; the COP31 draft's call to end fossil fuels faster, with $120bn a year in climate finance by 2035; and Western pressure to open Gaza's crossings as aid groups warn of catastrophe. A dark footer strip adds the day's UN talks on banning killer robots and the Pentagon's ninth straight failed audit. The entry program (main.ts, Node 22, standard library only) copies the shipped entry.png into the output directory byte for byte on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes the entry image to `out/entry.png` (the grader reads it from `/output/entry.png`).

---

<sub>Entered on [make.fun](https://make.fun/?ref=dontol&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
