import { useEffect, useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo_dark from "../assets/logo_dark.svg";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const [activeSection, setActiveSection] = useState("hero-section");

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom <= navbarHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Beranda", target: "hero-section" },
    { name: "Tentang", target: "about-section" },
    { name: "Program", target: "program-section" },
    { name: "Testimoni", target: "testimonial-section" },
  ];

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed p-6 md:px-24 lg:px-16 2xl:px-28 top-0 left-0 right-0 lg:top-0 lg:left-0 lg:right-0 z-50"
      >
        <div
          className={`transition-all duration-300 bg-amber-200 ${
            isScrolled || isOpen ? "bg-transparent" : "bg-transparent"
          }`}
        >
          <div
            className={`flex items-center justify-between  transition-colors duration-300 ${
              isScrolled ? "text-neutral-900" : "text-black"
            }`}
          >
            <div
              className={`flex items-center gap-3 px-4 py-1 rounded-4xl border transition-colors duration-300 overflow-hidden backdrop-blur-xs ${
                isScrolled
                  ? "border-transparent  bg-white/50 shadow-2xl"
                  : "border-gray-300 bg-white/10 shadow-none"
              }`}
            >
              <img
                src={logo_dark}
                className="w-8 lg:w-[32px] py-1.5 transition-all duration-300"
                alt="Logo Mahreen Growth Path"
              />

              <span className="text-sm sm:text-xs font-medium leading-none">
                Mahreen <br /> <span className="text-xs">Growth Path</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div
              className={`hidden lg:block absolute left-1/2 -translate-x-1/2 text-base p-1 rounded-4xl border transition-all duration-300 overflow-hidden backdrop-blur-xs ${
                isScrolled || isOpen
                  ? "border-transparent  bg-white/50 shadow-2xl"
                  : "border-gray-300 bg-white/10"
              }`}
            >
              <ul className="flex items-center gap-x-2">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`font-normal rounded-3xl transition-all duration-300 cursor-pointer ${
                      activeSection === item.target
                        ? "bg-black text-white"
                        : "hover:bg-light text-gray"
                    }`}
                  >
                    <ScrollLink
                      to={item.target}
                      spy={true}
                      smooth={true}
                      href={item.target}
                      offset={-100}
                      duration={500}
                      className="block px-5 py-2 w-full h-full"
                      onSetActive={() => setActiveSection(item.target)}
                    >
                      {item.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Button */}
            <ScrollLink
              to="cta-section"
              href="cta-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => setActiveSection("cta-section")}
              className={`hidden group lg:flex items-center gap-x-3 rounded-full pl-4 pr-1 py-1 transition-all duration-300 border backdrop-blur-xs cursor-pointer ${
                activeSection === "cta-section"
                  ? "bg-black text-white border-transparent"
                  : isScrolled
                    ? "border-transparent bg-white/50 shadow-2xl hover:bg-black hover:text-white"
                    : "border-gray-300 bg-white/10 hover:bg-black hover:text-white"
              }`}
            >
              <span className="font-normal">Hubungi</span>
              <span
                className={`flex items-center justify-center rounded-full p-3 transition-all duration-300 ${
                  activeSection === "cta-section"
                    ? "bg-white text-black"
                    : "bg-black text-white group-hover:bg-white group-hover:text-black"
                }`}
              >
                <ArrowUpRightIcon />
              </span>
            </ScrollLink>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative flex items-center justify-center rounded-full py-2 px-3 border backdrop-blur-xs ${
                isScrolled
                  ? "border-transparent text-black bg-white/50 shadow-2xl"
                  : "border-gray-300 text-black bg-white/10"
              }`}
            >
              <i
                className={`bi bi-list text-2xl absolute transition-all duration-300 ${
                  isOpen
                    ? "opacity-0 scale-50 rotate-90"
                    : "opacity-100 scale-100 rotate-0"
                }`}
              />
              <i
                className={`bi bi-x-lg text-2xl transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-50 -rotate-90"
                }`}
              />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          } grid`}
        >
          <div className="min-h-0 transition-all duration-300">
            <div
              className={`rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-4 mt-3
      transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
            >
              <ul className="flex flex-col gap-2 text-white">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`font-normal rounded-xl transition-all duration-300 cursor-pointer ${
                      activeSection === item.target
                        ? "bg-black text-white"
                        : "hover:bg-light text-white"
                    }`}
                  >
                    <ScrollLink
                      to={item.target}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      href={item.target}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className="block px-5 py-3 w-full h-full"
                      onSetActive={() => setActiveSection(item.target)}
                    >
                      {item.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
              <ScrollLink
                to="cta-section"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                href="cta-section"
                onSetActive={() => setActiveSection("cta-section")}
                onClick={() => setIsOpen(false)}
                className={`group mt-4 w-full flex items-center justify-center gap-2 rounded-2xl py-3 transition-all duration-300 cursor-pointer ${
                  activeSection === "cta-section"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                <span>Kontak</span>

                <span
                  className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                    activeSection === "cta-section"
                      ? "text-white"
                      : "text-black group-hover:bg-black group-hover:text-white"
                  }`}
                >
                  <ArrowUpRightIcon />
                </span>
              </ScrollLink>
            </div>
          </div>
        </div>
      </nav>
    </>
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

export default NavBar;
