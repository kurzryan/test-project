"use client";

export default function StatusBar() {
  return (
    <div className="w-full bg-black/40 border-b border-card-border px-6 py-2 flex items-center justify-between text-xs font-mono tracking-wider">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5">
          <span
            className="w-1 h-1 rounded-full bg-accent-green inline-block"
            style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
          />
          ARBITRUM ONE: OPERATIONAL
        </span>
        <span className="text-muted">GAS: 0.01 GWEI</span>
        <span className="text-muted">BLOCK: #289,441,028</span>
        <span className="text-muted">
          $ARB $0.82{" "}
          <span className="text-accent-green">+2.4%</span>
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-muted">
        <span
          className="w-1 h-1 rounded-full bg-accent-green inline-block"
          style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
        />
        DATA UPDATED 2 MIN AGO
      </div>
    </div>
  );
}
