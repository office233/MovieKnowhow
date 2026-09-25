# Build an AI Ad Agency with Claude + Higgsfield

- **URL:** https://higgsfield.ai/academy/courses/claude-higgsfield-ai-ad-agency
- **Taught by:** Higgsfield Creative
- **Level:** Beginner · **Modules:** 12 · **Duration:** 22 min
- **Description (paraphrased):** research a niche, shape an offer, build a varied ad portfolio and test a small client pipeline with Claude + Higgsfield MCP. Example niche throughout: roofing companies.
- **Skills:** pick an evidence-backed niche and turn it into a testable offer; connect Claude to Higgsfield and build a portfolio whose ads serve distinct campaign roles; build an intake-to-delivery workflow and test prospects without confusing observations with financial assumptions.
- **Note:** the course pages consistently separate the prompt the presenter used on video ("keypoint" prompts) from an improved, safer "Copy this asset" version written by the course editors. Both are reproduced verbatim.

---

## Lesson 1 — Find an underserved niche
URL: https://higgsfield.ai/academy/courses/claude-higgsfield-ai-ad-agency/find-an-underserved-niche
- Look for businesses that already spend on ads but have poor digital creative: budget exists + room for a better offer. Popularity with sellers is not a reason.
- Treat Claude's niche list as a starting point; demand rankings with reasons and checkable sources. Video lands on **roofing** (claimed ~6% annual growth, unsourced — verify).
- Record concrete evidence: dated ad asset + visible weakness, not just "bad creative".

Presenter's prompt (video):
```text
Act as a B2B positioning expert. Which service niches spend big money on traditional ads but have the lowest digital ad quality?
```
Improved version:
```text
Act as a B2B positioning expert. Which service niches spend heavily on traditional advertising but have the lowest digital-ad quality? Rank the opportunities by market growth, ability to pay, urgency, and visible creative gap. Cite the evidence behind each score.
```
Niche thesis template:
```text
We will test [niche] because [evidence of spend], [specific creative gap], and [urgent buyer outcome] are visible.
```

## Lesson 2 — Shape the offer
URL: https://higgsfield.ai/academy/courses/claude-higgsfield-ai-ad-agency/shape-the-offer
- Sell outcome, not deliverable: "five AI video ads" → "a small ad campaign designed to bring in roofing inquiries when the crew has room for more work". Use "designed to", not "will bring".
- Five decisions: **Result**, **Problem** (costly, recognized), **First-step risk** (small test), **Delivery** (realistic time + scope), **Next action** (one CTA).
- Audit the draft: underline the phrase doing each job. Video's roofing offer: new customers, idle crew time, pay after delivery, fast discounted test, specific next action.
- Video figures ($1,000/video; 24-hour "$500 instead of $5,000" test) are examples, not validated prices. No fake scarcity, testimonials or guarantees.
```text
Turn my service into a specific offer for [niche]. Sell the business result, name the biggest costly problem, lower the risk of the first step, add a believable delivery time and a first-step bonus, then end with one explicit call to action. Keep every promise measurable and do not invent proof, guarantees, or client results.
```

## Lesson 3 — Connect Claude and Higgsfield
URL: https://higgsfield.ai/academy/courses/claude-higgsfield-ai-ad-agency/connect-claude-and-higgsfield
- Copy the connector URL from the official Higgsfield MCP setup page; in Claude **Customize → Connectors → add custom connector** "Higgsfield", paste, connect. Use the current page, not old screenshots.
- Review auth/permission screens, enable only needed tools, keep consequential actions behind approval, no client data and no "always allow" during the first test.
- **Prove the round trip:** one short test generation must return something playable (file, result URL, or generation ID resolving to media). A prompt or "done" message without an asset = not connected. Save the test ID/URL.

## Lesson 4 — Generate a varied portfolio
URL: https://higgsfield.ai/academy/courses/claude-higgsfield-ai-ad-agency/generate-a-varied-portfolio
- Decide creative roles first: before/after, funny, testimonial-style (→ clearly labeled fictional scenario), problem-led, premium brand. Rule: strong hook in first 3 s, clear CTA at the end.
- Editorial review: one synthetic speaker claimed a specific $12,000 loss — unsubstantiated; label as fiction/remove specifics (FTC testimonial guidance).
- Coverage check: before/after = visible transformation; problem-led = specific cost; fictional scenario = relatable, labeled; funny = memorable but on-brand; premium = supports higher-end position. If two finalists share a role, keep the clearer one and regenerate the missing role.

