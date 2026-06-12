import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import Stats from "./sections/Stats";
import Programs from "./sections/Programs";
import Testimonials from "./sections/Testimonials";
import CallToAction from "./sections/CallToAction";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <AboutUs />
      <Programs />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;
