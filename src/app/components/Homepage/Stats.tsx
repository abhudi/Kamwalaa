// app/components/StatsBar.tsx
"use client";

import { Star, Users, ShieldCheck, Clock } from "lucide-react"; // Lucide icons

export default function StatsBar() {
  const stats = [
    {
      icon: <Star className="w-6 h-6 text-black" />,
      value: "4.8",
      label: "Service Rating*",
    },
    {
      icon: <Users className="w-6 h-6 text-black" />,
      value: "12M+",
      label: "Customers Globally*",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
      value: "100+",
      label: "Cities Served",
    },
    {
      icon: <Clock className="w-6 h-6 text-black" />,
      value: "24x7",
      label: "Support Available",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1">
            {item.icon}
            <div className="text-xl font-semibold">{item.value}</div>
            <div className="text-sm text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
