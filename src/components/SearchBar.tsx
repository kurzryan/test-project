"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full px-6 py-4">
      <div className="group flex items-center gap-3 bg-white/5 border border-transparent hover:border-[#1e293b] transition-colors px-4 py-3 text-muted">
        <Search size={18} />
        <span className="text-xs font-mono tracking-wide group-hover:text-[#94a3b8] transition-colors">
          SEARCH METRICS, CHARTS, NETWORKS, ETC.
        </span>
        <kbd className="ml-auto text-xs bg-black/30 px-2 py-1 border border-card-border font-mono">
          ⌘K
        </kbd>
      </div>
    </div>
  );
}
