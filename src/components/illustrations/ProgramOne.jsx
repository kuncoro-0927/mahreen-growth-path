import logo_white from "../../assets/logo_white.svg";
const ProgramOne = () => {
  return (
    <div className="rounded-xl h-56 relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-rose-50 via-orange-50 to-transparent">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 50%, transparent 100%)",
        }}
      />
      <div className="w-16 h-16 rounded-full bg-orange-500 shadow-lg flex items-center justify-center z-10">
        <img src={logo_white} className="w-6 h-6"  alt="Logo Mahreen Growth Path" />
      </div>

      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-xl">
        💻
      </div>
      <div className="absolute top-[38%] left-[20%] xl:left-[33%] -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-xl">
        🎨
      </div>
      <div className="absolute top-[38%] right-[20%] xl:right-[33%] -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-xl">
        🧠
      </div>
      <div className="absolute bottom-[19%] left-[20%] xl:left-[33%] w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-xl">
        ✍️
      </div>
      <div className="absolute bottom-[19%] right-[20%] xl:right-[33%] w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-xl">
        📚
      </div>
      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-xl">
        🚀
      </div>
    </div>
  );
};

export default ProgramOne;
