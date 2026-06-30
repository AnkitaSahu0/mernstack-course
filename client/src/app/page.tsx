

import Navbar from "@/src/components/Navbar/Navbar";
import HomeSection from "../components/Hero/HomeSection";
import WatchSection from "../components/Watch/WatchSection";
import AboutSection from "../components/about/AboutSection";
import FeaturesSection from "../components/Features/FeatureSection";
import TestimonialsSection from "../components/Testimonials/TestimonialSection";
import PricingSection from "../components/pricing/PricingSection";
import ContactSection from "../components/Contact/ContactSection";
import Footer from "../components/Footer/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection/>
      <WatchSection/>
      <AboutSection/>
      <FeaturesSection/>
      <TestimonialsSection/>
      <PricingSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}


