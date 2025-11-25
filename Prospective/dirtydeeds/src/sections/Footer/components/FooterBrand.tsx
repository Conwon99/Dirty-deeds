export const FooterBrand = () => {
  return (
    <div className="box-border caret-transparent col-end-[-1] col-start-1 text-center mb-5 md:col-end-auto md:col-start-auto md:text-start md:mb-0">
      <img
        src="/images/dd-removebg-preview.png"
        alt="DIRTY DEEDS exterior cleaning"
        className="box-border caret-transparent max-w-[200px] text-center w-full mb-5 md:text-start"
      />
      <div className="box-border caret-transparent text-center mt-5 md:text-start">
        <p className="text-sm box-border caret-transparent leading-[22.75px] opacity-80 text-center mb-[5px] font-avenir md:text-start">
          Always Open For Enquiries
        </p>
        <a
          href="tel:+447483414765"
          className="text-orange-500 text-2xl box-border caret-transparent block leading-9 text-center mb-[5px] font-bebas_neue md:text-[28px] md:leading-[42px] md:text-start hover:text-white hover:border-white"
        >
          07483 414 765
        </a>
        <p className="text-sm box-border caret-transparent leading-[22.75px] opacity-80 text-center font-avenir md:text-start">
          Rankinston, Ayrshire • Fully Insured
        </p>
      </div>
    </div>
  );
};
