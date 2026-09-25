"use client";

import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Check, CircleAlert, LoaderCircle, type LucideIcon } from "lucide-react";
import type { StepStatus } from "@/types/workflow";

export type WorkflowNodeData = { label: string; description: string; status: StepStatus; progress: number; icon: LucideIcon; index: number };

export function WorkflowNode({ data }: NodeProps) {
  const node = data as WorkflowNodeData;
  const Icon = node.icon;
  const active = node.status === "running";
  return (
    <div className={`workflow-node ${node.status} ${active ? "is-active" : ""}`}>
      <Handle type="target" position={Position.Left} className="!size-2 !border-2 !border-[#37363d] !bg-[#a4a1aa]" />
      <div className="mb-4 flex items-start justify-between">
        <div className={`grid size-10 place-items-center rounded-2xl ${active ? "bg-[#ff775f] text-[#211f25]" : "bg-white/8 text-white"}`}><Icon className="size-5" /></div>
        <span className="font-mono text-[10px] font-bold tracking-widest text-[#77737f]">0{node.index + 1}</span>
      </div>
      <p className="text-sm font-extrabold tracking-[-0.02em] text-white">{node.label}</p>
      <p className="mt-1 min-h-8 text-[11px] leading-4 text-[#9995a0]">{node.description}</p>
      <div className="mt-4 flex items-center gap-2 border-t border-white/8 pt-3">
        {node.status === "completed" && <Check className="size-3.5 text-emerald-400" />}
        {node.status === "running" && <LoaderCircle className="size-3.5 animate-spin text-[#ff775f]" />}
        {node.status === "failed" && <CircleAlert className="size-3.5 text-red-400" />}
        {node.status === "pending" && <span className="size-1.5 rounded-full bg-[#5c5962]" />}
        <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#aaa6b0]">{node.status}</span>
      </div>
      <Handle type="source" position={Position.Right} className="!size-2 !border-2 !border-[#37363d] !bg-[#ff775f]" />
    </div>
  );
}

