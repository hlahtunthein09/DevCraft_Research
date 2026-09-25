# DevCraft Presentation Website Update Specification
## Business Model + Financial Analysis + Visual Storytelling Redesign

**Document purpose:**  
This file is the implementation brief for updating the existing DevCraft presentation website (`index.html`, `style.css`, `script.js`) into a visually strong, business-focused exam presentation.

**Primary objective:**  
Do **not** rebuild the DevCraft product demo.  
Update the **presentation website** so it communicates the DevCraft idea, business model, monetization logic, financial assumptions, break-even analysis, feasibility, and risks in a clear, convincing, visually memorable way.

**Presentation context:**  
Digital Business class exam project.

---

# 1. Source of Truth

Use the existing files as the starting implementation:

- `index.html`
- `style.css`
- `script.js`

Use the existing DevCraft product concept as the product source of truth:

- DevCraft is a social learning and career platform for developers.
- It connects social activity, Q&A, courses, challenges, projects, portfolio, jobs, creators, and employers.
- Confirmed business opportunities include:
  - B2C
  - B2B
  - creator marketplace commission
  - affiliate revenue
  - sponsorship opportunities

Do **not** reuse the old financial model currently embedded in the HTML as the accepted financial case.

The current website contains outdated example values such as:

- Developer Pro = `$12/month`
- Recruiter Starter = `$199/month`
- Company Enterprise = `$599/month`
- Fixed cost = `$1,700/month`
- Break-even = `28 customers/month`
- Monthly profit example = `$4,540`

These values must be removed from the final financial presentation.

---

# 2. Core Update Strategy

The current website should not simply receive a visual facelift.

The update must change the website from:

> a sequence of headings, cards, and tables

into:

> a guided business story with visual evidence, financial logic, memorable highlights, and clear presentation moments.

The redesign must achieve four things:

1. **Explain the problem quickly**
2. **Show why DevCraft is different**
3. **Show how money moves through the ecosystem**
4. **Show whether the business can become financially viable**

The presentation should feel like a startup pitch deck translated into an interactive web presentation, while still being appropriate for a classroom business exam.

---

# 3. Main Story to Communicate

The full presentation should support this argument:

> Developers currently move between many fragmented platforms for social interaction, learning, coding help, project building, portfolios, and jobs.

> DevCraft connects these activities into one ecosystem.

> A free social/community layer attracts and retains developers.

> Higher-value activities such as premium learning, creator commerce, recruitment, company tools, sponsored opportunities, and affiliate partnerships create monetization.

> Because DevCraft is a digital platform with relatively low marginal delivery costs, contribution margin can remain high once user volume grows.

> The business still requires enough monetized users and recurring revenue to cover fixed operating costs.

This is the central business narrative.

---

# 4. New Presentation Architecture

Replace the current long flat section list with the following narrative structure.

## Chapter A — Idea

1. Hero / Thesis
2. The Problem
3. The DevCraft Solution
4. The Connected Developer Journey

## Chapter B — Product & Ecosystem

5. What DevCraft Provides
6. Who Creates Value
7. Platform Ecosystem

## Chapter C — Business Model

8. How DevCraft Makes Money
9. Pricing Architecture
10. Creator Economy
11. Revenue Engine

## Chapter D — Financial Analysis

12. Base User Assumptions
13. Cost Structure
14. Unit Economics
15. Monthly Profitability
16. Break-Even Analysis
17. Scenario Analysis

## Chapter E — Strategy

18. Growth & Marketing
19. Competitive Position
20. Feasibility
21. Risks

## Chapter F — Conclusion

22. Final Thesis

---

# 5. Navigation Redesign

The current top navigation contains too many individual section links.

Replace it with high-level chapter navigation only:

- Idea
- Product
- Business
- Financials
- Strategy
- Conclusion

The active chapter should update while scrolling.

Keep a subtle vertical or horizontal progress indicator.

Optional:
- show current slide number, e.g. `08 / 22`
- show chapter name near the progress indicator

Do not show 15+ navigation pills in the header.

---

# 6. Visual Design Direction

## 6.1 Overall Look

The presentation should feel:

- premium
- editorial
- modern
- technology-focused
- visually confident
- presentation-first
- data-aware
- not like a generic SaaS landing page

Avoid:
- too many rounded cards
- pastel glassmorphism everywhere
- repetitive white boxes
- decorative gradients without meaning
- unnecessary emoji
- stock-photo-heavy layouts
- long text blocks
- generic startup dashboard styling

---

# 6.2 Color System

