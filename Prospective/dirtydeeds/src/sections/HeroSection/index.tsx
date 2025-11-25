import { HeroBackground } from "@/sections/HeroSection/components/HeroBackground";
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";

export const HeroSection = () => {
  return (
    <section className="relative bg-[linear-gradient(135deg,rgb(26,26,26),rgb(45,45,45),rgb(26,26,26))] box-border caret-transparent h-auto overflow-hidden mt-0 pb-10 md:bg-none md:h-[912px] md:mt-[-102px] md:pb-0">
      <HeroBackground />
      <HeroContent />
      <div className="absolute box-border caret-transparent hidden transform-none left-2/4 bottom-10 md:block md:translate-x-[-50.0%]">
        <img
          src="https://c.animaapp.com/mhrschno1dTzQg/assets/arrow-9.svg"
          alt="Scroll down"
          className="aspect-[auto_15_/_38] box-border caret-transparent h-[38px] max-w-full w-[15px]"
        />
      </div>
    </section>
  );
};
