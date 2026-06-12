import { socialProofAvatars } from "../../../data/SocialProof";
import { Link as ScrollLink } from "react-scroll";
const Hero = () => {
  return (
    <header
      id="hero-section"
      className="relative px-6 md:px-24 xl:px-[92px] 2xl:px-[128px] pt-[150px] 2xl:pt-[128px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#eef5ff] to-white"
    >
      <div className="absolute -left-40 top-0 w-[200px h-[100px] xl:w-[700px] xl:h-[600px] rounded-full bg-blue-300/20 blur-[140px]" />
      <div className="absolute -right-40 top-0 w-[200px h-[100px] xl:w-[700px] xl:h-[600px] rounded-full bg-blue-300/20 blur-[140px]" />
      <div className="absolute left-1/2 top-0 w-[200px] h-[100px] xl:w-[500px] xl:h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[120px]" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-b from-transparent to-white" />

      <div data-aos="fade-down" className="relative z-10 flex flex-col gap-y-4 items-center justify-center text-center">
        <h1  className="text-2xl xl:text-6xl sm:max-w-sm xl:max-w-4xl font-normal leading-tight">
          Berkembang Hebat Bersama Mahreen Growth Path
        </h1>
        <span className="text-sm xl:text-base max-w-lg">
          Mulai perjalanan karirmu dan berkembang bersama program terstruktur
          kami.
        </span>

        <ScrollLink
          to="cta-section"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex items-center gap-x-3 rounded-full pl-4 pr-1 py-1 mt-6 xl:mt-0 bg-primary text-white hover:-translate-y-1 hover:shadow-lg cursor-pointer duration-300  "
        >
          <span className="text-sm xl:text-base font-normal">
            Gabung Sekarang
          </span>
          <span className="flex items-center justify-center rounded-full p-3 bg-white text-primary">
            <ArrowUpRightIcon />
          </span>
        </ScrollLink>

        <div className="flex items-center gap-3 mt-12">
          <div className="flex -space-x-3">
            {socialProofAvatars.map((item) => (
              <img
                key={item.id}
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full border border-white object-cover"
              />
            ))}
          </div>
          <div className="-translate-x-6 flex items-center gap-2">
            <div className=" w-10 h-10 flex items-center justify-center rounded-full bg-black backdrop-blur-xs">
              <span className=" text-sm xl:text-base text-white">50+</span>
            </div>
            <span className="text-sm xl:text-base">Talenta Bergabung</span>
          </div>
        </div>
      </div>
    </header>
  );
};

const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
    />
  </svg>
);
export default Hero;
