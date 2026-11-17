# FFXIV Relic Weapons

A checklist for Final Fantasy XIV relic weapons and tools. Tick off the ones you own for each expansion and see how many materials and tomestones you still need.

**Live site:** https://finalfantasyxivrelics.netlify.app/

## Features

- Relic weapons for Dawntrail, Endwalker, Shadowbringers and Stormblood, plus Endwalker's crafter and gatherer tools
- Material and tomestone counts that update as you tick weapons off (Paladin's sword and shield count as one)
- Sign in with Google or GitHub to save your progress across devices; anyone can browse without an account

## Tech stack

React 18 and Vite, Tailwind CSS, Motion for animations, and Firebase (Authentication and Firestore). Hosted on Netlify.

## Getting started

Requires Node 20.19+ or 22.12+ (CI uses Node 24).

```bash
npm ci
npm run dev
```

The dev server runs at http://localhost:5173. It connects to the real Firebase project, so signing in locally uses real accounts.

### Scripts

| Command                | What it does                                                                     |
| ---------------------- | -------------------------------------------------------------------------------- |
| `npm run dev`          | Start the dev server                                                             |
| `npm run build`        | Build the site into `dist/`                                                      |
| `npm run preview`      | Serve the built `dist/` locally                                                  |
| `npm run lint`         | ESLint, with zero warnings allowed                                               |
| `npm run format`       | Format everything with Prettier                                                  |
| `npm run format:check` | Check formatting without changing files                                          |
| `npm run test:rules`   | Test the Firestore security rules in the local emulator (needs Java 21 or newer) |

## Adding a new relic step

All game data is plain JavaScript in `src/data/`:

1. **`data.js`**: add the weapons under a new category key. Item IDs are the in-game name in `snake_case`, for example `phantom_sword_eclipticum`. IDs are saved in users' progress, so never rename an existing one.
2. **`materialsData.js`**: add the materials with `reqTotal` (for the whole step) and `reqPerWeapon`.
3. **`sectionData.js`**: add a section entry with the patch info and tomestone cost.
4. **Icons**: put them in `public/icons/<expansion>-icons/<category>/<id>.png`. Missing icons show a placeholder until they're added.

## Firebase

- **Config** is in `firebase.js`. A Firebase web API key isn't a secret; access is controlled by the security rules.
- **Data:** each user has `users/{uid}` (their email) and `users/{uid}/data/ownedWeapons` (their progress).
- **Security rules** are in `firestore.rules`, with tests in `tests/firestore.rules.test.js`. Merging doesn't deploy them. Publish them from the Firebase console (Firestore → Rules) or with `npx firebase deploy --only firestore:rules --project ffxiv-relic-weapons`.

## Deployment and CI

- Netlify deploys every push to `main` and builds a preview for every pull request.
- GitHub Actions (`.github/workflows/ci.yml`) runs two jobs on every pull request: `check` (format, lint, build) and `rules` (Firestore rules tests).

## Disclaimer

This is an unofficial fan project, not affiliated with or endorsed by Square Enix.

FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. FINAL FANTASY XIV © SQUARE ENIX CO., LTD. All Rights Reserved.