Move away from the current soft-purple-only visual language.

Recommended direction:

### Base dark
`#0B0D12`

### Surface dark
`#12151C`

### Primary violet
`#7C5CFF`

### Electric blue
`#4AA8FF`

### Cyan accent
`#31D7E9`

### Positive / growth
`#3ED598`

### Warning
`#F6B84A`

### Danger / negative
`#FF6B6B`

### Light background
`#F6F7FB`

### Light surface
`#FFFFFF`

### Primary text dark
`#10131A`

### Muted text
`#667085`

Use dark and light sections alternately.

Do not make every section the same background.

Example rhythm:

- Hero → dark
- Problem → light
- Solution → dark
- Product → light
- Business model → dark
- Financials → mostly light/data-focused
- Break-even → dark highlight
- Final → dark

---

# 6.3 Typography

Use a strong display face for large statements and a clean sans-serif for body text.

Existing font pairing can remain if desired:

- Space Grotesk
- DM Sans

But hierarchy must be improved.

Recommended sizing:

- Hero title: 72–110px desktop
- Section headline: 56–88px
- Main financial number: 64–110px
- Supporting metric: 24–36px
- Body: 17–21px
- Captions: 13–15px

Large text should communicate a message, not just a heading.

Bad:

> Monthly Profitability Projection

Better:

> **5,000 active users can move DevCraft above operating break-even.**

Then use the section label above it.

---

# 7. Motion & Interaction Principles

Animations must support presentation storytelling.

Use:

- IntersectionObserver
- subtle fade + translate reveal
- staggered metric appearance
- count-up numbers
- chart line drawing
- break-even intersection reveal
- active chapter tracking
- optional scenario selector

Do not use:
- constant floating animations
- excessive parallax
- spinning elements
- slow cinematic transitions that interrupt presenting
- motion on every card

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

All important information must remain visible without animation.

---

# 8. Section-by-Section Implementation Specification

---

## SECTION 01 — HERO

### Purpose

Introduce DevCraft in one memorable statement.

### Replace current hero

Remove the abstract DC blob as the primary hero visual.

The hero should visually communicate the DevCraft ecosystem.

### Main copy

**DevCraft**

**Scroll. Learn. Build. Grow.**

Supporting statement:

> A social learning and career ecosystem where developers can discover ideas, solve problems, learn skills, build proof of work, and move toward real opportunities.

### Hero visual

Create a connected vertical or horizontal journey:

`Post → Question → Course → Challenge → Project → Portfolio → Job`

Each stage should use a small original interface fragment or symbolic node.

The line connecting the journey should visually imply progression.

### Small supporting labels

- Community
- Learning
- Practice
- Proof of Work
- Career

### Presenter takeaway

Audience should understand in less than 10 seconds:

> DevCraft connects the developer journey.

---

## SECTION 02 — THE PROBLEM

### Main message

**Developer growth is fragmented across too many platforms.**

### Visual layout

Use a split visual.

Left:
platform categories

- GitHub → code/projects
- LinkedIn → career/networking
- Stack Overflow → technical Q&A
- Udemy → courses
- Reddit / social platforms → discussion/community

Right:
a developer journey broken into disconnected blocks.

Do not claim these platforms are bad.

The point is fragmentation.

### Highlight statement

> One developer may need several different platforms to learn, ask, build, share, and find work.

### Visual style

Use thin connector lines that stop between platforms to visually communicate fragmentation.

---

## SECTION 03 — THE SOLUTION

### Main message

**DevCraft connects those activities into one ecosystem.**

### Visual

Create one central DevCraft node.

Around it:

- Social Feed
- Questions
- Courses
- Challenges
- Projects
- Portfolio
- Jobs
- Creator Tools
- Employer Tools

Use a clean network diagram.

### Highlight

> One identity. One community. One connected growth path.

---

## SECTION 04 — CONNECTED DEVELOPER JOURNEY

This should be one of the strongest storytelling sections.

### Main visual

A large journey path:

1. Discover a post
2. Open a technical question
3. Learn from a course
4. Practice with a challenge
5. Publish a project
6. Add it to a portfolio
7. Apply for a job

### Important concept

The journey is not mandatory or linear.

The visual should suggest users can enter at different points.

### Key caption

> Social discovery creates activity.  
> Learning creates progress.  
> Projects create evidence.  
> Career tools create economic value.

---

## SECTION 05 — WHAT DEVCRAFT PROVIDES

Instead of generic feature cards, show actual product modules.

### Modules

- Feed
- Questions
- Courses
- Challenges
- Portfolio
- Jobs

