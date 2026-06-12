import { socialProofAvatars } from "../../data/SocialProof";

const CustomerSuccessIllustration = () => {
  const reactions = ["😍", "👍", "⭐", "🎉"];

  return (
    <div className="rounded-xl h-56 relative overflow-hidden bg-slate-50 flex items-center justify-center">
      {/* spreadsheet card */}
      <div
        className="bg-white/40 w-64 p-3 backdrop-blur-lg border-t border-l border-r border-slate-200 rounded-xl relative overflow-hidden"
        style={{
          boxShadow: "0 -4px 6px -1px rgba(100,116,139,0.2)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      >
        {/* status icons row */}
        <div className="flex items-center gap-1 mb-4">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>

        {/* rows */}
        {[60, 40, 70, 30, 50].map((width, i) => (
          <div key={i} className="flex gap-1 mb-1.5">
            <div
              className="h-3 rounded-sm bg-green-200"
              style={{ width: `${width}%` }}
            />
            <div className="h-3 rounded-sm bg-slate-100 flex-1" />
          </div>
        ))}
      </div>

      {socialProofAvatars.map((person, i) => {
        const positions = [
          "top-2 right-12 w-12 h-12 lg:right-16 lg:w-14 lg:h-14 xl:right-18 xl:w-16 xl:h-16",
          "top-4 left-8 w-10 h-10 lg:left-10 lg:w-12 lg:h-12 xl:left-12 xl:w-14 xl:h-14",
          "bottom-8 left-12 w-14 h-14 lg:left-16 lg:w-16 lg:h-16 xl:left-18 xl:w-20 xl:h-20",
          "bottom-6 right-6 w-10 h-10 lg:right-8 lg:w-12 lg:h-12 xl:right-8 xl:w-14 xl:h-14",
        ];

        const reactionPositions = [
          "-bottom-1 -left-1 w-6 h-6 text-sm lg:w-7 lg:h-7 lg:text-sm xl:w-8 xl:h-8 xl:text-base",
          "-bottom-1 -right-1 w-6 h-6 text-sm lg:w-7 lg:h-7 lg:text-sm xl:w-8 xl:h-8 xl:text-base",
          "-top-1 -right-1 w-6 h-6 text-sm lg:w-7 lg:h-7 lg:text-sm xl:w-8 xl:h-8 xl:text-base",
          "-top-2 -left-1 w-6 h-6 text-sm lg:w-7 lg:h-7 lg:text-sm xl:-top-3 xl:-left-2 xl:w-8 xl:h-8 xl:text-base",
        ];

        return (
          <div key={person.id} className={`absolute ${positions[i]}`}>
            <img
              src={person.avatar}
              alt={person.name}
              className="w-full h-full rounded-full object-cover shadow-md border-2 border-white"
            />
            <div
              className={`absolute ${reactionPositions[i]} rounded-full bg-white shadow-md flex items-center justify-center border-2 border-white`}
            >
              {reactions[i]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerSuccessIllustration;
