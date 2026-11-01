const visions = [
  {
    icon: "🎓",
    title: "শিক্ষা উন্নয়ন",
    en: "Education Development",
    points: [
      "প্রাথমিক ও মাধ্যমিক বিদ্যালয়ের অবকাঠামো উন্নয়ন",
      "ঝরে পড়া শিক্ষার্থীদের পুনরায় বিদ্যালয়মুখী করা",
      "মেধাবী ও দরিদ্র শিক্ষার্থীদের বৃত্তির ব্যবস্থা",
    ],
  },
  {
    icon: "🏥",
    title: "স্বাস্থ্যসেবা",
    en: "Healthcare",
    points: [
      "কমিউনিটি ক্লিনিক সচল ও কার্যকর রাখা",
      "বিনামূল্যে স্বাস্থ্য ক্যাম্প আয়োজন",
      "প্রসূতি মা ও শিশুর স্বাস্থ্যসেবা নিশ্চিতকরণ",
    ],
  },
  {
    icon: "🛣️",
    title: "যোগাযোগ ও অবকাঠামো",
    en: "Roads & Infrastructure",
    points: [
      "ইউনিয়নের সকল রাস্তা পাকাকরণ",
      "ব্রিজ ও কালভার্ট নির্মাণ",
      "বন্যা নিয়ন্ত্রণ বাঁধ ও ড্রেনেজ ব্যবস্থা উন্নয়ন",
    ],
  },
  {
    icon: "👩‍🌾",
    title: "কৃষি ও কর্মসংস্থান",
    en: "Agriculture & Employment",
    points: [
      "কৃষকদের সার-বীজ সহায়তা ও প্রশিক্ষণ",
      "যুব উদ্যোক্তাদের ঋণ সহায়তা প্রদান",
      "ক্ষুদ্র ও মাঝারি শিল্পের প্রসার",
    ],
  },
  {
    icon: "💧",
    title: "পানি ও পয়ঃনিষ্কাশন",
    en: "Water & Sanitation",
    points: [
      "বিশুদ্ধ পানির সুষম বণ্টন",
      "স্যানিটেশন ও স্বাস্থ্যসম্মত পায়খানা নিশ্চিতকরণ",
      "খাল ও জলাশয় সংস্কার",
    ],
  },
  {
    icon: "👵",
    title: "সামাজিক নিরাপত্তা",
    en: "Social Safety Net",
    points: [
      "বয়স্ক, বিধবা ও প্রতিবন্ধীদের ভাতা নিশ্চিতকরণ",
      "ভিজিডি/ভিজিএফ কার্ড সুষম বিতরণ",
      "দুঃস্থ পরিবারের পুনর্বাসন",
    ],
  },
];

export default function VisionSection() {
  return (
    <section id="vision" className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a5c3a] mb-3">
            ভবিষ্যৎ পরিকল্পনা ও অঙ্গীকার
          </h2>
          <p className="text-gray-500 text-lg">Vision & Commitments for Sharifpur Union</p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Banner */}
        <div className="bg-[#1a5c3a] text-white rounded-2xl p-6 mb-10 text-center shadow-lg">
          <p className="text-xl md:text-2xl font-bold leading-relaxed">
            &ldquo;শরিফপুর ইউনিয়নকে একটি আধুনিক, উন্নত ও সমৃদ্ধ ইউনিয়ন হিসেবে গড়ে তোলাই আমার লক্ষ্য।&rdquo;
          </p>
          <p className="text-yellow-300 mt-2 text-sm italic">
            "My goal is to build Sharifpur Union into a modern, developed, and prosperous community."
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visions.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-3">{v.icon}</div>
              <h3 className="text-lg font-bold text-[#1a5c3a] mb-0.5">{v.title}</h3>
              <p className="text-xs text-gray-400 mb-4 italic">{v.en}</p>
              <ul className="space-y-2">
                {v.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-yellow-500 mt-1 flex-shrink-0">✔</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

