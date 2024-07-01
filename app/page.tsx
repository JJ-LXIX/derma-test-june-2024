import AboutUs from "./Components/AboutUsSection/AboutUs";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import Footer from "./Components/FooterSection/Footer";
import Hero from "./Components/HeroSection/Hero";
import ServiceSection from "./Components/ServiceSection/ServiceSection";
import TestimonialSection from "./Components/TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <ServiceSection />
      <TestimonialSection />

      {/* Custom Cursor */}
      <CustomCursor />
      <div className="w-full h-[100vh]"></div>
      <Footer />
    </main>
  );
}
