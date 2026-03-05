"use client";

export default function StatusBar() {
  return (
    <div className="group w-full bg-black/40 border-b border-card-border px-6 py-2 flex items-center justify-between text-xs font-mono tracking-wider">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5 text-muted">
          <span
            className="w-1 h-1 rounded-full bg-accent-green inline-block"
            style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
          />
          ARBITRUM ONE: <span className="font-bold text-muted group-hover:text-white transition-colors duration-500">OPERATIONAL</span>
        </span>
        <span className="text-muted">GAS: <span className="font-bold text-muted group-hover:text-accent-cyan transition-colors duration-500">0.01 GWEI</span></span>
        <span className="text-muted">BLOCK: <span className="font-bold text-muted group-hover:text-accent-purple transition-colors duration-500">#289,441,028</span></span>
        <span className="text-muted">
          $ARB <span className="font-bold text-muted group-hover:text-accent-yellow transition-colors duration-500">$0.82</span>{" "}
          <span className="font-bold text-muted group-hover:text-accent-green transition-colors duration-500">+2.4%</span>
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-muted group-hover:text-white transition-colors duration-500">
        <span
          className="w-1 h-1 rounded-full bg-accent-green inline-block"
          style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
        />
        DATA UPDATED 2 MIN AGO
      </div>
    </div>
  );
}
