"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#biography", label: "জীবনী", en: "Biography" },
  { href: "#political", label: "রাজনৈতিক জীবন", en: "Political Life" },
  { href: "#vision", label: "পরিকল্পনা", en: "Vision" },
  { href: "#gallery", label: "গ্যালারি", en: "Gallery" },
  { href: "#map", label: "নির্বাচনী এলাকা", en: "Election Area" },
  { href: "#contact", label: "যোগাযোগ", en: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"bn" | "en">("bn");

  return (
    <div className="navbar bg-party-green text-white shadow-lg sticky top-0 z-50 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white" onClick={() => setOpen(!open)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          {open && (
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-2 shadow text-gray-800">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}>
                    {lang === "bn" ? l.label : l.en}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link href="/" className="flex flex-col">
          <span className="font-bold text-lg text-white">
            {lang === "bn" ? "মোঃ মাজহারুল ইসলাম আকন্দ রবিউল" : "Md. Mazharul Islam Akando Robiul"}
          </span>
          <span className="badge badge-warning badge-sm font-semibold text-emerald-950 mt-0.5">
            {lang === "bn" ? "শরিফপুর ইউপি চেয়ারম্যান পদপ্রার্থী" : "Sharifpur UP Chairman Nominee"}
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-1 text-sm font-medium">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-white hover:text-party-gold hover:bg-white/10 rounded-lg transition-colors">
                {lang === "bn" ? l.label : l.en}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <button
          onClick={() => setLang(lang === "bn" ? "en" : "bn")}
          className="btn btn-warning btn-sm font-bold text-emerald-950 rounded-full"
        >
          {lang === "bn" ? "English" : "বাংলা"}
        </button>
      </div>
    </div>
  );
}
