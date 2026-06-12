import { useState } from "react";
import TestimonialCard from "../../../components/TestimonialCard";
import { testimonials } from "../../../data/Testimonials";

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="testimonial-section"
      className="relative px-6 md:px-12 xl:px-[92px] 2xl:px-[128px] overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center text-center mb-12 xl:mb-24 relative z-20">
        <h2 className="text-2xl xl:text-5xl font-semibold">
          Cerita Dampak Nyata Mahreen
        </h2>
        <p className="text-sm xl:text-lg text-gray max-w-2xl mt-2">
          Pengalaman langsung dari para talenta muda, inovator, dan mitra UMKM
          yang tumbuh bersama ekosistem kami.
        </p>
      </div>

      <div>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-5">
          {testimonials.map((item, index) => {
            const isFeatured = index === 0 || index === 6;
            const hideOnMobile = !showAll && index >= 4;

            return (
              <div
                key={item.id}
                className={`${isFeatured ? "lg:row-span-2" : ""} ${hideOnMobile ? "hidden lg:block" : ""}`}
              >
                <TestimonialCard item={item} />
              </div>
            );
          })}
        </div>

        {!showAll && testimonials.length > 4 && (
          <div className="flex justify-center mt-6 lg:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 rounded-full border border-slate-200 text-slate-700"
            >
              Muat lebih banyak
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
