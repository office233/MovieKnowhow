# UGC Genie Codebase Setup and Adaptation Guide

UGC Genie is an open-source visual AI UGC workflow dashboard. It helps creators, agencies, AI consultants, product owners, and marketing teams turn a product image and creative direction into a visible production workflow.

## Official links

- Repository: https://github.com/harshith-vaddiparthy/UGC-dashboard
- Public demo: https://ugc-dashboard-jade.vercel.app
- Author LinkedIn: https://www.linkedin.com/in/harshith-vaddiparthy/
- Author GitHub: https://github.com/harshith-vaddiparthy
- Author website: https://www.harshith.io/
- License: MIT

## Understand the two runtime modes

### Local CLI mode

Local mode performs real Higgsfield generation through an authenticated Higgsfield CLI session on the machine running Next.js.

```env
UGC_RUNTIME_MODE=local-cli
NEXT_PUBLIC_UGC_RUNTIME_MODE=local-cli
```

This mode can display the live account credit balance and execute Marketing Studio Video jobs. CLI credentials stay on the local machine and must never be committed.

### Public demo mode

Public mode is a safe shareable demonstration. It does not connect to a local Higgsfield session or consume credits.

```env
UGC_RUNTIME_MODE=public-demo
NEXT_PUBLIC_UGC_RUNTIME_MODE=public-demo
```

The server actively refuses local account access and converts workflow requests into demo behavior. Do not present this mode as live Higgsfield generation.

## Local installation

```bash
git clone https://github.com/harshith-vaddiparthy/UGC-dashboard.git
cd UGC-dashboard
pnpm install
cp .env.example .env.local
```

For real local generation:

```bash
higgsfield auth login
higgsfield account status
pnpm dev
```

Open http://localhost:3000.

## OpenAI prompt improvement

Add a standard OpenAI API key to `.env.local`:

```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_PROMPT_MODEL=gpt-5.6-sol
```

The key is read only in the server-side prompt route. Never expose it through a `NEXT_PUBLIC_` variable.

## Deploy a safe public demo to Vercel

Connect the GitHub repository in Vercel or use the CLI:

```bash
vercel --prod
```

Configure both runtime variables as `public-demo` in the Vercel project. Do not copy your local Higgsfield CLI session or configuration into Vercel.

## Verify before sharing

```bash
pnpm lint
pnpm build
```

Then verify:

1. The sidebar says **Public demo**.
2. The primary action says **Run demo**.
3. No email, credit balance, or account identity appears.
4. A demo run reaches 100% and shows the sample output.
5. Uploaded demo images are not sent to Higgsfield.

## Production architecture upgrades

Before turning the codebase into a multi-user product, replace:

| Current implementation | Production replacement |
| --- | --- |
| Local Higgsfield CLI | Direct Higgsfield API adapter |
| Local JSON run files | PostgreSQL or another transactional database |
| Local product uploads | S3, R2, or another object store |
| In-request execution | Durable queue and background workers |
| No user accounts | Authentication, organizations, and authorization |
| Shared provider budget | Per-user limits, cost tracking, and billing controls |

## Ways to adapt UGC Genie

- **Creators:** save products, hooks, avatars, and reusable creative templates.
- **Creative agencies:** add client workspaces, brand kits, approval states, and deliverable history.
- **AI consultants:** package deployment, workflow customization, and operator training as an implementation offer.
- **Product owners:** add direct APIs, billing, authentication, and a vertical-specific workflow.
- **Marketing teams:** add experiment tracking across hooks, formats, products, and performance outcomes.

The strongest commercial direction is rarely “AI video for everyone.” Pick one audience, one repeatable deliverable, and one measurable business outcome.

## Important files

- `components/workflow/workflow-studio.tsx` - main user experience and public demo state
- `components/workflow/workflow-node.tsx` - custom workflow nodes
- `lib/workflow/executor.ts` - local workflow execution
- `lib/workflow/store.ts` - local development persistence
- `lib/higgsfield/runner.ts` - current Higgsfield provider boundary
- `app/api/workflows/route.ts` - run creation and server-enforced runtime mode
- `app/api/higgsfield/account/route.ts` - live local account sync or safe public response
- `app/api/prompt/improve/route.ts` - OpenAI prompt enhancement

## License

UGC Genie is licensed under the MIT License. You may use, modify, distribute, sublicense, and sell copies under the license terms. The software is provided without warranty.

