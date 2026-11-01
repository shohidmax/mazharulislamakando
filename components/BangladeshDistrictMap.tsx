"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getDistrictMeta, DistrictInfo, DISTRICT_MAP } from "./districtData";

function CenterMapOnDistrict({ center, zoom }: { center?: [number, number]; zoom?: number }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom || 10, { duration: 1.2 });
    }
  }, [center, zoom, map]);
  return null;
}

export default function BangladeshDistrictMap({
  selectedDistrict,
  onSelectDistrict,
}: {
  selectedDistrict: DistrictInfo;
  onSelectDistrict: (dist: DistrictInfo) => void;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [geoData, setGeoData] = useState<any>(null);
  const [targetCenter, setTargetCenter] = useState<[number, number] | undefined>(undefined);
  const [targetZoom, setTargetZoom] = useState<number | undefined>(undefined);

  useEffect(() => {
    fetch("/bd-districts.geojson")
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Error loading district GeoJSON:", err));
  }, []);

  // Update center when district is selected from outside
  useEffect(() => {
    if (selectedDistrict.name === "Jamalpur") {
      setTargetCenter([24.937, 89.937]);
      setTargetZoom(10);
    }
  }, [selectedDistrict]);

  // Style each district feature based on the colorful map palette
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styleFeature = (feature: any) => {
    const name = feature?.properties?.shapeName || "";
    const meta = getDistrictMeta(name);
    const isSelected = selectedDistrict.name.toLowerCase() === name.toLowerCase();
    const isJamalpur = meta.isJamalpur || name.toLowerCase() === "jamalpur";

    if (isSelected) {
      return {
        fillColor: isJamalpur ? "#1a5c3a" : "#f0a500",
        weight: 3,
        opacity: 1,
        color: "#ffffff",
        dashArray: "",
        fillOpacity: 0.95,
      };
    }

    return {
      fillColor: meta.color,
      weight: 1.2,
      opacity: 0.9,
      color: "#ffffff",
      fillOpacity: isJamalpur ? 0.95 : 0.85,
    };
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onEachDistrict = (feature: any, layer: L.Layer) => {
    const name = feature?.properties?.shapeName || "";
    const meta = getDistrictMeta(name);
    const isJamalpur = meta.isJamalpur || name.toLowerCase() === "jamalpur";

    // Permanent label tooltip or hover tooltip
    layer.bindTooltip(
      `<div class="text-center font-bold text-xs leading-tight">
        <div>${meta.bn}</div>
        <div class="text-[10px] text-gray-500 font-normal">${meta.name}</div>
        ${isJamalpur ? '<span class="badge badge-warning badge-xs mt-1 text-emerald-950 font-black">★ নির্বাচনী এলাকা</span>' : ""}
       </div>`,
      {
        sticky: true,
        direction: "auto",
        className: "custom-map-tooltip shadow-lg rounded-lg border border-gray-200 bg-white/95 px-2 py-1",
      }
    );

    layer.on({
      mouseover: (e) => {
        const target = e.target;
        target.setStyle({
          weight: 2.5,
          color: "#ffffff",
          fillOpacity: 1,
        });
        target.bringToFront();
      },
      mouseout: (e) => {
        const target = e.target;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const targetFeature = (target as any).feature;
        const targetName = targetFeature?.properties?.shapeName || "";
        const isSelected = selectedDistrict.name.toLowerCase() === targetName.toLowerCase();
        const targetMeta = getDistrictMeta(targetName);

        target.setStyle({
          fillColor: isSelected
            ? (targetMeta.isJamalpur ? "#1a5c3a" : "#f0a500")
            : targetMeta.color,
          weight: isSelected ? 3 : 1.2,
          color: "#ffffff",
          fillOpacity: isSelected ? 0.95 : (targetMeta.isJamalpur ? 0.95 : 0.85),
        });
      },
      click: (e) => {
        onSelectDistrict(meta);
        const map = e.target._map;
        if (map && e.target.getBounds) {
          map.fitBounds(e.target.getBounds(), { padding: [30, 30], maxZoom: 11 });
        }
      },
    });
  };

  return (
    <div className="relative w-full h-full min-h-[550px] bg-[#eef5f8] rounded-2xl overflow-hidden shadow-inner">
      <MapContainer
        center={[23.85, 90.3]}
        zoom={7}
        minZoom={6}
        maxZoom={12}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <CenterMapOnDistrict center={targetCenter} zoom={targetZoom} />

        {geoData && (
          <GeoJSON
            key={selectedDistrict.name + (geoData ? "loaded" : "waiting")}
            data={geoData}
            style={styleFeature}
            onEachFeature={onEachDistrict}
          />
        )}
      </MapContainer>

      {/* Floating Legend / Hint overlay */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-gray-200 text-xs space-y-1.5 max-w-[240px]">
        <div className="flex items-center gap-2 font-bold text-emerald-950">
          <span className="w-3.5 h-3.5 rounded-full bg-[#1a5c3a] border border-white shadow-sm inline-block"></span>
          <span>জামালপুর (নির্বাচনী এলাকা)</span>
        </div>
        <p className="text-gray-500 text-[11px] leading-relaxed">
          যেকোনো জেলার ওপর ক্লিক বা হোভার করে তথ্য দেখুন ও নির্বাচনী এলাকা চিহ্নিত করুন।
        </p>
      </div>

      <div className="absolute top-4 right-4 z-[1000]">
        <button
          onClick={() => {
            const jamalpur = DISTRICT_MAP["Jamalpur"];
            if (jamalpur) onSelectDistrict(jamalpur);
          }}
          className="btn btn-sm btn-warning font-bold text-emerald-950 shadow-lg rounded-full border border-yellow-500 hover:scale-105"
        >
          ★ জামালপুর ফোকাস
        </button>
      </div>
    </div>
  );
}

