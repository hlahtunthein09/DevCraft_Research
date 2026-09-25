# DevCraft Presentation Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the specified DevCraft business-presentation website in plain HTML, CSS, and JavaScript.

**Architecture:** Rebuild the single presentation document as semantic, chapter-labelled scenes. CSS supplies responsive narrative/data visual compositions; JavaScript owns the financial assumptions, updates repeated metrics, tracks scenes, animates revealed content, and switches scenarios.

**Tech Stack:** HTML5, CSS3, native SVG, vanilla JavaScript.

**Spec:** `docs/superpowers/specs/2026-09-25-devcraft-presentation-redesign-design.md`

## Global Constraints

- Preserve a plain HTML/CSS/JS, scrolling presentation website; do not add dependencies.
- Use Thai baht and label figures as proposed classroom assumptions where appropriate.
- Do not retain the former USD pricing, $1,700 fixed-cost, 28-customer break-even, or $4,540 profit values.
- Keep charts labelled, accessible, mathematically consistent, and usable without animation.
- Use dark/light visual rhythm, semantic headings, keyboard-visible focus, and reduced-motion support.

## Review Focus

- A narrow 390px viewport stacks diagrams and preserves legible financial labels without page-level horizontal overflow.
- The conservative scenario visibly reports a loss with text and sign, not color alone.
- Motion-disabled users see all numbers, chart lines, and scene contents immediately.
- Header chapter selection tracks a scene’s `data-chapter`, even for intermediate scenes without their own nav link.
- Financial DOM values are populated from the central model and do not diverge from the chart labels.

---

## File structure

- Modify `index.html`: 22 semantic scenes, chapter navigation, diagrams, labelled data targets, and inline SVG charts.
- Modify `style.css`: tokens, dark/light scene system, composition-specific visuals, responsive rules, reveal states, reduced-motion fallback.
- Modify `script.js`: financial/scenario data, safe DOM population, observers, animation utilities, navigation, progress, and scenario controls.

### Task 1: Rebuild the story and data markup

**Files:**
- Modify: `index.html`
- Test: browser document inspection

**Interfaces:**
- Produces: `section.scene[data-chapter]`, `.chapter-link`, `[data-financial]`, `[data-scenario]`, `.scenario-button`, `.reveal`.

- [ ] **Step 1: Define the static document contract**

Create the header and scene skeleton with exactly these chapter keys:

```html
<a class="chapter-link" href="#hero" data-chapter-link="idea">Idea</a>
<section class="scene scene--dark" id="hero" data-chapter="idea">…</section>
```

- [ ] **Step 2: Add all 22 scenes in narrative order**

Implement Idea (1–4), Product (5–7), Business (8–11), Financials (12–17), Strategy (18–21), and Conclusion (22), using the content and Thai-baht assumptions from the spec.

- [ ] **Step 3: Add chart and interaction semantics**

Use figures, captions, tables only for genuine tabular comparisons, SVG titles/descriptions, and static defaults for all scenario outputs:

```html
<button class="scenario-button" data-scenario-key="base" aria-pressed="true">Base</button>
<strong data-scenario="profit">+฿33,151</strong>
```

- [ ] **Step 4: Validate structure**

Run: `rg -n 'data-chapter=|data-financial=|data-scenario=|\$1,700|28 customers|\$4,540|\$12/month' index.html`

Expected: every new structural hook is present; obsolete figures have zero matches.

### Task 2: Build the responsive visual system

**Files:**
- Modify: `style.css`
- Test: browser viewport inspection at 1440px, 1024px, 768px, and 390px

**Interfaces:**
- Consumes: scene/component class names from Task 1.
- Produces: responsive `scene`, `scene--dark`, visual component, `is-visible`, and reduced-motion styles.

- [ ] **Step 1: Replace existing tokens and shared shell styles**

Define the required dark/light palette, spacing, radii, display/body typography, focus ring, header, scene rhythm, and progress treatments.

- [ ] **Step 2: Implement narrative visuals**

