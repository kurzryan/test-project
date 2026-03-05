"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const sparkData1 = [
  { v: 82 }, { v: 84 }, { v: 83 }, { v: 86 }, { v: 85 }, { v: 87 },
  { v: 86 }, { v: 88 }, { v: 87 }, { v: 90 }, { v: 89 }, { v: 90.4 },
];
const sparkData2 = [
  { v: 5 }, { v: 6 }, { v: 7 }, { v: 5 }, { v: 8 }, { v: 7 },
  { v: 6 }, { v: 8 }, { v: 7 }, { v: 7 }, { v: 6 }, { v: 7 },
];
const sparkData3 = [
  { v: 0.9 }, { v: 1.0 }, { v: 0.95 }, { v: 1.05 }, { v: 1.1 }, { v: 1.0 },
  { v: 1.15 }, { v: 1.1 }, { v: 1.2 }, { v: 1.15 }, { v: 1.18 }, { v: 1.2 },
];
const sparkData4 = [
  { v: 30 }, { v: 32 }, { v: 34 }, { v: 33 }, { v: 36 }, { v: 35 },
  { v: 37 }, { v: 38 }, { v: 39 }, { v: 40 }, { v: 41 }, { v: 42.1 },
];

interface KpiCardProps {
  label: string;
  value: string;
  subtitle?: React.ReactNode;
  sparkData?: { v: number }[];
  color?: string;
  borderColor: string;
}

function KpiCard({ label, value, subtitle, sparkData, color, borderColor }: KpiCardProps) {
  return (
    <div
      className="bg-card-bg p-5 flex-1 min-w-0 relative overflow-hidden border border-transparent hover:border-[#1e293b] transition-colors"
      style={{ borderLeft: `3px solid ${borderColor}` }}
    >
      <p className="text-xs font-mono tracking-widest text-muted mb-2 uppercase">
        {label}
      </p>
      <p className="text-3xl font-normal mb-1" style={{ fontFamily: '"Surt Expanded"' }}>{value}</p>
      {subtitle && (
        <p className="text-xs text-muted">{subtitle}</p>
      )}
      {sparkData && color && (
        <div className="absolute bottom-3 right-4 w-28 h-16">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparkData}>
              <defs>
                <linearGradient id={`grad-${label.replace(/\s+/g, "-")}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="natural"
                dataKey="v"
                stroke={color}
                strokeWidth={2}
                fill={`url(#grad-${label.replace(/\s+/g, "-")})`}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default function KpiCards() {
  return (
    <div className="px-6 py-4 grid grid-cols-4 gap-4">
      <KpiCard
        label="Treasury AUM"
        value="$90.4M"
        subtitle={<><span className="font-semibold" style={{ color: "#10b981" }}>+3.94%</span> 30D APY</>}
        sparkData={sparkData1}
        color="#10b981"
        borderColor="#10b981"
      />
      <KpiCard
        label="Active Proposals"
        value="7"
        subtitle="3 currently in voting"
        borderColor="#8b5cf6"
      />
      <KpiCard
        label="Daily Transactions"
        value="$1.2M"
        subtitle={<><span className="font-semibold" style={{ color: "#06b6d4" }}>+8.3%</span> 7D</>}
        sparkData={sparkData3}
        color="#06b6d4"
        borderColor="#06b6d4"
      />
      <KpiCard
        label="Incentives Distributed"
        value="$42.1M"
        subtitle="YTD"
        borderColor="#f59e0b"
      />
    </div>
  );
}
