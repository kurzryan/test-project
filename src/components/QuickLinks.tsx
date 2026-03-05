"use client";

import { Calendar, GitCompare, Vote, Activity, BarChart3 } from "lucide-react";

const links = [
  { icon: Calendar, label: "Q4 2025 QUARTERLY" },
  { icon: GitCompare, label: "COMPARE DEPLOYMENTS" },
  { icon: Vote, label: "ACTIVE VOTES" },
  { icon: Activity, label: "NETWORK STATS" },
  { icon: BarChart3, label: "DUNE DASHBOARDS" },
];

export default function QuickLinks() {
  return (
    <div className="px-6 py-3 flex items-center gap-6">
      <span className="text-xs font-mono tracking-widest text-muted uppercase">
        Quick Links
      </span>
      {links.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="flex items-center gap-1.5 text-xs font-mono tracking-wide text-muted hover:text-white transition-colors"
        >
          <Icon size={14} />
          {label}
        </button>
      ))}
    </div>
  );
}