Use realistic mini UI compositions inspired by the actual DevCraft demo.

Each module gets:

- icon
- module name
- one-sentence purpose

Example:

**Questions**  
Structured technical help with reproducible problems and accepted solutions.

**Challenges**  
Practice, community, and employer-created challenges.

**Portfolio**  
Projects and completed work become visible proof.

---

## SECTION 06 — WHO CREATES VALUE

### Main message

**DevCraft is a multi-sided platform.**

### Center

DevCraft logo / ecosystem

### Three primary groups

#### Developers
- learn
- share
- build
- connect
- find opportunities

#### Creators
- publish courses
- create challenges
- grow an audience
- earn from content

#### Companies
- publish jobs
- run hiring challenges
- discover talent
- sponsor developer activity

### Secondary group

Partners / advertisers

- developer tools
- hosting
- certification
- technology brands

---

## SECTION 07 — PLATFORM ECOSYSTEM

Show value exchange, not just user groups.

Example:

Developers contribute:
- engagement
- projects
- questions
- community activity

Creators contribute:
- educational content
- challenges
- expertise

Companies contribute:
- jobs
- hiring demand
- sponsorship

DevCraft provides:
- distribution
- infrastructure
- discovery
- profiles
- transactions
- recruitment workflow

This section transitions into monetization.

---

# 9. BUSINESS MODEL SECTIONS

---

## SECTION 08 — HOW DEVCRAFT MAKES MONEY

This must become a major highlight section.

### Main message

**The social layer grows the network. Higher-value activity creates revenue.**

### Revenue streams

Use a visually connected revenue map.

1. Developer Pro subscriptions
2. Creator Pro subscriptions
3. Company subscriptions
4. Creator marketplace commission
5. Promoted jobs
6. Affiliate commissions
7. Sponsorship campaigns

### Important visual rule

Do not use seven identical cards.

Instead show the user ecosystem flowing into revenue streams.

Example:

`Free Community → Engagement → Premium Learning`

`Creators → Course Sales → Platform Commission`

`Companies → Hiring Tools → B2B Subscription`

`Partners → Sponsored Activity → Sponsorship Revenue`

---

## SECTION 09 — PRICING ARCHITECTURE

All pricing below is a **proposed classroom business assumption**, not measured market validation.

### Free

**฿0**

For:
developers and learners

Core:
- community feed
- basic Q&A
- selected courses
- basic challenges
- public portfolio
- job discovery

---

### Developer Pro

**฿199 / month**

For:
active learners and job seekers

Possible value:
- premium learning
- advanced challenges
- enhanced portfolio tools
- learning insights
- advanced saved learning features
- reduced sponsored content

---

### Creator Pro

**฿299 / month**

For:
course and challenge creators

Possible value:
- more publishing capacity
- advanced creator analytics
- promotional tools
- audience insights
- marketplace benefits

---

### Company Starter

**฿1,490 / month**

For:
small employers

Possible value:
- company profile
- limited active job listings
- candidate portfolio access
- basic applicant workflow
- hiring challenges

---

### Company Pro

**฿3,990 / month**

For:
larger or more active recruiting teams

Possible value:
- additional job capacity
- advanced filtering
- candidate comparison
- recruiter analytics
- featured employer visibility
- advanced hiring challenge tools

### Visual layout

Use a pricing ladder rather than a normal pricing table.

Show progression:

`Free → Individual → Creator → Company`

Highlight the different user roles.

---

## SECTION 10 — CREATOR ECONOMY

### Main message

**Creators can earn; DevCraft earns when creators succeed.**

### Example assumption

Average paid course price:

**฿399**

Standard marketplace split:

- Creator: 80%
- DevCraft: 20%

### Example transaction

Customer pays:

**฿399**

Creator receives:

**฿319.20**

DevCraft platform revenue:

**฿79.80**

### 100 course purchases

GMV:

**฿39,900**

Creator payout:

**฿31,920**

DevCraft commission revenue:

**฿7,980**

### Important terminology

Do not call the full GMV DevCraft revenue.

Clearly distinguish:

- Gross Merchandise Value
- Creator payout
- Platform commission revenue

### Visual

Use one large transaction flow diagram.

---

## SECTION 11 — REVENUE ENGINE

Show diversified monthly revenue.

### Base-case assumptions

#### Developer Pro
450 users × ฿199  
= **฿89,550**

#### Creator Pro
120 users × ฿299  
= **฿35,880**

#### Company Starter
25 companies × ฿1,490  
= **฿37,250**

