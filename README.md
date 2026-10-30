# Salt Lick Healthcare

Final review workspace: C:/Users/mridul/OneDrive/Desktop/SaltLick

Only the Illustrated Journey design is included. The earlier playground is preserved separately; no archived concepts or Atlas were copied.

## Run

Dependencies are already installed. From this folder:

```powershell
npm.cmd run dev -- --host 127.0.0.1 --port 5174 --strictPort
npm.cmd run build
npm.cmd run lint
```

Local URL: http://127.0.0.1:5174/
Build output: dist. Hash-based navigation supports direct links and reloads on static hosting without server rewrites. Example: /#/what-is-salt-lick. No backend, forms, deployment, or GitHub push performed.

## Review four typography treatments

- Home: Manrope, illustrated split hero.
- What Is Salt Lick: Georgia editorial headings.
- How It Works: Arial technical headings and numbered steps.
- About Us: Trebuchet MS humanist headings and wide illustrated composition.

Header and footer are shared components in the existing src/components/Header and Footer folders. All eight existing page folders are wired into navigation. Inner pages are source-content design drafts; reserved sections and missing biographies require a later content-completion pass. They are not final clinical/production copy. Homepage retains the approved five-section Illustrated Journey scope, not every source-wireframe homepage section.

## Assets and source integrity

All added image and font files live in src/assets. Original logo copied unchanged. Generated illustrations depict fictional diverse people in contemporary everyday clothing. No real patients, staff, centres, or outcomes are implied. Original playground and Desktop wireframe are untouched. Source extraction copied into src/data/source.json. Components do not fetch external imagery or fonts. Existing starter assets are left intact but unused.

Palette: watery blue #ACCBDF and apricot #F2C39D with pure-white surfaces and readable dark text. Decorative line and orbit motion follows the client's request for visible animation; no flashing or scroll hijacking. Animations use CSS only. Headings vary for review; body text and navigation stay consistent.

## Generated artwork

Built-in image-generation tool. Optimized WebP assets:

### src/assets/illustrated-hero.webp

Prompt: Premium editorial hand-drawn watercolor illustration for a global health intelligence website. Very light translucent watercolor blue #A8C7DE and soft apricot orange #F2C39D, equal visual weight, delicate blue ink outlines, natural skin tones, PURE WHITE #FFFFFF background and generous white margins, no cream wash. Contemporary globally familiar clothing only: blouses, shirts, trousers, casual jackets; no sarees, no traditional attire. Diverse fictional people; not actual patients. Sophisticated, optimistic, not cartoon childish, not photographic. No text, logos, statistics, medical claims, screens with results. Landscape 3:2. A friendly Black female clinician in white coat and pale blue blouse talks with an adult woman in apricot blouse and trousers across a desk with tablet. At bottom right a small secondary scene of two adults of different backgrounds walking together. Light blue and apricot ribbons connect the scenes. Consultation occupies right two thirds, airy left third with botanical accents.

### src/assets/illustrated-screening.webp

Prompt: Premium editorial hand-drawn watercolor illustration for a global health intelligence website. Very light translucent watercolor blue #A8C7DE and soft apricot orange #F2C39D, equal visual weight, delicate blue ink outlines, natural skin tones, PURE WHITE #FFFFFF background and generous white margins, no cream wash. Contemporary globally familiar clothing only: blouses, shirts, trousers, casual jackets; no sarees, no traditional attire. Diverse fictional people; not actual patients. Sophisticated, optimistic, not cartoon childish, not photographic. No text, logos, statistics, medical claims, screens with results. Landscape 3:2. A friendly East Asian female clinician in white coat and soft apricot shirt helps an adult man with brown skin wearing pale blue casual shirt look at a tablet on desk. Screen contains only abstract watercolor shapes. Light blue and apricot botanical sprigs and thin flowing ribbons surround the scene. Calm illustrated healthcare consultation.

### src/assets/illustrated-centres.webp

