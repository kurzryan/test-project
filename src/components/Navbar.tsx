"use client";

import { Search, Settings } from "lucide-react";

const navItems = ["OVERVIEW", "GOVERNANCE", "FINANCIALS", "NETWORK", "INCENTIVES"];

export default function Navbar() {
  return (
    <nav className="w-full bg-background/80 backdrop-blur-sm border-b border-card-border px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="14" fill="#213147" />
            <path d="M14 6L8 18h4l2-4 2 4h4L14 6z" fill="#12AAFF" />
          </svg>
          <span className="font-bold text-lg tracking-tight">ARBITRUM</span>
          <span className="text-muted text-sm ml-0.5">DAO</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              className={`hover:text-white transition-colors ${
                item === "OVERVIEW" ? "text-white" : "text-muted"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-card-bg border border-card-border px-3 py-1.5 text-sm text-muted w-56">
          <Search size={14} />
          <span>SEARCH</span>
          <kbd className="ml-auto text-xs bg-background px-1.5 py-0.5 border border-card-border">
            ⌘K
          </kbd>
        </div>
        <button className="text-sm text-muted hover:text-white transition-colors">
          SIGN IN
        </button>
        <button className="text-sm bg-card-bg border border-card-border px-3 py-1.5 hover:bg-card-border transition-colors">
          SIGN UP
        </button>
        <button className="text-muted hover:text-white transition-colors">
          <Settings size={18} />
        </button>
      </div>
    </nav>
  );
}
