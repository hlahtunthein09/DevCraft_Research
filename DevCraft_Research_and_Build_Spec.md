# DevCraft — Research & Presentation Prototype Build Specification

Version: 1.0 · 24 September 2026

## 1. Purpose and authority

This document is the build brief for the next implementation turn. It consolidates the user's confirmed concept, desk research, and proposed presentation mechanics. It does not authorize a new implementation during the research turn.

**Confirmed product:** a fun social learning platform for developers of all disciplines and levels. People share work and progress, discuss technical issues, take courses, complete challenges, build a portfolio, and discover career opportunities through a familiar social interface.

**Confirmed presentation scope:** show the complete product with connected fictional seed data and meaningful clickable interactions. Include developer, learner, creator, and employer journeys. Production payments, recruitment operations, code execution, video infrastructure, authentication, and recommendation systems are outside the demonstration build.

**Sequence:** finish this specification → implement and verify the product demo → update the presentation website's financial analysis with detailed reasons and assumptions. Do not present the earlier $2,300 budget, 40-account break-even, or any old calculator as the accepted financial model.

**Positioning:** “Scroll. Learn. Build. Grow.”

**Presentation explanation:** DevCraft combines developer conversation, practical learning, and professional progress in one social experience. A post can lead to a question, lesson, challenge, completed project, and hiring opportunity.

This is a classroom concept. Research below establishes reference capabilities, not product-market fit or measured learning improvement. No demand survey or authenticated comparative usability study has been conducted. The earlier minimal prototype is an exploratory artifact, not the approved feature specification.

### Confirmed decisions

- Audience: frontend, backend, full-stack, mobile, data/AI, DevOps, QA, game development, and adjacent UI/UX participants; beginners through experienced developers.
- Activities: posts, memes, news, career advice, progress sharing, project publishing, bug Q&A, courses, challenges, portfolio, jobs, and employer challenges.
- Relationships: separate one-way Follow and accepted mutual Connect.
- Hiring: visible from the start in the demo, using fictional companies and candidates.
- Business models: B2C, B2B, creator marketplace commission, affiliate, and sponsorship opportunities.
- Financial calculation: a later presentation task, after the product is demonstrable.

Everything described as a design, count, route, color, or implementation choice below is a proposed default to avoid another discovery round. It can be adjusted without changing the confirmed concept.

## 2. Reference research and specific takeaways

| Reference | Documented capability | DevCraft design decision | Boundary |
|---|---|---|---|
| Frontend Mentor [S1–S4] | Challenge submissions combine a repository, live result, reflection, and feedback; community and hiring profiles exist | Give each challenge a brief, submission, discussion, and related portfolio item | Do not claim projects + feedback + hiring is unique; create original challenge briefs and assets |
| Facebook [S5–S6] | Discovery and connected-content feeds; comments and conversation controls | Separate For You / Following; familiar composer and readable reply threads | Do not copy its full information architecture or every entertainment feature |
| Instagram [S7–S8] | Saved collections and credited reposts | Visual project previews; private saved collection; repost links to the original | A developer's quality is not inferred from likes or image quality |
| LinkedIn [S9–S11] | Featured work, professional feed, Follow and Connect | A profile combines activity and selected work; mutual networking and recruiter views | Followers and accepted connections are different state |
| Stack Overflow [S12–S14] | Reproducible questions, tags, and asker-accepted answers | Question composer requests expected result, actual result, code, attempted fix; answer section has Accepted marker | Comments and answers are separate; acceptance is not an expert verification badge |
| Udemy [S15–S16] | Curriculum, lesson navigation, progress, and notes | Course detail, enrollment, sample lesson, lesson completion, and notes | Use original sample lessons; no copied course videos or fabricated playback |
| DEV Community [S17] | Tags and following help shape the feed | Follow technologies and search by topic | Demo ranking is deterministic, not an implemented recommendation engine |

### Research qualifications