Prompt: Premium editorial hand-drawn watercolor illustration for a global health intelligence website. Very light translucent watercolor blue #A8C7DE and soft apricot orange #F2C39D, equal visual weight, delicate blue ink outlines, natural skin tones, PURE WHITE #FFFFFF background and generous white margins, no cream wash. Contemporary globally familiar clothing only: blouses, shirts, trousers, casual jackets; no sarees, no traditional attire. Diverse fictional people; not actual patients. Sophisticated, optimistic, not cartoon childish, not photographic. No text, logos, statistics, medical claims, screens with results. Landscape 3:2. A conceptual modern welcoming healthcare building courtyard, glass and white architecture, light blue and apricot foliage, diverse adults in contemporary shirts and trousers walking toward a friendly clinician at entrance. Equal light blue/apricot flowing pathways. No recognizable real hospital or geographic cues.

## Verification

Production build and ESLint checked. Desktop and mobile browser review completed, including the four typography families, direct inner-page URLs, image loading, mobile navigation, and source-content rendering. Further final copy approval is required before production launch.


## Shared closing banner and footer
`src/components/AWorldWhere/AWorldWhere.jsx` renders the common closing section above the footer on all existing pages. Artwork: `src/assets/a-world-where.webp` (121 KB), generated using the built-in image-generation tool from the supplied banner screenshot; fictional people and conceptual architecture. The original logo remains unchanged. Careers links open an email enquiry; Privacy Policy and Terms of Use display explicit pending-content notices until approved policy text is supplied. Partner names follow source.json (Health Voitho Technologies and EIOMS).

Artwork prompt:
Edit reference: isolate and recreate ONLY the watercolor illustration from the upper-right banner of this screenshot. Three adults seen from behind walking toward the entrance of a futuristic rounded healthcare building, pale blue curved glass roof, sweeping warm apricot canopy, softly lit glass entrance with tiny distant people. Same architectural silhouette, perspective, placement and welcoming sunny mood as reference. Premium hand-drawn watercolor illustration with fine blue ink detail, light watery blue #A8C7DE and apricot #F2C39D, white surroundings fading gently into pure white at left. People in modern globally familiar shirts, trousers, casual jacket; woman in peach top and pale trousers. Landscape 3:2 artwork. NO leaves, NO foliage borders, NO trees, NO plants, NO branches anywhere. Remove both decorative leafy edges entirely. No text, no logo, no buttons, no footer, no screenshot UI. Focus on the three walking people and architectural illustration only, sufficient white margin, retain their whole bodies. Clearly painted illustration not photograph.

## About Us redesign
Eight bespoke sections in src/pages/AboutUs/AboutUs.jsx and AboutUs.css. App.jsx excludes the generic closing banner on this route to preserve the requested eight-section sequence. The three new WebP illustrations are stored in src/assets: about-origin.webp, about-science.webp, about-centre.webp. Created with the built-in image-generation tool; fictional people and conceptual centre, not actual facilities or staff. Existing leadership portrait placeholder is reused. Roadmap statuses require client confirmation; the 50-centre figure is explicitly a proposed target. Careers opens an email enquiry. CSS handles ambient light changes and hover details; Intersection Observer handles entrances and a requestAnimationFrame scroll handler handles bounded 18px image parallax. Reduced-motion preference reduces scroll displacement to 35% and disables entrances, retaining gentle opacity changes.

Image prompts (origin, collaboration, centre):
Premium editorial watercolor illustration for Salt Lick Healthcare. STRICT palette of very pale watery blue #accbdf, soft apricot #f2c39d, white #ffffff, small muted navy details; natural skin tones allowed. Pure WHITE paper surroundings, translucent watercolor washes and fine delicate ink, not photorealistic, not 3D. Sophisticated globally inclusive contemporary clothing, no traditional attire or sarees. No decorative leaf borders, no UI, no statistics, no claims. Landscape 3:2. Natural salt lick origin metaphor: a small group of deer and antelope gently gathering around a pale apricot mineral salt outcrop on an open plain, one adult deer touching the mineral with its muzzle. Expansive ethereal pale blue hills in distance, nearly white ground and sky, large quiet space, elegant zoological watercolor, no humans, no lettering. Mineral outcrop prominent foreground right, varied graceful poses, no fantasy.

