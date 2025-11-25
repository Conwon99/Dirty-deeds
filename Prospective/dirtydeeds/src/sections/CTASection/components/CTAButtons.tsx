import { Phone } from "lucide-react";

export const CTAButtons = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center gap-y-5 w-full md:[align-items:normal] md:flex-row md:w-auto">
      <a
        href="tel:+447483414765"
        className="text-white text-lg items-center bg-orange-500 box-border caret-transparent gap-x-2.5 flex justify-center min-h-12 gap-y-2.5 uppercase text-nowrap border-orange-500 px-[30px] py-3.5 rounded-[100px] border-2 border-solid font-bebas_neue md:text-xl md:px-10 md:py-4 hover:text-orange-500 hover:bg-transparent"
      >
        <Phone className="text-lg aspect-[auto_20_/_20] box-border caret-transparent shrink-0 max-w-full text-nowrap w-5 h-5 md:text-xl" />
        <span className="text-lg box-border caret-transparent block text-nowrap md:text-xl">
          CALL 07483 414 765
        </span>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100090370285579"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-lg items-center bg-orange-500 box-border caret-transparent gap-x-2.5 flex justify-center min-h-12 gap-y-2.5 uppercase text-nowrap border-orange-500 px-[30px] py-3.5 rounded-[100px] border-2 border-solid font-bebas_neue md:text-xl md:px-10 md:py-4 hover:text-orange-500 hover:bg-transparent"
      >
        <span className="text-lg box-border caret-transparent block text-nowrap md:text-xl">
          MESSAGE ON FACEBOOK
        </span>
      </a>
    </div>
  );
};
