export const MapDisplay = () => {
  return (
    <div className="relative shadow-[rgb(0,0,0)_10px_10px_0px_0px] box-border caret-transparent overflow-hidden rounded-[20px] border-2 border-solid">
      <img
        src="/images/ayrshire.jpg"
        alt="Ayrshire service area"
        className="aspect-[auto_720_/_658] box-border caret-transparent max-w-full w-full"
      />
      <div className="absolute items-center bg-black/30 box-border caret-transparent flex justify-center inset-0">
        <div className="bg-orange-500 shadow-[rgba(0,0,0,0.3)_0px_4px_20px_0px] box-border caret-transparent px-10 py-[15px] rounded-[60px] border-[3px] border-solid border-white md:px-[60px] md:py-5">
          <span className="text-white text-2xl font-bold box-border caret-transparent tracking-[2px] leading-9 font-bebas_neue md:text-[32px] md:leading-[48px]">
            AYRSHIRE &amp; SURROUNDING AREAS
          </span>
        </div>
      </div>
    </div>
  );
};