The UI recommendations are an analysis of documented interaction patterns, not a claim to have inspected every current logged-in desktop/mobile screen. Live layouts and experiments can differ by device and account. Exact competitor subscription quotas are unnecessary for this demo; Frontend Mentor's public pages have differing report allowances, so do not reproduce an exact free AI-review quota without a fresh check.

### What connects the product

Social activity supplies discovery and motivation. Questions remove obstacles. Courses explain concepts. Challenges give practice. Projects record application. Profiles collect evidence. Jobs and hiring challenges create a next step. Users may enter at any point; they do not have to complete a prescribed sequence.

## 3. Information architecture

Open the application on a populated Home feed, not a marketing landing page.

### Desktop shell

- Top: logo, global search, Create button, notifications, messages, user menu.
- Left navigation: Home, Explore, Questions, Challenges, Courses, Jobs, My Portfolio, Saved.
- More/user menu: My Learning, Network, Creator Studio, Employer Studio, Settings, presentation controls.
- Center: current activity or detail page. Feed column around 650–740 px at large sizes.
- Right rail on feed: Continue Learning, challenge prompt, people to follow, relevant job. Hide it when a detail page needs width.
- Search groups results as People / Posts / Questions / Courses / Challenges / Jobs.

### Mobile shell

- Bottom navigation: Home, Explore, Create, Learn, Profile.
- Header icons: search, notifications, overflow menu containing Jobs, Questions, Saved, and studios.
- One column; detail pages have a visible back action; secondary filters collapse into a sheet.
- Preserve feed scroll position after returning from a detail page.

### Routes / navigable views

| View | Primary contents and action |
|---|---|
| `/feed` | For You, Following, Learning, Community; mixed post cards; composer |
| `/explore` | People, projects, technologies, trending discussions; filters |
| `/posts/:id` | Full post, original source for reposts, comments, share/save |
| `/questions` | Search, tag, unanswered/solved filters; Ask question |
| `/questions/:id` | Problem, code, expected/actual results, answers, accepted answer |
| `/challenges` | Practice / Community / Hiring; difficulty, domain, status filters |
| `/challenges/:id` | Brief, requirements, evaluation rubric, submissions, discussion |
| `/submissions/:id` | Solution, repository/demo links, reflection, feedback |
| `/courses` | Topics, level, free/paid filter, course cards |
| `/courses/:id` | Outcomes, curriculum, instructor, original sample lesson, enroll action |
| `/learn/:courseId/:lessonId` | Lesson text/code, curriculum, completion, notes, related Q&A |
| `/learning` | Enrolled courses and derived progress |
| `/u/:handle` | About, Posts, Projects, Learning, Contributions; Follow/Connect |
| `/projects/:id` | Project story, screenshots, role, stack, decisions, links, reviews |
| `/jobs` and `/jobs/:id` | Role, company, location/work mode, requirements, associated challenge, application |
| `/companies/:id` | Company identity, jobs, hiring challenges |
| `/network` | Suggested people, Following, Connections, incoming requests |
| `/saved` | Saved items across content types; optional named collections |
| `/notifications` | Read/unread events that link to their target |
| `/messages` | Seeded conversations and local sent-message bubbles |
| `/creator` | Draft/published courses and community challenges; create/edit |
| `/employer` | Job/challenge creation, applicants, profile comparison, shortlist |
| `/plans` | Qualitative Free / Pro / Employer comparison; pricing pending the finance phase |

Routes may use hash navigation for a lightweight static build, but refresh and browser Back must work. Do not require a backend merely to implement this view list.

## 4. Page and interaction specification

### 4.1 Feed and composer

Post types: discussion, tip, meme, progress, project, question, course announcement, challenge announcement, job announcement. All share an author header, timestamp, topic tags, a save action, and an overflow menu. Specialized types include a linked structured object.

