'use client';

import { useEffect } from "react";
import { BugIcon, ArrowCounterClockwiseIcon, WarningIcon } from "@phosphor-icons/react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground font-sans p-6 relative overflow-hidden">

      <div className="absolute inset-0 grid grid-cols-20 opacity-[0.03] pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="border-r border-foreground h-full"></div>
        ))}
      </div>

      <div className="z-10 w-full max-w-lg border border-foreground/20 bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">

        <div className="bg-red-500/10 border-b border-red-500/20 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-red-600 dark:text-red-400">
            <WarningIcon size={24} weight="fill" />
            <span className="font-mono text-sm font-bold uppercase tracking-widest">
              Error
            </span>
          </div>
          <span className="font-mono text-xs text-red-600/60 dark:text-red-400/60">
            ERR_500
          </span>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-medium tracking-tight leading-none">
              Something Went Wrong.
            </h2>
            <p className="text-muted-foreground text-sm">
              The application encountered an unexpected exception.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 opacity-50 blur-sm group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-muted/30 border border-foreground/10 p-4 font-mono text-xs md:text-sm text-foreground/80 overflow-x-auto">
              <div className="flex items-start gap-2 mb-2 opacity-50 select-none">
                <BugIcon size={14} className="mt-0.5" />
                <span>Diagnostics Log:</span>
              </div>
              <pre className="whitespace-pre-wrap wrap-break-words">
                {">"} {error.message || "Unknown error occurred during runtime."}
              </pre>
              {error.digest && (
                <div className="mt-4 pt-4 border-t border-foreground/10 text-muted-foreground">
                  <span className="opacity-50">DIGEST_ID:</span> {error.digest}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-foreground/20 bg-muted/5">
          <button
            onClick={() => reset()}
            className="group w-full flex items-center justify-center gap-3 bg-foreground text-background py-4 font-medium uppercase tracking-wide hover:bg-background hover:text-foreground border border-transparent hover:border-foreground transition-all duration-300"
          >
            <ArrowCounterClockwiseIcon size={20} className="group-hover:-rotate-180 transition-transform duration-500" />
            Refresh
          </button>
        </div>

      </div>

      <div className="absolute bottom-8 font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">
        {"//"} Please contact support if issue persists
      </div>

    </section>
  );
}
