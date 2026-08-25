"use client";

import {
  Map,
  Radio,
  Bell,
  FileText,
  Settings,
  Home,
} from "lucide-react";

const navigation = [
  {
    label: "Live Map",
    icon: Map,
    active: true,
    badge: "1",
  },
  {
    label: "Sensor Nodes",
    icon: Radio,
  },
  {
    label: "Alert Log",
    icon: Bell,
  },
  {
    label: "Reports",
    icon: FileText,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-[185px] shrink-0 border-r border-[#1e2b24] bg-[#0d1712] md:flex md:flex-col">
      <div className="flex h-14 items-center border-b border-[#1e2b24] px-7">
        <span className="text-xs font-semibold tracking-widest text-gray-300">
          TITLE
        </span>
      </div>

      <nav className="flex-1 py-3">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`relative flex w-full items-center gap-3 px-6 py-3 text-xs transition ${
                item.active
                  ? "bg-[#17231b] text-white"
                  : "text-[#829087] hover:bg-[#131e18] hover:text-white"
              }`}
            >
              {item.active && (
                <span className="absolute left-0 top-0 h-full w-[3px] bg-[#e7a72e]" />
              )}

              <Icon size={15} />

              <span>{item.label}</span>

              {item.badge && (
                <span className="ml-auto rounded bg-[#e5a52d] px-1.5 py-0.5 text-[10px] font-bold text-black">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-[#1e2b24] p-5">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <Home size={14} />
          Forest Outpost 03
        </div>

        <p className="mt-1 text-[10px] text-gray-500">
          Cagayan de Oro Watershed
        </p>

        <div className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-wider text-[#6da875]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#70bd79]" />
          3 nodes active
        </div>
      </div>
    </aside>
  );
}