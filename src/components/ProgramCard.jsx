
const ProgramCard = ({ illustration, title, description }) => {
  return (
    <div className="bg-white/40 backdrop-blur-md border border-gray/20 rounded-2xl p-8">
      <div className="rounded-xl relative overflow-hidden">
        {illustration}
      </div>
      <div className="mt-5">
        <h2 className="text-lg xl:text-xl font-bold text-slate-900 mb-2">{title}</h2>
        <p className="text-sm xl:text-base text-gray">{description}</p>
      </div>
    </div>
  );
};

export default ProgramCard;