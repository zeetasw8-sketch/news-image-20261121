# The World Today — 21 November 2026 in one image

Entry for make.fun competition `news-image-20261121` ($100).
One 1024×1024 PNG that sums up Saturday 21 November 2026's world news:
a maroon broadsheet masthead, one dominant hero (Wall Street's slide
into correction), four big cards, and an "ALSO TODAY" ticker with six
more stories — 11 stories in total.

## The 11 stories

### Hero — Wall Street in Correction
Friday's close in New York (reported Saturday in Asia): the S&P 500 fell
3.7% to 6,910 and the Dow lost 949 points to 48,147 — both in correction,
over 10% below their records. The Nasdaq slid 5.3%, erasing its 2026
gains, in the worst week since the Covid crash. Nvidia fell 14% as the
SEC examined its accounting; Anthropic fell about 9%. Bitcoin dropped
below $60,000.
Sources: AJP (Seoul, 21 Nov 2026), Reuters markets, LA Times 20 Nov 2026,
Global Advisors News Brief 21 Nov 2026.

### Card 1 — Peru Quake 6.7
Magnitude 6.7 (USGS) hit central Peru at 00:09 UTC near Carhuamayo,
108 km deep. Felt strongly in Lima; no deaths or serious damage so far.
Sources: Reuters 21 Nov 2026, AFP via NAMPA, USGS.

### Card 2 — COP31 Talks Stall
Climate talks ran past Friday's deadline with no deal; a third draft is
promised Saturday morning. Panama may block a weak outcome.
Sources: AP via Bytes Europe (21 Nov 2026), Reuters Climate Focus,
Carbon Brief DeBriefed 20 Nov 2026.

### Card 3 — Rahul's SENA Century
KL Rahul's century at Basin Reserve made him the first India opener with
a Test hundred in all four SENA nations. India 344/2 at tea, 24 behind.
Sources: Reuters 21 Nov 2026 00:19 UTC, IANS 21 Nov 2026 08:34 IST.

### Card 4 — Court Voids $1.7T Bill
The Fifth Circuit ruled 9–8 the House passed the 2022 $1.7T bill
unconstitutionally via pandemic proxy voting, blocking a Texas worker
protection.
Source: Reuters 21 Nov 2026.

### Ticker — ALSO TODAY
1. BBC: migrant-bail scam lives on after $811m fine (BBC investigation
   published 21 Nov 2026 01:02).
2. 170 'cremated' pets near Manila found dumped (23:20 GMT) (BBC).
3. Kane out for months with torn ankle ligament (IANS, 21 Nov 08:18 IST).
4. Denmark expels envoy over murder plot (announced Fri) (Al Jazeera
   21 Nov 2026; WSJ).
5. Kushner: Moscow open to NATO-like guarantees; Russia denies
   (RFE/RL 21 Nov 2026 03:21 UTC; NY Post 20 Nov 2026).
6. India U17 reach 2027 Asian Cup after 0–0 draw (IANS, 21 Nov 00:07 IST).

Full research notes, including sources and dating analysis for every
story: `../NEWS-21.md`.

## Verification notes (dating and numbers)

- **One day, honestly dated.** Every story happened, or was first
  reported, on 21 November 2026 in some time zone. The hero is Friday's
  New York close, reported Saturday in Asia — the image says so
  ("Friday's close in New York, reported Saturday in Asia"), the same
  honest sequencing the 20 Nov entry used ("closed Thursday").
- **Anthropic: no precise figure.** Sources disagree on Anthropic's close
  ($88.30 / −9.1% per AP/WSJ vs $88.91 / −8.5% per CNN), so the image
  only says "Anthropic fell about 9%".
- **Quake magnitude: "6.7 (USGS)".** GFZ says 6.8 and early graphics said
  6.9; the image uses the USGS figure and attributes it.
- **COP31: "molor / tanpa kesepakatan", not the 19 Nov draft.** The
  disputed draft is from 19 Nov (already a card in the 20 Nov entry).
  What is new on 21 Nov is the talks running past Friday's deadline with
  no deal, plus the promised third draft Saturday morning — that is what
  the card says.
- **Ukraine peace (ticker 5): both sides shown.** Kushner's claim that
  Moscow is "comfortable" with NATO-like guarantees is paired with
  Russia's denial (Ryabkov); the image never states "Russia agreed" as
  fact.
- **Pets cremation (ticker 2): timezone stated.** Published 20 Nov 2026
  23:20 GMT — 00:20 CET / 06:20 WIB Saturday 21 Nov — so the image
  carries "(23:20 GMT)".
- **Denmark (ticker 4): "announced Fri".** The expulsion was announced
  Friday 20 Nov in Europe; it is in the ticker only via Al Jazeera's
  21 Nov publication, and the image flags that.
- **Migrant bail (ticker 1): wording.** The $811m fine is from 2024;
  what is new on 21 Nov is the BBC investigation finding the scam
  continues — the image says "lives on after $811m fine", not "fined
  today".
- **No casualty claims beyond early reports.** The quake card says "no
  deaths or serious damage so far" (Peru Geophysical Institute, early
  report).

## Files

- `entry.png` — the image, 1024×1024 PNG, 149,504 bytes
  (sha256 `a18fd9d309ac12b2a647fe70c519ea4815371e266b70f367647d93d1d3c154cf`).
  Rendered deterministically (two runs → identical sha256) by
  `../render21.py` (Python + Pillow, DejaVu fonts, written from scratch
  for this entry).
- `main.ts` — copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
  (default `/output`) and verifies the copy is byte-identical, after
  checking the PNG signature. Run:
  `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`, then
  `sha256sum out/entry.png entry.png` — the hashes must match.
- `LICENSE` — MIT (written by `makefun init`).
- `.makefun/freshness.json` — drand anchor for this entry.

## License

MIT — see `LICENSE`.