Premium editorial watercolor illustration for Salt Lick Healthcare. STRICT palette of very pale watery blue #accbdf, soft apricot #f2c39d, white #ffffff, small muted navy details; natural skin tones allowed. Pure WHITE paper surroundings, translucent watercolor washes and fine delicate ink, not photorealistic, not 3D. Sophisticated globally inclusive contemporary clothing, no traditional attire or sarees. No decorative leaf borders, no UI, no statistics, no claims. Landscape 3:2. A diverse team of four clinicians and researchers collaborating at a long white table: Black woman scientist in white coat pointing to a tablet, East Asian male researcher with glasses, woman in apricot blouse, male healthcare leader in light blue casual jacket. Side-on candid editorial composition, abstract research notes without legible text, small microscope on far end. Bright studio-like research room, airy windows hinted in blue, lively conversation, calm professional warmth. No circular science motifs or dotted paths, no text.

Premium editorial watercolor illustration for Salt Lick Healthcare. STRICT palette of very pale watery blue #accbdf, soft apricot #f2c39d, white #ffffff, small muted navy details; natural skin tones allowed. Pure WHITE paper surroundings, translucent watercolor washes and fine delicate ink, not photorealistic, not 3D. Sophisticated globally inclusive contemporary clothing, no traditional attire or sarees. No decorative leaf borders, no UI, no statistics, no claims. Landscape 3:2. Wide welcoming scene of a modern low-rise healthcare centre with a straight contemporary facade and large bright windows. Clearly readable signage on the canopy says exactly 'Salt Lick', simple understated blue lettering (not a new logo). A diverse woman clinician greets an older couple walking toward entrance; another adult with child in background. All wear globally familiar contemporary shirts, trousers, casual jackets. Soft apricot interior, pale blue glass, pure white architectural surroundings. Distinct architectural elevation, not a domed building, no leaves or trees. Whole people, comfortable wide composition. This is a conceptual location, not an actual facility.


About Us motion revision: decorative motion now stays active in the preview, including continuous illustration drift, perspective door panels, lifting window tiles, and staggered bars. The earlier reduced-motion override was removed at the user's request for visible motion. Text does not loop or drift. Verified changing browser transforms and no mobile overflow.

About Us hero update: src/assets/about-human-hero.webp replaces the deer illustration in AboutUs.jsx. Original artwork is preserved. Generated with the built-in image tool using this prompt:
Create a premium editorial watercolor illustration for Salt Lick Healthcare About Us hero. A warm human-centered scene of a diverse group of adults in a bright open healthcare reception: a smiling Black woman clinician in a white coat and powder-blue blouse speaking at eye level with a standing older man in a soft blue shirt and a woman in a light apricot blouse; a younger adult nearby listening warmly. Relaxed candid poses, respectful conversation, everyone in contemporary globally familiar clothing, trousers and shirts, no traditional attire or sarees. NOT a tablet consultation at a desk, NOT a science lab, NOT people seen from behind walking to a building. Close medium-wide composition focused on faces and human connection, all key people grouped within central 65% so an arched crop is safe. Airy architectural hints only, generous pure-white background fading to paper. Sophisticated hand-painted watercolor with delicate ink detail and translucent washes, very pale watery blue #accbdf and soft apricot #f2c39d balanced equally, natural skin tones, restrained navy details. White #ffffff surroundings, no saturated colors, no green plants or leafy borders. No text, logos, labels, medical data, claims, animals or deer. Landscape 3:2, refined illustration not a photograph. Fictional people.

## Impact page
Seven bespoke sections in src/pages/Impact/Impact.jsx and Impact.css. App.jsx excludes the generic closing banner on this route to avoid duplicating the final CTA. Three new WebP artworks in src/assets (impact-world.webp, impact-people.webp, impact-community.webp) were generated with the built-in image-generation tool. All people and the centre are conceptual illustrations. Background parallax is bounded to 22px; artwork has ambient movement. Intersection Observer triggers chart entrances. Native buttons switch people/nations content; details/summary exposes economic assumptions. No new dependencies.

Content review: IARC/WHO GLOBOCAN figures describe 2022, not current-year counts. The 77% projection compares 2050 with 2022. JAMA Oncology economic estimate is INT $25.2T in 2017 international dollars for 2020–2050, not healthcare expenditure alone. Sources linked on page. Survival data (92/62/12%) remains explicitly marked unvalidated: cancer type, population, period, and source missing; not generic all-cancer survival or Salt Lick results. Indian cost and 10% reduction estimates require approval of source, methodology, baseline, exchange rate, and intervention definition. Service descriptions and 3–5x cost claim also require review. Four field metrics remain em dashes. Do not publish unverified data as established claims.

