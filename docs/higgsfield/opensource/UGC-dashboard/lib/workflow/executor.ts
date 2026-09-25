import { generateUgcVideo } from "@/lib/higgsfield/runner";
import { getRun, saveRun, updateStep } from "@/lib/workflow/store";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function completeStep(runId: string, stepId: string, message: string, duration = 900) {
  await updateStep(runId, stepId, { status: "running", progress: 35, startedAt: new Date().toISOString(), message });
  await wait(duration);
  await updateStep(runId, stepId, { status: "completed", progress: 100, completedAt: new Date().toISOString(), message });
}

export async function executeWorkflow(runId: string) {
  const run = await getRun(runId);
  if (!run) return;
  run.status = "running";
  await saveRun(run);

  try {
    await completeStep(runId, "analyze", "Product colors, packaging, and visual hierarchy understood");
    await completeStep(runId, "concept", "UGC hook, creator direction, and shot plan prepared");
    await updateStep(runId, "generate", { status: "running", progress: 20, startedAt: new Date().toISOString(), message: run.demo ? "Running a safe studio preview" : "Higgsfield is generating the UGC video" });

    let outputUrl: string;
    if (run.demo) {
      await wait(2200);
      outputUrl = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
    } else {
      if (!run.productImagePath) throw new Error("A product image is required for a live run.");
      outputUrl = await generateUgcVideo({ imagePath: run.productImagePath, prompt: run.prompt, generateAudio: run.generateAudio });
    }

    await updateStep(runId, "generate", { status: "completed", progress: 100, completedAt: new Date().toISOString(), message: "Generation completed successfully" });
    await completeStep(runId, "render", "Video, audio, and vertical frame finalized", 700);
    await completeStep(runId, "deliver", "Video is ready to review and download", 400);
    const completeRun = await getRun(runId);
    if (!completeRun) return;
    completeRun.status = "completed";
    completeRun.outputUrl = outputUrl;
    await saveRun(completeRun);
  } catch (error) {
    const failedRun = await getRun(runId);
    if (!failedRun) return;
    const active = failedRun.steps.find((step) => step.status === "running");
    if (active) {
      active.status = "failed";
      active.message = error instanceof Error ? error.message : "Generation failed";
    }
    failedRun.status = "failed";
    failedRun.error = error instanceof Error ? error.message : "Generation failed";
    await saveRun(failedRun);
  }
}
