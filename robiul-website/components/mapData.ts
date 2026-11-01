export interface PlaceLocation {
  id: string;
  pos: [number, number];
  title: string;
  en: string;
  category: string;
  description: string;
  gmapsUrl: string;
}

export const locations: PlaceLocation[] = [
  {
    id: "up",
    pos: [24.895, 89.955],
    title: "শরিফপুর ইউনিয়ন পরিষদ ভবন",
    en: "Sharifpur Union Parishad Complex",
    category: "প্রশাসনিক কেন্দ্র",
    description: "শরিফপুর ইউনিয়নের প্রশাসনিক কেন্দ্র ও পরিষদ ভবন। স্থানীয় নাগরিক সেবা ও উন্নয়ন কার্যক্রমের কেন্দ্রস্থল।",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=24.895,89.955",
  },
  {
    id: "raghunathpur",
    pos: [24.905, 89.935],
    title: "রঘুনাথপুর গ্রাম ও উচ্চ বিদ্যালয়",
    en: "Raghunathpur Village & High School",
    category: "জন্মস্থান ও শিক্ষা প্রতিষ্ঠান",
    description: "প্রার্থী মোঃ মাজহারুল ইসলাম আকন্দ রবিউল সাহেবের জন্মস্থান। তাঁর পরিবারের দানকৃত জমিতে প্রতিষ্ঠিত রঘুনাথপুর উচ্চ বিদ্যালয় এখানে অবস্থিত।",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=24.905,89.935",
  },
  {
    id: "srirampur",
    pos: [24.888, 89.948],
    title: "শ্রীরামপুর বাজার ও ডাকঘর",
    en: "Srirampur Bazar & Post Office (2001)",
    category: "বাণিজ্যিক ও ডাক যোগাযোগ",
    description: "শরিফপুর ইউনিয়নের অন্যতম প্রধান সংযোগস্থল ও বাজার কেন্দ্র। পোস্ট কোড: শ্রীরামপুর-২০০১।",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=24.888,89.948",
  },
  {
    id: "jamalpur_sadar",
    pos: [24.92, 89.96],
    title: "জামালপুর সদর উপজেলা সদর দপ্তর",
    en: "Jamalpur Sadar Upazila HQ",
    category: "উপজেলা সদর",
    description: "জামালপুর সদর উপজেলার মূল প্রশাসনিক কেন্দ্র এবং সরকারি দফতরসমূহ।",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=24.92,89.96",
  },
];

