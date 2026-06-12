import hero from "../../../assets/images/hero.jpg";
import StatCard from "../components/CardStat";

const Stats = () => {
  return (
    <section className="xl:px-[92px] 2xl:px-[128px] xl:-translate-y-12 flex flex-col xl:gap-5 items-center justify-center px-6 md:px-12">
      <div className="relative w-full xl:h-[600px]  flex flex-col xl:gap-5 items-center justify-center px-5 py-12 mt-12 ">
        <div className="absolute -inset-6 xl:-inset-12 rounded-[48px] bg-gradient-to-r from-pink-100 via-purple-100 to-cyan-100 blur-3xl "></div>

        <img
          src={hero}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        />
        <div className=" text-center right-4 text-white rounded-full border-y border-white/40 bg-white/10 px-4 py-2 backdrop-blur-xs">
          <span className="text-sm xl:text-base">
            Tumbuh Bersama Mahreen Membangun Masa Depan Digital
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-transparent p-8 rounded-2xl">
          <StatCard
            number="44K+"
            text="Pengguna Bergabung Bersama Mahreen"
          />
          <StatCard
            number="300+"
            text="Pengembangan Inovasi Solusi Digital Mahreen"
          />
          <StatCard
            number="30%"
            text="Peningkatan Pendapatan UMKM"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
