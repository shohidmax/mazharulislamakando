"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-[#1a5c3a] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">যোগাযোগ করুন</h2>
          <p className="text-emerald-200 text-lg">Get in Touch</p>
          <div className="w-16 h-1 bg-warning mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-warning mb-4">যোগাযোগের ঠিকানা</h3>

            <div className="card bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
              <div className="card-body p-5">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <div className="text-xs text-emerald-200">মোবাইল নম্বর</div>
                    <a href="tel:+8801715226656" className="text-lg font-bold text-warning hover:underline">
                      ০১৭১৫-২২৬৬৫৬
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
              <div className="card-body p-5">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <div className="text-xs text-emerald-200">ই-মেইল এড্রেস</div>
                    <a href="mailto:robiakando56@gmail.com" className="text-base font-bold text-warning hover:underline">
                      robiakando56@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
              <div className="card-body p-5">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">🏠</div>
                  <div>
                    <div className="text-xs text-emerald-200">স্থায়ী ঠিকানা</div>
                    <p className="text-sm font-semibold text-white">
                      গ্রাম: রঘুনাথপুর, ডাকঘর: শ্রীরামপুর-২০০১, উপজেলা: জামালপুর সদর
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
              <div className="card-body p-5">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <div className="text-xs text-emerald-200">বর্তমান ঠিকানা</div>
                    <p className="text-sm font-semibold text-white">
                      বোষপাড়া, জামালপুর শহর, জামালপুর সদর, জামালপুর
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form with daisyUI inputs */}
          <div className="card bg-white text-gray-800 shadow-2xl">
            <div className="card-body">
              <h3 className="card-title text-[#1a5c3a] text-xl font-bold mb-4">
                বার্তা পাঠান / Send a Message
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">আপনার নাম / Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="নাম লিখুন"
                    className="input input-bordered input-success w-full bg-base-100"
                    required
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">মোবাইল নম্বর / Phone</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="০১৭১XXXXXXXX"
                    className="input input-bordered input-success w-full bg-base-100"
                    required
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">আপনার মতামত / বার্তা</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered textarea-success h-28 bg-base-100"
                    placeholder="আপনার বার্তা বা পরামর্শ লিখুন..."
                  ></textarea>
                </div>

                <div className="card-actions justify-end mt-4">
                  <button type="submit" className="btn btn-warning w-full font-bold text-emerald-950">
                    বার্তা পাঠান 🚀
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Share buttons */}
        <div className="mt-12 text-center border-t border-white/20 pt-8">
          <p className="text-emerald-200 mb-4 text-sm font-medium">সমর্থন জানাতে সোশ্যাল মিডিয়ায় শেয়ার করুন</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3005"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-info text-white font-semibold"
            >
              Facebook-এ শেয়ার
            </a>
            <a
              href="https://wa.me/?text=মোঃ মাজহারুল ইসলাম আকন্দ রবিউল — শরিফপুর ইউনিয়ন পরিষদ চেয়ারম্যান প্রার্থী"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-success text-white font-semibold"
            >
              WhatsApp-এ শেয়ার
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
