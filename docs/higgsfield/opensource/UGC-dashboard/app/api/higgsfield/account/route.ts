import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const execFileAsync = promisify(execFile);
const accountSchema = z.object({
  credits: z.number().nonnegative(),
  email: z.string().email(),
  subscription_plan_type: z.string().min(1),
});

export async function GET() {
  if (process.env.UGC_RUNTIME_MODE === "public-demo") {
    return NextResponse.json(
      { mode: "public-demo", connected: false, message: "Connect the Higgsfield API to enable live credits and generation." },
      { headers: { "Cache-Control": "no-store" } },
    );
  }
  try {
    const { stdout } = await execFileAsync("higgsfield", ["account", "status", "--json"], {
      timeout: 10_000,
      maxBuffer: 64 * 1024,
    });
    const account = accountSchema.parse(JSON.parse(stdout));
    return NextResponse.json(
      { credits: account.credits, email: account.email, plan: account.subscription_plan_type, syncedAt: new Date().toISOString() },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Higgsfield account sync failed", error);
    return NextResponse.json({ error: "Could not sync Higgsfield account." }, { status: 503 });
  }
}
