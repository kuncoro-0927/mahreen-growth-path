const ProgramTwo = () => {
  return (
    <div className="rounded-xl relative overflow-hidden bg-gradient-to-b from-blue-50 to-white p-4">

      <div className="bg-white rounded-full shadow-md px-4 py-3 flex items-center justify-between relative">
        <span className="text-blue-500 font-medium flex items-center gap-2">
          <span className="text-sm xl:text-lg">+</span> Tambah Tugas Baru
        </span>

        <div className="absolute right-1 top-12 xl:right-5 xl:top-8">
          <div className="relative inline-block">
            <div className="rounded-full bg-blue-600 px-4 py-2 text-xs text-white">
              Kuncoro
            </div>

            <i className="bi bi-cursor-fill absolute -top-4 -left-3 text-blue-600 text-xl scale-x-[-1]"></i>
          </div>
        </div>
      </div>
      <div className="bg-gray/5 p-3 mt-6 rounded-4xl">
        <div className="border-2 border-white bg-gradient-to-r from-[#eef5ff] via-white to-white rounded-4xl shadow-lg p-4">
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Menunggu
            </span>
            <span className="flex items-center gap-1">
              <i className="bi bi-calendar3"></i> 11 Juni 2026
            </span>
          </div>

          <p className="font-semibold text-slate-900 mb-3">
            Hackaton Mahreen Indonesia
          </p>

          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-rose-200 border-2 border-white" />
              <div className="w-7 h-7 rounded-full bg-amber-200 border-2 border-white" />
              <div className="w-7 h-7 rounded-full bg-blue-200 border-2 border-white" />
              <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white" />
            </div>
            <span className="flex items-center gap-1 text-slate-400 text-sm">
              <i className="bi bi-link-45deg"></i> 6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramTwo;
