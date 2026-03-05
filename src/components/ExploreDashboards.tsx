"use client";

import {
  Landmark,
  Coins,
  Activity,
  Target,
} from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const timeFilters = ["30D", "90D", "6M", "1Y", "ALL"];

const networkSparkData = [
  { v: 200 }, { v: 220 }, { v: 210 }, { v: 250 }, { v: 230 },
  { v: 260 }, { v: 240 }, { v: 270 }, { v: 284 },
];

const financialsSparkData = [
  { v: 85 }, { v: 86 }, { v: 87 }, { v: 86 }, { v: 88 },
  { v: 87 }, { v: 89 }, { v: 90 }, { v: 90.4 },
];

interface Proposal {
  name: string;
  progress: number;
  timeLeft: string;
  color: string;
}

const proposals: Proposal[] = [
  { name: "AIP-89: Fund Orbit Chain Expansion", progress: 72, timeLeft: "2D LEFT", color: "#3b82f6" },
  { name: "AIP-87: Security Council Election", progress: 91, timeLeft: "5H LEFT", color: "#10b981" },
  { name: "AIP-89: Fund Orbit Chain Expansion", progress: 54, timeLeft: "4D LEFT", color: "#f59e0b" },
];

interface IncentiveProgram {
  name: string;
  current: string;
  total: string;
  progress: number;
  distributed: string;
  endDate: string;
  color: string;
}

const incentivePrograms: IncentiveProgram[] = [
  {
    name: "LTIPP Round 2",
    current: "$18.4M",
    total: "$25M",
    progress: 73.6,
    distributed: "73.6% DISTRIBUTED",
    endDate: "ENDS MAR 2026",
    color: "#f59e0b",
  },
  {
    name: "Backfund Grants",
    current: "$6.2M",
    total: "$10M",
    progress: 73.6,
    distributed: "73.6% DISTRIBUTED",
    endDate: "ENDS JUN 2026",
    color: "#06b6d4",
  },
];

