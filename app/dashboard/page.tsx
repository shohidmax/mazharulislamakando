"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import defaultData from "@/data/siteData.json";

export default function DashboardPage() {
  const [data, setData] = useState(defaultData);
  const [activeTab, setActiveTab] = useState<"hero" | "biography" | "gallery" | "visions">("hero");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // New gallery item input state
  const [newGallery, setNewGallery] = useState({
    title: "",
    category: "জনসংযোগ",
    imageUrl: "",
    caption: "",
  });

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((resData) => {
        if (resData && resData.hero) {
          setData(resData);
        }
      })
      .catch(() => {});
  }, []);

  const showNotification = (type: "success" | "error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 4000);
  };

  // Handle Image Upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, target: "hero" | "gallery") => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const resJson = await res.json();

      if (resJson.success && resJson.url) {
        if (target === "hero") {
          setData((prev) => ({
            ...prev,
            hero: { ...prev.hero, profileImage: resJson.url },
          }));
          showNotification("success", "প্রোফাইল ছবি আপলোড সম্পন্ন হয়েছে!");
        } else {
          setNewGallery((prev) => ({ ...prev, imageUrl: resJson.url }));
          showNotification("success", "গ্যালারির ছবি আপলোড সম্পন্ন হয়েছে!");
        }
      } else {
        showNotification("error", "ছবি আপলোডে সমস্যা হয়েছে!");
      }
    } catch (err) {
      showNotification("error", "সার্ভার এরর: আপলোড ব্যর্থ হয়েছে!");
    } finally {
      setUploading(false);
    }
  };

  // Save full data to server
  const handleSaveData = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resJson = await res.json();
      if (resJson.success) {
        showNotification("success", "সকল পরিবর্তন সফলভাবে সেভ হয়েছে!");
      } else {
        showNotification("error", "সেভ করতে সমস্যা হয়েছে!");
      }
    } catch (err) {
      showNotification("error", "সার্ভারে ডাটা সংরক্ষণ ব্যর্থ হয়েছে!");
    } finally {
      setSaving(false);
    }
  };

  // Gallery handlers
  const handleAddGalleryItem = () => {
    if (!newGallery.title || !newGallery.imageUrl) {
      showNotification("error", "ছবির শিরোনাম এবং ছবি আবশ্যক!");
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      ...newGallery,
    };

    setData((prev) => ({
      ...prev,
      gallery: [newItem, ...(prev.gallery || [])],
    }));

    setNewGallery({ title: "", category: "জনসংযোগ", imageUrl: "", caption: "" });
    showNotification("success", "গ্যালারিতে নতুন ছবি যোগ করা হয়েছে! (Save Changes-এ ক্লিক করুন)");
  };

  const handleDeleteGalleryItem = (id: string) => {
    setData((prev) => ({
      ...prev,
      gallery: (prev.gallery || []).filter((item) => item.id !== id),
    }));
    showNotification("success", "ছবি ডিলিট করা হয়েছে! (Save Changes-এ ক্লিক করুন)");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="badge badge-success text-white font-bold">Admin Portal</span>
              <h1 className="text-2xl md:text-3xl font-black text-[#1a5c3a]">
                এডমিন ড্যাশবোর্ড / Dashboard
              </h1>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              ওয়েবসাইটের সকল তথ্য, জীবনী, এবং ফটো গ্যালারি সহজে আপডেট ও ম্যানেজ করুন
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/" className="btn btn-outline btn-neutral btn-sm rounded-full">
              ← মূল ওয়েবসাইট দেখুন
            </Link>
            <button
              onClick={handleSaveData}
              disabled={saving}
              className="btn btn-warning btn-sm md:btn-md font-bold text-emerald-950 rounded-full shadow-md hover:scale-105"
            >
              {saving ? <span className="loading loading-spinner loading-sm"></span> : "💾 Save Changes"}
            </button>
          </div>
        </div>

        {/* Floating Notification */}
        {message && (
          <div
            className={`alert ${
              message.type === "success" ? "alert-success text-white" : "alert-error text-white"
            } shadow-lg rounded-xl`}
          >
            <span>{message.text}</span>
          </div>
        )}

        {/* Tabs Navigation */}
        <div className="tabs tabs-boxed bg-white p-2 rounded-2xl border border-gray-200 shadow-sm flex flex-wrap gap-1">
          <button
            onClick={() => setActiveTab("hero")}
            className={`tab font-bold rounded-xl transition-all ${
              activeTab === "hero" ? "tab-active bg-[#1a5c3a] text-white" : "text-gray-600"
            }`}
          >
            👤 হিরো ব্যানার ও মূল তথ্য
          </button>
          <button
            onClick={() => setActiveTab("biography")}
            className={`tab font-bold rounded-xl transition-all ${
              activeTab === "biography" ? "tab-active bg-[#1a5c3a] text-white" : "text-gray-600"
            }`}
          >
            📖 জীবনবৃত্তান্ত ও ঠিকানা
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`tab font-bold rounded-xl transition-all ${
              activeTab === "gallery" ? "tab-active bg-[#1a5c3a] text-white" : "text-gray-600"
            }`}
          >
            🖼️ ফটো গ্যালারি ম্যানেজমেন্ট
          </button>
          <button
            onClick={() => setActiveTab("visions")}
            className={`tab font-bold rounded-xl transition-all ${
              activeTab === "visions" ? "tab-active bg-[#1a5c3a] text-white" : "text-gray-600"
            }`}
          >
            🎯 ভবিষ্যৎ পরিকল্পনা
          </button>
        </div>

        {/* TAB 1: HERO & BASIC INFO */}
        {activeTab === "hero" && (
          <div className="card bg-white shadow-sm border border-gray-200 p-6 rounded-2xl space-y-6">
            <h2 className="text-xl font-bold text-[#1a5c3a] border-b pb-3 flex items-center gap-2">
              <span>👤</span> হিরো ব্যানার ও প্রার্থীর পরিচিতি
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Profile Image & Upload */}
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-700 block">প্রোফাইল ছবি / Profile Photo</label>
                <div className="flex items-center gap-5">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-600 bg-gray-100 flex-shrink-0">
                    <img
                      src={data.hero.profileImage || "/profile.jpg"}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "hero")}
                      className="file-input file-input-bordered file-input-success file-input-sm w-full max-w-xs"
                    />
                    <p className="text-xs text-gray-400">JPG, PNG বা JPEG ছবি নির্বাচন করুন</p>
                  </div>
                </div>
              </div>

              {/* Basic Fields */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">নাম (বাংলা)</span>
                </label>
                <input
                  type="text"
                  value={data.hero.name}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, name: e.target.value } })
                  }
                  className="input input-bordered input-success"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">নাম (English)</span>
                </label>
                <input
                  type="text"
                  value={data.hero.nameEn}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, nameEn: e.target.value } })
                  }
                  className="input input-bordered input-success"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">দলীয় পরিচয় / Party</span>
                </label>
                <input
                  type="text"
                  value={data.hero.party}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, party: e.target.value } })
                  }
                  className="input input-bordered input-success"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">মনোনয়ন পদবী / Designation</span>
                </label>
                <input
                  type="text"
                  value={data.hero.designation}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, designation: e.target.value } })
                  }
                  className="input input-bordered input-success"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">অভিজ্ঞতা / Experience</span>
                </label>
                <input
                  type="text"
                  value={data.hero.experience}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, experience: e.target.value } })
                  }
                  className="input input-bordered input-success"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">দলীয় প্রতীক / Symbol</span>
                </label>
                <input
                  type="text"
                  value={data.hero.symbol}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, symbol: e.target.value } })
                  }
                  className="input input-bordered input-success"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BIOGRAPHY & DETAILS */}
        {activeTab === "biography" && (
          <div className="card bg-white shadow-sm border border-gray-200 p-6 rounded-2xl space-y-6">
            <h2 className="text-xl font-bold text-[#1a5c3a] border-b pb-3 flex items-center gap-2">
              <span>📖</span> জীবনবৃত্তান্ত ও পারিবারিক পরিচিতি
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label"><span className="label-text font-bold">পিতার নাম</span></label>
                <input
                  type="text"
                  value={data.biography.father}
                  onChange={(e) =>
                    setData({ ...data, biography: { ...data.biography, father: e.target.value } })
                  }
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-bold">মাতার নাম</span></label>
                <input
                  type="text"
                  value={data.biography.mother}
                  onChange={(e) =>
                    setData({ ...data, biography: { ...data.biography, mother: e.target.value } })
                  }
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-bold">জন্মতারিখ</span></label>
                <input
                  type="text"
                  value={data.biography.dob}
                  onChange={(e) =>
                    setData({ ...data, biography: { ...data.biography, dob: e.target.value } })
                  }
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-bold">শিক্ষাগত যোগ্যতা</span></label>
                <input
                  type="text"
                  value={data.biography.education}
                  onChange={(e) =>
                    setData({ ...data, biography: { ...data.biography, education: e.target.value } })
                  }
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-bold">মোবাইল নম্বর</span></label>
                <input
                  type="text"
                  value={data.biography.phone}
                  onChange={(e) =>
                    setData({ ...data, biography: { ...data.biography, phone: e.target.value } })
                  }
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-bold">ই-মেইল</span></label>
                <input
                  type="text"
                  value={data.biography.email}
                  onChange={(e) =>
                    setData({ ...data, biography: { ...data.biography, email: e.target.value } })
                  }
                  className="input input-bordered"
                />
              </div>

              <div className="form-control md:col-span-2">
                <label className="label"><span className="label-text font-bold">স্থায়ী ঠিকানা</span></label>
                <input
                  type="text"
                  value={data.biography.permanentAddress}
                  onChange={(e) =>
                    setData({ ...data, biography: { ...data.biography, permanentAddress: e.target.value } })
                  }
                  className="input input-bordered"
                />
              </div>

              <div className="form-control md:col-span-2">
                <label className="label"><span className="label-text font-bold">পারিবারিক ঐতিহ্য ও ইতিহাস</span></label>
                <textarea
                  rows={5}
                  value={data.biography.aboutText}
                  onChange={(e) =>
                    setData({ ...data, biography: { ...data.biography, aboutText: e.target.value } })
                  }
                  className="textarea textarea-bordered text-sm leading-relaxed"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PHOTO GALLERY MANAGEMENT */}
        {activeTab === "gallery" && (
          <div className="space-y-6">
            {/* Add Photo Form */}
            <div className="card bg-white shadow-sm border border-gray-200 p-6 rounded-2xl space-y-4">
              <h2 className="text-xl font-bold text-[#1a5c3a] border-b pb-3 flex items-center gap-2">
                <span>➕</span> নতুন ছবি যুক্ত করুন / Add New Gallery Photo
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label"><span className="label-text font-bold">ছবির শিরোনাম / Title</span></label>
                  <input
                    type="text"
                    placeholder="যেমন: নির্বাচনী জনসভা বা সমাবেশ"
                    value={newGallery.title}
                    onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
                    className="input input-bordered input-success"
                  />
                </div>

                <div className="form-control">
                  <label className="label"><span className="label-text font-bold">ক্যাটাগরি / Category</span></label>
                  <select
                    value={newGallery.category}
                    onChange={(e) => setNewGallery({ ...newGallery, category: e.target.value })}
                    className="select select-bordered select-success"
                  >
                    <option value="জনসংযোগ">জনসংযোগ</option>
                    <option value="রাজনৈতিক সমাবেশ">রাজনৈতিক সমাবেশ</option>
                    <option value="সামাজিক কর্মকাণ্ড">সামাজিক কর্মকাণ্ড</option>
                    <option value="শিক্ষা ও ত্রাণ">শিক্ষা ও ত্রাণ</option>
                    <option value="পোর্ট্রেট">পোর্ট্রেট</option>
                  </select>
                </div>

                {/* Upload Image */}
                <div className="form-control md:col-span-2">
                  <label className="label"><span className="label-text font-bold">ছবি আপলোড করুন বা লিংক দিন</span></label>
                  <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "gallery")}
                      className="file-input file-input-bordered file-input-success w-full max-w-xs"
                    />
                    <span className="text-gray-400 text-xs">অথবা URL:</span>
                    <input
                      type="text"
                      placeholder="https://example.com/photo.jpg"
                      value={newGallery.imageUrl}
                      onChange={(e) => setNewGallery({ ...newGallery, imageUrl: e.target.value })}
                      className="input input-bordered flex-1 w-full"
                    />
                  </div>
                </div>

                <div className="form-control md:col-span-2">
                  <label className="label"><span className="label-text font-bold">সংক্ষিপ্ত বিবরণ / Caption</span></label>
                  <input
                    type="text"
                    placeholder="ছবির স্থান বা তারিখ সম্পর্কিত তথ্য"
                    value={newGallery.caption}
                    onChange={(e) => setNewGallery({ ...newGallery, caption: e.target.value })}
                    className="input input-bordered"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={handleAddGalleryItem}
                  disabled={uploading}
                  className="btn btn-success text-white font-bold rounded-full px-6"
                >
                  {uploading ? "আপলোড হচ্ছে..." : "ফটো গ্যালারিতে যোগ করুন 📸"}
                </button>
              </div>
            </div>

            {/* Existing Gallery Photos List */}
            <div className="card bg-white shadow-sm border border-gray-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                বর্তমান গ্যালারি আইটেম ({data.gallery?.length || 0} টি ছবি)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {(data.gallery || []).map((item) => (
                  <div key={item.id} className="card bg-base-100 border border-gray-200 overflow-hidden shadow-sm">
                    <figure className="h-44 w-full bg-gray-100">
                      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                    </figure>
                    <div className="p-3 bg-white space-y-1">
                      <div className="badge badge-warning badge-xs font-semibold">{item.category}</div>
                      <h4 className="font-bold text-sm text-gray-800 truncate">{item.title}</h4>
                      <p className="text-xs text-gray-500 truncate">{item.caption}</p>
                      <button
                        onClick={() => handleDeleteGalleryItem(item.id)}
                        className="btn btn-error btn-xs text-white rounded-lg w-full mt-2"
                      >
                        🗑️ মুছে ফেলুন
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: VISIONS */}
        {activeTab === "visions" && (
          <div className="card bg-white shadow-sm border border-gray-200 p-6 rounded-2xl space-y-6">
            <h2 className="text-xl font-bold text-[#1a5c3a] border-b pb-3 flex items-center gap-2">
              <span>🎯</span> ভবিষ্যৎ অঙ্গীকার ও পরিকল্পনা
            </h2>

            <div className="space-y-4">
              {(data.visions || []).map((v, idx) => (
                <div key={v.id} className="p-4 bg-gray-50 rounded-xl border border-gray-200 grid sm:grid-cols-3 gap-3 items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{v.icon}</span>
                    <input
                      type="text"
                      value={v.title}
                      onChange={(e) => {
                        const newVisions = [...data.visions];
                        newVisions[idx].title = e.target.value;
                        setData({ ...data, visions: newVisions });
                      }}
                      className="input input-bordered input-sm font-bold w-full"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      value={v.points}
                      onChange={(e) => {
                        const newVisions = [...data.visions];
                        newVisions[idx].points = e.target.value;
                        setData({ ...data, visions: newVisions });
                      }}
                      className="input input-bordered input-sm w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Save Bar */}
        <div className="flex justify-end p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <button
            onClick={handleSaveData}
            disabled={saving}
            className="btn btn-warning font-bold text-emerald-950 px-8 rounded-full shadow-md"
          >
            {saving ? <span className="loading loading-spinner loading-sm"></span> : "💾 Save All Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

