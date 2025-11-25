import { CTAButtons } from "@/sections/CTASection/components/CTAButtons";
import { Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section
      id="contact"
      className="box-border caret-transparent py-[60px] md:pt-[100px]"
    >
      <div className="box-border caret-transparent max-w-[1440px] w-full mx-auto px-4 md:px-16">
        <div className="box-border caret-transparent max-w-[600px] text-center mx-auto">
          <div className="flex justify-center mb-[30px]">
            <Sparkles className="w-[77px] h-[68px] text-orange-500" />
          </div>
          <h2 className="text-[32px] box-border caret-transparent leading-9 uppercase mb-5 font-bebas_neue md:text-[44px] md:leading-[45px] md:mb-[30px]">
            Ready For Sparkling Clean Outdoor Spaces?
          </h2>
          <p className="font-medium box-border caret-transparent leading-[22px] mb-10">
            Contact DIRTY DEEDS exterior cleaning for eco-friendly cleaning and
            waste solutions—Done Dirt Cheap!
          </p>
          <CTAButtons />
        </div>
      </div>
    </section>
  );
};
