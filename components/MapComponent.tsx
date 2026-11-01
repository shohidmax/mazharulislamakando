"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { locations, PlaceLocation } from "./mapData";

// Fix default marker icons for Next.js
const fixLeafletIcons = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
};

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 14, { duration: 1.2 });
  }, [center, map]);
  return null;
}

export default function MapComponent({
  selectedLocation,
  onSelectLocation,
}: {
  selectedLocation?: PlaceLocation;
  onSelectLocation?: (loc: PlaceLocation) => void;
}) {
  const [activeCenter, setActiveCenter] = useState<[number, number]>([24.898, 89.95]);
  const [markerIcon, setMarkerIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    fixLeafletIcons();
    const icon = new L.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
    setMarkerIcon(icon);
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      setActiveCenter(selectedLocation.pos);
    }
  }, [selectedLocation]);

  return (
    <div className="relative w-full h-full min-h-[420px]">
      <MapContainer
        center={activeCenter}
        zoom={13}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <ChangeView center={activeCenter} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Highlight the Sharifpur Union Area boundary circle */}
        <Circle
          center={[24.895, 89.955]}
          radius={3200}
          pathOptions={{
            color: "#1a5c3a",
            fillColor: "#1a5c3a",
            fillOpacity: 0.12,
            weight: 3,
            dashArray: "6, 6",
          }}
        />

        {markerIcon &&
          locations.map((loc) => (
            <Marker
              key={loc.id}
              position={loc.pos}
              icon={markerIcon}
              eventHandlers={{
                click: () => {
                  if (onSelectLocation) onSelectLocation(loc);
                  setActiveCenter(loc.pos);
                },
              }}
            >
              <Popup>
                <div className="p-1 space-y-1.5 max-w-[220px]">
                  <div className="badge badge-success badge-sm text-white font-medium">
                    {loc.category}
                  </div>
                  <h4 className="font-bold text-[#1a5c3a] text-sm leading-snug">
                    {loc.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {loc.description}
                  </p>
                  <div className="pt-2">
                    <a
                      href={loc.gmapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-warning btn-xs font-bold w-full text-emerald-950 no-underline"
                    >
                      Google Maps-এ দেখুন ↗
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>

      {/* Floating control info pill on map */}
      <div className="absolute top-3 right-3 z-[1000] bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md border border-gray-200 text-xs text-gray-700 font-medium flex items-center gap-1.5 pointer-events-none">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
        যেকোনো মার্কার বা বোতামে ক্লিক করুন
      </div>
    </div>
  );
}
