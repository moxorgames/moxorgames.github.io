# Moxor Games redesign prototype

This folder contains the planning brief and the first visual direction for the home page. It is intentionally separate from the current production website.

## Files

- `index.html` — semantic, navigable home prototype.
- `styles.css` — responsive visual system and layout.
- `prototype.js` — prototype-only language switching, mobile navigation and header state.
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

## What this version validates

- Flagship Takeover content hierarchy.
- Fly-A-Wave download visibility in the first viewport.
- Distinct section structures for the remaining catalogue.
- Persistent EN/ES access and browser-language detection.
- Mobile navigation and keyboard order.
- Placement and visual rhythm of About, press, support and legal navigation.
- Dark arcade-poster art direction with a single adaptive amber accent.
- Required media slots and explicit pending creator artwork.

## What is deliberately not final

- Final licensed/self-hosted typography.
- Fly-A-Wave title-logo treatment.
- Hero gameplay video and responsive poster exports.
- Creator illustration.
- Final approved English and Spanish copy.
- Press kit page and individual game-page wireframes.
- Production `/en/` and `/es/` route generation. This single-file prototype changes language in place only to test content fit.

## Asset notes

All images used by this prototype are local repository copies. The Moxor Games logo is shown intact.

Missing production assets remain explicitly labelled in the interface rather than being replaced with invented art.
