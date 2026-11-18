# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

A Final Fantasy XIV relic weapon tracker: users tick off the relic weapons/tools they own per expansion and see the materials still needed. React 18 + Vite SPA, Tailwind, Motion (`motion/react`), Firebase Auth + Firestore. Plain JavaScript (JSX), no TypeScript.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # production build to dist/
npm run lint     # ESLint, --max-warnings 0
npm run preview  # serve the built dist/
npm run format   # Prettier over the repo (prettier-plugin-tailwindcss sorts class names)
npm run format:check   # what CI runs: fails if any file isn't formatted
npm test               # unit tests in tests/unit/ (Vitest, no emulator)
npm run test:rules     # Firestore rules tests in the emulator (needs Java 21+)
```

There are two kinds of tests, run separately:

- **Unit tests** in `tests/unit/` (`npm test`) cover the pure logic in `src/utilities/`: selection and Paladin sword+shield pairing, the shield-free counters, and the materials math, using the real data. They run anywhere. `toolsTable.test.js` covers the tool table's row grouping, and `toolsSectionData.test.js` checks that every tool section has the fields its renderer needs. Keep that logic in pure functions there (components just call them), and add a test when you change it.
- **Firestore rules tests** in `tests/firestore.rules.test.js` (`npm run test:rules`) run in the Firestore emulator, which needs Java; Java isn't installed on the owner's machine, so they run in CI. `npm test` only scans `tests/unit/`, so it never picks this file up.

## Workflow rules

- **`main` is live.** Netlify auto-deploys every merge to `main` (https://finalfantasyxivrelics.netlify.app/), so `main` must always build. `public/_redirects` provides the SPA fallback for client-side routes.
- **Lint must pass** (`npm run lint`, zero warnings) before committing.
- **CI** (`.github/workflows/ci.yml`) runs `format:check`, `lint`, `test` and `build` (job `check`) and the Firestore rules tests (job `rules`) on every PR and push to `main`. Run the first four locally before pushing.
- **Verify UI changes in the browser**: run the dev server and check the affected page before calling the work done.
- **Formatting**: the whole repo is formatted with Prettier. Run it on every file you touch (`npx prettier --write <files>`, or `npm run format` for everything).
- **Open work is tracked in GitHub issues** (`gh issue list`). Label `code` means code work; label `owner` means only the owner can do it (game checks, icons, Firebase console, repo settings), so don't attempt those, just point to them. When working on an issue, read it first (`gh issue view <n>`) and put `Closes #<n>` in the PR description so it closes on merge. Work you find but don't do becomes a new issue (ask the owner first), not a note in chat.

## Architecture

### Data is static and drives everything

All game content lives in `src/data/` as plain JS objects; there is no CMS or API.

- `data.js`: every item (weapon or tool), keyed by **category** (`penumbrae`, `manderville`, `splendorousCrafters`, …). Each item has `id`, `wpnName`, `wpnJob`, `wpnJobShort`, `icon`, `category`, and optionally `shield: true` for Paladin shields.
- `materialsData.js`: tomestones plus materials per expansion/step. Each material has `reqTotal` (for all weapons in the step) and `reqPerWeapon`. The "remaining" amount shown is `reqTotal - reqPerWeapon * ownedMainHandCount` (see `src/utilities/materials.js`).
- `sectionData.js` (DoW/DoM weapons) and `toolsSectionData.js` (Endwalker DoH/DoL tools): ordered lists of sections per page. A section's `id` is the key into `data.js`, and it points to its materials/tomestones in `materialsData.js`.
- Icons are served from `public/icons/<expansion>-icons/...` and referenced by absolute path (`/icons/...`). Item and material cards, and the tool pages' icons, fall back to `/icons/not_found.png` when an icon is missing (`src/utilities/imageFallback.js`), so data can be added before its icons.

Adding a new relic step means: items in `data.js`, materials in `materialsData.js`, a section entry in `sectionData.js`/`toolsSectionData.js`, and the icons in `public/icons/`.

A **tool step** is data only too. Its section in `toolsSectionData.js` can have three optional fields, documented at the top of that file and rendered by `components/features/weapons/ToolContent.jsx`:

- `acquire`: a quest link plus a scrip price (only the first Splendorous step uses it).
- `requirements`: the "You will need N <icon> X Components per Tool which means M Collectables…" sentences, one per entry, with an optional `lead` ("Fisher needs") and one or more `parts` joined with "and".
- `toolsTable`: per gatherer job, the rows `ToolsTable.jsx` shows (a table on wide screens, one card per job on phones). Each row is a material from `materialsData.js` (`item`) and, for a trade, the `reward` it's exchanged for and `rewardAtMax` (how many at max collectability). Consecutive rows with the same `reward` object show it once (a merged cell on wide screens, one Trade block on phones), via the helpers in `src/utilities/toolsTable.js`. The gatherer materials (with `minCollectability`/`maxCollectability` and `wiki`) go in `materialsData.js` under `endwalker.doL.<step>`.

