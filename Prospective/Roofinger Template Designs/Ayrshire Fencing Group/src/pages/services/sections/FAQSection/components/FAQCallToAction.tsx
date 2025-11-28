export const FAQCallToAction = () => {
  return (
    <div className="text-gray-900 text-xl font-bold items-center box-border caret-transparent gap-x-5 flex flex-col justify-start gap-y-5 text-center mt-[50px]">
      <div className="box-border caret-transparent">
        Have more questions? We're here to help!
      </div>
      <a
        href="/contact"
        className="text-sm bg-orange-500 box-border caret-transparent block leading-[19.6px] border border-orange-500 px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:text-white hover:bg-gray-900 hover:decoration-transparent"
      >
        Get a free quote
      </a>
    </div>
  );
};

