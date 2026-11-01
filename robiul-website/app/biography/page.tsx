import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "মাজহারুল ইসলাম আকন্দ রবিউল — জীবনী | Mazharul Islam Akando Robiul Biography",
  description:
    "মোঃ মাজহারুল ইসলাম আকন্দ রবিউলের পূর্ণ জীবনী। বাংলাদেশী রাজনীতিবিদ, বিএনপি নেতা ও শরিফপুর ইউনিয়ন পরিষদ চেয়ারম্যান পদপ্রার্থী।",
  keywords: [
    "Mazharul Islam Akando Robiul biography",
    "মাজহারুল ইসলাম আকন্দ রবিউল জীবনী",
    "BNP Jamalpur politician",
    "Sharifpur Union Parishad Chairman",
  ],
};

export default function BiographyPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Wikipedia-style infobox */}
      <div className="float-right ml-6 mb-6 w-72 border border-gray-300 rounded-lg overflow-hidden shadow-sm hidden md:block">
        <div className="bg-[#1a5c3a] text-white text-center py-2 font-bold text-sm">
          মোঃ মাজহারুল ইসলাম আকন্দ রবিউল
        </div>
        <div className="bg-gray-100 p-4 text-center">
          <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full flex items-center justify-center text-5xl mb-2">
            👤
          </div>
          <p className="text-xs text-gray-500 italic">বিএনপি নেতা ও চেয়ারম্যান প্রার্থী</p>
        </div>
        <table className="w-full text-xs border-collapse">
          <tbody>
            {[
              ["জন্ম", "২১ এপ্রিল ১৯৭৪"],
              ["জন্মস্থান", "রঘুনাথপুর, জামালপুর"],
              ["জাতীয়তা", "বাংলাদেশী"],
              ["ধর্ম", "ইসলাম"],
              ["শিক্ষা", "বি.কম"],
              ["পেশা", "রাজনীতিবিদ, ব্যবসায়ী"],
              ["দল", "বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)"],
              ["পিতা", "মরহুম মোজাম্মেল হক আকন্দ"],
              ["মাতা", "মরহুমা মাজেদা বেগম"],
            ].map(([k, v]) => (
              <tr key={k} className="border-t border-gray-200">
                <td className="py-1.5 px-3 font-semibold text-gray-500 bg-gray-50 w-1/3">{k}</td>
                <td className="py-1.5 px-3 text-gray-800">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
        মোঃ মাজহারুল ইসলাম আকন্দ রবিউল
      </h1>
      <p className="text-gray-500 mb-6 text-lg">Md. Mazharul Islam Akando Robiul</p>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>
          <strong>মোঃ মাজহারুল ইসলাম আকন্দ রবিউল</strong> (জন্ম: ২১ এপ্রিল ১৯৭৪) একজন বাংলাদেশী রাজনীতিবিদ ও ব্যবসায়ী। তিনি বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)-র একনিষ্ঠ কর্মী ও নেতা এবং জামালপুর সদর উপজেলার শরিফপুর ইউনিয়ন পরিষদের চেয়ারম্যান পদে মনোনয়নপ্রত্যাশী।
        </p>

        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">প্রাথমিক জীবন ও শিক্ষা</h2>
        <p>
          মাজহারুল ইসলাম আকন্দ রবিউল জামালপুর জেলার ঐতিহ্যবাহী রঘুনাথপুর গ্রামে জন্মগ্রহণ করেন। তাঁর পিতা মরহুম মোজাম্মেল হক আকন্দ ছিলেন রঘুনাথপুর প্রাথমিক বিদ্যালয়ের প্রতিষ্ঠাতা শিক্ষক এবং ওই বিদ্যালয়ের জমির দাতা ছিল তাঁদের পরিবার। মাতার নাম মরহুমা মাজেদা বেগম।
        </p>
        <p>
          তিনি রঘুনাথপুর প্রাথমিক বিদ্যালয় থেকে প্রাথমিক শিক্ষা সম্পন্ন করেন এবং পরবর্তীতে উচ্চ বিদ্যালয় ও কলেজ পর্যায়ের শিক্ষা অর্জন করেন। তিনি সরকারি আশেক মাহমুদ কলেজ, জামালপুর থেকে বাণিজ্যে স্নাতক (বি.কম) ডিগ্রি অর্জন করেন।
        </p>

        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">পারিবারিক ঐতিহ্য</h2>
        <p>
          রবিউলের পরিবার শিক্ষা বিস্তার ও সমাজসেবায় অগ্রণী ভূমিকা পালন করে আসছে। ১৯৭২ সালে রঘুনাথপুর প্রাথমিক বিদ্যালয় প্রতিষ্ঠায় তাঁর পরিবার জমি দান করেন এবং তাঁর পিতা প্রতিষ্ঠাতা শিক্ষক হিসেবে কাজ করেন। ১৯৮৮ সালে বিদ্যালয়টি রঘুনাথপুর উচ্চ বিদ্যালয়ে উন্নীত হয়।
        </p>

        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">রাজনৈতিক জীবন</h2>
        <p>
          ১৯৯০ সালে স্বৈরাচারী এরশাদবিরোধী গণ-আন্দোলনের সময় দশম শ্রেণির ছাত্র হিসেবে রবিউল সক্রিয়ভাবে আন্দোলনে অংশগ্রহণ করেন। নান্দিনা কলেজ ছাত্রদলের সঙ্গে সম্পৃক্ত হয়ে তিনি তাঁর রাজনৈতিক জীবন শুরু করেন।
        </p>
        <p>
          ১৯৯১ সালের জাতীয় সংসদ নির্বাচনে জামালপুরে বিএনপির প্রার্থী সিরাজুল হকের পক্ষে নির্বাচন পরিচালনায় সহায়তা করেন। ১৯৯৩ সালে ২নং শরিফপুর ইউনিয়ন ছাত্রদল কমিটিতে সাধারণ সম্পাদক নির্বাচিত হন।
        </p>
        <p>
          ১৯৯৪ সালে বিএনপি চেয়ারপারসন বেগম খালেদা জিয়ার রঘুনাথপুর সফরে সক্রিয় ভূমিকা পালন করেন — এটি তাঁর রাজনৈতিক জীবনের একটি মাইলফলক।
        </p>
        <p>
          ১৯৯৬ সালে সরকারি আশেক মাহমুদ কলেজ ছাত্রদল কমিটিতে সাহিত্য সম্পাদক হিসেবে দায়িত্ব পালন করেন। ২০০১ সালের জাতীয় নির্বাচনে বিএনপির বিজয়ে গুরুত্বপূর্ণ অবদান রাখেন।
        </p>

        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">শরিফপুর ইউনিয়ন পরিষদ</h2>
        <p>
          শরিফপুর ইউনিয়ন পরিষদ জামালপুর সদর উপজেলার একটি গুরুত্বপূর্ণ ইউনিয়ন। রবিউল এই ইউনিয়নের উন্নয়নে দীর্ঘদিন ধরে নিবেদিতভাবে কাজ করছেন। শিক্ষা, স্বাস্থ্য, যোগাযোগ ও কৃষি খাতে ব্যাপক পরিকল্পনা নিয়ে তিনি চেয়ারম্যান পদে প্রতিদ্বন্দ্বিতার প্রস্তুতি নিচ্ছেন।
        </p>

        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">যোগাযোগ তথ্য</h2>
        <ul className="list-none space-y-1">
          <li>📞 মোবাইল: ০১৭১৫-২২৬৬৫৬</li>
          <li>📧 ই-মেইল: robiakando56@gmail.com</li>
          <li>🪪 জাতীয় পরিচয়পত্র: ১৯৩ ৯০২ ৭৪৫২</li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-[#1a5c3a] p-4 rounded-r-xl mt-6">
          <p className="text-sm text-gray-500 italic">
            <strong>তথ্যসূত্র:</strong> এই জীবনীটি মোঃ মাজহারুল ইসলাম আকন্দ রবিউল কর্তৃক প্রদত্ত তথ্য এবং শরিফপুর ইউনিয়ন পরিষদের নথির উপর ভিত্তি করে রচিত।
          </p>
        </div>
      </div>

      {/* Back link */}
      <div className="mt-10">
        <a href="/" className="text-[#1a5c3a] font-bold hover:underline">← প্রধান পাতায় ফিরুন / Back to Home</a>
      </div>
    </article>
  );
}

