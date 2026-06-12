import AboutCard from "../components/AboutCard";
const AboutUs = () => {
  return (
    <section id="about-section" className="flex flex-col-reverse xl:flex-row items-center justify-between gap-12 px-6 md:px-12 xl:px-[92px] 2xl:px-[128px] items-stretch">
      <AboutCard />

      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-center">
          <span className=" px-4 text-sm py-2 rounded-full border w-fit border-light">
            Tentang Mahreen Growth Path
          </span>
        </div>

        <h2 className="text-center xl:text-left font-normal text-2xl xl:text-5xl">
          Berkarya Bersama Mahreen Growth Path
        </h2>
        <p className="text-sm xl:text-base text-center xl:text-left">
          Mahreen Indonesia adalah ekosistem inovasi tempat generasi muda
          berkolaborasi. Kami memadukan kreativitas dan teknologi modern untuk
          melahirkan karya digital yang berdampak luas, dari tingkat nasional
          hingga internasional.
        </p>

        <div className="flex items-center items-stretch gap-4 mt-5 xl:mt-0 text-sm xl:text-base">
          <div className="flex flex-col gap-3 bg-blue/10 w-full p-4 rounded-xl ">
            <div className="bg-white w-10 h-10 flex  items-center justify-center  rounded-full">
              <i className="bi bi-brightness-low text-blue text-2xl mt-1"></i>
            </div>
            <h3 className="font-semibold">What We Believe</h3>
            <span className="">
              Kreativitas pemuda adalah penggerak utama teknologi bangsa.
            </span>
          </div>

          <div className="flex flex-col gap-3 bg-blue/10 w-full p-4 rounded-xl ">
            <div className="bg-white w-10 h-10 flex  items-center justify-center  rounded-full">
              <i className="bi bi-layers text-blue text-xl mt-1"></i>
            </div>
            <h3 className="font-semibold">What We Do</h3>
            <span>Menyediakan ruang kolaborasi dan teknologi inklusif.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