- For You: curated mixed seed content relevant to the demo profile.
- Following: authors the current user follows, newest first.
- Learning: tips, questions, courses, challenges, progress, and projects.
- Community: discussion, memes, news, and career conversation.
- Topic filters: language/framework and domain, not a frontend-only list.
- Standard actions: like/unlike, comment/reply, save/unsave, repost with optional note, copy a working internal URL.
- Overflow: own content edit/delete; others' content hide/report. Reporting shows a local confirmation.
- Composer starts with a content type. Only reveal fields needed for that type. Text posts require body; progress posts can link a course/challenge; project posts link a project record.
- Question, challenge, course, and job creation use structured editors. Do not force their fields into one large universal form.
- Newly created records appear in the matching list and the creator's profile. A created structured item can optionally also announce itself in the feed.
- Counts change once per action; toggling off reverses them. No double increments after rerender.

### 4.2 Bug Q&A

Question fields: clear title, technology tags, language, problem context, code as selectable text, exact error, expected behavior, actual behavior, attempted fixes. Optional screenshot supplements code.

Question detail: problem first, then answers; each answer has author, body/code, helpful vote, replies. The question owner can accept/unaccept one answer. A developer answering someone else's question cannot accept their own answer as the asker. Answer acceptance updates the question's solved state and author's contribution record.

States: no answers, several answers, accepted solution, composing answer, field errors, question hidden/deleted. Keep the composer friendly rather than importing Stack Overflow's entire reputation system.

### 4.3 Courses and learning

Catalog fields: title, domain, level, instructor, thumbnail, lesson count, estimated duration, free/premium label. Avoid invented third-party ratings or “certified” claims; any displayed seed review is visibly part of the demo dataset.

Detail: outcomes, prerequisites, curriculum, instructor bio, preview lesson, enrollment. After enrolling, button becomes Continue learning and the course appears in My Learning.

Lesson page: provide at least one substantive original lesson in every seeded course, with short explanation, code or practical exercise, curriculum navigation, notes, Mark complete, Next lesson. Incomplete lesson content must not be represented as a playable video. Text-and-code lessons are an adequate demo format. Progress is completed lesson IDs / total lesson IDs, never a disconnected hardcoded percentage.

Creator Studio: create/edit course title, category, level, outcomes, sections, and lesson text; draft → preview → publish. Simulate enrolling in a paid course through an explicitly labeled preview purchase confirmation, with no payment collection. Do not decide final prices before the finance phase.

### 4.4 Challenges

Types: platform practice, community challenge, employer hiring challenge. A hiring challenge has a company, associated job, submission deadline, and rubric. A community challenge does not imply employment.

Detail fields: objective, domain, difficulty, expected effort, acceptance criteria, starter resources, submission requirements, owner, and optional deadline. Tabs: Overview / Submissions / Discussion. Hiring version adds evaluation criteria and role details.

Actions: start, save, submit repository/demo/reflection, view another submission, comment, mark feedback helpful, revise own submission, add completed work to portfolio.

State flow: available → started → submitted → feedback received → revised. Deadline passed blocks new hiring submissions and explains why. “Completed” is a submission state, not a proof that code passed automated tests.

Creator/employer editors can publish a new challenge. Any evaluation score is explicitly sample reviewer assessment; do not imply a working code judge or AI review service.

### 4.5 Portfolio and progress

Profile header: avatar, name, handle, role/domain, bio, skills, location optional, links, follow/connect, open-to-work status if opted in.

Tabs: Posts / Projects / Learning / Contributions / About. Featured projects come before long activity lists. Project detail shows problem, approach, stack, personal contribution, screenshots, reflection, and links. A completed challenge can create a linked portfolio entry without copying the submission into an unrelated record.

Progress components: courses completed, submissions, helpful answers, recent activity. Count only their underlying records. Badges can recognize completed sample actions. No automatic claim that course completion or popular posts verifies professional competence.

Follow states: not following / following. Connection states: none / outgoing pending / incoming pending / connected. Follow does not require acceptance. Connecting requires a received or accepted request. Sending a request must not immediately display Connected.

### 4.6 Jobs and Employer Studio