#### Company Pro
5 companies × ฿3,990  
= **฿19,950**

#### Marketplace commission
250 course purchases × ฿399 × 20%  
= **฿19,950**

#### Affiliate
100 monthly conversions × assumed ฿120 average commission  
= **฿12,000**

#### Sponsorship
1 assumed campaign  
= **฿15,000**

#### Promoted jobs
10 × ฿490  
= **฿4,900**

### Total monthly revenue

# ฿234,480

### Visual

Use either:

- stacked bar
- segmented revenue column
- radial composition
- horizontal proportional bars

Do not use a large spreadsheet-like table as the main visual.

---

# 10. FINANCIAL ANALYSIS SECTIONS

All figures in this section are proposed classroom assumptions unless otherwise validated later.

---

## SECTION 12 — BASE USER ASSUMPTIONS

### Main message

**Base case: 5,000 Monthly Active Users**

### User mix

| Segment | Count |
|---|---:|
| Free users | 4,400 |
| Developer Pro | 450 |
| Creator Pro | 120 |
| Company Starter | 25 |
| Company Pro | 5 |
| Total | 5,000 |

### Monetized accounts

600

### Monetized account rate

12%

### Important note

Do not present 12% as proven conversion performance.

Label:

> Base-case classroom assumption.

### Visual

Use 5,000 dots or a proportional user population graphic.

Show the 600 monetized accounts highlighted.

---

## SECTION 13 — COST STRUCTURE

### Main message

**DevCraft has no physical inventory, but it still has meaningful operating costs.**

### Monthly fixed cost assumptions

| Fixed Cost | Monthly Estimate |
|---|---:|
| Cloud / database base infrastructure | ฿8,000 |
| SaaS / developer / monitoring tools | ฿5,000 |
| Community support / moderation | ฿30,000 |
| Creator / content operations | ฿25,000 |
| Sales / business development | ฿35,000 |
| Base digital marketing | ฿40,000 |
| Legal / accounting / administration | ฿10,000 |
| Technical maintenance / support | ฿20,000 |
| Contingency | ฿7,000 |
| **Total** | **฿180,000** |

### Visual

Use a cost composition chart.

Highlight the three largest assumed cost drivers:

- Marketing
- Sales / BD
- Community support

### Important statement

> Digital does not mean cost-free.

---

## SECTION 14 — UNIT ECONOMICS

### Main concepts

Use the classroom break-even terminology:

**Contribution Margin = Selling Price − Variable Cost**

**Contribution Margin Ratio = Contribution Margin ÷ Selling Price**

### Proposed variable-cost assumptions

| Plan | Price | Variable Cost | Contribution |
|---|---:|---:|---:|
| Developer Pro | ฿199 | ฿17 | ฿182 |
| Creator Pro | ฿299 | ฿28 | ฿271 |
| Company Starter | ฿1,490 | ฿110 | ฿1,380 |
| Company Pro | ฿3,990 | ฿325 | ฿3,665 |

### Subscription contribution estimate

Developer Pro  
450 × ฿182 = **฿81,900**

Creator Pro  
120 × ฿271 = **฿32,520**

Company Starter  
25 × ฿1,380 = **฿34,500**

Company Pro  
5 × ฿3,665 = **฿18,325**

Total subscription contribution:

**฿167,245**

### Full business estimated variable cost

**฿21,329 / month**

### Total contribution

**฿213,151 / month**

### Estimated contribution margin ratio

**90.9%**

### Visual

Use contribution bars:

Selling price
minus variable cost
equals contribution

Do not overwhelm with equations.

---

## SECTION 15 — MONTHLY PROFITABILITY

This should be a very strong slide.

### Main visual

Waterfall-style story:

# ฿234,480 Revenue

↓

**− ฿21,329 Variable Costs**

↓

**− ฿180,000 Fixed Costs**

↓

# + ฿33,151 Operating Profit

### Estimated operating margin

**14.1%**

### Annualized illustration

Revenue:

**฿2,813,760**

Operating profit:

**฿397,812**

### Important note

Label annual values as:

> Annualized base-case illustration assuming the monthly case remains stable.

Do not present as guaranteed forecast.

---

## SECTION 16 — BREAK-EVEN ANALYSIS

This is one of the most important exam sections.

### Formula

**BEP Revenue = Fixed Costs ÷ Contribution Margin Ratio**

Using assumptions:

Fixed cost:

**฿180,000**

CMR:

**0.909**

Estimated break-even monthly revenue:

# ≈ ฿198,000

### Base case

Monthly revenue:

