# Higgsfield pricing, plans and credit costs (compiled Sept 2026)

The official page https://higgsfield.ai/pricing is rendered client-side and the crawl captured **no prices** from it (only the title and meta keywords "Basic Pro Ultimate Creator" from an older plan naming). Everything below is assembled from pages that do state numbers. Each figure carries its source; where sources disagree, both are shown. Treat all of it as a snapshot. Before any spend, check the cost shown on the Generate button.

## 1. Subscription plans (individual)

| Plan | Monthly | Annual (per month) | Credits / month | Notes | Source |
|---|---|---|---|---|---|
| Free | $0 | - | none (help center) / "daily free credits" (marketing FAQ copy) | limited model set; watermark | help center plans; many tool FAQs |
| Starter (older name: Basic) | $15 (one blog says $9) | - | 200 (other blogs say 120) | model catalog, **no** Unlimited set; below Plus, video specs are capped at 720p and 30 s | blog credits-vs-unlimited; blog seedance-2-0-pricing; blog ai-video-credits-explained; blog annual-unlimited |
| Plus | $49 | $39 | 1,000 | 365-day Unlimited set of 6 image models + a 7-day Nano Banana 2 (2K) window. Cheapest plan with Seedance 2.5. App Builder: 250 publishes, custom domain | blogs; app-builder-intro |
| Ultra | $129 | $99 | 3,000 | same set + 7-day windows on Nano Banana Pro and Nano Banana 2. Annual adds a Kling 3.0 window. App Builder: 500 publishes | blogs; app-builder-intro |
| Business / Team / Scale / Enterprise | contact or per seat | - | pooled per seat | shared credit pool, SSO (Scale+), priority queue, admin spend controls. Enterprise adds volume rollover credits, dedicated capacity and 10x concurrency. App Builder: 1,000 publishes per seat | help center; enterprise; app-builder-intro |

Rules of thumb (help center):
- Subscription credits **do not roll over**. Monthly plans reset at each paid renewal. Annual plans reset every 30 days, so the reset date drifts. Enterprise is the exception.
- Upgrades apply immediately, prorated. One subscription per account.
- Refund: within 7 days of the first purchase, and only if no credits were used (service fee up to 6%). Renewals cannot be refunded.
- Higher plans add **parallel generations** (concurrency). A separate Concurrency Boost add-on also exists.
- Spend order: subscription credits go first. After that, the balance with the soonest expiry is spent first (Credit Pack, promo or Auto-Refill).

## 2. Top-ups
- **Credit Packs** (one-time purchase, active subscription required): fixed sizes of 100, 200, 500, 1,000, 2,000 or 4,000 credits. Custom sizes run from 5,000 to 25,000 in steps of 1,000. Valid **90 days**. They survive cancellation (you can spend them on free-plan models). The price appears at checkout.
- **Auto-Refill** tops up when your balance falls below a threshold.
- Credits are charged on web, MCP, CLI, Canvas and Supercomputer, and cover images, videos, re-rolls and upscales. **Batch size 2-4 multiplies the cost.** Most failed generations are refunded automatically, but some models don't refund.

## 3. Unlimited access
- The Plus and Ultra plans include a 365-day Unlimited set. Access is a one-time grant, activated once. It is valid only while the subscription is active and does not restart at renewal.
- Newer flagships come as 7-day windows. For example, Seedance 2.5 is "usually 33 days" on eligible plans, according to the Seedance 2.5 pricing blog.
- **Unlimited Models Marketplace** sells 1-, 3- and 7-day passes per model, from $7 per model. Nano Banana Pro windows start at $5. A 7-day all-models pass costs $1,035. Pass bundles are priced per resolution tier and run 1 generation at a time, up to 15 s.
- The All Unlimited catalog has 20+ models, including Seedream 5.0 Pro, Nano Banana 2, Kling 3.0 Motion Control, Soul 2.0, FLUX.2 Pro, Gemini Omni Flash, Wan 2.7 and five audio models.
- Unlimited generations run in the **standard queue**, which can slow at peak times. Credit Mode runs in the priority queue. To avoid spending credits you **must switch on the Unlimited toggle** in the generation panel.
- Unlimited never applies to MCP, CLI, Canvas, Supercomputer, the API or Marketing Studio.
- Free generation pools on some plans: Soul 2.0 and Soul Cinema, 3,000-10,000 generations depending on plan. The pool is one-time and does not renew.
- Fair use: personal human use only. Automation, scripting and credential sharing can get Unlimited paused.

## 4. Credit cost per generation (Higgsfield credits)
Reference conversion used by Higgsfield's own blog: **about 20 credits per $1** (Plus-plan rate).