Job detail: fictional company, role, domain, level, work mode, location, required skills, overview, responsibilities, optional associated challenge. Salary may be omitted until a consistent fictional currency convention is chosen; never represent it as market research.

Apply: select a portfolio project, optional short note, review, submit. The current user sees Applied. Prevent duplicate application. Employer view receives that same application record.

Employer Studio: Overview / Jobs / Hiring challenges / Applicants. Create/edit/publish job; create linked hiring challenge; inspect applicant's profile and submitted work; move candidate to Shortlisted; send a local message. Use status badges and an empty-state explanation rather than fabricated results.

Shortlisting does not create a job offer. The demo's role switch changes the active fictional account; it is not real authentication.

### 4.7 Notifications, messages, saved items

- Notification events: new reply, answer, connection request, accepted connection, feedback, application update. Each opens its relevant object and can be marked read.
- Local message sending appends a bubble and updates the conversation preview; seeded replies remain seeded unless the presenter manually switches roles and replies.
- Saved content stores object type + ID. Opening a saved item returns to its actual detail view.
- A single clear “Demo controls” entry contains account switching and Reset demo. Reset asks for confirmation because it removes locally created demo content.

## 5. Visual direction

**Proposed default:** recognizable social application, calm reading surface, expressive project previews, concise developer language. Do not start with a giant marketing hero. The feed and its composer must be visible on the first screen.

- Light base `#F5F6F8`, white surfaces, dark text `#18212B`, muted text `#596574`.
- Primary indigo `#4F46E5`; progress teal `#0F766E`; challenge accent amber `#B45309`. Verify contrast in the actual combinations.
- Readable sans font with system fallback; monospace only for code and small technical labels.
- Consistent 12–16 px card radii, restrained borders, minimal shadows, generous line height.
- Stable colored initial avatars or licensed supplied portraits; no cloned faces or fabricated celebrity identity.
- Original project preview artwork made with HTML/CSS/SVG is sufficient. Code-only projects get attractive technical diagrams or code panels, not fake application screenshots.
- Color and an icon/label distinguish Question, Course, Challenge, and Job. Never rely on color alone.
- Desktop three-column feed; broad center detail layouts; mobile one-column and bottom navigation.
- Keyboard-operable menus/dialogs, visible focus, dialog focus return, labelled inputs, touch targets around 44 px, reduced-motion support, selectable horizontally scrollable code.
- Represent errors, loading, no results, no saved items, request pending, completed, submitted, and closed states. No dead button disguised as a working feature.

## 6. Connected seed dataset

All names, companies, posts, numbers, reviews, jobs, and events below are fictional demo material. Dates should be initialized relative to demo load so active challenges do not silently expire before presentation.

### 6.1 People — 12 records

| ID | Name | Role / purpose |
|---|---|---|
| u01 | Hla Htun | Default developer; full-stack learner; editable demo account |
| u02 | Aye Thandar | UI/UX designer; posts a budget-app design |
| u03 | Min Zaw | Frontend mentor and React course creator |
| u04 | Khin Su | Backend developer; API and SQL answers |
| u05 | Narin K. | Mobile developer; Flutter course creator |
| u06 | May Lin | Data/AI learner; Python progress posts |
| u07 | Arjun S. | DevOps developer; deployment tutorial |
| u08 | Linh Nguyen | QA engineer; accessible-form testing |
| u09 | Hana Lee | Game developer; small puzzle project |
| u10 | Ko Wai | Junior developer; question asker |
| u11 | Mira Chen | Employer account for Northstar Labs |
| u12 | Daniel Park | Employer account for Pixel Harbor |

Selectable presenter accounts: u01 Developer, u03 Creator, u11 Employer. The remaining accounts supply realistic community activity. Role switching retains all local shared records.

### 6.2 Companies — 3 records

- co01 Northstar Labs: fictional web/mobile product studio; u11 recruiter.
- co02 Pixel Harbor: fictional design and game studio; u12 recruiter.
- co03 OpenTrail Systems: fictional data/cloud company; seeded jobs only.

