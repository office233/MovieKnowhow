"use client";

import { useCallback, useEffect, useState } from "react";
import { Coins, RefreshCw, Sparkles } from "lucide-react";

type Account = { credits: number; email: string; plan: string; syncedAt: string; mode?: "public-demo"; connected?: boolean; message?: string };

function formatSyncTime(value: string) {
  return new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(new Date(value));
}

export function HiggsfieldAccountCard() {
  const [account, setAccount] = useState<Account | null>(null);
  const [refreshing, setRefreshing] = useState(true);
  const [error, setError] = useState(false);

  const refresh = useCallback(async (quiet = false) => {
    if (!quiet) setRefreshing(true);
    try {
      const response = await fetch("/api/higgsfield/account", { cache: "no-store" });
      if (!response.ok) throw new Error("Account sync failed");
      setAccount(await response.json());
      setError(false);
    } catch {
      setError(true);
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    const initial = window.setTimeout(() => void refresh(true), 0);
    const interval = window.setInterval(() => void refresh(true), 60_000);
    const onFocus = () => void refresh(true);
    const onWorkflowFinished = () => void refresh();
    window.addEventListener("focus", onFocus);
    window.addEventListener("ugc-workflow-finished", onWorkflowFinished);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(interval);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("ugc-workflow-finished", onWorkflowFinished);
    };
  }, [refresh]);

  return (
    <div className="relative mt-2 overflow-hidden rounded-[22px] border border-white/60 bg-[#24232a] p-3.5 text-white shadow-[0_12px_30px_rgba(36,35,42,.18)]">
      <div className="pointer-events-none absolute -right-7 -top-8 size-24 rounded-full bg-[#ff775f]/20 blur-2xl" />
      <div className="relative flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className={`size-2 rounded-full ${error ? "bg-amber-400" : "bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,.10)]"}`} />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-white/65">Higgsfield</span>
        </div>
        <button type="button" onClick={() => void refresh()} disabled={refreshing} aria-label="Refresh Higgsfield credits" className="grid size-7 place-items-center rounded-lg bg-white/8 text-white/65 transition hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-[#ff775f] disabled:opacity-50">
          <RefreshCw className={`size-3.5 ${refreshing ? "animate-spin" : ""}`} />
        </button>
      </div>

      {account?.mode === "public-demo" ? (
        <div className="relative mt-4">
          <div className="flex items-center gap-2"><Sparkles className="size-4 text-[#ff775f]"/><p className="text-sm font-extrabold">Public demo</p></div>
          <p className="mt-2 text-[10px] leading-4 text-white/50">Higgsfield credentials are not connected. Demo runs do not consume credits.</p>
        </div>
      ) : error && !account ? (
        <div className="relative mt-4"><p className="text-sm font-extrabold">Sync unavailable</p><p className="mt-1 text-[10px] leading-4 text-white/50">Check the local Higgsfield session, then refresh.</p></div>
      ) : (
        <>
          <div className="relative mt-3 flex items-end gap-2">
            <Coins className="mb-1 size-4 text-[#ff775f]" />
            <span className="text-[28px] font-black leading-none tracking-[-0.07em] tabular-nums">{account ? account.credits.toLocaleString() : "—"}</span>
            <span className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-white/50">credits</span>
          </div>
          <div className="relative mt-3 flex items-center justify-between border-t border-white/10 pt-2.5">
            <span className="flex items-center gap-1.5 text-[10px] font-bold capitalize text-white/65"><Sparkles className="size-3 text-[#ff775f]" />{account?.plan || "Syncing"} plan</span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-white/35">{account ? `Synced ${formatSyncTime(account.syncedAt)}` : "Live sync"}</span>
          </div>
        </>
      )}
    </div>
  );
}
