# Paid Ads bundle (/gpt-astra/bundles/paid-ads-bundle)

Source: https://higgsfield.ai/gpt-astra/bundles/paid-ads-bundle (canonical /mcp/bundles/paid-ads-bundle). Already documented: [../../mcp/bundle-paid-ads-bundle.md](../../mcp/bundle-paid-ads-bundle.md).

- 8 workflows: Campaign Analyst (`/marketing-campaign-manager`), Ad Strategist (`/marketing-research-to-ads`), Customer Voice Ads (`/marketing-feedback-to-ads`), Headline Multiplier (`/marketing-headline-variants`), Ad Resizer (`/marketing-resize-ads`), Ad Localizer (`/marketing-localize-ads`), Ad Recreator (`/marketing-adapt-video`), Hook Multiplier (`/marketing-hook-variants`).
- Umbrella command `/marketing` lets the agent choose the workflow from your product, audience, goals and assets.
- Suggested order for a campaign test: analyse last 14 days -> research/customer-voice statics -> headline and hook variants -> resize (1:1, 4:5, 9:16) -> localise.

## Prompts

0 new verbatim prompt(s) below; 17 more are already captured elsewhere in this knowledge base and are linked, not repeated.

### Already captured elsewhere (linked, not repeated)

- /marketing Help me plan, create, or improve my...: "@Higgsfield /marketing Help me plan, create, or improve my ads. Choose a workflow based..." -> [site/mcp/bundle-paid-ads-bundle.md](../../mcp/bundle-paid-ads-bundle.md)
- Review the supplied 14 days of campaign data....: "Review the supplied 14 days of campaign data. Group recommendations into scale, pause, and..." -> [site/mcp/performance-marketing-operator.md](../../mcp/performance-marketing-operator.md)
- /marketing-campaign-manager Review 14 days of campaign data and...: "/marketing-campaign-manager Review 14 days of campaign data and recommend what to scale, pause, and..." -> [site/mcp/mcp-landing.md](../../mcp/mcp-landing.md)
- Create five static Meta ad concepts for the...: "Create five static Meta ad concepts for the supplied product. Give each a distinct..." -> [site/mcp/link-to-ads.md](../../mcp/link-to-ads.md)
- /marketing-research-to-ads Research this product and its competitors, then...: "/marketing-research-to-ads Research this product and its competitors, then create 5 static Meta ads with..." -> [site/mcp/link-to-ads.md](../../mcp/link-to-ads.md)
- Create five static Meta ad concepts from the...: "Create five static Meta ad concepts from the supplied customer reviews and product evidence...." -> [site/mcp/voc-research-ad.md](../../mcp/voc-research-ad.md)
- /marketing-feedback-to-ads Turn my customer reviews and product evidence...: "/marketing-feedback-to-ads Turn my customer reviews and product evidence into 5 static Meta ads with..." -> [site/mcp/mcp-landing.md](../../mcp/mcp-landing.md)
- Create ten versions of the supplied ad, changing...: "Create ten versions of the supplied ad, changing only the headline. Explore different benefit,..." -> [site/mcp/headlines-ab.md](../../mcp/headlines-ab.md)
- /marketing-headline-variants Create 10 versions of this ad, changing...: "/marketing-headline-variants Create 10 versions of this ad, changing only the headline. Keep everything else..." -> [site/mcp/mcp-landing.md](../../mcp/mcp-landing.md)
- Adapt the supplied static ad into square 1:1,...: "Adapt the supplied static ad into square 1:1, portrait 4:5, and vertical 9:16 layouts...." -> [site/mcp/aspect-ratio-formatter.md](../../mcp/aspect-ratio-formatter.md)
- /marketing-resize-ads Adapt this static ad for 1:1, 4:5,...: "/marketing-resize-ads Adapt this static ad for 1:1, 4:5, and 9:16 placements, keeping the copy..." -> [site/mcp/mcp-landing.md](../../mcp/mcp-landing.md)
- Create Spanish and German versions of the supplied...: "Create Spanish and German versions of the supplied static ad. Use natural, market-appropriate wording,..." -> [site/mcp/localizations.md](../../mcp/localizations.md)
- /marketing-localize-ads Localize these static ads into Spanish and...: "/marketing-localize-ads Localize these static ads into Spanish and German while preserving the offer and..." -> [site/mcp/localizations.md](../../mcp/localizations.md)
- Create an original product ad inspired by the...: "Create an original product ad inspired by the reference video’s persuasion structure. Build a..." -> [site/mcp/ad-adaptation.md](../../mcp/ad-adaptation.md)
- /marketing-adapt-video Create an original ad for my product...: "/marketing-adapt-video Create an original ad for my product using this reference video’s persuasion structure...." -> [site/mcp/ad-adaptation.md](../../mcp/ad-adaptation.md)
- Create three complete edits of the reference video....: "Create three complete edits of the reference video. Give each version a distinct opening..." -> [site/mcp/ad-hooks.md](../../mcp/ad-hooks.md)
- /marketing-hook-variants Create 3 complete versions of this video...: "/marketing-hook-variants Create 3 complete versions of this video with new opening hooks. Keep the..." -> [site/mcp/ad-hooks.md](../../mcp/ad-hooks.md)