**฿234,480**

Amount above break-even:

# ≈ ฿36,480

### Main visual

Create an actual break-even chart.

X-axis:
activity / revenue scale

Y-axis:
Baht

Lines:

- Revenue
- Total Cost

Optional:
- Fixed Cost horizontal reference

Mark the intersection:

**Break-even ≈ ฿198K monthly revenue**

Then mark:

**Base case ≈ ฿234K**

### Important

The chart must visually demonstrate:

before intersection → loss

after intersection → profit

---

## SECTION 17 — SCENARIO ANALYSIS

### Main message

**Profitability depends on scale and monetization.**

### Scenario assumptions

| Scenario | MAU | Paid Accounts | Revenue | Variable Cost | Fixed Cost | Profit/Loss |
|---|---:|---:|---:|---:|---:|---:|
| Conservative | 3,000 | 290 | ฿104,815 | ฿8,953 | ฿160,000 | **−฿64,138** |
| Base | 5,000 | 600 | ฿234,480 | ฿21,329 | ฿180,000 | **+฿33,151** |
| Growth | 10,000 | 1,200 | ฿457,050 | ฿41,839 | ฿230,000 | **+฿185,211** |

### Visual

Use three large columns.

#### Conservative
3K users  
**Loss**

#### Base
5K users  
**Break-even exceeded**

#### Growth
10K users  
**Operating leverage improves**

Do not hide the loss scenario.

It makes the model more credible.

Optional interaction:
three scenario buttons updating the key metrics.

---

# 11. STRATEGY SECTIONS

---

## SECTION 18 — GROWTH & MARKETING

Do not show three generic marketing cards.

Use a funnel.

### Acquisition

- short-form developer content
- project showcases
- university developer communities
- technical content
- creator partnerships
- search discovery
- challenges

### Activation

User:
- follows topics
- saves content
- joins a course
- starts a challenge

### Retention

- learning progress
- community interaction
- project feedback
- saved content
- career opportunities

### Monetization

- Developer Pro
- Creator Pro
- Company plans
- marketplace transactions
- sponsorship

### Core growth loop

`Create → Share → Discover → Learn → Build → Share again`

Make this loop visually prominent.

---

## SECTION 19 — COMPETITIVE POSITION

Do not use the old checkmark table as the main design.

### Use positioning map

Suggested conceptual axes:

X-axis:
**Professional / Career Focus**

Y-axis:
**Developer Learning & Building Depth**

Plot:

- LinkedIn
- GitHub
- Stack Overflow
- Udemy
- DevCraft

Important:
This is a **conceptual positioning illustration**, not measured market research.

Label it clearly.

### Supporting statement

> DevCraft's strategy is not to replace every specialist platform. It connects social discovery, learning, proof of work, and career progression in one experience.

This is safer and stronger than claiming every competitor lacks features.

---

## SECTION 20 — FEASIBILITY

### Main message

**The concept is technically demonstrable, operationally digital, but business validation is still required.**

Use four feasibility dimensions.

### Technical

- browser-based platform
- existing interactive demo proves presentation-level feasibility
- product modules can share a common data model

### Operational

- no physical inventory
- no delivery network
- digital content and community require moderation
- employer and creator operations require support

### Financial

- recurring subscription potential
- diversified revenue model
- high contribution margin assumptions
- break-even depends on user scale

### Market

Be careful here.

Do not claim product-market fit.

State:

- target users are clearly defined
- comparable behaviors already exist across developer platforms
- DevCraft still requires demand testing and real user validation

---

## SECTION 21 — RISK ANALYSIS

Replace the normal table with a risk matrix.

### Risks

#### High impact / high attention

- low user adoption
- platform trust / moderation
- privacy / security
- inability to attract strong creators
- inability to attract employers

#### Medium

- competition
- content quality inconsistency
- high customer acquisition costs

#### Operational

- infrastructure growth
- support workload
- payment/refund complexity

### Mitigation

- start with a focused MVP
- validate one community segment first
- seed high-quality content
- partner with student/developer communities
- introduce monetization gradually
- moderate technical and professional content
- measure conversion before scaling marketing spend

### Visual

2×2 or 3×3 likelihood/impact matrix.

---

# 12. FINAL SECTION

## SECTION 22 — FINAL THESIS

Do not end only with “Thank You”.

End with the business argument.

Large text:

# Community creates activity.

# Learning creates value.

# Projects create proof.

# Career creates monetization.

Then:

**DevCraft**

**Scroll. Learn. Build. Grow.**

Small final statement:

