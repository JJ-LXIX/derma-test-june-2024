import AboutUs from "./Components/AboutUsSection/AboutUs";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import Hero from "./Components/HeroSection/Hero";
import ServiceSection from "./Components/ServiceSection/ServiceSection";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <ServiceSection />
      <CustomCursor />
      <div className="w-full h-[200vh] bg-white"></div>
    </main>
  );
}
