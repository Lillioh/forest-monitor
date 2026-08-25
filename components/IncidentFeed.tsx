"use client";

import { MoreVertical } from "lucide-react";

const incidents = [
  {
    status: "NEW PING",
    time: "00:00:11 ago",
    coordinates: "8.4542°N, 124.6319°E",
    confidence: "96.2%",
    radius: "±8m",
    active: true,
  },
  {
    status: "DISPATCHED",
    time: "14 min ago",
    coordinates: "8.4498°N, 124.6287°E",
    confidence: "91.7%",
    radius: "±11m",
  },
  {
    status: "RESOLVED",
    time: "1h 02m ago",
    coordinates: "8.4561°N, 124.6402°E",
    confidence: "88.4%",
    radius: "±9m",
  },
  {
    status: "RESOLVED",
    time: "3h 41m ago",
    coordinates: "8.4477°N, 124.6355°E",
    confidence: "93.0%",
    radius: "±7m",
  },
  {
    status: "RESOLVED",
    time: "Yesterday",
    coordinates: "8.4519°N, 124.6270°E",
    confidence: "85.9%",
    radius: "±12m",
  },
];

export default function IncidentFeed() {
  return (
    <aside className="hidden w-[280px] shrink-0 border-l border-[#1e2b24] bg-[#0c1510] p-3 lg:block">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xs font-bold tracking-wide text-gray-200">
          INCIDENT FEED
        </h2>

        <MoreVertical size={14} className="text-gray-600" />
      </div>

      <div className="space-y-2">
        {incidents.map((incident, index) => (
          <Incident
            key={index}
            {...incident}
          />
        ))}
      </div>
    </aside>
  );
}

function Incident({
  status,
  time,
  coordinates,
  confidence,
  radius,
  active,
}: {
  status: string;
  time: string;
  coordinates: string;
  confidence: string;
  radius: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-md border p-3 ${
        active
          ? "border-[#e45642] bg-[#1c1d16]"
          : "border-[#26352b] bg-[#121c16]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-[8px] font-bold ${
            active
              ? "text-[#e95b47]"
              : status === "DISPATCHED"
                ? "text-[#e7a52c]"
                : "text-[#65a96d]"
          }`}
        >
          {status}
        </span>

        <span className="text-[8px] text-gray-600">
          {time}
        </span>
      </div>

      <p className="mt-2 font-mono text-[10px] text-gray-200">
        {coordinates}
      </p>

      <p className="mt-1 text-[9px] text-gray-500">
        Confidence:{" "}
        <span className="text-gray-300">
          {confidence}
        </span>{" "}
        Radius:{" "}
        <span className="text-gray-300">
          {radius}
        </span>
      </p>

      <div className="mt-3 flex gap-2">
        {active ? (
          <button className="flex-1 rounded bg-[#e6a52d] py-2 text-[9px] font-bold text-black transition hover:bg-[#f0b63c]">
            Dispatch DENR/ENRO
          </button>
        ) : (
          <button className="flex-1 rounded border border-[#26352b] py-2 text-[9px] text-gray-400 hover:bg-[#19251e]">
            {status === "DISPATCHED" ? "Mark Resolved" : "Report"}
          </button>
        )}

        <button className="rounded border border-[#26352b] px-3 text-[9px] text-gray-400 hover:bg-[#19251e]">
          View
        </button>
      </div>
    </div>
  );
}