> A connected developer ecosystem designed to turn participation into progress — and progress into sustainable business value.

Then show:

`Thank you`

in smaller secondary text.

---

# 13. HTML IMPLEMENTATION PLAN

The HTML should remain semantic and straightforward.

Recommended structure:

```html
<header class="presentation-header">
  ...
</header>

<main>
  <section class="scene scene--hero" id="hero">...</section>
  <section class="scene scene--problem" id="problem">...</section>
  ...
</main>
```

Use semantic components:

- `section`
- `article`
- `figure`
- `figcaption`
- `table` only when tabular data is genuinely needed

Avoid using tables for every financial visual.

Create dedicated components/classes such as:

- `.story-statement`
- `.journey-map`
- `.ecosystem-map`
- `.money-flow`
- `.pricing-ladder`
- `.creator-split`
- `.revenue-mix`
- `.user-population`
- `.cost-breakdown`
- `.unit-economics`
- `.financial-waterfall`
- `.break-even-chart`
- `.scenario-grid`
- `.growth-loop`
- `.positioning-map`
- `.risk-matrix`

---

# 14. CSS ARCHITECTURE

Refactor the current large stylesheet into clear sections.

Suggested order:

```css
/* 01 Tokens */
/* 02 Reset */
/* 03 Typography */
/* 04 Presentation shell */
/* 05 Navigation */
/* 06 Shared scene layouts */
/* 07 Hero */
/* 08 Problem */
/* 09 Journey */
/* 10 Product modules */
/* 11 Ecosystem */
/* 12 Business model */
/* 13 Pricing */
/* 14 Creator economy */
/* 15 Financial visuals */
/* 16 Strategy visuals */
/* 17 Final */
/* 18 Motion */
/* 19 Responsive */
/* 20 Reduced motion */
```

---

# 15. DESIGN TOKENS

Create reusable tokens.

Example:

```css
:root {
  --bg-dark: #0b0d12;
  --surface-dark: #12151c;
  --bg-light: #f6f7fb;
  --surface-light: #ffffff;

  --text-dark: #10131a;
  --text-light: #f8f9fb;
  --text-muted: #667085;

  --violet: #7c5cff;
  --blue: #4aa8ff;
  --cyan: #31d7e9;
  --green: #3ed598;
  --amber: #f6b84a;
  --red: #ff6b6b;

  --line-dark: rgba(255,255,255,.12);
  --line-light: rgba(16,19,26,.10);

  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;

  --content: 1240px;
}
```

---

# 16. REMOVE CARD-DEPENDENT DESIGN

The current website overuses `.card`.

Do not delete cards completely.

Instead use them only for secondary information.

Primary information should use:

- full-width statements
- diagrams
- charts
- large numbers
- comparison scales
- directional flow
- connected nodes
- visual hierarchy

Rule:

> If the content can be understood better as a diagram, do not turn it into four cards.

---

# 17. JAVASCRIPT UPDATE

The current JavaScript only tracks scroll progress and active links.

Refactor it.

Recommended functions:

```js
initSectionObserver()
initNavigation()
initRevealAnimations()
initMetricCounters()
initScenarioSwitcher()
initBreakEvenAnimation()
updateProgress()
```

Use `IntersectionObserver`.

Do not perform heavy continuous scroll calculations when an observer can be used.

---

# 18. FINANCIAL DATA OBJECT

Store all financial assumptions in one JS object so the website remains internally consistent.

Example:

```js
const financialModel = {
  mau: 5000,

  users: {
    free: 4400,
    developerPro: 450,
    creatorPro: 120,
    companyStarter: 25,
    companyPro: 5
  },

  pricing: {
    developerPro: 199,
    creatorPro: 299,
    companyStarter: 1490,
    companyPro: 3990
  },

  revenue: {
    developerPro: 89550,
    creatorPro: 35880,
    companyStarter: 37250,
    companyPro: 19950,
    marketplace: 19950,
    affiliate: 12000,
    sponsorship: 15000,
    promotedJobs: 4900,
    total: 234480
  },

  costs: {
    variable: 21329,
    fixed: 180000,
    total: 201329
  },

  contribution: {
    total: 213151,
    ratio: 0.909
  },

  profit: 33151,
  operatingMargin: 0.141,
  breakEvenRevenue: 198000
};
```

Any displayed repeated number should come from the same data source where practical.

Avoid hardcoding conflicting numbers across HTML.

---

# 19. SCENARIO DATA

