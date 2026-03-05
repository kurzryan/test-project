"use client";

import { Search, Settings } from "lucide-react";

const navItems = ["OVERVIEW", "GOVERNANCE", "FINANCIALS", "NETWORK", "INCENTIVES"];

export default function Navbar() {
  return (
    <nav className="w-full bg-black/30 backdrop-blur-sm border-b border-card-border px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <img src="/Arbitrum-DAO.svg" alt="Arbitrum DAO" height={35} width={137} />
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
        <div className="group flex items-center gap-2 bg-white/5 border border-transparent hover:border-[#1e293b] transition-colors px-3 py-1.5 text-sm text-muted w-56">
          <Search size={14} />
          <span className="font-mono group-hover:text-[#94a3b8] transition-colors">SEARCH</span>
          <kbd className="ml-auto text-xs bg-black/30 px-1.5 py-0.5 border border-card-border">
            ⌘K
          </kbd>
        </div>
        <button className="text-sm text-muted hover:text-white transition-colors">
          SIGN IN
        </button>
        <button className="text-sm bg-transparent border border-white/30 text-white/60 px-3 py-1.5 hover:border-white/60 hover:text-white transition-colors">
          SIGN UP
        </button>
        <button className="text-muted hover:text-white transition-colors">
          <Settings size={18} />
        </button>
      </div>
    </nav>
  );
}
