import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Facilities from "../components/Facilities";
import WhyChooseUs from "../components/WhyChooseUs";
import PrincipalMessage from "../components/PrincipalMessage";
import Achievements from "../components/Achievements";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Faq from "../components/Faq";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Facilities />
      <WhyChooseUs />
      <PrincipalMessage />
      <Achievements />
      <Testimonials />
      <Gallery />
      <Faq />
    </>
  );
}

export default Home;