"use client";
/* eslint-disable @next/next/no-img-element -- previews use local browser blob URLs */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Background, BackgroundVariant, Controls, ReactFlow, type Edge, type Node } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDownToLine, Check, Clapperboard, ImageIcon, Maximize2, Play, RefreshCw, ScanSearch, Sparkles, UploadCloud, Video, WandSparkles, X } from "lucide-react";
import { toast, Toaster } from "sonner";
import { WorkflowNode, type WorkflowNodeData } from "@/components/workflow/workflow-node";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import type { WorkflowRun } from "@/types/workflow";

const icons = [UploadCloud, ScanSearch, WandSparkles, Sparkles, Clapperboard, Video];
const nodeTypes = { workflow: WorkflowNode };
const demoSteps = [
  ["upload", "Product input", "Securely prepare the product image"],
  ["analyze", "Visual analysis", "Read packaging, shape, and key details"],
  ["concept", "Creative direction", "Build a native UGC concept and prompt"],
  ["generate", "Higgsfield studio", "Generate a vertical presenter-led ad"],
  ["render", "Render output", "Finalize audio, motion, and delivery"],
  ["deliver", "Ready to review", "Make the video available in studio"],
] as const;

function buildFlow(run: WorkflowRun | null): { nodes: Node[]; edges: Edge[] } {
  const fallback = [
    ["Product input", "Securely prepare the product image"], ["Visual analysis", "Read packaging, shape, and key details"],
    ["Creative direction", "Build a native UGC concept and prompt"], ["Higgsfield studio", "Generate a vertical presenter-led ad"],
    ["Render output", "Finalize audio, motion, and delivery"], ["Ready to review", "Make the video available in studio"],
  ];
  const steps = run?.steps || fallback.map(([label, description], index) => ({ id: String(index), label, description, status: "pending" as const, progress: 0 }));
  const nodes: Node[] = steps.map((step, index) => ({
    id: step.id, type: "workflow", position: { x: index * 230, y: index % 2 ? 185 : 65 },
    data: { ...step, icon: icons[index], index } satisfies WorkflowNodeData,
  }));
  const edges = steps.slice(0, -1).map((step, index) => ({
    id: `${step.id}-${steps[index + 1].id}`, source: step.id, target: steps[index + 1].id,
    animated: run?.steps[index + 1]?.status === "running",
    style: { stroke: run?.steps[index]?.status === "completed" ? "#ff775f" : "#55515c", strokeWidth: 2 },
  }));
  return { nodes, edges };
}

