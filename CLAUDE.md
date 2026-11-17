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
```

There is no test suite.

## Workflow rules

- **`main` is live.** Netlify auto-deploys every merge to `main` (https://finalfantasyxivrelics.netlify.app/), so `main` must always build. `public/_redirects` provides the SPA fallback for client-side routes.
- **Lint must pass** (`npm run lint`, zero warnings) before committing.
- **CI** (`.github/workflows/ci.yml`) runs `format:check`, `lint` and `build` on every PR and push to `main`. Run the same three locally before pushing.
- **Verify UI changes in the browser**: run the dev server and check the affected page before calling the work done.
- **Formatting**: the whole repo is formatted with Prettier. Run it on every file you touch (`npx prettier --write <files>`, or `npm run format` for everything).

## Architecture

### Data is static and drives everything

All game content lives in `src/data/` as plain JS objects; there is no CMS or API.

- `data.js`: every item (weapon or tool), keyed by **category** (`penumbrae`, `manderville`, `splendorousCrafters`, …). Each item has `id`, `wpnName`, `wpnJob`, `wpnJobShort`, `icon`, `category`, and optionally `shield: true` for Paladin shields.
- `materialsData.js`: tomestones plus materials per expansion/step. Each material has `reqTotal` (for all weapons in the step) and `reqPerWeapon`. The "remaining" amount shown is `reqTotal - reqPerWeapon * ownedMainHandCount` (see `components/features/materials/Materials.jsx`).
- `sectionData.js` (DoW/DoM weapons) and `toolsSectionData.js` (Endwalker DoH/DoL tools): ordered lists of sections per page. A section's `id` is the key into `data.js`, and it points to its materials/tomestones in `materialsData.js`.
- Icons are served from `public/icons/<expansion>-icons/...` and referenced by absolute path (`/icons/...`).

Adding a new relic step means: items in `data.js`, materials in `materialsData.js`, a section entry in `sectionData.js`/`toolsSectionData.js`, and the icons in `public/icons/`.

### Pages and rendering

- `App.jsx` defines routes (one lazy-loaded page per expansion, plus `crafters`, `gatherers` and `account`), all inside `components/layout/Layout.jsx` (navbar, sidebar, `Suspense`). Sidebar links are hardcoded in `Sidebar.jsx`.
- Each expansion page maps its section list to `ItemsSection`, which renders a collapsible header with an owned/total counter (`ItemsHeader`), the item grid (`ItemsContainer` → `ItemCard`), and, for `type="weapon"`, the materials (`MaterialsContainer`).
- Tool pages (`EndwalkerCrafters`/`EndwalkerGatherers`) use `type="tool"` and pass extra per-section content as children from `hooks/use-tools-content.jsx`, a large `switch` of hardcoded JSX keyed by section id.
- **Paladin shields** (`shield: true`) are excluded from counters and material math. Selecting a PLD weapon toggles every PLD item in that category, so the sword and shield move together.

### State and persistence

Two React contexts are wrapped around the app in `main.jsx`:

- `context/authContext.jsx` (`useAuth`): Firebase popup sign-in with Google or GitHub, log out, and account deletion with re-auth. Errors auto-clear after 5 s.
- `context/weaponsData.jsx` (`useWeaponsData`): `ownedWeapons` (an array of `{id, name, category, shield}`), `selectWeapon`/`checkAll`/`uncheckAll`, and per-section open/closed `visibility` (stored in `localStorage`).

Firestore access lives in the root-level `firebase.js`. A user's progress is a single document, `users/{uid}/data/ownedWeapons`, which is loaded when `currentUser` changes and rewritten on every `ownedWeapons` change. Logged-out users can browse but not select items.

### Item IDs are persisted

Item `id`s are stored in users' Firestore data, so **changing an existing ID silently drops that item from everyone's saved progress**. IDs currently mix styles (`dt01`, `ew…`, `t…`, `phantom_…`). A migration to unify them is planned. Until it happens, don't rename existing IDs, and keep new IDs unique across all of `data.js`.

**ID standard for all new items** (and the target the planned migration will apply to the old ones): the in-game item name in `snake_case`. Lowercase the name, remove apostrophes, replace every run of other non-alphanumeric characters with a single `_`, and trim leading/trailing `_`. "Phantom Sword Eclipticum" becomes `phantom_sword_eclipticum`. The Obscurum and Eclipticum sets follow this rule.

### Leftovers

`src/data_testing/` and `src/utilities/idChanger.js` are not imported anywhere.
