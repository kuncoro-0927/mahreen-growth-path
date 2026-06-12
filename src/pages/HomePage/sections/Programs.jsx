import ProgramCard from "../../../components/ProgramCard";
import ProgramOne from "../../../components/illustrations/ProgramOne";
import ProgramTwo from "../../../components/illustrations/ProgramTwo";
import ProgramThree from "../../../components/illustrations/ProgramThree";
import ProgramFour from "../../../components/illustrations/ProgramFour";
const Programs = () => {
  return (
    <section
      id="program-section"
      className="relative px-6 md:px-24 xl:px-[92px] 2xl:px-[128px] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-t from-transparent to-white" />
      <div className="absolute -left-40 top-[30%] w-[700px] h-[600px] rounded-full bg-blue-300/20 blur-[140px]" />
      <div className="absolute -right-40 top-[30%] w-[700px] h-[600px] rounded-full bg-blue-300/20 blur-[140px]" />
      <div className="absolute left-1/2 top-0 w-[500px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[120px]" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-b from-transparent to-white" />

      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center text-center mb-12 xl:mb-24 relative z-20"
      >
        <h2 className="text-2xl xl:text-5xl font-normal">
          Alur Program Mahreen Growth Path
        </h2>
        <p className="text-sm xl:text-lg text-gray-600 max-w-2xl mt-2">
          Empat tahapan strategis untuk mentransformasi potensi talenta muda
          menjadi solusi digital yang berdampak nyata.
        </p>
      </div>

      {/* card 1 */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-4"
      >
        <ProgramCard
          illustration={<ProgramOne />}
          title="Mahreen Pioneer Academy"
          description="Edukasi dasar teknologi dan kreativitas digital guna menjaring sekaligus melatih talenta muda potensial seluruh daerah."
        />
        <ProgramCard
          illustration={<ProgramTwo />}
          title="Tech-Social Hackathon"
          description="Kompetisi membuat prototype aplikasi atau website untuk menyelesaikan masalah sosial."
        />
        <ProgramCard
          illustration={<ProgramThree />}
          title="Inkubasi Pematangan Sistem"
          description="Pengembangan intensif bersama mentor profesional untuk memastikan stabilitas dan keamanan aplikasi."
        />
        <ProgramCard
          illustration={<ProgramFour />}
          title="Mahreen Creative Action Hub"
          description="Strategi peluncuran dan perilisan produk untuk membangun kolaborasi dengan content creator, UMKM, hingga investor."
        />
      </div>
    </section>
  );
};

export default Programs;
