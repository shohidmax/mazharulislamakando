export interface DistrictInfo {
  name: string;
  bn: string;
  division: string;
  color: string;
  isJamalpur?: boolean;
  details?: string;
}

// 7 distinctive pastel-vibrant palette colors matched directly to user's reference illustration
const PALETTE = [
  "#F6B26B", // Warm Orange / Amber
  "#6FA8DC", // Soft Sky Blue
  "#93C47D", // Olive / Fresh Green
  "#FFD966", // Sunny Yellow
  "#E06666", // Soft Coral Red
  "#76A5AF", // Muted Teal / Seafoam
  "#D5A6BD", // Lilac / Soft Purple
];

export const DISTRICT_MAP: Record<string, DistrictInfo> = {
  // Mymensingh Division
  Jamalpur: {
    name: "Jamalpur",
    bn: "জামালপুর",
    division: "ময়মনসিংহ বিভাগ",
    color: "#1a5c3a", // Special Highlight: BNP emerald green
    isJamalpur: true,
    details: "মোঃ মাজহারুল ইসলাম আকন্দ রবিউল সাহেবের নিজ জেলা ও শরিফপুর ইউনিয়ন পরিষদের নির্বাচনী এলাকা।",
  },
  Mymensingh: { name: "Mymensingh", bn: "ময়মনসিংহ", division: "ময়মনসিংহ বিভাগ", color: "#93C47D" },
  Netrakona: { name: "Netrakona", bn: "নেত্রকোণা", division: "ময়মনসিংহ বিভাগ", color: "#6FA8DC" },
  Sherpur: { name: "Sherpur", bn: "শেরপুর", division: "ময়মনসিংহ বিভাগ", color: "#F6B26B" },

  // Dhaka Division
  Dhaka: { name: "Dhaka", bn: "ঢাকা", division: "ঢাকা বিভাগ", color: "#6FA8DC" },
  Gazipur: { name: "Gazipur", bn: "গাজীপুর", division: "ঢাকা বিভাগ", color: "#E06666" },
  Narsingdi: { name: "Narsingdi", bn: "নরসিংদী", division: "ঢাকা বিভাগ", color: "#76A5AF" },
  Narayanganj: { name: "Narayanganj", bn: "নারায়ণগঞ্জ", division: "ঢাকা বিভাগ", color: "#93C47D" },
  Tangail: { name: "Tangail", bn: "টাঙ্গাইল", division: "ঢাকা বিভাগ", color: "#FFD966" },
  Kishoreganj: { name: "Kishoreganj", bn: "কিশোরগঞ্জ", division: "ঢাকা বিভাগ", color: "#FFD966" },
  Manikganj: { name: "Manikganj", bn: "মানিকগঞ্জ", division: "ঢাকা বিভাগ", color: "#76A5AF" },
  Munshiganj: { name: "Munshiganj", bn: "মুন্সীগঞ্জ", division: "ঢাকা বিভাগ", color: "#FFD966" },
  Faridpur: { name: "Faridpur", bn: "ফরিদপুর", division: "ঢাকা বিভাগ", color: "#93C47D" },
  Madaripur: { name: "Madaripur", bn: "মাদারীপুর", division: "ঢাকা বিভাগ", color: "#93C47D" },
  Gopalganj: { name: "Gopalganj", bn: "গোপালগঞ্জ", division: "ঢাকা বিভাগ", color: "#6FA8DC" },
  Rajbari: { name: "Rajbari", bn: "রাজবাড়ী", division: "ঢাকা বিভাগ", color: "#FFD966" },
  Shariatpur: { name: "Shariatpur", bn: "শরীয়তপুর", division: "ঢাকা বিভাগ", color: "#E06666" },

  // Chittagong Division
  Chittagong: { name: "Chittagong", bn: "চট্টগ্রাম", division: "চট্টগ্রাম বিভাগ", color: "#D5A6BD" },
  Coxs_Bazar: { name: "Cox's Bazar", bn: "কক্সবাজার", division: "চট্টগ্রাম বিভাগ", color: "#E06666" },
  "Cox's Bazar": { name: "Cox's Bazar", bn: "কক্সবাজার", division: "চট্টগ্রাম বিভাগ", color: "#E06666" },
  Comilla: { name: "Comilla", bn: "কুমিল্লা", division: "চট্টগ্রাম বিভাগ", color: "#6FA8DC" },
  Chandpur: { name: "Chandpur", bn: "চাঁদপুর", division: "চট্টগ্রাম বিভাগ", color: "#F6B26B" },
  Brahamanbaria: { name: "Brahmanbaria", bn: "ব্রাহ্মণবাড়িয়া", division: "চট্টগ্রাম বিভাগ", color: "#D5A6BD" },
  Brahmanbaria: { name: "Brahmanbaria", bn: "ব্রাহ্মণবাড়িয়া", division: "চট্টগ্রাম বিভাগ", color: "#D5A6BD" },
  Feni: { name: "Feni", bn: "ফেনী", division: "চট্টগ্রাম বিভাগ", color: "#93C47D" },
  Lakshmipur: { name: "Lakshmipur", bn: "লক্ষ্মীপুর", division: "চট্টগ্রাম বিভাগ", color: "#FFD966" },
  Noakhali: { name: "Noakhali", bn: "নোয়াখালী", division: "চট্টগ্রাম বিভাগ", color: "#FFD966" },
  Bandarban: { name: "Bandarban", bn: "বান্দরবান", division: "চট্টগ্রাম বিভাগ", color: "#FFD966" },
  Khagrachhari: { name: "Khagrachhari", bn: "খাগড়াছড়ি", division: "চট্টগ্রাম বিভাগ", color: "#F6B26B" },
  Rangamati: { name: "Rangamati", bn: "রাঙ্গামাটি", division: "চট্টগ্রাম বিভাগ", color: "#6FA8DC" },

  // Rajshahi Division
  Rajshahi: { name: "Rajshahi", bn: "রাজশাহী", division: "রাজশাহী বিভাগ", color: "#FFD966" },
  Bogra: { name: "Bogra", bn: "বগুড়া", division: "রাজশাহী বিভাগ", color: "#93C47D" },
  Joypurhat: { name: "Joypurhat", bn: "জয়পুরহাট", division: "রাজশাহী বিভাগ", color: "#FFD966" },
  Naogaon: { name: "Naogaon", bn: "নওগাঁ", division: "রাজশাহী বিভাগ", color: "#6FA8DC" },
  Natore: { name: "Natore", bn: "নাটোর", division: "রাজশাহী বিভাগ", color: "#D5A6BD" },
  Nawabganj: { name: "Nawabganj", bn: "চাঁপাইনবাবগঞ্জ", division: "রাজশাহী বিভাগ", color: "#93C47D" },
  Pabna: { name: "Pabna", bn: "পাবনা", division: "রাজশাহী বিভাগ", color: "#93C47D" },
  Sirajganj: { name: "Sirajganj", bn: "সিরাজগঞ্জ", division: "রাজশাহী বিভাগ", color: "#F6B26B" },

  // Rangpur Division
  Rangpur: { name: "Rangpur", bn: "রংপুর", division: "রংপুর বিভাগ", color: "#D5A6BD" },
  Dinajpur: { name: "Dinajpur", bn: "দিনাজপুর", division: "রংপুর বিভাগ", color: "#F6B26B" },
  Gaibandha: { name: "Gaibandha", bn: "গাইবান্ধা", division: "রংপুর বিভাগ", color: "#6FA8DC" },
  Kurigram: { name: "Kurigram", bn: "কুড়িগ্রাম", division: "রংপুর বিভাগ", color: "#FFD966" },
  Lalmonirhat: { name: "Lalmonirhat", bn: "লালমনিরহাট", division: "রংপুর বিভাগ", color: "#93C47D" },
  Nilphamari: { name: "Nilphamari", bn: "নীলফামারী", division: "রংপুর বিভাগ", color: "#6FA8DC" },
  Panchagarh: { name: "Panchagarh", bn: "পঞ্চগড়", division: "রংপুর বিভাগ", color: "#93C47D" },
  Thakurgaon: { name: "Thakurgaon", bn: "ঠাকুরগাঁও", division: "রংপুর বিভাগ", color: "#FFD966" },

  // Sylhet Division
  Sylhet: { name: "Sylhet", bn: "সিলেট", division: "সিলেট বিভাগ", color: "#93C47D" },
  Habiganj: { name: "Habiganj", bn: "হবিগঞ্জ", division: "সিলেট বিভাগ", color: "#D5A6BD" },
  Moulvibazar: { name: "Moulvibazar", bn: "মৌলভীবাজার", division: "সিলেট বিভাগ", color: "#FFD966" },
  Sunamganj: { name: "Sunamganj", bn: "সুনামগঞ্জ", division: "সিলেট বিভাগ", color: "#F6B26B" },

  // Khulna Division
  Khulna: { name: "Khulna", bn: "খুলনা", division: "খুলনা বিভাগ", color: "#93C47D" },
  Bagerhat: { name: "Bagerhat", bn: "বাগেরহাট", division: "খুলনা বিভাগ", color: "#F6B26B" },
  Chuadanga: { name: "Chuadanga", bn: "চুয়াডাঙ্গা", division: "খুলনা বিভাগ", color: "#FFD966" },
  Jessore: { name: "Jessore", bn: "যশোর", division: "খুলনা বিভাগ", color: "#F6B26B" },
  Jhenaidah: { name: "Jhenaidah", bn: "ঝিনাইদহ", division: "খুলনা বিভাগ", color: "#6FA8DC" },
  Kushtia: { name: "Kushtia", bn: "কুষ্টিয়া", division: "খুলনা বিভাগ", color: "#6FA8DC" },
  Magura: { name: "Magura", bn: "মাগুরা", division: "খুলনা বিভাগ", color: "#76A5AF" },
  Meherpur: { name: "Meherpur", bn: "মেহেরপুর", division: "খুলনা বিভাগ", color: "#FFD966" },
  Narail: { name: "Narail", bn: "নড়াইল", division: "খুলনা বিভাগ", color: "#FFD966" },
  Satkhira: { name: "Satkhira", bn: "সাতক্ষীরা", division: "খুলনা বিভাগ", color: "#6FA8DC" },

  // Barisal Division
  Barisal: { name: "Barisal", bn: "বরিশাল", division: "বরিশাল বিভাগ", color: "#FFD966" },
  Barguna: { name: "Barguna", bn: "বরগুনা", division: "বরিশাল বিভাগ", color: "#F6B26B" },
  Bhola: { name: "Bhola", bn: "ভোলা", division: "বরিশাল বিভাগ", color: "#93C47D" },
  Jhalokati: { name: "Jhalokati", bn: "ঝালকাঠি", division: "বরিশাল বিভাগ", color: "#FFD966" },
  Patuakhali: { name: "Patuakhali", bn: "পটুয়াখালী", division: "বরিশাল বিভাগ", color: "#D5A6BD" },
  Pirojpur: { name: "Pirojpur", bn: "পিরোজপুর", division: "বরিশাল বিভাগ", color: "#F6B26B" },
};

export const getDistrictMeta = (shapeName: string): DistrictInfo => {
  if (DISTRICT_MAP[shapeName]) return DISTRICT_MAP[shapeName];
  // Fallback
  const hash = shapeName.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return {
    name: shapeName,
    bn: shapeName,
    division: "বাংলাদেশ",
    color: PALETTE[hash % PALETTE.length],
  };
};