Artwork prompts:
Premium hand-painted editorial watercolor illustration for Salt Lick Healthcare. ONLY watery powder blue #accbdf, soft apricot #f2c39d, pure white #ffffff, small muted navy details and natural skin tones. Airy translucent watercolor, delicate ink details, not photographic. Globally diverse fictional humans in contemporary everyday shirts, trousers and casual jackets; no traditional attire. No leaves, no plants, no decorative dots or circles, no charts or statistics. Wide 3:2 hero composition. Global health and shared humanity: on the RIGHT HALF a diverse multigenerational group of 6 adults including a white-coated clinician, a woman with an older father, a Black man, an East Asian young woman. Seen in three-quarter standing poses, calm determined warm expressions, not posed in a row. Behind them a very faint flat watercolor world map silhouette in pale blue, no globe circle. LEFT HALF nearly pure white empty sky for HTML text overlay, important faces all right of center. Soft blue and apricot ground washes. No text or signage. Professional optimistic quiet mood, nothing implying cure.

Premium hand-painted editorial watercolor illustration for Salt Lick Healthcare. ONLY watery powder blue #accbdf, soft apricot #f2c39d, pure white #ffffff, small muted navy details and natural skin tones. Airy translucent watercolor, delicate ink details, not photographic. Globally diverse fictional humans in contemporary everyday shirts, trousers and casual jackets; no traditional attire. No leaves, no plants, no decorative dots or circles, no charts or statistics. Landscape 3:2 intimate human story composition. A woman clinician in a light blue shirt sitting beside an older Black woman in an apricot cardigan with her adult son, all at the SAME LEVEL in a quiet contemporary consultation room, listening and explaining a simple unmarked paper care plan. Show hands, faces and respectful conversation. No tablets or lab equipment. White surroundings and pale blue bench, soft apricot architectural recess. No text. Different from a standing reception scene or group around research table.

Premium hand-painted editorial watercolor illustration for Salt Lick Healthcare. ONLY watery powder blue #accbdf, soft apricot #f2c39d, pure white #ffffff, small muted navy details and natural skin tones. Airy translucent watercolor, delicate ink details, not photographic. Globally diverse fictional humans in contemporary everyday shirts, trousers and casual jackets; no traditional attire. No leaves, no plants, no decorative dots or circles, no charts or statistics. Wide 3:2 view of community healthcare made welcoming. A modern single-storey community healthcare centre with elegant rectangular light blue windows and soft apricot awning bearing clearly legible text exactly 'Salt Lick'. Three-quarter angle, building on right two thirds. In foreground several diverse adults leaving together and a clinician warmly waving from doorway; natural movement and varied poses. Contemporary shirts, trousers, no traditional attire. Plenty of pure white breathing room at left. Conceptual building, not actual facility. No other text.

## Our Centres redesign
Six sections follow the supplied centre content. New conceptual watercolor artwork (OpenAI ImageGen, October 2026) is stored as centres-arrival.webp, centres-report.webp and centres-partnership.webp in src/assets. These depict fictional people and proposed spaces, not actual centres or clinical results. Art direction: translucent pale blue and apricot, white ground, global contemporary clothing. Generated scenes: welcoming reception; clinician explaining a report; hospital team planning a centre.

Interactions: selectable six-room conceptual floor plan; four-step visitor journey that updates a phone preview; moving solid route arrow; drifting illustration sheets and phone; scrolling image depth; animated record-transfer packets. No image captions. Rollout and location availability remain explicitly proposed/unconfirmed. Shared header and footer are reused.

## How It Works redesign
Nine sections follow the supplied screening content. Uses the Centres body-text scale (15px lead/body, 12px compact cards), shared header/footer, and pale blue/apricot art direction. The route owns its final CTA so no duplicate generic closing section appears.

Three new conceptual watercolor illustrations generated with OpenAI ImageGen: how-consultation.webp (clinician explaining a report), how-face-scan.webp (visitor and clinician at a display), and how-laboratory.webp (on-site analyser team). Files are in src/assets. Fictional people and illustrative equipment, not evidence of actual facilities, device validation, or patient results. Signage is plain Salt Lick text. Original generated PNGs are preserved outside the project; WebP copies are optimized for the site.

