import cardstat from "../assets/images/card_stat.svg"
const StatCard = ({ number, text }) => {
  return (
    <div data-aos="fade-up" className="relative w-full hover:-translate-y-1 duration-300">
      <img
        src={cardstat}
        alt="Background statistik Mahreen Growth Path"
        className="w-[230px] xl:w-full h-auto select-none pointer-events-none"
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6 xl:p-8">
   
          <h2 className="text-5xl xl:text-6xl font-semibold text-gray-900">
            {number}
          </h2>
        <p className="text-sm xl:text-base text-gray-500 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default StatCard;