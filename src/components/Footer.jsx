import logo_dark from "../assets/logo_dark.svg";
import { Link as ScrollLink } from "react-scroll";
const Footer = () => {
  return (
    <footer className="relative overflow-hidden px-6 md:px-24 xl:px-[92px] 2xl:px-[128px] py-12 mt-[64px] xl:mt-[128px]">
      <div className="absolute -left-40 top-40 w-[700px] h-[600px] rounded-full bg-blue-300/20 blur-[140px]" />

      <div className="absolute -right-40 top-40 w-[700px] h-[600px] rounded-full bg-blue-300/20 blur-[140px]" />

      <div className="absolute left-1/2 top-0 w-[500px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[120px]" />

      {/* top */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start gap-y-2 xl:gap-y-0 xl:items-center justify-between border-b border-slate-200 pb-8 mb-8">
        <div className="flex items-center gap-2">
          <img src={logo_dark} className="w-8 lg:w-[32px]" alt="Logo Mahreen Growth Path" />
          <span className="text-xl font-semibold text-slate-900">
            Mahreen Growth Path
          </span>
        </div>
        <p className="text-slate-500">
          Transformasi digital yang benar-benar berdampak.
        </p>
      </div>

      {/* middle */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-8 pb-8">
        <div className="flex items-start justify-between gap-24">
          <div>
            <p className="font-medium text-slate-900 mb-4">Navigasi</p>
            <ul className="text-sm xl:text-base space-y-2 text-slate-500">
              <li>
                <ScrollLink
                  to="hero-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hover:text-primary hover:font-normal duration-300 cursor-pointer"
                >
                  Beranda
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hover:text-primary hover:font-normal duration-300 cursor-pointer"
                >
                  Tentang
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="program-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hover:text-primary hover:font-normal duration-300 cursor-pointer"
                >
                  Program
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="testimonial-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hover:text-primary hover:font-normal duration-300 cursor-pointer"
                >
                  Testimoni
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="cta-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hover:text-primary hover:font-normal duration-300 cursor-pointer"
                >
                  Daftar Sekarang
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-slate-900 mb-4">Kontak</p>
            <ul className="text-sm xl:text-base space-y-3 text-slate-500">
              <li className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full border border-blue-200 flex items-center justify-center text-blue-500">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                info@mahreen.id
              </li>
              <li className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full border border-blue-200 flex items-center justify-center text-blue-500">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                +62 812 3456 789
              </li>
              <li className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full border border-blue-200 flex items-center justify-center text-blue-500">
                  <i className="bi bi-geo-alt-fill"></i>
                </span>
                Surabaya, Indonesia
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start xl:items-end justify-between">
          <div className="flex items-center gap-2 font-medium mb-4">
            <span>Sosial Media</span>
          </div>

          <div className="flex gap-3 mt-auto">
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-gray/30 flex items-center justify-center hover:-translate-y-1 duration-300"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-gray/30 flex items-center justify-center hover:-translate-y-1 duration-300"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-gray/30 flex items-center justify-center hover:-translate-y-1 duration-300"
            >
              <i className="bi bi-tiktok"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-gray/30 flex items-center justify-center hover:-translate-y-1 duration-300"
            >
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="relative z-10 border-t-[0.5px] border-gray/20 pt-6 flex flex-col lg:flex-row gap-y-3 justify-between text-sm text-gray">
        <p>© 2026 Mahreen Indonesia. Semua hak dilindungi.</p>
        <div className="flex gap-6">
          <a
            className="hover:text-primary hover:font-normal duration-300 cursor-pointer"
            href="#"
          >
            Syarat & Ketentuan
          </a>
          <a
            className="hover:text-primary hover:font-normal duration-300 cursor-pointer"
            href="#"
          >
            Kebijakan Privasi
          </a>
          <a
            className="hover:text-primary hover:font-normal duration-300 cursor-pointer"
            href="#"
          >
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
