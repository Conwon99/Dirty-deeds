import { HeroButtons } from "@/sections/HeroSection/components/HeroButtons";

export const HeroContent = () => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-5 flex flex-col justify-start max-w-full min-h-0 gap-y-5 text-center z-10 mx-auto pt-[100px] pb-0 px-5 md:gap-x-[30px] md:justify-center md:max-w-[800px] md:min-h-[1000px] md:gap-y-[30px] md:pt-[180px] md:pb-20">
      <div className="relative box-border caret-transparent">
        <h1 className="text-white text-[28px] box-border caret-transparent leading-8 uppercase mb-[5px] font-bebas_neue md:text-[56px] md:leading-[60px] md:mb-0">
          EXTERIOR CLEANING
          <br className="text-[28px] box-border caret-transparent leading-8 md:text-[56px] md:leading-[60px]" />
          AYRSHIRE &amp; SURROUNDING AREAS
        </h1>
      </div>
      <p className="text-white text-[15px] font-medium box-border caret-transparent leading-[22px] max-w-full px-2.5 font-avenir md:text-lg md:leading-7 md:max-w-[600px] md:px-0">
        Eco-friendly exterior cleaning and waste uplift specialists delivering
        sparkling driveways, patios, gardens, and tidy spaces.
        <br className="text-[15px] box-border caret-transparent leading-[22px] md:text-lg md:leading-7" />
        Message or call anytime for a free, no-obligation quote.
      </p>
      <HeroButtons />
    </div>
  );
};
