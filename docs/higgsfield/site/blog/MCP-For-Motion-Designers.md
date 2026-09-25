# Claude Fable 5 + Higgsfield MCP = $38,400/Month (motion design side business)

Source: https://higgsfield.ai/blog/MCP-For-Motion-Designers  
Higgsfield, Jun 10, 2026  
Prompts extracted: 8

Business playbook: sell commercial motion-design promo videos made by **Claude (Fable 5) + Higgsfield MCP**, with Claude also finding clients and sending outreach.

Setup:
1. Claude -> Settings -> Connectors -> Add custom connector "Higgsfield", URL `https://higgsfield.ai/mcp` (other articles use `https://mcp.higgsfield.ai/mcp`).
2. Drop the **Motion Design Skill** (SKILL_MOTION.md, download on page) into the chat — it guides the full creative process.

Portfolio (3 niches: Tech, Beverage, Education):
- Prompt "Make a motion design video." -> skill produces a storyboard layout with stylistically locked shots -> review -> "Approve and generate." -> Higgsfield renders with **Seedance 2.0**.
- Batch the other two niches in one master prompt (Hyper-Motion iced-tea ad + 2D paper-style explainer). Claimed: 3-video portfolio in ~5 minutes.

Client finding: upload **Client Finder Skill** (client-finder.md); prompts target Google Maps SMBs (100 emails), Kickstarter campaigns at 10–50% funded (50 emails), Amazon/Shopify sellers using only static photos (50). Then connect Gmail connector and send personalized proposals (claimed < 2 min for 200 emails). Pitch leans on the stat "63% of people prefer a short product video before buying".
Caveat: scraping/mass-emailing must respect platform ToS and anti-spam law (not addressed in article).

## Prompts (verbatim)

### P1. Start a motion design video
- Use-case: Product ad | Model: Claude + Higgsfield MCP (Motion Design Skill) -> Seedance 2.0 | Settings: starts storyboard; then approve

```text
Make a motion design video.
```

### P2. Approve storyboard
- Use-case: Product ad | Model: Claude + Higgsfield MCP | Settings: after reviewing storyboard

```text
Approve and generate.
```

### P3. Master prompt: Beverage + Education motion designs
- Use-case: Product ad | Model: Claude + Higgsfield MCP -> Seedance 2.0 | Settings: batch 2 niche videos

```text
Create motion designs for Beverage and Education niches. Use Hyper-Motion style for a 'Slake' iced-tea ad, and a 2D paper style for an educational explainer on the history of pizza. Make all creative decisions yourself.
```

### P4. Lead source 1: Google Maps SMBs
- Use-case: Other | Model: Claude + Client Finder Skill | Settings: lead generation

```text
Analyze Google Maps for Small & Medium Businesses, and send me 100 of their emails
```

### P5. Lead source 2: Kickstarter campaigns
- Use-case: Other | Model: Claude + Client Finder Skill | Settings: lead generation

```text
Scan Kickstarter for active product campaigns that have raised between 10% and 50% of their funding goal. Extract 50 campaign contact emails that need high-converting explainer videos to finish their launch."
```

### P6. Lead source 3: Amazon & Shopify sellers
- Use-case: Other | Model: Claude + Client Finder Skill | Settings: lead generation

```text
Locate established Amazon and Shopify sellers with strong product reviews who are currently relying only on basic static photos. Pull their company contact info for 50 potential clients.
```

### P7. Send outreach emails
- Use-case: Other | Model: Claude + Gmail connector | Settings: outreach

```text
Copy all 200 emails into a clean block and send out this personalized partnership proposal automatically using the Gmail connector.
```

### P8. Outreach email template
- Use-case: Other | Model: Claude + Gmail connector | Settings: email template

```text
Subject: Partnership Proposal / [Brand Name]Hello! I came across your product and it really caught my attention. My name is [X] and I'm writing to you with a collaboration proposal.I noticed a huge opportunity to increase your product’s sales through motion design (63% of people worldwide prefer watching a short video about a product before buying it). I specialize in motion design and I’d love to create a high-converting video for you.Here's my portfolio: [Link to your 3 AI-generated videos]If you're interested, I'd be happy to discuss the details.Best regards, [Your Name]
```

