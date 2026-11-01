"use client";
import React, { useEffect, useState } from "react";
import defaultData from "@/data/siteData.json";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
}

export default function GallerySection() {
  const [gallery, setGallery] = useState<GalleryItem[]>(defaultData.gallery || []);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.gallery && Array.isArray(data.gallery)) {
          setGallery(data.gallery);
        }
      })
      .catch((err) => console.log("Using local gallery fallback"));
  }, []);

  const categories = ["all", ...Array.from(new Set(gallery.map((g) => g.category || "সাধারণ")))];

  const filteredGallery =
    filter === "all" ? gallery : gallery.filter((item) => (item.category || "সাধারণ") === filter);

  return (
    <section id="gallery" className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="badge badge-warning text-emerald-950 font-bold mb-2 px-3 py-2">
            ছবি ও কার্যক্রম
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a5c3a] mb-2">
            ফটো গ্যালারি / Photo Gallery
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            শরিফপুর ইউনিয়নের বিভিন্ন কার্যক্রম, সমাবেশ ও সামাজিক কর্মকাণ্ডের স্থিরচিত্র
          </p>
          <div className="w-16 h-1 bg-warning mx-auto mt-3 rounded-full" />
        </div>

        {/* Filter Categories */}
        {categories.length > 2 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn btn-sm rounded-full ${
                  filter === cat
                    ? "btn-success text-white font-bold"
                    : "btn-outline btn-neutral"
                }`}
              >
                {cat === "all" ? "সকল ছবি" : cat}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer card bg-base-100 shadow-md hover:shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <figure className="relative h-60 w-full bg-gray-100 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/profile.jpg";
                  }}
                />
                <span className="absolute top-3 left-3 badge badge-warning font-bold text-xs text-emerald-950 shadow">
                  {item.category || "কার্যক্রম"}
                </span>
              </figure>
              <div className="card-body p-4 bg-white">
                <h3 className="font-bold text-gray-800 text-base group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                {item.caption && (
                  <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                )}
                <div className="card-actions justify-end mt-2">
                  <span className="text-xs font-semibold text-emerald-600 group-hover:underline">
                    পূর্ণাঙ্গ ছবি দেখুন 🔍
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-gray-700 bg-white/80 hover:bg-white z-10"
              >
                ✕
              </button>
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain bg-black"
              />
              <div className="p-5 bg-white">
                <div className="badge badge-success text-white font-semibold mb-2">
                  {selectedImage.category}
                </div>
                <h4 className="text-xl font-bold text-[#1a5c3a]">
                  {selectedImage.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

