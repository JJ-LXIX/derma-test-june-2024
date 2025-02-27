import AboutUs from "./Components/AboutUsSection/AboutUs";
import ContactFormSection from "./Components/ContactFormSection/ContactFormSection";

import Footer from "./Components/FooterSection/Footer";
import Hero from "./Components/HeroSection/Hero";
import ServiceSection from "./Components/ServiceSection/ServiceSection";
import TestimonialSection from "./Components/TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <ServiceSection />
      <TestimonialSection />
      <ContactFormSection />
      <Footer />
      {/* Custom Cursor */}
    </main>
  );
}