```js
const scenarios = {
  conservative: {
    mau: 3000,
    paidAccounts: 290,
    revenue: 104815,
    variableCost: 8953,
    fixedCost: 160000,
    profit: -64138
  },

  base: {
    mau: 5000,
    paidAccounts: 600,
    revenue: 234480,
    variableCost: 21329,
    fixedCost: 180000,
    profit: 33151
  },

  growth: {
    mau: 10000,
    paidAccounts: 1200,
    revenue: 457050,
    variableCost: 41839,
    fixedCost: 230000,
    profit: 185211
  }
};
```

If interactive scenario switching is implemented, update:

- MAU
- paid accounts
- revenue
- variable cost
- fixed cost
- profit/loss

Do not change the assumptions invisibly.

---

# 20. CHART IMPLEMENTATION

Prefer lightweight native implementation.

Possible approaches:

- CSS/SVG
- inline SVG
- Canvas only if necessary

Do not add a large chart library unless there is a clear reason.

Required visuals:

1. Revenue composition
2. Cost composition
3. Profit waterfall
4. Break-even chart
5. Scenario comparison

All charts must include:

- labels
- accessible text
- meaningful scale
- correct numbers
- no decorative distortion

---

# 21. BREAK-EVEN CHART REQUIREMENTS

Required chart logic:

Revenue increases with activity.

Total cost starts above zero because fixed cost exists.

Total cost then rises with variable costs.

Intersection = break-even.

Display:

- loss region
- profit region
- break-even marker
- base-case position

Do not draw arbitrary lines that do not correspond to the financial model.

---

# 22. RESPONSIVE DESIGN

Primary target:
desktop presentation.

Still support:

- 1440px
- 1280px
- 1024px
- 768px
- 390px

Desktop should feel like presentation slides.

Mobile should become a readable scrolling report.

Do not force desktop diagrams into unreadable mobile widths.

For small screens:

- stack diagrams vertically
- allow horizontal scrolling only for true tables
- reduce large display text
- keep financial numbers readable
- preserve labels

---

# 23. ACCESSIBILITY

Required:

- semantic headings
- visible focus
- keyboard navigation
- good contrast
- no color-only financial meaning
- positive values use icon/label plus color
- negative values use icon/label plus color
- SVG visuals include accessible titles/descriptions where appropriate
- reduced motion support

---

# 24. CONTENT RULES

## Do

- keep copy concise
- highlight one main idea per section
- use proposed assumptions clearly
- distinguish revenue from GMV
- distinguish fixed from variable cost
- distinguish contribution from profit
- distinguish base-case assumptions from measured facts
- show negative scenario honestly

## Do not

- claim product-market fit
- claim proven demand
- claim forecast certainty
- use fake testimonials
- use fake market statistics
- use unverified competitor claims
- use old `$1,700` / `28 customers` break-even figures
- use outdated dollar pricing
- describe assumptions as researched facts

---

# 25. PRESENTATION HIGHLIGHT MOMENTS

The following sections should feel visually memorable:

### Highlight 1
**Connected Developer Journey**

`Post → Question → Course → Challenge → Project → Portfolio → Job`

### Highlight 2
**Multi-Sided Business Model**

Developers / Creators / Companies / Partners

### Highlight 3
**Creator Transaction**

`฿399 → 80% Creator / 20% DevCraft`

### Highlight 4
**Base Case**

`5,000 MAU`

### Highlight 5
**Profit Waterfall**

`฿234K → −฿21K → −฿180K → +฿33K`

### Highlight 6
**Break-Even**

`≈ ฿198K monthly revenue`

### Highlight 7
**Scenario Comparison**

`3K users = loss`
`5K users = profit`
`10K users = stronger operating leverage`

### Highlight 8
**Final Thesis**

`Community → Learning → Proof → Career → Monetization`

---

# 26. PRESENTATION RHYTHM

Do not make every scene visually dense.

Use rhythm:

### Statement slide
big message, little detail

### Explanation slide
diagram

### Product slide
UI fragments

### Business slide
money flow

### Financial slide
chart

### Reflection slide
risk / feasibility

This prevents fatigue.

---

# 27. OLD SECTIONS TO REMOVE OR MERGE

### Merge

Current:
- Solution
- Product

New:
- DevCraft Solution
- Connected Journey
- Product Modules

### Replace

Current:
- Business model four-card grid

With:
- multi-sided ecosystem + monetization flow

### Replace

Current:
- pricing table

With:
- pricing architecture

### Replace

Current:
- old cost values

With:
- new fixed and variable cost model

### Replace

Current:
- 100-customer profitability table

With:
- 5,000 MAU base case

### Replace