function GovernanceCard() {
  return (
    <div className="bg-card-bg border border-card-border hover:border-[#2a3a4e] transition-colors p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-4">
          <Landmark size={24} className="text-muted" />
          <span className="text-xs font-mono tracking-widest bg-background border border-card-border px-3 py-1 text-muted">
            LIVE PROPOSALS
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1">Governance</h3>
        <p className="text-sm text-muted leading-relaxed mb-6">
          Voting activity, delegate participation, proposal tracking, and quorum health.
        </p>
        <div className="space-y-3">
          {proposals.map((p, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: p.color }}
                />
                <span className="text-sm truncate">{p.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-background rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${p.progress}%`,
                      backgroundColor: p.color,
                    }}
                  />
                </div>
                <span className="text-xs font-mono" style={{ color: p.color }}>
                  {p.progress}%
                </span>
                <span className="text-xs font-mono text-muted">
                  {p.timeLeft}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-12 mt-6 pt-4 border-t border-card-border">
        <div>
          <p className="text-xs font-mono tracking-widest text-muted mb-1">PROPOSALS</p>
          <p className="text-2xl font-bold text-accent-blue">142</p>
        </div>
        <div>
          <p className="text-xs font-mono tracking-widest text-muted mb-1">DELEGATES</p>
          <p className="text-2xl font-bold text-accent-green">1,847</p>
        </div>
      </div>
    </div>
  );
}

function FinancialsCard() {
  return (
    <div className="bg-card-bg border border-card-border hover:border-[#2a3a4e] transition-colors p-6 flex flex-col justify-between relative overflow-hidden">
      <div>
        <div className="flex items-start justify-between mb-4">
          <Coins size={24} className="text-muted" />
          <span className="text-xs font-mono tracking-widest bg-background border border-card-border px-3 py-1 text-muted">
            AUM OVER TIME
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1">Financials</h3>
        <p className="text-sm text-muted leading-relaxed">
          Treasury management, yield performance, AUM breakdown, and deployment tracking.
        </p>
      </div>
      <div>
        <div className="flex gap-12 mt-6 pt-4 border-t border-card-border">
          <div>
            <p className="text-xs font-mono tracking-widest text-muted mb-1">AUM</p>
            <p className="text-2xl font-bold text-accent-blue">$90.4M</p>
          </div>
          <div>
            <p className="text-xs font-mono tracking-widest text-muted mb-1">30D APY</p>
            <p className="text-2xl font-bold text-accent-green">3.94%</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-24 opacity-50">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={financialsSparkData}>
              <defs>
                <linearGradient id="finGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="v"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#finGrad)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function NetworkActivityCard() {
  return (
    <div className="bg-card-bg border border-card-border hover:border-[#2a3a4e] transition-colors p-6 flex flex-col justify-between relative overflow-hidden">
      <div>
        <div className="flex items-start justify-between mb-4">
          <Activity size={24} className="text-muted" />
          <span className="text-xs font-mono tracking-widest bg-background border border-card-border px-3 py-1 text-muted">
            DAILY TRANSACTIONS
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1">Network Activity</h3>
        <p className="text-sm text-muted leading-relaxed">
          Transaction volume, active addresses, gas usage, and L2 performance metrics.
        </p>
      </div>
      <div>
        <div className="flex gap-12 mt-6 pt-4 border-t border-card-border">
          <div>
            <p className="text-xs font-mono tracking-widest text-muted mb-1">DAILY TCS</p>
            <p className="text-2xl font-bold text-accent-cyan">1.2M</p>
          </div>
          <div>
            <p className="text-xs font-mono tracking-widest text-muted mb-1">ACTIVE ADDR.</p>
            <p className="text-2xl font-bold text-accent-green">284K</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-24 opacity-50">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={networkSparkData}>
              <defs>
                <linearGradient id="netGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="v"
                stroke="#06b6d4"
                strokeWidth={2}
                fill="url(#netGrad)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function IncentivesCard() {
  return (
    <div className="bg-card-bg border border-card-border hover:border-[#2a3a4e] transition-colors p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-4">
          <Target size={24} className="text-muted" />
          <span className="text-xs font-mono tracking-widest bg-background border border-card-border px-3 py-1 text-muted">
            ACTIVE PROGRAMS
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1">Incentives</h3>
        <p className="text-sm text-muted leading-relaxed mb-6">
          Grant programs, STIP/LTIPP tracking, distribution analytics, and ROI metrics.
        </p>
        <div className="space-y-4">
          {incentivePrograms.map((prog, i) => (
            <div key={i} className="bg-background p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">{prog.name}</span>
                <span className="text-sm font-mono text-muted">
                  {prog.current} / {prog.total}
                </span>
              </div>
              <div className="h-1.5 bg-card-border rounded-full overflow-hidden mb-2">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${prog.progress}%`,
                    backgroundColor: prog.color,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs font-mono text-muted">
                <span>{prog.distributed}</span>
                <span>{prog.endDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-12 mt-6 pt-4 border-t border-card-border">
        <div>
          <p className="text-xs font-mono tracking-widest text-muted mb-1">DISTRIBUTE</p>
          <p className="text-2xl font-bold text-accent-yellow">$42.1M</p>
        </div>
        <div>
          <p className="text-xs font-mono tracking-widest text-muted mb-1">PROGRAMS</p>
          <p className="text-2xl font-bold text-accent-cyan">12</p>
        </div>
      </div>
    </div>
  );
}

export default function ExploreDashboards() {
  return (
    <section className="px-6 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-normal" style={{ fontFamily: '"Surt Expanded"' }}>Explore Dashboards</h2>
        <div className="flex items-center gap-1 bg-card-bg border border-card-border p-1">
          {timeFilters.map((f) => (
            <button
              key={f}
              className={`text-xs font-mono px-3 py-1 transition-colors ${
                f === "30D"
                  ? "bg-card-border text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <GovernanceCard />
        <FinancialsCard />
        <NetworkActivityCard />
        <IncentivesCard />
      </div>
    </section>
  );
}
