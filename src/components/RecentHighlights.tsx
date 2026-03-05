"use client";

interface Highlight {
  category: string;
  categoryColor: string;
  time: string;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    category: "GOVERNANCE",
    categoryColor: "#10b981",
    time: "2 hours ago",
    title: "AIP-87 Passed: Security Council Election",
    description:
      "Voting activity, delegate participation, tracking, and quorum health.",
  },
  {
    category: "NETWORK",
    categoryColor: "#f59e0b",
    time: "12 hours ago",
    title: "Daily Transactions Hit New ATH",
    description:
      "Arbitrum One processed 1.42M transactions yesterday, surpassing the previous record by 12%.",
  },
  {
    category: "FINANCIALS",
    categoryColor: "#8b5cf6",
    time: "1 day ago",
    title: "Q4 2025 Treasury Report Published",
    description:
      "Treasury generated $2.5M in cumulative interest with a 30D MA APY of 3.43%.",
  },
];

export default function RecentHighlights() {
  return (
    <section className="px-6 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold italic">Recent Highlights</h2>
        <button className="text-xs font-mono tracking-widest border border-card-border px-4 py-2 text-muted hover:text-white transition-colors">
          VIEW ALL
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {highlights.map((h, i) => (
          <div
            key={i}
            className="bg-card-bg border border-card-border p-5 hover:border-muted transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-xs font-mono tracking-widest px-2 py-1"
                style={{
                  color: h.categoryColor,
                  border: `1px solid ${h.categoryColor}33`,
                  backgroundColor: `${h.categoryColor}11`,
                }}
              >
                {h.category}
              </span>
              <span className="text-xs text-muted">{h.time}</span>
            </div>
            <h3 className="font-bold mb-2 leading-tight">{h.title}</h3>
            <p className="text-sm text-muted leading-relaxed">
              {h.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