export function WorkflowStudio() {
  const publicDemo = process.env.NEXT_PUBLIC_UGC_RUNTIME_MODE === "public-demo";
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("A creator discovers this product, demonstrates the most useful benefit, and gives an honest, energetic recommendation.");
  const [run, setRun] = useState<WorkflowRun | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [generateAudio, setGenerateAudio] = useState(true);
  const [improvingPrompt, setImprovingPrompt] = useState(false);
  const flow = useMemo(() => buildFlow(run), [run]);
  const progress = run ? Math.round(run.steps.reduce((sum, step) => sum + step.progress, 0) / run.steps.length) : 0;

  useEffect(() => {
    if (publicDemo || !run || ["completed", "failed"].includes(run.status)) return;
    const timer = setInterval(async () => {
      const response = await fetch(`/api/workflows/${run.id}`, { cache: "no-store" });
      if (response.ok) setRun(await response.json());
    }, 900);
    return () => clearInterval(timer);
  }, [run, publicDemo]);

  useEffect(() => {
    if (run?.status === "completed") {
      toast.success("Your UGC video is ready to review.");
      window.dispatchEvent(new Event("ugc-workflow-finished"));
    }
    if (run?.status === "failed") {
      toast.error(run.error || "The workflow stopped.");
      window.dispatchEvent(new Event("ugc-workflow-finished"));
    }
  }, [run?.status, run?.error]);

  const chooseFile = useCallback((selected?: File) => {
    if (!selected) return;
    if (!selected.type.startsWith("image/")) return toast.error("Choose a JPG, PNG, or WebP product image.");
    if (selected.size > 12 * 1024 * 1024) return toast.error("Choose an image smaller than 12 MB.");
    if (preview) URL.revokeObjectURL(preview);
    setFile(selected); setPreview(URL.createObjectURL(selected));
    toast.success("Product image ready");
  }, [preview]);

  function clearFile() {
    if (preview) URL.revokeObjectURL(preview);
    setFile(null); setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function improvePrompt() {
    if (prompt.trim().length < 12) return toast.error("Write a little more direction first.");
    setImprovingPrompt(true);
    try {
      const response = await fetch("/api/prompt/improve", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prompt }) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Could not improve the prompt");
      setPrompt(payload.prompt);
      toast.success("Creative direction improved");
    } catch (error) { toast.error(error instanceof Error ? error.message : "Could not improve the prompt"); }
    finally { setImprovingPrompt(false); }
  }

  async function startWorkflow(demo = false) {
    if (!demo && !file) return toast.error("Drop in a product image first.");
    if (publicDemo) {
      const now = new Date().toISOString();
      const publicRun: WorkflowRun = {
        id: `public-demo-${Date.now()}`,
        name: "Public studio demo",
        status: "running",
        createdAt: now,
        updatedAt: now,
        prompt,
        generateAudio,
        demo: true,
        steps: demoSteps.map(([id, label, description], index) => ({ id, label, description, status: index === 0 ? "completed" : "pending", progress: index === 0 ? 100 : 0 })),
      };
      setRun(publicRun);
      toast.success("Public demo started");
      for (let index = 1; index < publicRun.steps.length; index += 1) {
        await new Promise((resolve) => window.setTimeout(resolve, index === 3 ? 1800 : 650));
        setRun((current) => current ? { ...current, updatedAt: new Date().toISOString(), steps: current.steps.map((step, stepIndex) => stepIndex === index ? { ...step, status: "running", progress: 35, startedAt: new Date().toISOString(), message: index === 3 ? "Demonstrating the Higgsfield generation stage" : step.description } : step) } : current);
        await new Promise((resolve) => window.setTimeout(resolve, index === 3 ? 1800 : 650));
        setRun((current) => current ? { ...current, updatedAt: new Date().toISOString(), steps: current.steps.map((step, stepIndex) => stepIndex === index ? { ...step, status: "completed", progress: 100, completedAt: new Date().toISOString() } : step) } : current);
      }
      setRun((current) => current ? { ...current, status: "completed", updatedAt: new Date().toISOString(), outputUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" } : current);
      return;
    }
    setSubmitting(true);
    const form = new FormData();
    if (file) form.set("image", file);
    form.set("prompt", prompt);
    form.set("demo", String(demo));
    form.set("generateAudio", String(generateAudio));
    try {
      const response = await fetch("/api/workflows", { method: "POST", body: form });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Could not start the workflow");
      setRun(payload); toast.success(demo ? "Studio preview started" : "Higgsfield workflow started");
    } catch (error) { toast.error(error instanceof Error ? error.message : "Could not start workflow"); }
    finally { setSubmitting(false); }
  }

  const activeStep = run?.steps.find((step) => step.status === "running") || run?.steps.findLast((step) => step.status === "completed");

  return (
    <main className="flex min-h-svh flex-col overflow-hidden p-3 md:p-4">
      <Toaster richColors position="top-center" />
      <header className="flex min-h-16 items-center justify-between rounded-[22px] bg-[#f7f6f2] px-4 shadow-sm md:px-6">
        <div className="flex items-center gap-3"><SidebarTrigger className="md:hidden"/><div><p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8b8790]">Create / New production</p><h1 className="text-lg font-extrabold tracking-[-0.04em] md:text-xl">Product-to-UGC studio</h1></div></div>
        <div className="flex items-center gap-3">
          {run && <Badge variant="outline" className="hidden rounded-full border-0 bg-[#e8e6e1] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider sm:flex">{progress}% complete</Badge>}
          <Button onClick={() => startWorkflow(publicDemo)} disabled={submitting || run?.status === "running"} className="h-11 rounded-2xl bg-[#24232a] px-4 font-extrabold text-white shadow-lg hover:bg-[#34323b]">
            {submitting || run?.status === "running" ? <RefreshCw className="animate-spin"/> : <Play className="fill-[#ff775f] text-[#ff775f]"/>} {publicDemo ? "Run demo" : "Run workflow"}
          </Button>
        </div>
      </header>

      <section className="mt-3 grid min-h-0 flex-1 gap-3 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex min-h-[680px] min-w-0 flex-col gap-3">
          <div className="grid gap-3 md:grid-cols-[310px_minmax(0,1fr)]">
            <div className="rounded-[26px] bg-[#f7f6f2] p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between"><div><p className="eyebrow">01 · Product</p><h2 className="panel-title">Drop your hero image</h2></div><ImageIcon className="size-5 text-[#77727e]"/></div>
              <input ref={fileInputRef} id="product-image" type="file" accept="image/png,image/jpeg,image/webp" className="sr-only" onChange={(e) => chooseFile(e.target.files?.[0])}/>
              <div onDragOver={(e) => { e.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={(e) => { e.preventDefault(); setDragging(false); chooseFile(e.dataTransfer.files[0]); }} className={`group relative grid h-40 place-items-center overflow-hidden rounded-[21px] border border-dashed transition-all duration-200 ${dragging ? "scale-[1.01] border-[#ff775f] bg-[#fff1ed] shadow-[0_0_0_4px_rgba(255,119,95,.12)]" : preview ? "border-emerald-400/60 bg-[#ebeae6]" : "border-[#c8c5bf] bg-[#ebeae6] hover:-translate-y-0.5 hover:border-[#ff775f] hover:bg-[#f0ece8] hover:shadow-md"}`}>
                {preview ? <><img src={preview} alt="Selected product" className="h-full w-full object-contain p-3"/><div className="absolute inset-x-2 bottom-2 flex items-center justify-between rounded-xl bg-[#24232a]/90 p-1.5 pl-3 text-white backdrop-blur"><span className="flex min-w-0 items-center gap-1.5 text-[10px] font-bold"><Check className="size-3.5 text-emerald-400"/><span className="truncate">{file?.name}</span></span><div className="flex gap-1"><button type="button" onClick={() => fileInputRef.current?.click()} className="rounded-lg bg-white/10 px-2 py-1 text-[10px] font-extrabold hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-[#ff775f]">Replace</button><button type="button" aria-label="Remove product image" onClick={clearFile} className="grid size-6 place-items-center rounded-lg bg-white/10 hover:bg-red-500/70 focus-visible:outline-2 focus-visible:outline-[#ff775f]"><X className="size-3.5"/></button></div></div></> : <button type="button" onClick={() => fileInputRef.current?.click()} className="absolute inset-0 flex flex-col items-center justify-center rounded-[21px] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#ff775f]"><div className="grid size-11 place-items-center rounded-2xl bg-white shadow-sm transition-transform group-hover:-translate-y-1 group-hover:scale-105"><UploadCloud className="size-5 text-[#ff775f]"/></div><p className="mt-3 text-sm font-extrabold">Choose or drop product image</p><p className="mt-1 text-[11px] text-muted-foreground">JPG, PNG or WebP · up to 12 MB</p></button>}
              </div>
            </div>

            <div className="rounded-[26px] bg-[#f7f6f2] p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between"><div><p className="eyebrow">02 · Direction</p><h2 className="panel-title">Tell the creator what matters</h2></div><Button type="button" variant="secondary" size="sm" onClick={improvePrompt} disabled={improvingPrompt} className="h-9 rounded-xl bg-[#ebeae6] px-3 text-[11px] font-extrabold hover:bg-[#dfdcd5]"><WandSparkles className={improvingPrompt ? "animate-pulse text-[#ff775f]" : "text-[#ff775f]"}/>{improvingPrompt ? "Improving…" : "Improve prompt"}</Button></div>
              <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="min-h-28 resize-none rounded-[20px] border-0 bg-[#ebeae6] p-4 text-sm leading-6 shadow-inner focus-visible:ring-[#ff775f]" />
              <div className="mt-3 flex flex-wrap items-center gap-3">{!publicDemo && <Button type="button" variant="outline" size="sm" onClick={() => startWorkflow(true)} disabled={submitting || run?.status === "running"} className="h-8 rounded-xl border-[#d4d1cb] bg-transparent px-3 text-[10px] font-extrabold">Preview without credits</Button>}{publicDemo && <Badge variant="outline" className="h-8 rounded-xl border-[#d4d1cb] bg-transparent px-3 text-[10px] font-extrabold">Safe public demo · no credits</Badge>}<div className="ml-auto flex items-center gap-3"><span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">9:16 · 15 sec</span><div className="flex items-center gap-2 rounded-xl bg-[#ebeae6] px-3 py-1.5"><Switch id="audio-output" checked={generateAudio} onCheckedChange={setGenerateAudio} aria-label="Generate audio" className="data-[state=checked]:bg-[#ff775f]"/><label htmlFor="audio-output" className="cursor-pointer text-[10px] font-extrabold uppercase tracking-wider">Audio {generateAudio ? "on" : "off"}</label></div></div></div>
            </div>
          </div>

          <div className="relative min-h-[410px] flex-1 overflow-hidden rounded-[28px] bg-[#24232a] shadow-xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#8d8993]">Live production map</p><p className="mt-1 text-sm font-extrabold text-white">Every node reflects real execution</p></div><Badge className="rounded-full bg-white/8 px-3 py-1.5 text-[10px] text-white backdrop-blur">{run?.status || "Ready"}</Badge></div>
            <ReactFlow nodes={flow.nodes} edges={flow.edges} nodeTypes={nodeTypes} fitView fitViewOptions={{ padding: 0.18 }} minZoom={0.45} maxZoom={1.3} nodesDraggable={false} nodesConnectable={false} proOptions={{ hideAttribution: true }}>
              <Background variant={BackgroundVariant.Dots} gap={25} size={1} color="#49464f" />
              <Controls showInteractive={false} className="!bottom-4 !left-4 !overflow-hidden !rounded-xl !border-white/80 !bg-[#f7f6f2] !shadow-xl [&_button]:!border-[#d7d3cc] [&_button]:!bg-[#f7f6f2] [&_button]:!fill-[#24232a] [&_button]:hover:!bg-[#ff775f]" />
            </ReactFlow>
          </div>
        </div>

        <aside className="flex min-h-[680px] flex-col gap-3">
          <div className="rounded-[26px] bg-[#f7f6f2] p-5 shadow-sm">
            <p className="eyebrow">Production status</p><div className="mt-2 flex items-end justify-between"><span className="text-3xl font-black tracking-[-0.06em]">{progress}%</span><span className="text-xs font-bold capitalize text-muted-foreground">{run?.status || "Not started"}</span></div><Progress value={progress} className="mt-4 h-2 bg-[#dedcd6] [&_[data-slot=progress-indicator]]:bg-[#ff775f]"/>
            {activeStep && <div className="mt-4 rounded-[18px] bg-[#ebeae6] p-3"><p className="text-xs font-extrabold">{activeStep.label}</p><p className="mt-1 text-[11px] leading-4 text-muted-foreground">{activeStep.message || activeStep.description}</p></div>}
          </div>

          <div className="flex flex-1 flex-col overflow-hidden rounded-[26px] bg-[#f7f6f2] p-4 shadow-sm">
            <div className="flex items-center justify-between px-1"><div><p className="eyebrow">Final output</p><h2 className="panel-title">Your generated video</h2></div><Maximize2 className="size-4 text-muted-foreground"/></div>
            <div className="relative mt-4 flex min-h-[380px] flex-1 items-center justify-center overflow-hidden rounded-[24px] bg-[#1f1e24]">
              <AnimatePresence mode="wait">
                {run?.outputUrl ? <motion.video key="video" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} src={run.outputUrl} controls playsInline className="h-full max-h-[520px] w-full object-contain"/> :
                <motion.div key="empty" exit={{ opacity: 0 }} className="max-w-[210px] text-center"><div className="mx-auto grid size-16 place-items-center rounded-[22px] border border-white/8 bg-white/5"><Video className="size-6 text-[#ff775f]"/></div><p className="mt-4 text-sm font-extrabold text-white">Your video will land here</p><p className="mt-2 text-[11px] leading-5 text-[#8f8b96]">Upload a product and run the workflow. You can watch every production stage above.</p></motion.div>}
              </AnimatePresence>
            </div>
            {run?.outputUrl && <div className="mt-3 grid grid-cols-2 gap-2"><Button variant="secondary" className="rounded-xl"><Play/>Play</Button><a className="inline-flex h-9 items-center justify-center gap-2 rounded-xl bg-[#24232a] px-4 text-sm font-medium text-white" href={run.outputUrl} download target="_blank"><ArrowDownToLine className="size-4"/>Download</a></div>}
          </div>
        </aside>
      </section>
    </main>
  );
}
