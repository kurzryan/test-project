"use client";

import { useState, useRef } from "react";
import { Search, X } from "lucide-react";

export default function HeroSection() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  return (
    <div className="px-6 pt-8 pb-4 grid grid-cols-4 gap-4 items-center">
      <div className="col-span-2">
        <div
          ref={searchBarRef}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={(e) => {
            const rect = searchBarRef.current?.getBoundingClientRect();
            if (!rect) return;
            setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
          className={`relative overflow-hidden flex items-center gap-3 bg-white/5 border px-4 py-2 text-xs transition-all duration-300 ${
          searchFocused
            ? "border-[#12AAFF]/60 text-white"
            : "border-transparent hover:border-[#12AAFF]/60 text-muted"
        }`}>
          {hovered && (
            <span
              className="absolute pointer-events-none rounded-full blur-xl"
              style={{
                width: 120,
                height: 120,
                left: glowPos.x - 60,
                top: glowPos.y - 60,
                background: "radial-gradient(circle, rgba(18,170,255,0.3) 0%, transparent 70%)",
              }}
            />
          )}
          <Search size={16} className="relative z-10 text-muted shrink-0" />
          <input
            ref={searchRef}
            type="text"
            placeholder="SEARCH METRICS, CHARTS, NETWORKS, ETC."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="relative z-10 flex-1 bg-transparent font-mono text-xs outline-none placeholder-muted focus:placeholder-[#94a3b8]"
          />
          {searchValue && (
            <button
              onMouseDown={(e) => {
                e.preventDefault();
                setSearchValue("");
                searchRef.current?.focus();
              }}
              className="relative z-10 text-muted hover:text-white bg-white/10 rounded-sm p-0.5 transition-colors"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>
      <div className="col-start-4">
        <p className="text-xs text-muted text-left leading-relaxed">
          Real-time governance, financials, network activity, and incentive
          tracking for the Arbitrum ecosystem.
        </p>
      </div>
    </div>
  );
}