Interactions: seven selectable screening stages with keyboard arrow/Home/End navigation and horizontally scrollable tabs on mobile; animated stage graphics, scanning sweep, waveform bars, moving light panels, swaying privacy curtain, and a lifting paper report that responds to the three risk pathways. Five native disclosure FAQs. No image captions or mobile-phone graphic. No new dependencies.

Content remains supplied prototype copy, not independent clinical verification. The technical/security section explicitly identifies its claims as proposed and requiring technical/legal approval. No actual clinical data or fabricated risk values appear. Clinical descriptions, timing, performance, and safety statements should be approved by the client before publication.

## What Is Salt Lick redesign
Nine sections follow the supplied content and existing intervention-gap wording. Reuses shared header/footer and the Centres text scale (15px body, 12px compact cards). Added three ImageGen watercolor assets in src/assets: what-community.webp, what-clinicians.webp, and what-nature.webp. Scenes depict a fictional community centre arrival, fictional clinicians reviewing information, and antelope at a natural mineral lick. Soft watery blue/apricot palette, white ground, modern international clothing. Generated PNG originals are preserved; WebP copies are used in the site.

Distinct interactions: opening hero panels; switchable solid timeline with sliding start flag; selectable signal inputs and assembling rectangular tiles; four perspective evidence layers that move forward on selection; folding geometric marks; background parallax in the nature section. No phone, report-folder animation, scanning sweep, circular paths, or dotted paths reused from previous pages. Evidence buttons expose expanded state; comparison uses a semantic, horizontally scrollable table.

Content remains supplied prototype claims. Evidence/performance claims, the comparison, cancer scope and patent applicability need formal client/clinical approval before publication. No invented risk score or diagnostic accuracy is shown.

## Partner With Us page
Two sections: watercolor hospital-campus hero and responsive enquiry/contact layout. New asset src/assets/partner-campus.webp was generated with OpenAI ImageGen in the established pale blue/apricot watercolor style; it depicts a fictional campus, not an actual Salt Lick location.

The enquiry form is intentionally a demo. Native required-field and email validation run before a React-only success state. There is no submission endpoint, request, database, local storage, or email integration. The success notice explicitly says that no details were sent or stored and no reply is triggered. Start another enquiry resets the form. Phone and designation are optional. A production implementation still requires a destination, server validation, spam protection and approved privacy handling.

Verified desktop and 390px mobile layouts, empty-submit blocking, valid dummy submission, reset, image loading, and absence of browser errors. Shared header/footer retained, generic final CTA omitted so the page contains exactly two sections.

## Approved MedTech homepage

The `/` route now implements the approved eleven-section visual preview in `src/pages/Home/Home.jsx` and `Home.module.css`. It restores the wireframe order, intervention timeline, Advantage, Partners and Impact sections, six-input assessment diagram, four equipment illustrations and the original final partnership CTA. The generic closing banner is no longer appended to Home.

The previous homepage is preserved in `src/pages/old homepage/Home.jsx` and `Home.css`, with its original images retained. These archived files are not imported by the active application.

Homepage styles use CSS Modules, including interactive state classes and animation names. They apply only within the homepage; shared Header and Footer are outside that scope. Header-specific JSX/CSS stays in `src/components/Header`, and footer-specific JSX/CSS stays in `src/components/Footer`. The three approved new illustrations are stored as optimized `medtech-human.webp`, `medtech-campus.webp` and `medtech-consultation.webp` in `src/assets`. Original logo files are reused without modification. Carousel and signal interactions use React state; all effects respect reduced motion. No dependencies were added.

All supplied medical/product figures remain prototype content requiring client approval. The survival-chart figures require a defined cancer type, population, period and supporting source before public release. The standalone approval preview and detailed content/branding notes remain in the Codex task's `outputs/homepage-medtech-preview` folder.

## Archived homepage hero carousel
Three slides: original homepage hero preserved, followed by Centres and Impact using client-supplied slide wording. Reuses partner-campus.webp and how-consultation.webp; image imports can be replaced independently for a future shoot. Autoplay interval is 6000ms, looping through all three slides; arrows, dots, and keyboard arrows are provided. Autoplay runs continuously except while hovering over the carousel; there is no autoplay toggle. Slides crossfade over 900ms with delayed visibility hiding to keep the outgoing slide visible throughout the fade. Inactive slides are inert and hidden from assistive technology. Grid overlap reserves consistent height across transitions. No client implementation note appears on the slides.
