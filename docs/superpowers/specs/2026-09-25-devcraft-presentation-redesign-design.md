# DevCraft Presentation Website Redesign

## Purpose

Transform the existing DevCraft HTML/CSS/JS site into a presentation-first, scrolling web deck for a Digital Business class exam. It remains a website rather than a PDF, PowerPoint deck, or product demo. Its purpose is to make a credible visual business argument: DevCraft connects developer community, learning, proof of work, and career opportunity, then monetizes higher-value interactions.

## Scope and success criteria

The presentation will use 22 scenes within six navigation chapters: Idea, Product, Business, Financials, Strategy, and Conclusion. It will replace the old USD pricing, 100-customer example, fixed-cost figure, profitability example, and customer-count break-even model with the Thai-baht classroom assumptions supplied in `DEVCRAFT_PRESENTATION_UPDATE_SPEC.md`.

Success means the audience can follow the developer journey, understand the multi-sided ecosystem and revenue streams, see the financial base case and break-even logic, and see both opportunity and downside risk. Important claims will be labeled as proposed classroom assumptions or conceptual illustrations where applicable.

## Information architecture

`index.html` will remain a single semantic document with a fixed header and a `main` element. Each presentation scene will use a `section.scene`, a stable ID, one primary message, and an accessible label. Scenes are grouped by a `data-chapter` value so the header only exposes six high-level links rather than individual slide links.

1. **Idea:** Hero/thesis, fragmented problem, connected solution, developer journey.
2. **Product:** Product modules, value creators, platform value exchange.
3. **Business:** Revenue map, pricing ladder, creator transaction, revenue composition.
4. **Financials:** User assumptions, costs, unit economics, profitability waterfall, break-even, scenarios.
5. **Strategy:** Growth loop/funnel, conceptual competitor positioning, feasibility, risk matrix.
6. **Conclusion:** Final business thesis and secondary thank-you.

The header will include the six chapter links, a current-scene counter, and a progress indicator. Active navigation follows the scene in view and resolves to its chapter.

## Visual language

The deck will alternate deliberately between dark narrative scenes and light data scenes. It will use the supplied dark base (`#0B0D12`), violet, electric blue, cyan, green, amber, and red accents. Space Grotesk remains the display face; DM Sans remains the reading face.

Primary information will be communicated through statements, routes, nodes, flows, charts, and labelled metrics. Bordered cards remain only for subordinate explanations. No stock photography, emoji-driven information design, or repeated generic card grids will be used as primary composition.

## Component design

HTML and CSS will create reusable presentation components:

- `journey-map` for the connected developer path and its entry points.
- `fragment-map` and `ecosystem-map` for disconnected platforms and the unified DevCraft network.
- `product-module` mini interface fragments for Feed, Questions, Courses, Challenges, Portfolio, and Jobs.
- `value-exchange` and `money-flow` diagrams for the multi-sided ecosystem and monetization logic.
- `pricing-ladder` for Free, Developer Pro, Creator Pro, Company Starter, and Company Pro.
- `creator-split`, `revenue-mix`, `user-population`, `cost-breakdown`, and `unit-economics` for the key business assumptions.
- `financial-waterfall`, inline-SVG `break-even-chart`, and `scenario-grid` for financial storytelling.
- `growth-loop`, `positioning-map`, `feasibility-grid`, and `risk-matrix` for the strategy chapter.

SVG is limited to data-driven charts and diagrams where accessible semantic labels are needed. Each SVG will include a title/description; charts will also expose a concise text alternative.

## Financial data and consistency

`script.js` will define `financialModel` and `scenarios` as the single data source for values repeated across the document. Static explanatory copy stays in HTML, while elements carrying `data-financial` or `data-scenario` keys receive their formatted baht values from JavaScript.

The base model is 5,000 MAU, ฿234,480 monthly revenue, ฿21,329 variable cost, ฿180,000 fixed cost, ฿213,151 total contribution, 90.9% contribution margin ratio, ฿33,151 operating profit, 14.1% operating margin, and approximately ฿198,000 break-even monthly revenue. The model will distinguish marketplace GMV (฿39,900 for the stated 100-purchase example) from DevCraft commission revenue (฿7,980).

Scenario buttons will select Conservative, Base, or Growth and update only their labelled MAU, paid-account, revenue, variable-cost, fixed-cost, and profit/loss metrics. The active selected scenario will be exposed with native buttons and `aria-pressed`.

## Interaction and accessibility

`IntersectionObserver` will drive active-chapter navigation, reveal-state classes, metric count-up eligibility, and chart reveal eligibility. A lightweight scroll listener, scheduled via `requestAnimationFrame`, will update the continuous progress indicator. No information is hidden if JavaScript is unavailable or reduced motion is enabled.

Keyboard-visible focus, semantic headings, labelled controls, high contrast, text labels in addition to positive/negative colors, and a `prefers-reduced-motion: reduce` override are required. On desktop, scenes read like slides; below the tablet breakpoint, diagrams stack and full-width data remains readable. Horizontal scrolling is reserved for genuine data tables only.

## Error handling and graceful fallback

The script will query optional elements defensively so a missing optional visual cannot cause a console error. Counters will immediately render their final value when motion is reduced. The scenario selector will retain the base-case values as static HTML defaults until enhanced by JavaScript. The break-even visual will use the fixed supplied model values and labels rather than ungrounded decorative lines.

## Verification strategy

Verification will include static financial arithmetic checks, browser console checks, keyboard navigation, active chapter and progress behaviour, scenario updates, reduced-motion rendering, and viewport inspection at 1440px, 1280px, 1024px, 768px, and 390px. The final review will confirm removal of all outdated dollar figures and old financial values, no accidental page-width overflow, correct data labels, and accessible chart alternatives.

## Out of scope

This work does not build the DevCraft product application, add a backend, collect market research, claim product-market fit, or produce PDF/PPTX output. Financial values are classroom assumptions, not validated forecasts.