### 6.3 Courses — 6 courses, 3 sample lessons each

| ID | Course | Author | Lessons |
|---|---|---|---|
| c01 | React State Without Surprises | u03 | State snapshots; updater functions; an interactive counter |
| c02 | Build a Clear REST API | u04 | Resources; validation; predictable error responses |
| c03 | Flutter Layout Fundamentals | u05 | Constraints; rows/columns; responsive composition |
| c04 | Practical Python Data Cleaning | u06 | Missing values; normalization; small data checks |
| c05 | Ship a Small Web App | u07 | Build output; environment configuration; deployment checklist |
| c06 | Accessible UI Testing | u08 | Keyboard navigation; labels/errors; a focused review |

Each of the 18 lessons needs a short original reading and exercise. c01 lesson 1 is already complete for u01; lessons 2 and 3 are incomplete, giving 1/3 progress. c02 starts unenrolled. Courses c01, c02, c06 are free in the demo; c03–c05 can carry a Pro preview badge with no finalized price.

### 6.4 Challenges — 8 records

| ID | Type | Title | Owner | Connection |
|---|---|---|---|---|
| ch01 | Practice | Build an Accessible Habit Tracker | u03 | c01; job j01 uses the same relevant skill area |
| ch02 | Practice | Design a Paginated Events API | u04 | c02 |
| ch03 | Community | A Friendly Student Budget Screen | u02 | Design/UI |
| ch04 | Community | A Responsive Flutter Profile | u05 | c03 |
| ch05 | Practice | Clean a Messy CSV Dataset | u06 | c04 |
| ch06 | Community | Automate a Simple Deployment | u07 | c05 |
| ch07 | Hiring | Review and Improve a Signup Flow | co01/u11 | Job j01; current deadline in 14 days |
| ch08 | Hiring | Build a Small Inventory Endpoint | co03 | Job j03; seeded closed state |

Seed 12 submissions spread over these challenges; at least ch01 has three distinct implementations. Reserve u01's ch01 as started but not submitted so the presenter can complete it. Every submission references an existing author and challenge.

### 6.5 Questions — 6 records

1. q01 / u01: “Why does my counter still log the old value?” — React state snapshot, initially unanswered; code and expected/actual behavior. u03 can answer during demo.
2. q02 / u10: “Why does an API request fail while Postman works?” — includes browser context and exact sample response; one seed answer asks for server CORS configuration; no unsupported universal fix.
3. q03 / u06: “Why do Python function calls share the same list?” — mutable default argument example; accepted seed answer uses `None` and a new list.
4. q04 / u05: “Why is this Flutter row overflowing?” — fixed width/content example, two answer approaches.
5. q05 / u08: “How should keyboard focus move after a dialog closes?” — one accepted answer linked to the question author's scenario.
6. q06 / u04: “Why is this query returning duplicate rows?” — a small pair of example tables and join, unanswered.

Provide 10 seed answers in total, plus comments. All code samples must be accurate enough to explain and visibly selectable. Preserve the distinction between technical question content and general developer discussion.

### 6.6 Feed — 24 initial posts

Distribution: 4 progress, 4 project showcases, 4 question announcements, 3 course announcements, 3 challenge announcements, 2 job announcements, 2 developer memes, 1 technical news discussion, 1 career-advice post.

Content examples:

- u01: “Day 12: My habit tracker now works with the keyboard. Next: fix the filter state.” Link ch01 and c01.
- u02: “I reduced this budget screen from five competing numbers to one next action.” Link p02.
- u04: “An error response should help the client decide what to do next.” Link c02.
- u06: “The dataset looked clean until I checked whitespace and empty strings.” Link c04.
- u08: “Three keyboard checks I run before calling a form finished.” Link c06.
- u09: “My puzzle game now remembers progress between levels.” Link p06.
- Meme: original text card “One tiny CSS change / Six layouts later.” Developer humor without insulting groups of people.

