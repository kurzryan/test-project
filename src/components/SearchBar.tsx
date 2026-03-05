"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full px-6 py-4">
      <div className="flex items-center gap-3 bg-card-bg border border-card-border px-4 py-3 text-muted">
        <Search size={18} />
        <span className="text-sm font-mono tracking-wide">
          SEARCH METRICS, CHARTS, NETWORKS, ETC.
        </span>
        <kbd className="ml-auto text-xs bg-background px-2 py-1 border border-card-border font-mono">
          ⌘K
        </kbd>
      </div>
    </div>
  );
}
