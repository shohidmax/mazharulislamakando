"use client";
import React, { useEffect, useState } from "react";
import defaultData from "@/data/siteData.json";

export default function HeroSection() {
  const [hero, setHero] = useState(defaultData.hero);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.hero) setHero(data.hero);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="hero min-h-[85vh] bg-gradient-to-br from-[#1a5c3a] via-[#154d30] to-[#0f3823] text-white">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 py-12 px-4 max-w-6xl">
        {/* Avatar */}
        <div className="avatar">
          <div className="w-56 md:w-72 rounded-full ring-4 ring-warning ring-offset-base-100 ring-offset-4 shadow-2xl bg-emerald-950 overflow-hidden">
            <img
              src={hero.profileImage || "/profile.jpg"}
              alt={hero.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/profile.jpg";
              }}
            />
          </div>
        </div>

        {/* Text Details */}
        <div className="text-center lg:text-left">
          <div className="badge badge-warning font-semibold text-emerald-950 mb-3 px-3 py-2">
            {hero.party}
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-white mb-2">
            {hero.name}
          </h1>
          <p className="text-xl text-emerald-200 font-medium mb-1">
            {hero.nameEn}
          </p>
          <p className="text-lg text-yellow-300 font-semibold mb-6">
            {hero.designation}
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
            <a href="#biography" className="btn btn-warning font-bold text-emerald-950 rounded-full px-6 shadow-md hover:scale-105 transition-transform">
              জীবনী দেখুন
            </a>
            <a href="#gallery" className="btn btn-outline btn-warning font-bold rounded-full px-6 hover:scale-105 transition-transform">
              ফটো গ্যালারি 📸
            </a>
            <a href="#contact" className="btn btn-ghost text-white border border-white/30 rounded-full px-5">
              যোগাযোগ
            </a>
          </div>

          {/* Stats Component */}
          <div className="stats stats-vertical sm:stats-horizontal shadow bg-white/10 text-white backdrop-blur-md border border-white/20 w-full sm:w-auto">
            <div className="stat place-items-center">
              <div className="stat-title text-emerald-200 text-xs">অভিজ্ঞতা</div>
              <div className="stat-value text-warning text-3xl">{hero.experience}</div>
              <div className="stat-desc text-white/80 text-xs">ছাত্ররাজনীতি থেকে আজ অবধি</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title text-emerald-200 text-xs">নির্বাচনী এলাকা</div>
              <div className="stat-value text-warning text-2xl">শরিফপুর</div>
              <div className="stat-desc text-white/80 text-xs">জামালপুর সদর উপজেলা</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title text-emerald-200 text-xs">দলীয় প্রতীক প্রত্যাশী</div>
              <div className="stat-value text-warning text-2xl">{hero.symbol}</div>
              <div className="stat-desc text-white/80 text-xs">বাংলাদেশ জাতীয়তাবাদী দল</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
