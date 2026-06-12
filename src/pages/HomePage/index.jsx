import Hero from "./sections/Hero";
import { lazy, Suspense } from "react";

const Stats = lazy(() => import("./sections/Stats"));
const AboutUs = lazy(() => import("./sections/AboutUs"));
const Programs = lazy(() => import("./sections/Programs"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const CallToAction = lazy(() => import("./sections/CallToAction"));

const HomePage = () => {
  return (
    <>
      <Hero />

      <Suspense fallback={null}>
        <Stats />
      </Suspense>

      <Suspense fallback={null}>
        <AboutUs />
      </Suspense>

      <Suspense fallback={null}>
        <Programs />
      </Suspense>

      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={null}>
        <CallToAction />
      </Suspense>
    </>
  );
};

export default HomePage;