Style the journey, fragmentation, connected ecosystem, product module, multi-sided value exchange, money-flow, pricing ladder, and creator split with grids, lines, labels, and directional hierarchy rather than repeated cards.

- [ ] **Step 3: Implement financial and strategy visuals**

Style revenue/cost bars, population graphic, unit-economics bars, waterfall, SVG break-even chart, scenarios, funnel/loop, positioning axes, feasibility dimensions, and risk matrix.

- [ ] **Step 4: Add responsive and motion fallbacks**

At tablet/mobile sizes, stack diagrams, simplify labels, and reserve horizontal overflow for real tables. Add:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
  .reveal { opacity: 1; transform: none; }
}
```

- [ ] **Step 5: Verify presentation layouts**

Open the site at the four required widths. Expected: no clipped headline, unreadable chart, or non-table horizontal overflow.

### Task 3: Implement the financial model and presentation interactions

**Files:**
- Modify: `script.js`
- Test: browser console and interactive scenario selection

**Interfaces:**
- Consumes: Task 1 hooks and Task 2 `is-visible`/`active` classes.
- Produces: `financialModel`, `scenarios`, `initNavigation()`, `initSectionObserver()`, `initRevealAnimations()`, `initMetricCounters()`, `initScenarioSwitcher()`, `initBreakEvenAnimation()`, `updateProgress()`.

- [ ] **Step 1: Define the central financial data**

Add `financialModel` with MAU, users, pricing, revenue, costs, contribution, profit, operating margin, and break-even values from the supplied spec. Add `scenarios` with the exact conservative, base, and growth records.

- [ ] **Step 2: Populate repeated financial values safely**

Use a baht formatter and optional-element checks:

```js
const formatBaht = (value) => `฿${Math.abs(value).toLocaleString("en-US")}`;
document.querySelectorAll("[data-financial]").forEach((node) => {
  const value = financialModel[node.dataset.financial];
  if (typeof value === "number") node.textContent = formatBaht(value);
});
```

- [ ] **Step 3: Add observers and progress**

Use `IntersectionObserver` for active chapter links and reveal classes. Use a passive, requestAnimationFrame-scheduled scroll listener only for the continuous progress bar and scene counter.

- [ ] **Step 4: Add count-up and scenario controls**

Animate only eligible metrics once visible, immediately render values under reduced motion, and update all `[data-scenario]` targets plus `aria-pressed` when a scenario button is selected.

- [ ] **Step 5: Verify behavior**

In the browser: select each scenario, tab through controls, scroll each chapter, and inspect the console. Expected: values match the object, chapter links switch, progress changes, and there are no errors.

### Task 4: Content, arithmetic, and accessibility QA

**Files:**
- Modify: `index.html`, `style.css`, `script.js` only if QA finds an issue
- Test: browser/manual and static search

**Interfaces:**
- Consumes: complete presentation from Tasks 1–3.

- [ ] **Step 1: Verify mandatory financial arithmetic**

Confirm: ฿234,480 − ฿21,329 − ฿180,000 = +฿33,151; ฿180,000 ÷ 0.909 ≈ ฿198,000; 100 × ฿399 = ฿39,900; 80%/20% produces ฿31,920/฿7,980.

- [ ] **Step 2: Verify obsolete-model removal and required revenue streams**

Run: `rg -n '\$|1,700|28 customers|4,540|Developer Pro.*12|Recruiter Starter|Company Enterprise' index.html style.css script.js`

Expected: no outdated model values; inspect that Developer Pro, Creator Pro, Company plans, commission, affiliate, sponsorship, and promoted jobs are visible.

- [ ] **Step 3: Verify accessibility and reduced motion**

Check heading order, focus visibility, SVG title/description, labels beyond color, and a reduced-motion browser setting. Expected: all important content remains available and controls work with keyboard.

- [ ] **Step 4: Final integrity check**

Run: `git diff --check; git status --short`

Expected: no whitespace errors and only intended site-file modifications plus existing user-owned untracked files.
