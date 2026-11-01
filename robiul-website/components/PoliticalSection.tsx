const timeline = [
  {
    year: "১৯৯০",
    title: "স্বৈরাচারবিরোধী আন্দোলন",
    en: "Anti-autocracy Movement",
    desc: "দশম শ্রেণির ছাত্র হিসেবে এরশাদবিরোধী গণ-আন্দোলনে অংশগ্রহণ করেন — নান্দিনা কলেজ ছাত্রদলের সঙ্গে সম্পৃক্ত হয়ে। এ সময় থেকেই রাজনৈতিক পথচলার সূচনা।",
  },
  {
    year: "১৯৯১",
    title: "জাতীয় সংসদ নির্বাচন",
    en: "National Election — Polling Duty",
    desc: "জামালপুরে বিএনপি মনোনীত প্রার্থী সিরাজুল হকের নির্বাচনে শ্রীরামপুর বিমুখী উচ্চ বিদ্যালয় কেন্দ্রের দায়িত্ব পালন করেন।",
  },
  {
    year: "১৯৯৩",
    title: "২নং শরিফপুর ইউনিয়ন ছাত্রদল",
    en: "Sharifpur Union Chhatra Dal",
    desc: "২নং শরিফপুর ইউনিয়ন ছাত্রদল কমিটিতে সাধারণ সম্পাদক হিসেবে নির্বাচিত হন এবং দীর্ঘদিন ভারপ্রাপ্ত সাধারণ সম্পাদকের দায়িত্ব পালন করেন।",
  },
  {
    year: "১৯৯৫",
    title: "কলেজ ছাত্র সংসদ নির্বাচন",
    en: "College Student Union",
    desc: "সরকারি আশেক মাহমুদ কলেজ ছাত্র সংসদ নির্বাচনে রুমল বাবু-জিলানি পরিষদ থেকে সাহিত্য সম্পাদক পদে প্রার্থী হন।",
  },
  {
    year: "১৯৯৬",
    title: "কলেজ ছাত্রদলের দায়িত্ব",
    en: "College Chhatra Dal Secretary",
    desc: "সরকারি আশেক মাহমুদ কলেজ ছাত্রদল কমিটিতে সাহিত্য সম্পাদক হিসেবে দায়িত্ব পালন করেন।",
  },
  {
    year: "১৯৯৬",
    title: "জাতীয় সংসদ নির্বাচন",
    en: "National Election Support",
    desc: "১৯৯৬ সালের জাতীয় সংসদ নির্বাচনে বিএনপি প্রার্থীর পক্ষে সক্রিয় ভূমিকা পালন করেন।",
  },
  {
    year: "২০০১",
    title: "জাতীয় সংসদ নির্বাচন ও বিজয়",
    en: "Election Victory — 2001",
    desc: "২০০১ সালের নির্বাচনে বিএনপি প্রার্থীর পক্ষে নিরলস কাজ করেন এবং বিজয় নিশ্চিত করতে গুরুত্বপূর্ণ ভূমিকা রাখেন।",
  },
  {
    year: "২০১৮",
    title: "ইউনিয়ন পরিষদ নির্বাচন",
    en: "Union Parishad Election",
    desc: "শরিফপুর ইউনিয়ন পরিষদ চেয়ারম্যান পদে প্রতিদ্বন্দ্বিতা করেন এবং উল্লেখযোগ্য ভোট লাভ করেন।",
  },
  {
    year: "২০২৪",
    title: "বর্তমান — চেয়ারম্যান পদে মনোনয়নপ্রত্যাশী",
    en: "Current — Chairman Nominee",
    desc: "আসন্ন শরিফপুর ইউনিয়ন পরিষদ নির্বাচনে বিএনপি দলীয় চেয়ারম্যান পদে মনোনয়নপ্রত্যাশী।",
    highlight: true,
  },
];

export default function PoliticalSection() {
  return (
    <section id="political" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a5c3a] mb-3">
            রাজনৈতিক জীবন ও অভিজ্ঞতা
          </h2>
          <p className="text-gray-500 text-lg">Political Life & Organizational Experience</p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1a5c3a]/20 -translate-x-1/2" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={`${item.year}-${item.title}-${i}`}
                className={`relative flex flex-col md:flex-row gap-4 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 top-5 z-10 border-2 border-white shadow
                  ${item.highlight ? 'bg-yellow-400 scale-125' : 'bg-[#1a5c3a]'}
                ">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      item.highlight ? "bg-yellow-400 scale-125" : "bg-[#1a5c3a]"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                  <div
                    className={`rounded-2xl p-5 shadow-sm border ${
                      item.highlight
                        ? "bg-[#1a5c3a] text-white border-yellow-400"
                        : "bg-gray-50 border-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-sm font-bold px-3 py-1 rounded-full ${
                          item.highlight
                            ? "bg-yellow-400 text-[#1a5c3a]"
                            : "bg-[#1a5c3a] text-white"
                        }`}
                      >
                        {item.year}
                      </span>
                    </div>
                    <h3
                      className={`font-bold text-lg mb-1 ${
                        item.highlight ? "text-yellow-300" : "text-[#1a5c3a]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-2 italic">{item.en}</p>
                    <p className={`text-sm leading-relaxed ${item.highlight ? "text-white/90" : "text-gray-600"}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

