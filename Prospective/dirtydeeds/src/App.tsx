import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { EmergencySection } from "@/sections/EmergencySection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { ServiceAreaSection } from "@/sections/ServiceAreaSection";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <div className="text-stone-900 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-apple_system">
      <Header />
      <HeroSection />
      <EmergencySection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ServiceAreaSection />
      <CTASection />
      <Footer />
      <div className="box-border caret-transparent"></div>
    </div>
  );
};
