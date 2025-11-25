export const CallToActionBox = () => {
  return (
    <div className="relative items-center bg-orange-500 shadow-[rgb(0,0,0)_10px_10px_0px_0px] box-border caret-transparent flex flex-col justify-center text-center mb-[60px] px-5 py-10 rounded-[20px] border-2 border-solid md:mb-[100px] md:p-[60px]"
    >
      <div className="absolute box-border caret-transparent pointer-events-none inset-0">
        <span className="absolute bg-stone-900 box-border caret-transparent block h-[17px] w-[17px] rounded-[50%] left-[22px] top-[22px]"></span>
        <span className="absolute bg-stone-900 box-border caret-transparent block h-[17px] w-[17px] rounded-[50%] right-[22px] top-[22px]"></span>
        <span className="absolute bg-stone-900 box-border caret-transparent block h-[17px] w-[17px] rounded-[50%] left-[22px] bottom-[22px]"></span>
        <span className="absolute bg-stone-900 box-border caret-transparent block h-[17px] w-[17px] rounded-[50%] right-[22px] bottom-[22px]"></span>
      </div>
      <img
        src="https://c.animaapp.com/mhrschno1dTzQg/assets/dd-need-help-now-2.png"
        alt="Need help now?"
        className="aspect-[auto_569_/_124] box-border caret-transparent max-w-[90%] w-[569px] mb-10 md:max-w-full"
      />
      <div className="box-border caret-transparent">
        <p className="text-white text-lg font-medium box-border caret-transparent mb-[15px] font-avenir">
          Call or message anytime for eco-friendly exterior cleaning support
        </p>
        <a
          href="tel:+447483414765"
          className="text-black text-[44px] font-bold bg-white box-border caret-transparent inline-block tracking-[2px] leading-[50px] px-10 py-[15px] rounded-[60px] border-[3px] border-solid font-bebas_neue hover:shadow-[rgba(0,0,0,0.2)_0px_8px_20px_0px]"
        >
          07483 414 765
        </a>
      </div>
    </div>
  );
};
