import { PhoneLink } from "@/components/PhoneLink";

export const HeroText = () => {
  return (
    <div className="box-border caret-transparent basis-[0%] grow max-w-[1100px]">
      <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-5 sm:gap-y-6">
        <div className="text-white text-base font-medium box-border caret-transparent blur-0 leading-[24px] sm:text-lg sm:leading-[28px] md:text-xl md:leading-[32px]">
          Quality Fencing & Decking Services Across Ayrshire
        </div>
        <h1 className="text-white text-[40px] font-semibold box-border caret-transparent blur-0 tracking-[-1.2px] leading-[48px] sm:text-[48px] sm:leading-[56px] md:text-8xl md:leading-[88px]">
          Fencing & Decking{" "}
          <span className="text-[#787e59] text-[40px] italic box-border caret-transparent leading-[48px] sm:text-[48px] sm:leading-[56px] md:text-8xl md:leading-[88px]">
            Ayrshire
          </span>
        </h1>
        <div className="text-white text-base box-border caret-transparent blur-0 leading-[24px] sm:text-lg sm:leading-[28px] md:text-xl md:leading-[32px]">
          Fencing, fence repairs, decking, gates, sheds, and garden rooms — free quotes, insured contractors, over 13 years' experience. No job too big or small.
        </div>
      </div>
      <div className="items-center box-border caret-transparent gap-x-6 flex blur-0 flex-wrap gap-y-6 mt-7 md:gap-x-8 md:gap-y-8 md:mt-8">
        <div className="box-border caret-transparent flex">
          <a
            href="/contact"
            className="text-white items-center bg-[#787e59] box-border caret-transparent gap-x-4 sm:gap-x-6 flex max-w-full gap-y-5 text-center border pl-6 pr-2 py-3 sm:pl-8 sm:py-2 md:pl-10 md:py-3 rounded-[100px] border-solid border-transparent hover:bg-[#8a9168] hover:border-[#787e59] min-h-[56px] sm:min-h-[60px] md:min-h-[64px] touch-manipulation shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)] transition-shadow duration-300"
          >
            <div className="relative box-border caret-transparent overflow-hidden">
              <div className="box-border caret-transparent">
                <div className="relative text-lg font-bold box-border caret-transparent leading-7 z-[2] sm:text-xl sm:leading-8 sm:font-bold md:text-2xl md:leading-9 md:font-bold">
                  Get a free quote
                </div>
              </div>
              <div className="absolute box-border caret-transparent w-full">
                <div className="relative text-lg font-bold box-border caret-transparent leading-7 z-[2] sm:text-xl sm:leading-8 sm:font-bold md:text-2xl md:leading-9 md:font-bold">
                  Get a free quote
                </div>
              </div>
            </div>
            <div className="text-[#787e59] items-center bg-white box-border caret-transparent flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 justify-center overflow-hidden rounded-[50%] flex-shrink-0">
              <div className="relative box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 before:accent-auto before:caret-transparent before:text-[#787e59] before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-[#787e59] after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                    <img
                      src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-4.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-full w-full"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[-200%] box-border caret-transparent left-[-200%]">
                  <div className="box-border caret-transparent h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 before:accent-auto before:caret-transparent before:text-[#787e59] before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-[#787e59] after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                    <img
                      src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-4.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="box-border caret-transparent flex relative">
          <PhoneLink 
            variant="hero"
            iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
            iconAlt="Phone"
            className="relative items-center box-border caret-transparent gap-x-3 flex max-w-full gap-y-2 overflow-hidden hover:text-[#787e59] min-h-[56px] sm:min-h-[60px] md:min-h-[64px] touch-manipulation"
            displayClassName="text-white text-lg font-medium box-border caret-transparent leading-7 sm:text-xl sm:leading-8 md:text-2xl md:leading-9 lg:text-3xl lg:leading-10"
          />
          <div className="absolute bg-white box-border caret-transparent h-px bottom-[0%] inset-x-[0%]"></div>
        </div>
      </div>
    </div>
  );
};

