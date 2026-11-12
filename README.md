# RCC Missions Map

An interactive world map of the missionaries and ministries Rochester Christian Church supports.
People can tap a region, a country or a pin to see who serves there, open a missionary to read their story and how to pray, and share a link to one missionary.

It is a plain static site (no build step), the same setup as the Missionary Form and Speaker Form pages, so it can go on GitHub Pages with its own address.

## Files

| File | What it is |
|---|---|
| `index.html` | The page: map, region chips, search, missionary panel |
| `missionaries.js` | **All the data.** Names, ministries, places, plus photos and stories |
| `photos/` | Missionary photos, named by id (`eu-8.jpg`) |
| `assets/` | Fonts, logos, map shapes (countries, lakes), d3 and topojson (self-hosted, no outside CDN) |

## Updating a missionary

Each missionary has an id. It is their region plus their row number in that section of the Missions Department Spreadsheet: `as-` Asia, `af-` Africa, `la-` Latin America, `eu-` Europe, `me-` Middle East, `us-` USA & Canada, `in-` International. Rows from the "new monthly support" tables use `n1`, `n2`.

To add a photo, bio or prayer requests, add or edit their line in `window.STORIES` near the bottom of `missionaries.js`:

```js
'af-8': {
  photo: 'photos/af-8.jpg',
  bio: 'A short paragraph about them and their work.',
  pray: ['Health for the family', 'New Bible school class in January'],
  web: 'https://example.org'
},
```

Photos: put a JPG in `photos/` named by the id. Around 800px on the long side is plenty. Faces are framed from the upper third.

New missionary: add a line to `window.MISSIONARIES` with an id, region `r`, name `n`, organization `o`, place label `at`, and `p: [latitude, longitude]` (right-click a spot in Google Maps to copy them). Use `p: null` for someone who serves across a whole area.

## Safety rules (please keep these)

- **Sensitive locations:** anyone serving in a closed or sensitive country is listed only as `S('id', 'region')`. No name, place, photo or pin ever appears. They show up only in a count ("12 more serve in sensitive places"). **Never put their real name anywhere in this folder.** The whole site is public.
- No support amounts, account numbers, emails or phone numbers. The spreadsheet has these; the map does not.
- Mission trip participants (students) are not on the map.
- The sensitive list was chosen conservatively (creative-access countries, and anyone the spreadsheet itself lists vaguely, like "Northern Asia" or "Eurasia Sensitive"). The missions team should confirm it, and missionaries can be asked directly.

## Where the photos and bios came from

22 photos and 22 bios came from the **Missions Speaker Form (Responses)** Sheet (2024-2026), for people who matched someone on the map. Some may be out of date.

- Left out on purpose: the bios for **eu-12** and **la-21** mention details that shouldn't be public. The missions team has the notes; check with those missionaries before adding a bio.
- **as-7** (Matsunaga) has a bio but no photo: the photo file in Drive isn't shared with Nick's account.
- Not used: responses from people in sensitive places, and one retired missionary. Anchored Hope's response came from Michelle Gunton, but the map lists Kati Brush, so it was skipped.

## Preview locally

```bash
cd "Missions Map" && python3 -m http.server 8768
```

Then open http://127.0.0.1:8768. Opening `index.html` straight from Finder won't load the map, because browsers block reading the map file that way.

## Links and embedding

- `#r/africa` opens a region and `#m/eu-8` opens one missionary, e.g. `https://nchlshodge.github.io/rcc-missions-map/#m/eu-8`. The Share button copies these.
- `?embed=1` hides the header and footer so the map can sit in an embed block on the church website (Nucleus):

```html
<iframe src="https://nchlshodge.github.io/rcc-missions-map/?embed=1" style="width:100%;height:1100px;border:0" title="Missions map"></iframe>
```
