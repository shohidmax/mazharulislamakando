"use client";
import React, { useEffect, useState } from "react";
import defaultData from "@/data/siteData.json";

export default function BiographySection() {
  const [bio, setBio] = useState(defaultData.biography);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.biography) setBio(data.biography);
      })
      .catch(() => {});
  }, []);

  const personalInfo = [
    { label: "পিতার নাম", value: bio.father },
    { label: "মাতার নাম", value: bio.mother },
    { label: "জন্মতারিখ / DOB", value: bio.dob },
    { label: "ধর্ম / Religion", value: bio.religion },
    { label: "শিক্ষা / Education", value: bio.education },
    { label: "পেশা / Profession", value: bio.profession },
    { label: "স্থায়ী ঠিকানা", value: bio.permanentAddress },
    { label: "বর্তমান ঠিকানা", value: bio.currentAddress },
    { label: "মোবাইল", value: bio.phone },
    { label: "ই-মেইল", value: bio.email },
    { label: "জাতীয় পরিচয়পত্র নম্বর", value: bio.nid },
  ];

  return (
    <section id="biography" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a5c3a] mb-3">
            জীবনবৃত্তান্ত
          </h2>
          <p className="text-gray-500 text-lg">Biography</p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Personal Info Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {personalInfo.map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex gap-3">
              <div className="w-2 bg-[#1a5c3a] rounded-full flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                <p className="text-gray-800 font-semibold mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Family heritage */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-[#1a5c3a] mb-4 flex items-center gap-2">
            <span className="text-2xl">🏡</span> পারিবারিক পরিচিতি ও ঐতিহ্য
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
            <p>{bio.aboutText}</p>
            <p className="text-gray-500 italic text-sm border-l-4 border-yellow-400 pl-4">
              I was born in a respectable Muslim family in the historic village of Raghunathpur, Jamalpur. My family has long been associated with education, social development and public welfare in the area. The Raghunathpur Primary School was established in 1972 — my family donated the land and my father was its founding teacher.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
