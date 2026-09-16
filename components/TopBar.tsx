export default function TopBar() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-[#d8e6d8] bg-[#f3faf4] px-5">
      <h1 className="text-base font-semibold tracking-tight text-[#1d382d]">
        Live Map
      </h1>

      <div className="flex items-center gap-5 text-[10px]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#78bd7b]" />
          <span className="text-[#355d48]">3/3 NODES ONLINE</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e9a52e]" />
          <span className="text-[#587263]">LATENCY</span>
          <span className="text-[#1d382d]">18.4s</span>
        </div>

        <span className="font-mono text-[#d39843]">
          02:47:19 PHT
        </span>
      </div>
    </header>
  );
}