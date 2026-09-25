import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { WorkflowRun } from "@/types/workflow";

const runsDirectory = process.env.UGC_RUNTIME_MODE === "public-demo"
  ? path.join("/tmp", "ugc-genie-runs")
  : path.join(process.cwd(), "data", "runs");

async function ensureDirectory() {
  await mkdir(runsDirectory, { recursive: true });
}

export async function saveRun(run: WorkflowRun) {
  await ensureDirectory();
  run.updatedAt = new Date().toISOString();
  await writeFile(path.join(runsDirectory, `${run.id}.json`), JSON.stringify(run, null, 2));
  return run;
}

export async function getRun(id: string): Promise<WorkflowRun | null> {
  try {
    return JSON.parse(await readFile(path.join(runsDirectory, `${id}.json`), "utf8"));
  } catch {
    return null;
  }
}

export async function listRuns(): Promise<WorkflowRun[]> {
  await ensureDirectory();
  const files = (await readdir(runsDirectory)).filter((file) => file.endsWith(".json"));
  const runs = await Promise.all(files.map((file) => readFile(path.join(runsDirectory, file), "utf8").then(JSON.parse)));
  return runs.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function updateStep(
  id: string,
  stepId: string,
  patch: Partial<WorkflowRun["steps"][number]>,
) {
  const run = await getRun(id);
  if (!run) throw new Error("Workflow run not found");
  run.steps = run.steps.map((step) => step.id === stepId ? { ...step, ...patch } : step);
  await saveRun(run);
  return run;
}
