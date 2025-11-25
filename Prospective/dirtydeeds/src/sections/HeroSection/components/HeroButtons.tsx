import { Phone } from "lucide-react";

export const HeroButtons = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-3 flex flex-col flex-wrap justify-center max-w-[280px] gap-y-3 w-full mt-2.5 md:gap-x-[25px] md:flex-row md:max-w-none md:gap-y-[25px] md:w-auto md:mt-0">
      <a
        href="tel:+447483414765"
        className="text-white text-[15px] items-center bg-orange-500 box-border caret-transparent gap-x-2.5 flex justify-center min-h-12 gap-y-2.5 uppercase text-wrap w-full border-orange-500 px-5 py-3 rounded-[100px] border-2 border-solid font-bebas_neue md:text-xl md:text-nowrap md:w-auto md:px-10 md:py-4 hover:text-orange-500 hover:bg-transparent"
      >
        <Phone className="text-[15px] aspect-[auto_20_/_20] box-border caret-transparent shrink-0 max-w-full text-wrap w-5 h-5 md:text-xl md:text-nowrap" />
        <span className="text-[15px] box-border caret-transparent block text-wrap md:text-xl md:text-nowrap">
          07483 414 765
        </span>
      </a>
      <a
        href="#contact"
        className="text-[15px] items-center bg-white box-border caret-transparent gap-x-2.5 flex justify-center min-h-12 gap-y-2.5 uppercase text-wrap w-full px-5 py-3 rounded-[100px] border-2 border-solid font-bebas_neue md:text-xl md:text-nowrap md:w-auto md:px-10 md:py-4 hover:text-white hover:bg-transparent hover:border-white"
      >
        <span className="text-[15px] box-border caret-transparent block text-wrap md:text-xl md:text-nowrap">
          REQUEST A FREE QUOTE
        </span>
      </a>
    </div>
  );
};
