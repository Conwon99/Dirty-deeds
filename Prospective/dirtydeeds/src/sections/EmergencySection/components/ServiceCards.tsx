import { Trash2, Waves } from "lucide-react";

export const ServiceCards = () => {
  return (
    <div className="box-border caret-transparent gap-x-[30px] grid grid-cols-[1fr] max-w-[1200px] gap-y-[30px] mb-20 mx-auto md:gap-x-5 md:grid-cols-[repeat(2,1fr)] md:gap-y-5 md:mb-[120px]">
      <a
        href="https://www.facebook.com/profile.php?id=100090370285579"
        className="relative bg-white shadow-[rgb(0,0,0)_10px_10px_0px_0px] box-border caret-transparent block text-center border-stone-900 overflow-hidden px-5 py-[30px] rounded-[20px] border-2 border-solid md:p-10 hover:shadow-[rgb(0,0,0)_15px_15px_0px_0px]"
      >
        <div className="items-center box-border caret-transparent flex justify-center mb-8">
          <Waves className="h-20 w-20 text-orange-500" aria-hidden="true" />
        </div>
        <h3 className="text-[32px] box-border caret-transparent leading-9 uppercase mb-5 font-bebas_neue md:text-[44px] md:leading-[45px]">
          Jet Washing &amp; Surface Cleaning
        </h3>
        <p className="font-medium box-border caret-transparent leading-[25px] mb-5">
          High-pressure cleaning for driveways, patios, walls, and decking with
          100% biodegradable products and zero chemical run-off.
        </p>
        <div className="items-center border-b-stone-900 border-l-stone-900 border-r-stone-900 box-border caret-transparent flex justify-between mt-5 pt-5 border-t-black/10 border-t">
          <span className="text-orange-500 text-lg box-border caret-transparent block leading-[27px] uppercase font-bebas_neue">
            Learn More
          </span>
          <img
            src="https://c.animaapp.com/mhrschno1dTzQg/assets/arrow-3.svg"
            alt="Learn more"
            className="aspect-[auto_20_/_10] box-border caret-transparent max-w-full w-5"
          />
        </div>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100090370285579"
        className="relative bg-white shadow-[rgb(0,0,0)_10px_10px_0px_0px] box-border caret-transparent block text-center border-stone-900 overflow-hidden px-5 py-[30px] rounded-[20px] border-2 border-solid md:p-10 hover:shadow-[rgb(0,0,0)_15px_15px_0px_0px]"
      >
        <div className="items-center box-border caret-transparent flex justify-center mb-8">
          <Trash2 className="h-20 w-20 text-orange-500" aria-hidden="true" />
        </div>
        <h3 className="text-[32px] box-border caret-transparent leading-9 uppercase mb-5 font-bebas_neue md:text-[44px] md:leading-[45px]">
          Waste Removal &amp; Garden Tidy-Ups
        </h3>
        <p className="font-medium box-border caret-transparent leading-[25px] mb-5">
          From rubbish uplifts to garden clear-outs, we handle the messy jobs so
          your outdoor spaces stay clean, safe, and inviting.
        </p>
        <div className="items-center border-b-stone-900 border-l-stone-900 border-r-stone-900 box-border caret-transparent flex justify-between mt-5 pt-5 border-t-black/10 border-t">
          <span className="text-orange-500 text-lg box-border caret-transparent block leading-[27px] uppercase font-bebas_neue">
            Learn More
          </span>
          <img
            src="https://c.animaapp.com/mhrschno1dTzQg/assets/arrow-3.svg"
            alt="Learn more"
            className="aspect-[auto_20_/_10] box-border caret-transparent max-w-full w-5"
          />
        </div>
      </a>
    </div>
  );
};
