"use client";

import { useAlerts } from "@/context/AlertsContext";
import { OUTPOST } from "@/lib/mock-data";
import { NAV_ITEMS, isNavActive } from "@/lib/nav";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const { alerts, sensors } = useAlerts();
  const onlineCount = sensors.filter((n) => n.status === "ONLINE").length;
  const newAlertCount = alerts.filter((a) => a.status === "NEW").length;

  return (
    <aside className="hidden w-[185px] shrink-0 border-r border-[#d8e6d8] bg-[#edf6ef] md:flex md:flex-col">
      <div className="flex h-14 items-center border-b border-[#d8e6d8] px-7">
        <span className="text-xs font-semibold tracking-widest text-[#224432]">
          BANTAY GUBAT
        </span>
      </div>

      <nav className="flex-1 py-3">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isNavActive(pathname, item.href);
          const badge = item.href === "/" && newAlertCount > 0 ? newAlertCount : null;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex w-full items-center gap-3 px-6 py-3 text-xs transition ${
                active
                  ? "bg-[#dfeee2] text-[#173726]"
                  : "text-[#4d665a] hover:bg-[#e7f1e8] hover:text-[#173726]"
              }`}
            >
              {active && (
                <span className="absolute left-0 top-0 h-full w-[3px] bg-[#7bb68c]" />
              )}

              <Icon size={15} />

              <span>{item.label}</span>

              {badge !== null && (
                <span className="ml-auto rounded bg-[#e5a52d] px-1.5 py-0.5 text-[10px] font-bold text-black">
                  {badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[#d8e6d8] p-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#224432]">
          <Home size={14} />
          {OUTPOST.name}
        </div>

        <p className="mt-1 text-[10px] text-[#587263]">{OUTPOST.location}</p>

        <div className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-wider text-[#447a57]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#70bd79]" />
          {onlineCount} nodes active
        </div>
      </div>
    </aside>
  );
}
