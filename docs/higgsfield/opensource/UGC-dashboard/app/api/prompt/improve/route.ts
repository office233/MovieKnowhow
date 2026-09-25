import OpenAI from "openai";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const inputSchema = z.object({ prompt: z.string().trim().min(12).max(1200) });

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: "Add OPENAI_API_KEY to enable prompt improvement." }, { status: 503 });
  }

  const parsed = inputSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Write a little more creative direction before improving it." }, { status: 400 });
  }

  try {
    // Pin the public OpenAI endpoint so unrelated machine-wide Azure settings
    // cannot silently reroute this product feature.
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, baseURL: "https://api.openai.com/v1" });
    const response = await client.responses.create({
      model: process.env.OPENAI_PROMPT_MODEL || "gpt-5.6-sol",
      reasoning: { effort: "none" },
      max_output_tokens: 220,
      store: false,
      instructions: "Rewrite the user's rough direction into one production-ready prompt for a 15-second vertical UGC product video. Preserve the user's intent and factual claims. Add a clear opening hook, natural creator behavior, product demonstration, camera direction, and a concise call to action. Do not invent product features. Return only the improved prompt as one compact paragraph, with no label, commentary, or quotation marks.",
      input: parsed.data.prompt,
    });
    const improvedPrompt = response.output_text.trim();
    if (!improvedPrompt) throw new Error("The model returned an empty prompt.");
    return NextResponse.json({ prompt: improvedPrompt });
  } catch (error) {
    console.error("Prompt improvement failed", error);
    return NextResponse.json({ error: "Prompt improvement is temporarily unavailable. Your original prompt is unchanged." }, { status: 502 });
  }
}
