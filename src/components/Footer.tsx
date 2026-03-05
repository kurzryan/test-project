"use client";

import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 py-6 mt-4 border-t border-card-border flex items-center justify-between">
      <span className="text-xs font-mono tracking-widest text-muted">
        ARBDATA.COM
      </span>
      <span className="flex items-center gap-2 text-xs text-muted">
        POWERED BY
        <span className="font-bold text-foreground">
          Entropy<span className="text-muted">Advisors</span>
        </span>
        <ExternalLink size={12} />
      </span>
    </footer>
  );
}
