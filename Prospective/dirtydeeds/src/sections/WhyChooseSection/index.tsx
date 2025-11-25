import { CallToActionBox } from "@/sections/WhyChooseSection/components/CallToActionBox";
import { BenefitsGrid } from "@/sections/WhyChooseSection/components/BenefitsGrid";
import { CompanyIntro } from "@/sections/WhyChooseSection/components/CompanyIntro";
import { AboutText } from "@/sections/WhyChooseSection/components/AboutText";
import { ContactButton } from "@/sections/WhyChooseSection/components/ContactButton";

export const WhyChooseSection = () => {
  return (
    <section
      id="eco-promise"
      className="relative box-border caret-transparent mt-[100px] py-[60px] md:pt-[150px] md:pb-[100px]"
    >
      <div className="box-border caret-transparent max-w-[1440px] w-full mx-auto px-4 md:px-16">
        <CallToActionBox />
        <BenefitsGrid />
        <CompanyIntro />
        <AboutText />
        <ContactButton />
      </div>
    </section>
  );
};
