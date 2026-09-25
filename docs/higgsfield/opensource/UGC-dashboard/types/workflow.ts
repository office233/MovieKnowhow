export type StepStatus = "pending" | "running" | "completed" | "failed";

export type WorkflowStep = {
  id: string;
  label: string;
  description: string;
  status: StepStatus;
  progress: number;
  startedAt?: string;
  completedAt?: string;
  message?: string;
};

export type WorkflowRun = {
  id: string;
  name: string;
  status: "queued" | "running" | "completed" | "failed";
  createdAt: string;
  updatedAt: string;
  prompt: string;
  generateAudio: boolean;
  productImageUrl?: string;
  productImagePath?: string;
  outputUrl?: string;
  error?: string;
  demo: boolean;
  steps: WorkflowStep[];
};
