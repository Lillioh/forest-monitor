import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import DetectionMap from "@/components/DetectionMap";
import IncidentFeed from "@/components/IncidentFeed";
import SensorCard from "@/components/SensorCard";

const sensors = [
  {
    name: "NODE-01",
    signal: 88,
    battery: 74,
    status: "SYNCED",
  },
  {
    name: "NODE-02",
    signal: 95,
    battery: 61,
    status: "SYNCED",
  },
  {
    name: "NODE-03",
    signal: 79,
    battery: 83,
    status: "SYNCED",
  },
];

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden bg-[#0b120f] text-white">
      <Sidebar />

      <section className="flex min-w-0 flex-1 flex-col">
        <TopBar />

        <div className="flex min-h-0 flex-1">
          <div className="flex min-w-0 flex-1 flex-col p-5">
            <div className="mb-3">
              <p className="text-xs font-semibold tracking-wider text-gray-400">
                DETECTION MAP
              </p>
            </div>

            <div className="min-h-0 flex-1">
              <DetectionMap />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              {sensors.map((sensor) => (
                <SensorCard
                  key={sensor.name}
                  name={sensor.name}
                  signal={sensor.signal}
                  battery={sensor.battery}
                  status={sensor.status}
                />
              ))}
            </div>
          </div>

          <IncidentFeed />
        </div>
      </section>
    </main>
  );
}