import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCards } from "@/sections/EmergencySection/components/ServiceCards";
import { ServicesHeader } from "@/sections/EmergencySection/components/ServicesHeader";
import { ServiceGrid } from "@/sections/EmergencySection/components/ServiceGrid";
import { ExploreButton } from "@/sections/EmergencySection/components/ExploreButton";

export const EmergencySection = () => {
  return (
    <section
      id="services"
      className="bg-white box-border caret-transparent py-[60px] md:pt-[106px] md:pb-[100px]"
    >
      <div className="box-border caret-transparent max-w-[1440px] w-full mx-auto px-4 md:px-16">
        <SectionHeader />
        <ServiceCards />
        <ServicesHeader />
        <ServiceGrid />
        <ExploreButton />
      </div>
    </section>
  );
};
