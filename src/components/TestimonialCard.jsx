// components/TestimonialCard.jsx
const TestimonialCard = ({ item }) => {
  if (item.variant === "featured") {
    return (
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-sm p-6 flex flex-col justify-between h-full text-white">
        <div className="flex items-center gap-2 mb-4">

          <span className="font-medium">{item.brand}</span>
        </div>

        <p className="text-sm leading-relaxed text-blue-50 flex-1">{item.text}</p>

        <div className="flex items-center gap-3 mt-6 bg-white/10 rounded-xl p-3">
          <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
          <div className="flex-1">
            <p className="font-medium text-sm">{item.name}</p>
            <p className="text-xs text-blue-100">{item.role}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-light rounded-2xl p-5 flex flex-col shadow-sm justify-between h-full">
      <p className="text-sm text-slate-700 leading-relaxed">{item.text}</p>

      <div className="flex items-center gap-3 mt-5">
        <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
        <div className="flex-1">
          <p className="font-medium text-sm text-slate-900">{item.name}</p>
          <p className="text-xs text-slate-400">{item.role}</p>
        </div>
      
      </div>
    </div>
  );
};

export default TestimonialCard;