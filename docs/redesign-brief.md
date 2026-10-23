# Moxor Games — Redesign brief

> Planning document. No production implementation has started.

## Status

- Phase: discovery and direction selection
- Repository audited: yes
- Reference reviewed: [Calden Games](https://caldengames.com/)
- Production files modified: no
- Direction selected: C. Flagship Takeover, adapted to support a rotating featured title

## Design read

Redesign of an indie game studio website for players, press and potential partners, with an authored and playful aesthetic grounded in the real game catalogue, supported by game art, asymmetric composition and a bilingual interface.

### Initial design parameters

- Composition variance: 8/10
- Motion intensity: 5/10
- Visual density: 4/10

## Confirmed goals

1. The primary business outcome is to increase game downloads.
2. The site must surprise visitors and feel deliberate, polished and tasteful.
3. Moxor Games is currently a solo indie developer. The design must communicate individual authorship without pretending to be a larger company.
4. "Serious" does not mean corporate, conservative or bank-like. It means the experience cannot feel improvised, unfinished or visually arbitrary. It must still feel unmistakably like a video game studio.
5. Fly-A-Wave is the initial featured title and receives the primary download CTA.
6. The featured title will rotate over time. It should be a clearly configurable editorial slot, not an automatic multi-CTA carousel.
7. The About section will identify Moxor Games as a solo indie studio and include a short personal introduction.
8. A future personal portfolio link may live inside About or the footer. It is not part of the primary navigation or conversion path unless explicitly enabled later.
9. Dead Run is approaching soft launch. It should be presented as an active upcoming release without inventing a public date.
10. Logic Solving is archived until further notice. It may remain in the studio archive, clearly labelled and without a false download CTA.
11. At redesign launch, Dead Run has no public store, preregistration or access link. It will display a non-interactive "Coming soon" status. Its CTA can be enabled later through the game configuration.
12. The current Moxor Games logo must remain visually intact. The redesign will treat it as a brand seal and build consistency through placement, spacing, typography and colour rather than redrawing or modernising it. Any new variant requires an owner-approved source asset.
13. The site shell remains structurally consistent while one global accent colour adapts to the currently featured game. Fly-A-Wave will initially set that accent from its orange/yellow space palette against a dark blue foundation. The selected accent must propagate consistently across the page.
14. The About section will represent the creator with a separate avatar or illustration rather than a personal photograph. This asset must not alter or replace the Moxor Games logo.
15. Primary social channels are Instagram, TikTok and YouTube. Other existing profiles should not compete in the main header/footer. Email remains the functional support/contact channel.
16. The website uses one controlled dark brand theme. No light/dark selector will be added. The design must still meet WCAG AA contrast and the language control remains persistently available.
17. The redesign will draft all new English and Spanish copy for owner approval. English is the editorial source; Spanish should be a natural adaptation rather than a literal translation. No unverified claims, dates, numbers, awards, reviews or platform details may be introduced.
18. Brand voice is personal and approachable. Game sections remain concise and energetic; About may use first-person singular. Avoid both corporate language and excessive jokes.
19. The featured-game hero uses a short, local, muted autoplay gameplay loop. It must communicate without audio and provide an equivalent poster fallback for reduced motion, data-saving contexts and load failure.
20. First delivery scope is the complete public site: home, bilingual game pages, Super Brainrot Z ranking, support and visual presentation of existing legal pages. All public routes and functions must be preserved or explicitly redirected.
21. Existing base store URLs for Fly-A-Wave and Super Brainrot Z are current. Every outbound store CTA must be audited for consistent `utm_source` and `utm_medium` parameters without changing its base destination. Store-specific campaign support must be verified rather than assumed.
22. Standard campaign values are `utm_source=moxorgames.com&utm_medium=website`. They should be generated centrally from catalogue data rather than copied into templates by hand.
23. `moxorgames@gmail.com` and the current repository URLs for Instagram, TikTok and YouTube are confirmed as active official channels.
24. The home speaks first to casual mobile players. It must communicate the playable fantasy and store action within seconds on a phone; studio story and industry context are secondary layers.
25. First delivery includes a complete public press kit: studio fact sheet, approved creator bio, verified game facts/status/platforms, official links, locally hosted logos, screenshots, video, contact information and downloadable asset bundles. It must not invent awards, metrics or quotes.
26. Public studio location is Tigre, Buenos Aires, Argentina. No street or postal address will be published.
27. Public creator credit is Maximiliano Cambiaso. Draft role wording is founder and solo indie game developer behind Moxor Games, subject to final copy approval.
28. Logic Solving remains visible in a secondary catalogue/archive position, clearly labelled `Archived` / `Archivado`, with its own page and no download CTA.
29. The existing “Juegos hechos con amor desde Argentina” line will be evolved rather than retained verbatim. Argentina remains part of About, press and footer identity; the hero proposition must describe the games more concretely.
30. Canonical host is `https://www.moxorgames.com`. The existing apex-to-`www` redirect remains in place; canonical URLs, sitemaps, social metadata and structured data must consistently use `www`.
31. Spanish copy uses neutral Latin American Spanish, avoiding voseo and strong localisms. Argentine identity appears in studio facts rather than CTA dialect. English defaults to US English unless later revised.
32. Support is a simple visible `mailto:moxorgames@gmail.com` link with no form, external service, pre-support checklist or additional instructions.
33. Initial home catalogue order is Fly-A-Wave (featured), Super Brainrot Z, Dead Run and Logic Solving. Priority remains data-driven so future rotation does not require layout changes.
34. There is no hard launch date. Quality, bilingual consistency and complete browser validation take priority over an incomplete early release.

## Language requirements

- English is the default product language.
- If the browser indicates a Spanish preference, the site should initially open in Spanish.
- The header must expose an EN/ES control at all times.
- A manual language choice must override browser detection and persist between visits.
- Only one language should be visible at a time.
- The document language, metadata, dynamic states and accessibility labels must switch with the visible language.

The intended canonical structure is static `/en/` and `/es/` routes with `hreflang`. The root route should detect language on the first visit and then respect the stored manual preference. Existing public URLs must continue resolving because some are already registered in stores, QR codes and legal references. Redirect behaviour depends on hosting capabilities and will be confirmed before implementation.

Legacy legal, store, ranking and QR routes must never depend on a JavaScript-only redirect. Each route will be inventoried and tested before any permanent redirect is introduced.

Cloudflare redirect-rule access is confirmed. Before release, the project will produce an explicit source-to-destination redirect map and verify every store, legal, ranking and QR endpoint.

## Search and AI discoverability

The owner wants search engines and AI assistants to understand, cite and recommend the games where relevant. No recommendation can be guaranteed. The implementation should maximise factual discoverability through:

- crawlable static HTML in both languages;
- a specific page for each game with concise mechanics, genre, status and verified platform links;
- `Organization`, `VideoGame` and/or `SoftwareApplication` structured data where applicable;
- canonical URLs, `hreflang`, sitemap and robots policy;
- descriptive page titles, metadata, Open Graph data and useful image alt text;
- strong internal linking and an accurate studio/press page;
- an optional `llms.txt` as a complementary signal, not as a substitute for SEO.

## Existing site audit — summary

### Preserve

- Moxor Games name, cat/rocket mark and Argentine origin.
- Four game identities and their existing art.
- Verified store links, social links, support contact and ranking.
- Public routes used by app stores, QR codes and advertising verification.
- `/app-ads.txt`, game privacy routes, redirects and ranking functionality.

### Correct or replace

- Generic HTML5 UP blog presentation.
- Mixed English and Spanish content.
- Broken image/script paths and public template residue.
- Missing mobile navigation and inaccessible controls.
- Weak metadata, social sharing and image performance.
- Unsupported claims, placeholder links and inconsistent game statuses.

### Technical baseline

- Static HTML/CSS/JavaScript on GitHub Pages and Cloudflare.
- No package manager or reproducible build process exists.
- A custom Node build script is approved to generate static bilingual pages from shared templates/data. Runtime remains plain HTML/CSS/JavaScript with no framework.
- The generated output should preserve the current GitHub Pages deployment model and public routes. Build commands and generated/source ownership must be documented.

### Confirmed privacy and hosting constraints

- The deployed site remains fully static on GitHub Pages.
- No cookies.
- No third-party runtime resources: fonts, CSS, JavaScript, images, video, store badges and libraries must be copied into the repository and served locally.
- Social/video platforms may be linked but not embedded from third-party origins.
- Store URLs already contain the desired UTM/source parameters; no additional event analytics or installation-attribution system is requested.
- Cloudflare Web Analytics is the sole approved runtime/analytics exception. No other beacon, analytics provider, remote asset, embed or tracking pixel may be introduced.
- Supabase is additionally approved as a functional exception only for the existing Super Brainrot Z live ranking. The home must not call it. The ranking page should implement safe loading, empty and error states and avoid injecting remote values through `innerHTML`.
- Legal-page scope is visual presentation only. Existing legal copy and public paths must remain verbatim unless the owner supplies replacements.
- Legal pages remain only in their existing source language. The redesign must not generate or publish translated legal copy. Future bilingual legal routes require owner-supplied approved text.
- Known mismatch remains outside redesign scope: some current statements may not describe Cloudflare or Supabase processing. The redesign must not claim that the legal text has been reviewed, corrected or made compliant.

## Reference principles

Useful principles from Calden Games, without copying its execution:

- one memorable brand gesture;
- concise editorial rhythm;
- visible authorship and specific Argentine identity;
- a deliberately prioritised catalogue;
- interaction tied to the brand symbol rather than decorative effects.

Elements not to reproduce:

- tree emblem or circular centered composition;
- purple/orange sunset palette;
- WebGL as a branding requirement;
- Spanish-only presentation;
- lack of a clear conversion CTA in the opening viewport.

## Rough directions

### A. Moxor Mission Log — recommended

The cat/rocket becomes the connective device between very different game worlds. Dark navy interface, propulsion-orange accent, asymmetric hero and an editorial mission index. Best balance of distinctive studio identity and catalogue flexibility.

### B. Indie Poster Cabinet

A bright, tactile collage of posters, covers and arcade flyers. Gives each title maximum visual independence. More playful and art-led, but harder to keep consistently premium with the uneven current asset set.

### C. Flagship Takeover

A cinematic landing page dominated by one priority title. Strongest direct-response structure, but it requires high-resolution key art or video and risks making the whole studio look like a single-game brand.

**Selected.** Fly-A-Wave will be the initial takeover. The section must be driven by content/configuration so a later title can replace it without redesigning the page. Moxor Games remains clearly visible as the studio and curator, while the wider catalogue follows directly after the first conversion moment.

## Asset gaps

- An owner-approved transparent or vector source would still be useful if one already exists, but creating a redesigned logo is out of scope.
- Dead Run gameplay screenshots and ideally a transparent title logo.
- Logic Solving icon, title logo and gameplay screenshots.
- Responsive WebP/AVIF derivatives for large existing PNG files.
- Confirmed ownership/licensing notes for game and character art.

### Confirmed Fly-A-Wave source material

- Gameplay video is available.
- High-resolution key art is available.
- A transparent game logo is available.
- New image or video pieces can be produced when the final layout defines an exact need.

Before implementation, the art direction will provide a shot/asset list with dimensions, duration, crop-safe areas and export formats. Any hero video will have a static poster and will degrade appropriately for reduced-motion and data-conscious contexts.

### Rights and production capacity

- The owner confirms commercial usage rights for the games, characters, artwork, music and video intended for the website, including Super Brainrot Z.
- Original assets are available and new production-ready image/video pieces can be created as needed.
- The final handoff should still record source and export filenames for traceability.

## Proposed information architecture

- `/` — lightweight language decision page/script: stored manual preference first, then browser language, with visible EN/ES fallback links. Preference uses local storage, not cookies.
- `/en/` and `/es/` — canonical studio home in each language.
- `/en/games/<slug>/` and `/es/games/<slug>/` — crawlable game pages.
- `/en/games/super-brainrot-z-italian-power/ranking/` and Spanish equivalent — bilingual ranking UI using the approved Supabase exception.
- `/en/about/` and `/es/about/` — creator/studio story if the home treatment becomes too long; otherwise canonical sections may remain on the home.
- `/en/press/` and `/es/press/` — full press kit and local asset downloads.
- `/en/support/` and `/es/support/` — static support contact.
- Existing legal, QR, ranking, advertising and game URLs — preserved or mapped through verified Cloudflare 301 redirects. Legal text remains in its original language only.

Final slugs will be checked against every existing public URL before generation.

## Home content order

1. Persistent header: Moxor logo, Games, About, Press, Support and EN/ES.
2. Fly-A-Wave flagship takeover: gameplay loop, logo, one-line fantasy, verified platforms and store CTAs.
3. Immediate secondary download path for Super Brainrot Z.
4. Dead Run upcoming-release feature with non-interactive Coming Soon state.
5. Logic Solving archive entry.
6. Personal About block with creator illustration and Tigre, Buenos Aires, Argentina.
7. Press/social/contact path and compact legal footer.

The exact section compositions must vary; this is content order, not a repeated card template.

## Initial asset production list

Exact compression targets will be adjusted after browser tests.

- Fly-A-Wave desktop hero loop: 1920×1080 source, 6–10 seconds, seamless, no essential audio or text, WebM and MP4 exports.
- Fly-A-Wave mobile hero loop: 1080×1350 or 1080×1920 source with centered safe action, WebM and MP4 exports.
- Fly-A-Wave static poster: matching desktop and mobile crops, AVIF/WebP fallbacks.
- Fly-A-Wave transparent title logo: high-resolution PNG or vector source.
- One strong landscape key art per game: ideally 2400×1350 without web UI baked in.
- Three to five representative gameplay captures for each active game.
- Transparent game title logos where available.
- Creator avatar/illustration: at least 1600×1600, preferably layered or transparent.
- Press originals: logos, screenshots and approved videos grouped by game; website derivatives will be generated locally.

Placeholders remain explicit until each asset is delivered. No third-party or invented game art will substitute for missing originals.

## Delivery plan

### Phase 1 — Content and asset map

- Confirm game facts, English/Spanish copy and metadata.
- Inventory every current URL and create the redirect matrix.
- Produce the final shot list and receive source assets.

### Phase 2 — Static foundation

- Add the custom Node generator, shared data model and documented build command.
- Establish local fonts/icons, semantic tokens and EN/ES page generation.
- Preserve GitHub Pages and Cloudflare deployment behaviour.

### Phase 3 — Visual implementation

- Build the Flagship Takeover home and responsive navigation.
- Build distinct game pages using each title’s real art.
- Build About, support, ranking, legal presentation and complete press kit.

### Phase 4 — Discoverability and migration

- Add structured data, canonical URLs, `hreflang`, sitemap, robots, social metadata and optional `llms.txt`.
- Apply UTM parameters centrally.
- Configure and test Cloudflare redirects only after the new destinations exist.

### Phase 5 — Validation

- Desktop and mobile browser review.
- Keyboard, focus, contrast, zoom and reduced-motion checks.
- Network audit for remote resources and approved exceptions.
- Link, redirect, console, ranking-state and asset-performance checks.
- Final copy and legal-content diff before release.

## Pending handoff, not a discovery blocker

1. Per-placement art/video exports after the approved layout defines its final safe areas and crops.
2. Final owner approval of all English and Spanish non-legal copy.

## Non-negotiable implementation checks

- Primary download action visible in the initial viewport.
- One-line desktop navigation and deliberate mobile navigation.
- Keyboard access, visible focus and WCAG AA contrast.
- `prefers-reduced-motion` respected.
- No invented reviews, numbers, awards, platforms, dates or product claims.
- Existing public integration routes remain valid or receive explicit redirects.
- Browser validation on desktop and mobile before release.
- Browser network validation must show no unapproved third-party requests; Cloudflare Web Analytics is the only pre-approved runtime exception.