Use a clearly fictional, non-time-sensitive news discussion topic rather than inventing a product release. Seed 24 comments across records, not the same paragraph repeated on every post.

### 6.7 Projects — 8 records

- p01 u01: QR menu interface — a fictional practice project, not the user's real QR Dine system.
- p02 u02: Student budget UI.
- p03 u04: Community events API.
- p04 u05: Mobile reading tracker.
- p05 u06: CSV cleaning notebook.
- p06 u09: Browser puzzle game.
- p07 u07: Deployment template.
- p08 u08: Accessible form audit.

Use internal original demo previews where possible. External repository/live URLs must be valid known links or visibly marked unavailable sample fields. Never fabricate a GitHub repository and present it as working.

### 6.8 Jobs — 6 records

| ID | Role | Company | Mode |
|---|---|---|---|
| j01 | Junior Frontend Developer | co01 | Remote |
| j02 | Flutter Developer | co01 | Hybrid |
| j03 | Backend Developer | co03 | Remote |
| j04 | UI/UX Designer | co02 | Hybrid |
| j05 | Junior Data Analyst | co03 | Remote |
| j06 | Game UI Developer | co02 | Remote |

Seed 8 applications from community users, but none from u01 to j01. When the presenter applies, the new application appears in co01's Employer Studio. Seed 4 recruiter shortlists and 3 conversations, all linked to real seed records.

### 6.9 Relationships and notifications

u01 follows u03, u04, u06, and u08. u01 is connected with u02 and u04. u10 has sent an incoming connection request to u01. u01 has an outgoing request to u05. Seed 8 notifications with valid targets; at least 3 unread. Saved items start with one course, one challenge, and one project.

## 7. Minimal data model for coherent behavior

Use stable IDs and normalized collections, with a small selector layer to compute visible joins and counts.

| Record | Essential relationships |
|---|---|
| User | ID, handle, profile, roles, skills |
| Follow / Connection | actor/target; connection sender/recipient/status |
| Post | authorId, type, body, tags, optional targetType + targetId, originalPostId |
| Comment / Reaction / SavedItem | actorId, targetType + targetId |
| Question / Answer | question author; answers reference question; question has acceptedAnswerId |
| Course / Lesson / Enrollment | author, ordered lesson IDs, learner, completedLessonIds, notes |
| Challenge / Submission | creator/company/job; challengeId, authorId, URLs, reflection |
| Project | authorId, optional sourceSubmissionId, selected portfolio status |
| Company / Job / Application | company, recruiter membership, job, applicant, selected project, status |
| Notification / Conversation / Message | recipient, valid target, participant IDs, sender |

Store generated local IDs distinctly from seed IDs. Use a schema version so future seed updates can migrate or reset without corrupting references. Persist only demo state locally; provide Reset demo. No real personal data is required.

## 8. Build approach for speed

### Reuse and structure

The existing small Site has static HTML and basic feed/calculator logic. Inspect it before implementation. Keep the Site identity and publication audience. The old two-tab screen does not define the new product architecture. Preserve any prior financial artifact separately and link it as an earlier draft only if necessary; do not insert unapproved financial claims into the new product flow.

Prefer a small static application with modular JavaScript and CSS if that matches the retained source. If a framework is already present in the actual checkout, reuse it. A framework rewrite is not necessary for this presentation. A suggested structure is app shell/router, data/seed, state/selectors, reusable cards/dialogs, and view modules.

Build reusable components: Avatar, AuthorHeader, ContentCard, TopicTag, StatusBadge, ActionBar, Composer, FilterBar, DetailHeader, EmptyState, Dialog, Toast, ProfileSummary, LessonOutline, ApplicantRow. Consistent components provide the social feel across all modules.

### Implementation passes — all before final delivery

1. **Foundation:** shell, routing, shared state, seed records, account selector, search, original artwork, responsive layout.
2. **Social and portfolio:** feed types, comments/reposts, follow/connect, questions/answers, project/profile pages.
3. **Learning:** catalog, lesson content, completion, challenges, submissions, portfolio linkage, creator tools.
4. **Career:** company/job pages, local application flow, employer challenge editor, applicants/shortlist/messages.
5. **Presentation finish:** notifications/saved, coherent counts, empty/error states, reset, five-minute story, responsive checks, publish.

