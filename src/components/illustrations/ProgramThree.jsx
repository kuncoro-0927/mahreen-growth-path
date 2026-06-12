const ProgramThree = () => {
  return (
    <div
      className="bg-white/40 backdrop-blur-lg border-t border-l border-r border-slate-200 rounded-xl p-4 relative overflow-hidden h-56"
      style={{
        boxShadow: "0 -4px 6px -1px rgba(100,116,139,0.2)",
        maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
      }}
    >
      <div className="flex gap-1.5 mb-3">
        <span className="w-2 h-2 rounded-full bg-slate-300" />
        <span className="w-2 h-2 rounded-full bg-slate-300" />
        <span className="w-2 h-2 rounded-full bg-slate-300" />
      </div>
      <pre className="font-mono text-sm leading-relaxed text-slate-800 whitespace-pre-wrap">
        <span className="text-blue-500">import</span> journey{" "}
        <span className="text-blue-500">from</span>{" "}
        <span className="text-green-600">"mahreen/program"</span>;{"\n"}
        <span className="text-blue-500">const</span>{" "}
        <span className="text-pink-500">journey</span> = {"{"}
        {"\n  "}stage:{" "}
        <span className="text-green-600">"inkubasi"</span>,{"\n  "}
        focus: <span className="text-green-600">"development"</span>,{"\n}"}
      </pre>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl">
        👋
      </div>
    </div>
  );
};

export default ProgramThree;