Current:
- 28-customer break-even

With:
- ≈ ฿198K monthly revenue break-even

### Replace

Current:
- competitor checkmark table

With:
- conceptual positioning map

### Replace

Current:
- Thank You only

With:
- final business thesis + Thank You

---

# 28. ACCEPTANCE CRITERIA

The update is complete only if all conditions below are satisfied.

## Content

- all outdated pricing removed
- all outdated fixed cost values removed
- old break-even model removed
- new revenue streams included
- Creator Pro included
- company pricing included
- marketplace commission included
- affiliate included
- sponsorship included
- promoted jobs included
- base-case user model included
- fixed costs included
- variable costs included
- contribution margin included
- contribution margin ratio included
- monthly profit included
- annualized illustration included
- break-even included
- scenario analysis included

## Visual

- no repeated generic card layout across every section
- at least five different visual composition types
- break-even is visualized graphically
- user model is visualized
- revenue composition is visualized
- costs are visualized
- scenario analysis is visualized
- creator split is visualized
- final section has a strong thesis

## Technical

- navigation works
- active chapter updates correctly
- progress indicator works
- no console errors
- all financial numbers are internally consistent
- layout works at desktop and mobile widths
- animations respect reduced motion
- no important data depends on animation
- no inaccessible horizontal overflow except deliberate tables

---

# 29. IMPLEMENTATION PRIORITY

Codex should work in this order.

## Pass 1 — Content architecture

- rewrite HTML section structure
- replace old financial content
- remove redundant sections
- create final narrative order

## Pass 2 — Design system

- new colors
- typography hierarchy
- dark/light scene system
- layout utilities
- presentation header

## Pass 3 — Core visuals

Build:

- problem fragmentation
- connected journey
- ecosystem diagram
- money flow
- pricing ladder
- creator split

## Pass 4 — Financial visuals

Build:

- revenue composition
- user mix
- fixed cost composition
- unit economics
- waterfall
- break-even
- scenarios

## Pass 5 — Strategy visuals

Build:

- growth loop
- positioning map
- feasibility
- risk matrix

## Pass 6 — Interaction

- section observer
- navigation
- progress
- number reveal
- chart reveal
- scenario switching if implemented

## Pass 7 — QA

Check:

- financial consistency
- mobile layout
- presentation flow
- text overflow
- contrast
- keyboard
- reduced motion
- console

---

# 30. FINAL DESIGN PRINCIPLE

The single most important rule:

> **Do not decorate information. Visualize the argument.**

Every major visual should answer a business question:

- Why does DevCraft exist?
- How does the user move through it?
- Who creates value?
- Who pays?
- How much can the platform earn?
- What does it cost?
- When does it break even?
- What happens if growth is slower?
- Why might it work?
- What could fail?

The final result should feel like a **business presentation first** and a website second.

---

# 31. Final Presenter Narrative

Use the site to tell this story:

> Developers currently use fragmented platforms for community, learning, projects, and career growth.

> DevCraft connects those activities into one social ecosystem.

> The free layer creates activity and network value.

> Developers, creators, companies, and partners participate for different reasons.

> Monetization comes from premium subscriptions, creator transactions, recruiting tools, promoted opportunities, affiliates, and sponsorship.

> Under the proposed classroom base case of 5,000 MAU, DevCraft produces approximately ฿234K monthly revenue against approximately ฿201K total operating cost, resulting in approximately ฿33K monthly operating profit.

> The estimated break-even point is approximately ฿198K in monthly revenue.

> The conservative scenario still loses money, showing that user growth and monetization are critical.

> The project is therefore not presented as guaranteed success, but as a financially structured digital-business concept with a demonstrable product, a defined monetization system, and clear assumptions that can be tested.

---

# 32. Codex Instruction Summary

**Your task is not to redesign the DevCraft product application.**

Your task is to update the existing DevCraft **presentation website**.

Preserve:
- plain HTML/CSS/JS approach
- scrolling presentation format
- semantic structure
- responsiveness

Replace:
- old financial values
- generic visual repetition
- card-heavy presentation style
- old pricing
- old break-even analysis
- weak closing slide

Build:
- stronger visual storytelling
- multi-sided business model
- monetization flow
- modern pricing section
- creator marketplace economics
- financial dashboard storytelling
- break-even visualization
- scenario analysis
- competitive positioning
- risk matrix
- strong final thesis

The completed presentation should make the audience remember:

> **DevCraft connects community, learning, proof of work, and career opportunity — then monetizes the higher-value interactions created by that ecosystem.**
