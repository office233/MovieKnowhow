# The 5 Biggest AI Experts on YouTube Helped Me Build an Automated AI Business (AI ad agency)

Source: https://higgsfield.ai/blog/ai-ad-agency  
Higgsfield (2026)  
Prompts extracted: 11

Playbook for a one-person **AI video-ad agency** with Claude (research/ops) + Higgsfield MCP (ads, automation, website). MCP was temporarily unlimited for new users.
1. **Offer**: target "boring" niches with big traditional ad budgets and weak digital ads (financial advisors, home services, **roofers** — growing ~6%/yr). Liam Ottley's offer formula: sell the end result, hit the core problem, remove risk, add speed + easy entry price + bonus, clear CTA. Result: 5 ads in 24 h for $500 instead of $5,000, pay on completion, reply "SPRINT". Agencies charge from ~$1,000/video.
2. **Product/portfolio**: connect Higgsfield MCP (Claude -> Settings -> Connectors -> Add custom connector, link from higgsfield.ai/mcp); one prompt asks for 5 ads in distinct styles (cinematic before/after, funny, testimonial, problem-focused, premium), **hook in first 3 s, CTA at end**. Custom **ADMAKER skill** (upload in Claude under Customize -> Skills) asks 5 questions (business, logo, CTA, number of ads, format), researches the audience, one problem per ad with matched style. MCP/Supercomputer can run ~100 videos in parallel.
3. **Back office**: Ops-Manager system prompt in a Claude **Project** ("Agency HQ"); Gmail connector; intake rules (on "INTERESTED" reply send questions, verify company/city/phone, save client profile, generate free banner ad); weekly subscription automation ($2,000/mo for fresh ads); AI QC agent checks name/city/services/phone and risky legal claims before delivery. Cold-email fixes (Brock Mesarich): open with *their* business, add proof links, CTA = reply INTERESTED for a free banner (filters real clients).
4. **Website** (Samin Yasar's 5 blocks): hero (what/who/what they get in 5 s; explain low price), proof videos, "how it works", benefits, FAQ — same CTA button after every block. Built and deployed live via MCP with forms and admin panel.
5. **Client plan** (Jack Roberts): 10–15 well-qualified companies already spending on ads (outdated videos), one true personalized observation per email, drafts only (human review), outreach tracker.
Math: $2,000/mo x 5 clients = $10k/mo (not guaranteed). Use public info only; review every email before sending.

## Prompts (verbatim)

### P1. Find niches with weak digital ads
- Use-case: Other | Model: Claude | Settings: research

```text
Act as a B2B positioning expert. Which service niches spend big money on traditional ads but have the lowest digital ad quality?
```

### P2. Offer research and formula
- Use-case: Other | Model: Claude | Settings: research + copy

```text
research what AI ad agencies typically charge local businesses for video ads. Then, using this formula (sell the end result, hit their biggest problem, remove all risk for the client, add speed, an easy entry price, and a bonus, also Add a strong call to action at the end) write a short offer for roofing contractors. Keep it short.
```

### P3. Five roofing video ads in different styles
- Use-case: Product ad | Model: Claude + Higgsfield MCP (ADMAKER skill) | Settings: 5 ads, hook in 3 s, CTA

```text
Make me video ads for a roofing business — each in a completely different style: cinematic before/after, funny, customer-testimonial, problem-focused, and premium brand vibe. You already know our audience and our offer — use them. Every ad needs a strong hook in the first 3 seconds and a clear call to action at the end.
```

### P4. Operations Manager agent prompt
- Use-case: Other | Model: Claude Project instructions + Higgsfield MCP | Settings: operations system prompt

```text
You are the Operations Manager of our AI Ad Agency.
Your job is to onboard every client and deliver the product using these exact steps:
Step 1: Accept the client's raw brief (it might be messy, spoken, or copy-pasted).
Step 2: Check if you have these 5 details:
Company Name
Location/City
Target Audience
Visual Style preferences
Email to deliver the files.
If any details are missing, ask for them.
Step 3: Once you have all 5, convert them into optimized ad briefs.
Step 4: Send the briefs to Higgsfield and generate the 5 video ads.
Step 5: Write a professional delivery email with the client's video links.
```

### P5. Rewrite offer as cold email
- Use-case: Other | Model: Claude | Settings: cold email

```text
Rewrite my offer as a cold email to a roofer. Start with his business, not ours (company name, city, his ads). Add our 5 portfolio links as proof, keep the same deal, and end with one CTA — reply 'INTERESTED' to get a free banner ad for his business
```

### P6. Cold email template (output)
- Use-case: Other | Model: Claude | Settings: email template

```text
Subject: [Company Name] — your ads in [City] Hey [Name],[One true observation — e.g., "Your work shows up all over Google in [City], but your ads don't do it justice."]I make AI video ads for roofers. Here are five I built for the roofing niche: [link]If your crew is sitting idle and you want more clients — here's the deal: give me 24 hours, and I'll build you 5 custom video ads designed to bring in new customers. And as part of our launch deal — you get all five for $500 instead of $5,000. You don't pay until the ads are finished. Zero risk for you.Reply INTERESTED — and I'll start with a free banner ad for your business.
```

### P7. Intake machine rules
- Use-case: Other | Model: Claude Project + Gmail connector + Higgsfield | Settings: intake automation

```text
New rules:
Monitor my inbox. When a lead replies "INTERESTED", send them our intake questions: company name, city, services, pricing, best jobs, phone, email.
When the answers arrive, verify them first: does the company exist in that city? Does the phone format match? Flag anything that looks wrong.
Save the client as a permanent profile in this project.
Then generate ONE free banner ad from their profile in Higgsfield and send it to them
From now on, when I say a client's name — load their profile and work from it.
```

### P8. Monday batch: 3 fresh ads per client
- Use-case: Product ad | Model: Claude + Higgsfield MCP | Settings: weekly batch

```text
It's Monday. Go through every client profile and generate 3 fresh ad variations for each. Prepare a delivery email for every client.
```

### P9. Pre-delivery QC check
- Use-case: Other | Model: Claude QC agent | Settings: quality control

```text
Run a QC check on every video before delivery: verify client details (Name, City, Services, Phone) and flag any legal or risky claims. If it passes, send it. If it fails, move it to 'Needs Review' with a reason and notify me. Only show me failed videos
```

### P10. Launch agency website with 5-block structure
- Use-case: Other | Model: Claude + Higgsfield MCP | Settings: website build/deploy

```text
Here's advice from a top expert on how a selling website should be structured. Build and launch a website for my agency using exactly this structure, with our real offer and our portfolio videos:
Hero: answers in 5 seconds — what we do, who it's for, what they get. Headline: "Professional video ads that bring roofing companies paying customers." Below it — our offer: custom ads in 24 hours, 5 videos for $500 instead of $5,000. Explain why it's cheap ("Launch pricing for our first 50 clients") and remind they risk nothing — they pay only when it's done.
Proof: our portfolio videos right on the page + two lines about us: "We're a full-automation ad agency for roofing businesses — high-quality videos that bring in new clients."
"How does the process work?": You answer 5 quick questions — everything else we dig up ourselves. We analyze your audience, find what converts in your niche, write the selling script, and make ads that sell.
Benefits: No filming days. No extra costs. A full-cycle agency takes care of everything.
FAQ — the questions a roofer will actually ask: What kind of ads will I get? Do I need to film anything? How long will it take? How do I get in touch?
After EVERY block — one button, same CTA as our email: Get a free banner ad for your business
```

### P11. Find 10–15 qualified roofing leads and draft emails
- Use-case: Other | Model: Claude + Gmail connector | Settings: lead research, drafts only

```text
Find 10–15 roofing companies that are already spending money on ads — old outdated videos, or pushing premium services. Use public info only. For each: document why they fit, note one TRUE detail about their current ads, and personalize our cold email draft in Gmail based on it. Don't send anything — I review every draft myself. And build me an outreach tracker: company, why they fit, status, reply, intake.
```