| Model | Settings | Credits | ~USD | Source |
|---|---|---|---|---|
| Seedance 2.5 | 720p, 8 s, audio | 52 | $2.55 (Plus) | blog seedance-2-5-pricing-2026 |
| Seedance 2.5 | 480p, 8 s | 24 | $1.18 | same |
| Seedance 2.5 | 1080p, 8 s | 72 | ~$3.60 | blog credits-vs-unlimited |
| Seedance 2.0 | 720p, 8 s (standard) | 36 | $1.76 | blog seedance-2-5-pricing (Ultra: ~83 standard clips from 3,000 credits) |
| Seedance 2.0 Fast | 720p, 8 s | ~28 (3,000 credits / ~107 clips) | - | blog seedance-2-0-pricing |
| Kling 3.0 | 1080p, 8 s | 20 | ~$1.00 | blog credits-vs-unlimited |
| Nano Banana 2 / Pro | 1K or 2K image | 2 | ~$0.10 | blog unlimited-nano-banana-2-plans |
| Image edit (separate Edit tool) | per edit | 1.5 | - | same (deducted even with Unlimited on) |
| Rule of thumb | Kling 3.0 / Wan 2.7 clips | 1,000 credits = about 40-50 clips | - | blog ai-video-credits-explained |
| Rule of thumb | images on Basic | 120 credits = about 40-50 photos | - | same |

How to spend less:
- Draft at 480p and render the final at 720p/1080p, which roughly halves the cost of each draft.
- Test with cheaper models or Fast variants, and prototype at 720p Fast before a 4K run.
- Use a trained Soul ID so recurring characters need fewer re-rolls.
- Choose the plan by volume. On Higgsfield, higher tiers mostly buy a bigger pool rather than a lower per-credit rate.

## 5. API prices (per second / per image)
From https://higgsfield.ai/higgsfield-api (pay per generation; the launch offer gives 15% off everything, up to 50% off 4 chosen models, and a $15 credit). Columns: model, list price, launch/discount price shown.

| Model | Type | List | Discounted (launch) |
|---|---|---|---|
| Seedance 2.5 | video | $0.2057/s | $0.144/s (30% off) |
| Genjutsu | video-to-video | $0.318/s | $0.159/s (50% off) |
| Kling 3.0 | video | $0.084/s | $0.0462/s (45% off) |
| MiniMax H3 | video 2K | $0.13/s | $0.091/s |
| Wan 3.0 Prime | video | $0.068/s | $0.0476/s |
| Seedance 2.0 | video 4K | $0.1407/s | $0.0985/s |
| Cinema Studio 4.0 | video | $0.2057/s | - |
| Wan 3.0 | video | $0.05/s | $0.025/s |
| LTX 2.5 Fast | video 4K | $0.09/s | - |
| LTX 2.5 Pro | video 1080p | $0.12/s | - |
| Grok Imagine Video 1.5 | video | $0.08/s | - |
| Wan 2.7 | video | $0.10/s | $0.05/s |
| Happy Horse 1.1 | video 1080p | $0.14/s | $0.098/s |
| PixVerse 6 | video | $0.115/s | $0.0978/s |
| Kling 2.6 | video | $0.07/s | $0.0385/s |
| MiniMax Hailuo 2.3 | video | $0.0467/s | $0.0117/s (75% off) |
| Kling 2.5 | video | $0.042/s | $0.0231/s |
| Marketing Studio Image | image 1K-4K | $0.0126/image | - |
| Grok Imagine 2.0 | image | $0.04/image | - |
| Soul 2 | image | $0.0032/image | - |
| Soul Standard | image | $0.0938/image | - |
| Ideogram 4.0 | image | $0.03/image | - |
| Recraft 4.1 | image | $0.035/image | - |
| Z-Image Turbo | image | $0.015/image | - |
| Kling O3, Kling O1, Wan 2.6, Happy Horse 1.0, Qwen Image 3, Product shots, Graphic ads, Marketplace design | - | price not shown on page | 45-50% launch discounts listed for the Kling/Wan ones |

Worked example: an 8 s Kling 3.0 clip costs 8 x $0.084 = $0.67 at list price, or $0.37 at the launch price. A 10 s Seedance 2.0 clip costs $1.41 at list price. The blog quotes "$1.30 for 10 seconds" for its API example.

## 6. Other money facts
- API Cashback promo (home page): 100% back on every model, up to $100,000.
- Global Film Festival: $1,000,000 prize pool, 14 winners.
- Higgsfield Earn has paid out more than $1M to 10,000+ creators.
- Creator Partnership Program: a full plan renewed every month plus extra credits for films and series.
- Higgsfield for Good: free access for non-profits, students and professors.

## Pages covered

| Page title | URL | # prompts |
|---|---|---|
| Pricing plans — Higgsfield AI Video & Image Generator | https://higgsfield.ai/pricing | 0 |

Price facts in this note also came from these in-list pages: https://higgsfield.ai/higgsfield-api, https://higgsfield.ai/app-builder-intro, https://higgsfield.ai/enterprise, https://higgsfield.ai/trust, https://higgsfield.ai/https_higgsfield.ai (home). Other figures are cross-referenced from help-center and blog pages crawled by other agents (creator-hub/help-center/credits/*, creator-hub/help-center/plans/*, blog/seedance-2-5-pricing-2026, blog/seedance-2-0-pricing-2026, blog/credits-vs-unlimited-ai-video-generation, blog/annual-unlimited-ai-video-plans, blog/unlimited-nano-banana-2-plans, blog/ai-video-credits-explained).