### Pages and rendering

- `App.jsx` defines the lazy-loaded routes (one per expansion, plus `crafters`, `gatherers` and `account`), all inside `components/layout/Layout.jsx` (navbar, sidebar, `Suspense`). Sidebar links are hardcoded in `Sidebar.jsx`.
- The DoW/DoM expansion routes (`dawntrail`, `endwalker`, `shadowbringers`, `stormblood`) all render one component, `pages/ExpansionPage.jsx`, with two props: `expansion` (the key into `sectionData.js`) and `title` (the relic name in the header, e.g. "Phantom"). Adding an expansion page means a `sectionData` entry plus a `<Route>` in `App.jsx` with those two props; there is no per-expansion page file.
- `ExpansionPage` maps its section list to `ItemsSection` (passing each section's optional `notes`, shown under the materials), which renders a collapsible header with an owned/total counter (`ItemsHeader`), the item grid (`ItemsContainer` → `ItemCard`), and, for `type="weapon"`, the materials (`MaterialsContainer`).
- Tool pages (`EndwalkerCrafters`/`EndwalkerGatherers`) use `type="tool"` and pass `<ToolContent section={section} />` as children, which renders the section's `acquire`, `requirements` and `toolsTable` data (see above).
- **Paladin shields** (`shield: true`) are excluded from counters and material math. Selecting a PLD weapon toggles every PLD item in that category, so the sword and shield move together. This logic, and the shield-free counting, lives in `src/utilities/ownedWeapons.js`.

### State and persistence

Two React contexts are wrapped around the app in `main.jsx`:

- `context/authContext.jsx` (`useAuth`): Firebase popup sign-in with Google or GitHub, log out, and account deletion with re-auth. Errors auto-clear after 5 s.
- `context/weaponsData.jsx` (`useWeaponsData`): `ownedWeapons` (an array of `{id, name, category, shield}`), `selectWeapon`/`checkAll`/`uncheckAll`, and per-section open/closed `visibility` (stored in `localStorage`).

Firestore access lives in the root-level `firebase.js`. A user's progress is a single document, `users/{uid}/data/ownedWeapons`, which is loaded when `currentUser` changes and rewritten (debounced) when `ownedWeapons` changes. Logged-out users can browse but not select items.

`firebase.js` uses **Firestore Lite** (`firebase/firestore/lite`), which is about a quarter of the size of the full SDK. It supports one-off reads and writes (`getDoc`, `setDoc`, `deleteDoc`, queries) but not realtime listeners (`onSnapshot`) or the offline cache and write queue. A feature that needs those must switch the import back to `firebase/firestore`, at the cost of about 50 KB gzipped on every page.

### Build chunks

`vite.config.js` uses `manualChunks` to put React + React Router, Firebase and Motion into their own chunks (`react-…js`, `firebase-…js`, `motion-…js`), so deploys that only change app code leave those cached in returning visitors' browsers. A new large dependency can be added to a group in `vendorChunks` there. Keep each library inside one group: splitting a library across groups makes Rollup warn about "Circular chunk". Pages are split separately, by the lazy routes in `App.jsx`. Check the sizes in the `npm run build` output when adding a dependency.

**Security rules** live in `firestore.rules` and allow only those two documents per user (`users/{uid}` with just `email`, and `users/{uid}/data/ownedWeapons` with just an `ownedWeapons` list of up to 1000 entries); everything else is denied. Any new Firestore path or field needs a rules change plus tests, or it will be rejected in production. The rules aren't deployed automatically: after merging, the owner pastes `firestore.rules` into the Firebase console (Firestore → Rules) or runs `npx firebase deploy --only firestore:rules`.

### Item IDs are persisted

Item `id`s are stored in users' Firestore data, so **never change an existing ID**. The card would show as unticked, but the counters and materials math (which use the saved `category` and `shield`) would still count the old entry, and re-ticking it would count it twice. Old IDs mix styles: plain numbers (`0`–`263`), `dt01`, `ew…`, `t…`. Migrating them to one style was considered and rejected (issue #43): it only buys consistency, and it would put every user's progress through a migration and need the old-to-new mapping kept forever. They stay as they are for good. Keep new IDs unique across all of `data.js`.

**ID standard for all new items**: the in-game item name in `snake_case`. Lowercase the name, remove apostrophes, replace every run of other non-alphanumeric characters with a single `_`, and trim leading/trailing `_`. "Phantom Sword Eclipticum" becomes `phantom_sword_eclipticum`. The Obscurum, Eclipticum and Occultum sets follow this rule.