No pass removes a confirmed feature. Order exists to avoid duplicating state and cards.

### Boundary of interactivity

Must actually work in the browser: filtering, navigation, state toggles, forms, record creation, edit/delete own content, local submission/enrollment/application, progress, shortlist, and role switching.

Represent clearly as preview: payment, employment outcome, certificates, recommendation ranking, AI/code evaluation, message delivery outside the demo, identity verification. Do not create fake success claims for those actions.

## 9. Five-minute presentation script

| Time | Action | Point demonstrated |
|---|---|---|
| 0:00–0:35 | Open mixed feed; switch Learning/Community | Familiar social browsing with developer content and fun |
| 0:35–1:10 | Open q01; switch to creator and answer; return as asker and accept | Community helps unblock real learning |
| 1:10–1:55 | Open c01; complete lesson 2; show updated My Learning | Browsing connects to structured progress |
| 1:55–2:45 | Open ch01; submit a sample solution; add to portfolio | Learning becomes visible work |
| 2:45–3:20 | View profile and new project; accept a connection request | Public proof and professional relationships |
| 3:20–4:10 | Open j01; apply with selected project; switch to employer and shortlist | Career journey uses the same developer evidence |
| 4:10–4:40 | Open Creator Studio and Employer hiring challenge editor | Both creators and businesses can contribute |
| 4:40–5:00 | Open qualitative plan comparison | Introduce who might pay; detailed finance follows separately |

Provide ready-to-paste short form samples in presenter notes; do not depend on live typing long code or downloading external content during the presentation.

## 10. Completion criteria and focused verification

The builder should run one complete developer → creator → employer journey and targeted state checks. Do not stop at rendering a dashboard.

- All listed views open through visible navigation or related records; no inaccessible orphan module.
- Every seed ID reference resolves; no card links to a missing person, course, company, or challenge.
- Feed shows several disciplines and content types, including original developer humor.
- Create a post and find it in both feed and profile; edit/delete behaves consistently.
- Save toggles without duplicates; Following reflects actual follows.
- Connection remains pending until accepted; accepted answer is owner-controlled.
- Complete a lesson twice: progress counts it once and survives refresh.
- Submit ch01: submission appears in challenge and portfolio after the explicit Add to portfolio action.
- Apply to j01: employer sees exactly one new application; shortlist updates applicant-facing state.
- Invalid/blank required fields show clear errors; zero search results and missing routes have useful states.
- Dialog focus, code overflow, mobile navigation, and 390 px/768 px/1440 px layouts are checked.
- Reset restores the seed story; shared browser data is not sent to real users or services.
- No external URL falsely represents a fabricated repository, course, partnership, job, or payment.
- No stale break-even claim appears as the approved business case.

## 11. Financial handoff for the later presentation update

Record the product assumptions now; choose and justify the amounts later.

| Product surface | Possible revenue | Cost drivers to research |
|---|---|---|
| Free social/Q&A | Supports audience; no direct assumed sale | Active users, posts, media, traffic, moderation/support |
| Pro learning | Subscription | Premium content, support, storage, optional paid services |
| Creator courses | Platform commission on eligible sales | Creator payouts, payment processing, media delivery, refunds |
| Employer account | Subscription or listing fees | Recruiter support, search usage, company moderation |
| Hiring challenge | Listing/sponsorship fee | Brief review, moderation, support; code execution only if added |
| Affiliate links | Valid-sale commission | Content/placement effort; attribution and approval assumptions |
| Sponsored content | Campaign fee | Sales effort, production, moderation, reporting |

Later financial analysis must separate one-time development cost, recurring fixed cost, activity-driven variable cost, and costs that increase in steps. Count active free users separately from paying customers. Distinguish course sales value from DevCraft's commission to avoid counting creator payouts twice. Keep initial build recovery separate from monthly operating break-even.

