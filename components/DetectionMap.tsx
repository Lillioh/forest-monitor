"use client";

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

const detections = [
  {
    id: 1,
    lat: 8.4822,
    lng: 124.6472,
    label: "Chainsaw Detection",
  },
  {
    id: 2,
    lat: 8.4855,
    lng: 124.6501,
    label: "Possible Illegal Logging",
  },
];

export default function DetectionMap() {
  return (
    <div className="h-[500px] w-full overflow-hidden rounded-xl">
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      >
        <Map
          defaultCenter={{
            lat: 8.4822,
            lng: 124.6472,
          }}
          defaultZoom={14}
          mapId="DEMO_MAP_ID"
        >
          {detections.map((detection) => (
            <AdvancedMarker
              key={detection.id}
              position={{
                lat: detection.lat,
                lng: detection.lng,
              }}
              title={detection.label}
            />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}