Presenter's prompt (video):
```text
Make me video ads for a roofing business — each in a completely different style: cinematic before/after, funny, customer-testimonial, problem-focused, and premium brand vibe. You already know our audience and our offer — use them. Every ad needs a strong hook in the first 3 seconds and a clear call to action at the end.
```
Improved version:
```text
Make five video ads for [niche], each in a completely different style: cinematic before-and-after, funny, a clearly labeled fictional customer scenario, problem-focused, and premium brand. Use the audience and offer already defined. Give every ad a strong hook in the first three seconds and a clear call to action at the end. Do not fabricate a testimonial or imply that an actor or AI avatar is a real customer.
```

## Lesson 5 — Design the client intake
URL: https://higgsfield.ai/academy/courses/claude-higgsfield-ai-ad-agency/design-the-client-intake
- Build intake backwards from the finished ad: which facts change copy, visuals, offer or delivery destination?
- Never let the model "figure it out" for phone numbers, prices, promotions, eligibility, logos. Safe rule: if a missing fact would appear in the ad or change delivery, stop and ask.
- Record for each fact **source** (client / dated public URL / stated inference / missing) and **approval** (none / client / named approver). Table: identity & location → client or dated URL, provisional; phone/email/booking, price/promo/deadline, eligibility/disclaimers, logo/brand → stop and ask; audience/angle → may be an inference marked as assumption.
```text
Act as the operations manager for this ad service. Collect only the client facts needed to personalize and deliver the campaign. For every fact, record two separate fields: source (client-supplied, public URL plus observation date, inference plus its stated basis, or missing) and approval (unconfirmed, client-confirmed, approver-approved, or flagged assumption). If a claim-critical fact is missing — a contact detail, price, promotion, deadline, eligibility rule, disclaimer, or unapproved brand asset — stop and ask the client for it. Never invent a missing fact, and never treat public provenance or inference as client approval. Output the structured profile before any generation runs.
```

## Lesson 6 — Rewrite cold outreach
URL: https://higgsfield.ai/academy/courses/claude-higgsfield-ai-ad-agency/rewrite-cold-outreach
- Expert (Brock, roofing) fixes: subject = prospect's company + city (never your agency); open with one verifiable observation about their current advertising; one relevant portfolio link; low-friction reply "reply interested for one free sample" instead of a strategy call.
- Compliance: jurisdiction rules, sender identity, ad disclosure, postal address, opt-out, suppression list (US: FTC CAN-SPAM guide). A named human approves each message in the first batch.
```text
Draft a short B2B outreach email to [company] in [city] under the compliance rules approved for [recipient jurisdiction]. Subject: their company name and city, never my agency. Open with one truthful, verifiable observation about their current advertising. Add exactly one relevant portfolio link as proof. Offer one free sample ad, and close with the permitted low-friction reply — reply interested for one free sample. Use accurate sender identity and routing, include the approved ad disclosure, postal address, and opt-out. Do not invent familiarity, results, urgency, consent, or company facts; leave any field I have not verified blank for me to fill.
```

## Lesson 7 — Build the back office
URL: https://higgsfield.ai/academy/courses/claude-higgsfield-ai-ad-agency/build-the-back-office
- Make hidden manual handoffs explicit: inbox → client profile → generation → checking → delivery.
- Create a **Claude Project** whose instructions hold the niche, offer, client-profile fields, creative rules and approval gates; test by asking a fresh chat to summarize who it's for, required inputs, what it may prepare, what needs approval.
- Public facts stay provisional (URL + observation date + unconfirmed). Connect **Gmail connector** with narrow permissions; sending stays behind approval. Test with a fake "interested" reply.
```text
When a prospect replies with the agreed intent signal, draft the intake response for approval. Add public business identity and location only as provisional discovery fields, with source URL, observation date, and unconfirmed status. Do not use them as approved claims or destinations until the client or named approver confirms them. Treat price, services, promotions, contact details, legal claims, and brand approvals as client-supplied facts. Prepare the free-sample request only when every claim-critical field is confirmed.
```

## Lesson 8 — Turn delivery into a subscription
URL: https://higgsfield.ai/academy/courses/claude-higgsfield-ai-ad-agency/turn-delivery-into-a-subscription
- Weekly fresh ads as a recurring service; define **cadence, volume, creative memory** (hooks/angles used), **approval**, **learning signal**.
- Video converts a $500 one-off into ~$2,000/month (example figures only); price from real costs (generation, review time, fees, refunds, reviewer capacity).
Promise template:
```text
[quantity] new variations every [cadence], informed by [learning signal], reviewed by [approver], for [price and term].
```
Presenter's Monday prompt (video):
```text
It's Monday. Go through every client profile and generate 3 fresh ad variations for each. Prepare a delivery email for every client.
```
Improved version (active clients only, avoid used hooks):
```text
It is Monday. Go through every active client profile and generate three fresh ad variations for each. Avoid hooks and angles already used, then prepare a delivery email for every client.
```