Prepare conservative/base/optimistic cases with explicit plan/customer mix. For each stream: volume × unit revenue − directly attributable variable cost = contribution. Total contribution minus operating overhead gives operating result. Include a no-recruiter case and a higher-free-user case. Affiliate and sponsorship are scenario revenues until supported by an explicit assumption; no partnership is implied.

The future presentation website should explain: problem/concept, user journey, feature map, B2C/B2B/creator/affiliate flows, costs with reasons, revenue assumptions, unit contribution, margins, operating profit, break-even sensitivity, and limitations. The current task stops at the build specification.

## 12. Builder handoff

Use this document as the complete brief when the user says to build. Deliver the whole connected presentation prototype in one implementation cycle. Make routine choices without reopening scope discussions. Reuse the existing Site identity, preserve its audience, and publish only during the implementation task. Retain all confirmed feature areas; simplify infrastructure and seed-data mechanics to save time. Final handoff should include the live link, a short demo path, tested behavior, and a precise statement that interactions are local presentation simulations.

## Sources

Research reviewed 24 September 2026. Official product/help sources; capabilities may evolve. Sources support reference behavior, while DevCraft designs and data are proposals.

- **S1:** Frontend Mentor, [How to Submit Solutions](https://www.frontendmentor.io/guides/how-to-submit-solutions).
- **S2:** Frontend Mentor, [Giving Quality Feedback](https://www.frontendmentor.io/guides/giving-quality-feedback).
- **S3:** Frontend Mentor, [Mark Feedback as Helpful](https://www.frontendmentor.io/guides/mark-feedback-helpful).
- **S4:** Frontend Mentor, [Hiring platform](https://hiring.frontendmentor.io/).
- **S5:** Meta, [Introducing Home and Feeds on Facebook](https://about.fb.com/news/2022/07/home-and-feeds-on-facebook/). Historical design rationale, not exact current navigation placement.
- **S6:** Meta, [Making it Easier to Create, Discover, and Share Content on Facebook](https://about.fb.com/news/2025/12/making-it-easier-to-create-discover-and-share-content-on-facebook/).
- **S7:** Instagram Help, [Save posts](https://help.instagram.com/1744643532522513/). Search-index evidence; direct page retrieval was unavailable.
- **S8:** Meta, [New Instagram Features to Help You Connect](https://about.fb.com/news/2025/08/new-instagram-features-help-you-connect/).
- **S9:** LinkedIn Help, [Featured samples of work](https://www.linkedin.com/help/linkedin/answer/a550399/manage-featured-samples-of-your-work-on-your-linkedin-profile).
- **S10:** LinkedIn Help, [Follow and connect](https://www.linkedin.com/help/linkedin/answer/a6266298).
- **S11:** LinkedIn Help, [Feed overview](https://www.linkedin.com/help/linkedin/answer/a523360).
- **S12:** Stack Overflow Help, [Minimal reproducible example](https://stackoverflow.com/help/minimal-reproducible-example).
- **S13:** Stack Overflow Help, [Tags](https://stackoverflow.com/help/tagging).
- **S14:** Stack Overflow Help, [Accepted answer](https://stackoverflow.com/help/accepted-answer).
- **S15:** Udemy Support, [Course player](https://support.udemy.com/hc/en-us/articles/229603648-How-to-Use-The-Course-Player-and-Start-Your-Course).
- **S16:** Udemy Support, [Notes on a browser](https://support.udemy.com/hc/en-us/articles/360038492834-How-to-Create-And-Use-Notes-on-a-Browser).
- **S17:** DEV Help, [Customizing your feed](https://dev.to/help/customizing-your-feed).
- **S18:** Udemy Partner Support, [Affiliate commission](https://partnersupport.udemy.com/hc/en-us/articles/360049412813-What-is-the-Commission). A potential model reference, not a DevCraft partnership or guaranteed income.

