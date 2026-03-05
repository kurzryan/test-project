"use client";

import { useState, useRef, useCallback } from "react";
import { Search, Settings, X } from "lucide-react";

const navItems = ["OVERVIEW", "GOVERNANCE", "FINANCIALS", "NETWORK", "INCENTIVES"];

function GlowButton({ children }: { children: React.ReactNode }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <button
      ref={btnRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative text-xs border px-3 py-1.5 overflow-hidden transition-all duration-300 ${
        hovered
          ? "border-[#12AAFF]/60 text-white"
          : "border-white/30 text-white/60"
      }`}
    >
      {hovered && (
        <span
          className="absolute pointer-events-none rounded-full blur-xl transition-opacity duration-300"
          style={{
            width: 70,
            height: 70,
            left: pos.x - 35,
            top: pos.y - 35,
            background: "radial-gradient(circle, rgba(18,170,255,0.55) 0%, transparent 70%)",
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchClosing, setSearchClosing] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const [searchGlow, setSearchGlow] = useState({ x: 0, y: 0 });
  const [searchHovered, setSearchHovered] = useState(false);

  const closeSearch = useCallback(() => {
    setSearchExpanded(false);
    setSearchClosing(true);
    setTimeout(() => {
      setSearchOpen(false);
      setSearchClosing(false);
      setSearchValue("");
    }, 350);
  }, []);

  return (
    <nav className="w-full bg-black/30 backdrop-blur-sm border-b border-card-border px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <img src="/Arbitrum-DAO.svg" alt="Arbitrum DAO" height={35} width={137} />
        <div className="flex items-center gap-6 text-xs font-mono">
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
        {!searchOpen ? (
          <button
            onClick={() => {
              setSearchOpen(true);
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  setSearchExpanded(true);
                  setTimeout(() => searchRef.current?.focus(), 100);
                });
              });
            }}
            className="text-xs font-mono text-muted hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Search size={14} />
            SEARCH
          </button>
        ) : (
          <div
            ref={searchBarRef}
            onMouseEnter={() => setSearchHovered(true)}
            onMouseLeave={() => setSearchHovered(false)}
            onMouseMove={(e) => {
              const rect = searchBarRef.current?.getBoundingClientRect();
              if (!rect) return;
              setSearchGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            className={`relative overflow-hidden flex items-center gap-2 bg-white/5 border border-[#12AAFF]/60 px-3 py-1.5 text-xs text-white transition-[width] duration-[350ms] cubic-bezier(0.16,1,0.3,1)`}
            style={{ width: searchExpanded && !searchClosing ? 288 : 80 }}
          >
            {searchHovered && (
              <span
                className="absolute pointer-events-none rounded-full blur-xl"
                style={{
                  width: 120,
                  height: 120,
                  left: searchGlow.x - 60,
                  top: searchGlow.y - 60,
                  background: "radial-gradient(circle, rgba(18,170,255,0.3) 0%, transparent 70%)",
                }}
              />
            )}
            <Search size={14} className="relative z-10 text-muted shrink-0" />
            <input
              ref={searchRef}
              type="text"
              placeholder="SEARCH"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onBlur={() => {
                if (!searchValue) closeSearch();
              }}
              className="relative z-10 flex-1 bg-transparent font-mono text-xs outline-none placeholder-muted focus:placeholder-[#94a3b8]"
            />
            <button
              onMouseDown={(e) => {
                e.preventDefault();
                closeSearch();
              }}
              className="relative z-10 text-muted hover:text-white bg-white/10 rounded-sm p-0.5 transition-colors"
            >
              <X size={12} />
            </button>
          </div>
        )}
        <button className="text-xs font-mono text-muted hover:text-white transition-colors">
          SIGN IN
        </button>
        <GlowButton>SIGN UP</GlowButton>
        <button className="text-muted hover:text-white transition-colors">
          <Settings size={18} />
        </button>
      </div>
    </nav>
  );
}
