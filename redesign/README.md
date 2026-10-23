# Moxor Games redesign wireframe

This folder contains the planning brief and the first navigable home-page wireframe. It is intentionally separate from the current production website.

## Files

- `index.html` — semantic, navigable home wireframe.
- `styles.css` — responsive wireframe tokens and layout.
- `wireframe.js` — prototype-only language switching, mobile navigation and header state.
- `brief.md` — audited redesign brief and confirmed decisions.
- `assets/images/` — local copies of existing approved game artwork used only to establish composition.

## Preview

From the repository root:

```sh
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/redesign/
```

The wireframe also works without a server when opened directly, but HTTP preview is preferred for browser validation.

## What this validates

- Flagship Takeover content hierarchy.
- Fly-A-Wave download visibility in the first viewport.
- Distinct section structures for the remaining catalogue.
- Persistent EN/ES access and browser-language detection.
- Mobile navigation and keyboard order.
- Placement of About, press, support and legal navigation.
- Required media slots and missing-asset labels.

## What is deliberately not final

- Typography and final font files.
- Polished color grading, texture, motion or micro-interactions.
- Fly-A-Wave title-logo treatment.
- Hero gameplay video and responsive poster exports.
- Creator illustration.
- Final approved English and Spanish copy.
- Press kit page and individual game-page wireframes.
- Production `/en/` and `/es/` route generation. This single-file prototype changes language in place only to test content fit.

## Asset notes

All images used by this wireframe are local repository copies. Existing art is deliberately desaturated so layout and hierarchy can be reviewed before final art direction. The Moxor Games logo is shown intact.

Missing production assets remain explicitly labelled in the interface rather than being replaced with invented art.