## Lesson 9 — Add a quality-control gate
URL: https://higgsfield.ai/academy/courses/claude-higgsfield-ai-ad-agency/add-a-quality-control-gate
- At scale (video imagines 50 clients × 5 videos/month) people miss wrong phone numbers/unsupported claims. Automated check compares each ad to the approved profile and prepares a review packet — never approves or sends.
- Check: identity, service area, contacts, offer, claims, disclaimers, brand rules, format, CTA.
- Test both outcomes with a sample profile (Northstar Roofing, Denver, northstar.example, 555-0104): a matching ad → READY_FOR_HUMAN_REVIEW; a mutated ad (name, city, URL, "zero leaks forever") → each conflict quoted and routed back. Silent repair/sending = failed test.
```text
Audit this final ad against the attached approved client profile. Return READY_FOR_HUMAN_REVIEW only if company identity, service area, contact details, offer, claims, disclaimers, brand rules, technical format, and call to action all match. For every failure, quote the exact frame or line, name the conflicting source field, and route it for correction. Never repair, approve, or send an ad silently. Every external delivery requires the named human approver.
```

## Lesson 10 — Build the sales website
URL: https://higgsfield.ai/academy/courses/claude-higgsfield-ai-ad-agency/build-the-sales-website
- Five blocks answering five buyer questions, same free-sample CTA after each: **Hero** (what/for whom/outcome/offer + honest reason for intro price), **Work** (playable portfolio videos), **Process** (what buyer supplies), **Benefits** (evidence-backed), **FAQ** (real objections).
- The generated page in the video broke its own brief (CTA changed to "GET A FREE ROOF CHECK"; synthetic clip labeled "CUSTOMER TESTIMONIAL") — fix before use.
- Funnel test: play every video, click every CTA, one marked test submission appears once, admin route blocked for unauthenticated users, phone width, invalid data rejected without leaking fields.
```text
Build a responsive five-block sales page for [offer], aimed at [niche]. Hero: state what we do, who it's for, and the outcome, with the offer and an honest reason for the introductory price (e.g. a launch price for the first clients). Work: embed the portfolio videos so they play on the page. Process: explain the few quick questions the buyer answers and what the system handles. Benefits: include only verified benefits; do not claim there are no extra costs unless the offer truly has none. FAQ: answer the real objections this buyer raises. Repeat one free-sample call to action after every block. Send every form submission to a protected admin view for human review, and validate all input.
```

## Lesson 11 — Launch to a qualified list
URL: https://higgsfield.ai/academy/courses/claude-higgsfield-ai-ad-agency/launch-to-a-qualified-list
- Expert rejects blasting 5,000 roofers; start with **10–15** companies with a current, visible reason (running paid ads, old video, heavy spend with weak creative). Record asset URL, date, exact gap. Evidence-based opening beats mail-merge.
- Metrics (define before sending): delivery rate = delivered/sent; qualified reply rate = qualified replies/delivered; sample rate = sample-ready profiles/qualified replies; paid conversion = paid clients/sample-ready profiles. Keep a launch log (prospect, evidence, delivery, reply, sample, payment, direct cost, review time).
```text
Find 10 to 15 [niche] companies in [market] with a clear, current, publicly evidenced reason to test better video ads — for example, actively running ads with outdated or visibly weak video creative. For each company, return the evidence URL, the observation date, the exact creative gap, and one truthful, evidence-specific opening line. Do not infer campaign performance without performance data. Exclude any company you cannot verify from a public source.
```

## Lesson 12 — Pressure-test the economics
URL: https://higgsfield.ai/academy/courses/claude-higgsfield-ai-ad-agency/pressure-test-the-economics
- Video math: 5 clients × $2,000/mo = $10k; 10 clients = $20k — arithmetic correct, assumptions unproven.
- Mark metrics observed only when real data exists (payment received, costs logged, renewals for churn). A 10–15 company batch can't prove retention.
- Decision rule: **Go** (paid conversion + cost/margin/review time within limits), **Revise** (some demand, one threshold failed → change ONE variable: niche, evidence, offer, message, price, delivery), **Stop** (no qualified demand / bad economics).
```text
Build a one-month validation model for this service. Keep assumptions in a separate section from observed data. Track qualified outreach, delivery rate, reply rate, sample requests, paid conversions, recurring conversions, churn, revenue, direct costs, labor hours, refunds, and gross margin. Run conservative, base, and optimistic cases. Present nothing as guaranteed.
```
