import heroImage from "../../../assets/images/hero.jpg";
const CallToAction = () => {
  return (
    <section id="cta-section" className="p-6 md:px-12 xl:px-[92px] 2xl:px-[128px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-6 xl:p-12 bg-gradient-to-br from-slate-50 to-blue-100 rounded-3xl">
        {/* left content */}
        <div>
          <span className="inline-block bg-white text-slate-700 text-sm px-4 py-1.5 rounded-full border border-slate-200 mb-6">
            Mulai Langkahmu
          </span>

          <h2 className="text-2xl xl:text-5xl font-semibold leading-tight text-slate-900 mb-4">
            Siap Bangun Inovasi
            <br />
            Digital <span className="text-blue-500">Nyata?</span>
          </h2>

          <p className="text-sm xl:text-base text-gray mb-8 max-w-md">
            Bergabunglah bersama ribuan talenta muda Indonesia di ekosistem
            Mahreen. Kembangkan keahlianmu dan ciptakan solusi digital hari ini.
          </p>
          <button className="text-sm xl:text-base  bg-blue text-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-slate-800">
            Gabung Sekarang
            <i className="ti ti-arrow-up-right" />
          </button>
        </div>

        {/* right image with floating card */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={heroImage}
            alt="Course creator"
            className="w-full h-[320px] object-cover rounded-2xl"
          />

          <div className="absolute top-6 left-6 bg-white rounded-xl shadow-lg p-4 w-56">
            <p className="text-sm text-slate-500 mb-1">Total Enrollments</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-semibold text-slate-900">
                16,000+
              </span>
              <span className="text-sm text-blue-500 flex items-center gap-0.5">
                <i className="ti ti-arrow-up" /> 16.19%
              </span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-400 rounded-full"
                style={{ width: "65%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
