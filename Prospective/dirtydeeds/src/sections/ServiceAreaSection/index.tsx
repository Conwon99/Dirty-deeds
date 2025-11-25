import { MapDisplay } from "@/sections/ServiceAreaSection/components/MapDisplay";
import { LocationLists } from "@/sections/ServiceAreaSection/components/LocationLists";

export const ServiceAreaSection = () => {
  return (
    <section
      id="service-area"
      className="box-border caret-transparent mt-[60px] py-[60px] md:mt-[100px] md:py-[100px]"
    >
      <div className="box-border caret-transparent max-w-[1440px] w-full mx-auto px-4 md:px-16">
        <div className="box-border caret-transparent text-center mb-[60px]">
          <h2 className="text-4xl box-border caret-transparent leading-[39.6px] uppercase mb-5 font-bebas_neue md:text-5xl md:leading-[52.8px]">
            SERVICE AREA MAP
          </h2>
          <p className="text-stone-500 text-base box-border caret-transparent leading-6 font-avenir md:text-xl md:leading-7">
            Proudly serving Rankinston, Ayrshire, and neighbouring communities
            with eco-friendly exterior cleaning.
          </p>
        </div>
        <div className="items-start box-border caret-transparent gap-x-10 grid grid-cols-[1fr] max-w-[1200px] gap-y-10 mx-auto md:gap-x-[60px] md:grid-cols-[1fr_1fr] md:gap-y-[60px]">
          <MapDisplay />
          <LocationLists />
        </div>
      </div>
    </section>
  );
};
