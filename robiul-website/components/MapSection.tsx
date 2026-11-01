"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { DISTRICT_MAP, DistrictInfo } from "./districtData";
import { locations, PlaceLocation } from "./mapData";

// Dynamically import Bangladesh District Map (No SSR)
const BangladeshDistrictMap = dynamic(() => import("./BangladeshDistrictMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[550px] flex flex-col items-center justify-center bg-base-200 rounded-2xl">
      <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      <p className="text-xs text-gray-500 font-medium mt-3">বাংলাদেশের জেলাভিত্তিক মানচিত্র লোড হচ্ছে...</p>
    </div>
  ),
});

// Dynamically import Sharifpur Local Union Map (No SSR)
const SharifpurLocalMap = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[440px] flex items-center justify-center bg-base-200 rounded-2xl">
      <span className="loading loading-spinner loading-lg text-emerald-600"></span>
    </div>
  ),
});

export default function MapSection() {
  const [activeTab, setActiveTab] = useState<"bd" | "union">("bd");
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictInfo>(DISTRICT_MAP["Jamalpur"]);
  const [selectedLoc, setSelectedLoc] = useState<PlaceLocation>(locations[0]);

  return (
    <section id="map" className="py-16 bg-gradient-to-b from-base-100 via-emerald-50/30 to-base-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <div className="badge badge-success text-white font-semibold mb-2 px-3 py-2">
            নির্বাচনী এলাকা ও মানচিত্র
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a5c3a] mb-2">
            বাংলাদেশের জেলা ও নির্বাচনী এলাকার ইন্টারেক্টিভ ম্যাপ
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            আপনার পছন্দের মানচিত্রের ধরণ বেছে নিন: পুরো বাংলাদেশের ৬৪ জেলার কালারফুল ক্লিকেবল ম্যাপ অথবা সরাসরি শরিফপুর ইউনিয়নের বিস্তারিত লোকাল ম্যাপ।
          </p>
          <div className="w-16 h-1 bg-warning mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Switcher for Map Modes */}
        <div className="flex justify-center mb-8">
          <div className="join bg-base-200 p-1 rounded-full shadow-inner border border-gray-200">
            <button
              onClick={() => setActiveTab("bd")}
              className={`join-item btn btn-sm sm:btn-md rounded-full px-5 transition-all ${
                activeTab === "bd"
                  ? "btn-success text-white font-black shadow-md"
                  : "btn-ghost text-gray-600 font-bold hover:text-emerald-800"
              }`}
            >
              🇧🇩 বাংলাদেশ জেলা ম্যাপ (কালারফুল)
            </button>
            <button
              onClick={() => setActiveTab("union")}
              className={`join-item btn btn-sm sm:btn-md rounded-full px-5 transition-all ${
                activeTab === "union"
                  ? "btn-success text-white font-black shadow-md"
                  : "btn-ghost text-gray-600 font-bold hover:text-emerald-800"
              }`}
            >
              📍 শরিফপুর ইউনিয়ন লোকাল ম্যাপ
            </button>
          </div>
        </div>

        {/* TAB 1: Colorful Bangladesh 64 Districts Map */}
        {activeTab === "bd" && (
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Map Container */}
            <div className="lg:col-span-2 card bg-base-100 shadow-xl border border-gray-200 overflow-hidden">
              <div className="h-[550px] md:h-[620px] w-full">
                <BangladeshDistrictMap
                  selectedDistrict={selectedDistrict}
                  onSelectDistrict={(dist) => setSelectedDistrict(dist)}
                />
              </div>
              <div className="p-4 bg-emerald-50/70 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-gray-600 font-medium">
                  নির্বাচিত জেলা: <strong className="text-emerald-900 text-sm">{selectedDistrict.bn} ({selectedDistrict.name})</strong> — {selectedDistrict.division}
                </span>
                <button
                  onClick={() => setActiveTab("union")}
                  className="btn btn-warning btn-xs sm:btn-sm font-bold text-emerald-950 rounded-full"
                >
                  শরিফপুর ইউনিয়নের বিস্তারিত ম্যাপ দেখুন 🔍
                </button>
              </div>
            </div>

            {/* Sidebar Details for Selected District */}
            <div className="space-y-5">
              <div
                className={`card shadow-xl transition-colors duration-300 ${
                  selectedDistrict.isJamalpur
                    ? "bg-[#1a5c3a] text-white ring-2 ring-warning"
                    : "bg-base-100 text-gray-800 border border-gray-200"
                }`}
              >
                <div className="card-body p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`badge font-bold ${
                        selectedDistrict.isJamalpur
                          ? "badge-warning text-emerald-950"
                          : "badge-success text-white"
                      }`}
                    >
                      {selectedDistrict.division}
                    </span>
                    {selectedDistrict.isJamalpur && (
                      <span className="badge badge-error badge-sm text-white font-bold animate-pulse">
                        প্রধান কেন্দ্র
                      </span>
                    )}
                  </div>

                  <h3
                    className={`card-title text-2xl font-black mt-2 ${
                      selectedDistrict.isJamalpur ? "text-yellow-300" : "text-[#1a5c3a]"
                    }`}
                  >
                    {selectedDistrict.bn} ({selectedDistrict.name})
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mt-2 ${
                      selectedDistrict.isJamalpur ? "text-white/90" : "text-gray-600"
                    }`}
                  >
                    {selectedDistrict.details ||
                      `${selectedDistrict.bn} জেলা ${selectedDistrict.division}-এর একটি গুরুত্বপূর্ণ জেলা।`}
                  </p>

                  {selectedDistrict.isJamalpur && (
                    <div className="mt-4 p-3 bg-black/20 rounded-xl border border-white/10 space-y-1 text-xs">
                      <p className="font-bold text-yellow-300">★ প্রার্থীর নির্বাচনী কর্মক্ষেত্র:</p>
                      <p className="text-white/80">
                        • উপজেলা: জামালপুর সদর<br />
                        • ইউনিয়ন: ২নং শরিফপুর ইউনিয়ন পরিষদ<br />
                        • প্রতীক প্রত্যাশী: ধানের শীষ (বিএনপি)
                      </p>
                    </div>
                  )}

                  <div className="card-actions justify-end mt-4">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${selectedDistrict.name}+District+Bangladesh`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-warning btn-sm font-bold text-emerald-950 w-full"
                    >
                      {selectedDistrict.bn} গুগল ম্যাপে দেখুন ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Jump buttons for Key Regions */}
              <div className="card bg-base-100 shadow-md border border-gray-200 p-5">
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-3">
                  গুরুত্বপূর্ণ জেলাসমূহ (ক্লিক করুন):
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Jamalpur", "Dhaka", "Mymensingh", "Sherpur", "Tangail", "Bogra", "Chittagong", "Sylhet"].map(
                    (key) => {
                      const d = DISTRICT_MAP[key];
                      if (!d) return null;
                      const isAct = selectedDistrict.name === d.name;
                      return (
                        <button
                          key={d.name}
                          onClick={() => setSelectedDistrict(d)}
                          className={`btn btn-xs rounded-full ${
                            isAct
                              ? "btn-success text-white font-bold"
                              : "btn-outline btn-neutral"
                          }`}
                        >
                          {d.bn}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Sharifpur Local Union Detailed Map */}
        {activeTab === "union" && (
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 card bg-base-100 shadow-xl border border-gray-200 overflow-hidden">
              <div className="h-[480px] w-full">
                <SharifpurLocalMap
                  selectedLocation={selectedLoc}
                  onSelectLocation={(loc) => setSelectedLoc(loc)}
                />
              </div>
              <div className="p-4 bg-emerald-50/70 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs font-semibold text-emerald-900">
                  বর্তমান অবস্থান: <strong className="text-sm">{selectedLoc.title}</strong>
                </span>
                <a
                  href={selectedLoc.gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning btn-sm font-bold text-emerald-950 rounded-full"
                >
                  গুগল ম্যাপে ফুলস্ক্রিন ওপেন 🗺️
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <div className="card bg-[#1a5c3a] text-white shadow-xl">
                <div className="card-body p-6">
                  <div className="badge badge-warning text-emerald-950 font-bold mb-2">
                    {selectedLoc.category}
                  </div>
                  <h3 className="card-title text-xl text-yellow-300 font-extrabold">
                    {selectedLoc.title}
                  </h3>
                  <p className="text-xs text-emerald-200 italic mb-2">{selectedLoc.en}</p>
                  <p className="text-sm text-gray-100 leading-relaxed">{selectedLoc.description}</p>
                  <div className="card-actions justify-end mt-4">
                    <a
                      href={selectedLoc.gmapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-warning btn-sm font-bold text-emerald-950 w-full"
                    >
                      সরাসরি ডিরেকশন ও ম্যাপ ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Location buttons */}
              <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-2">
                  শরিফপুরের কেন্দ্রসমূহ:
                </h4>
                <div className="space-y-1.5">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedLoc(loc)}
                      className={`btn btn-sm w-full justify-start rounded-xl text-xs font-semibold ${
                        selectedLoc.id === loc.id
                          ? "btn-success text-white font-bold"
                          : "btn-ghost text-gray-700"
                      }`}
                    >
                      📍 {loc.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
