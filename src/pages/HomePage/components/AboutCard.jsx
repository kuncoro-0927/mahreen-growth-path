import about from "../../../assets/images/about.png";
const AboutCard = () => {
  return (
    <div className="flex flex-col rounded-3xl bg-white p-5 shadow-sm xl:max-w-[55%]">
      {/* Header */}
      <div className="flex flex-col items-start  gap-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex flex-col md:flex-row items-start xl:items-center justify-between gap-5 w-full mb-5">
          <div>
            <h2 className="text-base xl:text-xl font-semibold text-gray-800">
              Diskusi Perancangan Ulang — Tim Produk
            </h2>
            <p className="text-sm text-gray-500">26 Dec 2026 • 2:00 PM</p>
          </div>

          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue text-white shadow">
              <i className="bi bi-envelope"></i>
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue text-white shadow">
              <i className="bi bi-link-45deg text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row mt-auto gap-4">
        {/* Left Side */}
        <div className="col-span-2 flex flex-col gap-4 lg:w-1/2">
          {/* Timeline */}
          <div className="rounded-2xl bg-blue-50 p-5 ">
            <div className="relative h-28 rounded-xl bg-white shadow-sm ">
              <div className="absolute flex items-center gap-1 top-2 left-2">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
              {/* Lines */}
              <div className="absolute left-5 top-7 h-2 w-12 rounded-full bg-blue-500/50"></div>
              <div className="absolute left-5 top-10 h-2 w-20 rounded-full bg-blue-500"></div>

              <div className="absolute left-35 top-7 h-2 w-12 rounded-full bg-blue-500/50"></div>
              <div className="absolute left-35 top-10 h-2 w-20 rounded-full bg-blue-500"></div>

              <div className="absolute left-5 top-18 h-1 w-25 rounded-full bg-blue-500/50"></div>
              <div className="absolute left-5 top-20 h-1 w-30 rounded-full bg-blue-500"></div>

              {/* Labels */}
              <div className="absolute -left-2 top-16">
                <div className="relative inline-block">
                  <div className="rounded-full bg-green-600 px-4 py-1 text-xs text-white">
                    Kuncoro
                  </div>

                  <i className="bi bi-cursor-fill absolute -top-4 -right-3 text-green-600 text-xl"></i>
                </div>
              </div>

              <div className="absolute right-3 top-25">
                <div className="relative inline-block">
                  <div className="rounded-full bg-blue-600 px-4 py-1 text-xs text-white">
                    Jefri
                  </div>

                  <i className="bi bi-cursor-fill absolute -top-4 -left-3 text-blue-600 text-xl scale-x-[-1]"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="rounded-2xl bg-gray-100/50 p-5 shadow-sm xl:max-w-[320px]">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-700 text-sm">
                Analisis
              </h3>

              <button className="text-sm text-gray-500">All time ▼</button>
            </div>

            {/* Gauge */}
            <div className="flex flex-col items-center">
              <div className="relative h-32 w-64 overflow-hidden">
                {/* Background */}
                <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border-[22px] border-blue"></div>

                {/* Progress dari kanan */}
                <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border-[22px] border-transparent border-t-blue-200 border-r-blue-200 rotate-0"></div>

                <div className="absolute bottom-15 left-1/2 -translate-x-1/2 text-center">
                  <h1 className="text-4xl font-bold text-gray-800">54%</h1>
                  <p className="text-sm text-gray-500">Daerah Terbantu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative overflow-hidden rounded-3xl bg-white sm:w-full lg:w-[500px] p-6 shadow-sm">
          {/* Gradient kanan atas */}
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-blue-300/50 blur-3xl"></div>

          {/* Gradient kiri bawah */}
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-200/60 blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10  h-full">
            <div className="mb-6 flex items-center gap-2 rounded-2xl w-fit border border-white/10 bg-white/40 backdrop-blur-xl px-4 shadow-sm py-2">
              <span className="text-sm xl:text-base font-normal">Mahreen Indonesia</span>
            </div>

            <h1 className="max-w-[150px] xl:max-w-[220px] text-2xl xl:text-3xl font-semibold leading-tight">
              Jadi Bagian dari 100+ Talenta Digital
            </h1>

            <img
              src={about}
              alt="person"
              className="absolute -bottom-6 -right-8 h-[220px] lg:h-[280px] xl:h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
