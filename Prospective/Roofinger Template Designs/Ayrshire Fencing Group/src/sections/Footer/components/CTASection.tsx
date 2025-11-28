

export const CTASection = () => {
  return (
    <section className="box-border caret-transparent pt-[60px] pb-[50px] md:pt-[130px] md:pb-[70px]">
      <div className="relative bg-gray-800 box-border caret-transparent mx-[15px] pb-2.5 px-2.5 rounded-[20px] md:mx-[30px] md:pb-5 md:px-5">
        <img
          src="https://c.animaapp.com/mial13ktyN5Jkh/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
          alt="Shape 02"
          className="absolute box-border caret-transparent h-5 max-w-full rotate-90 w-5 -left-5 top-[50px] md:top-[130px]"
        />
        <img
          src="https://c.animaapp.com/mial13ktyN5Jkh/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
          alt="Shape 02"
          className="absolute box-border caret-transparent h-5 max-w-full w-5 -right-5 top-[50px] md:top-[130px]"
        />
        <div className="relative bg-gray-700 box-border caret-transparent flex flex-col items-center gap-y-5 p-[15px] rounded-[20px] text-center md:gap-y-[30px] md:p-[70px]">
          <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[28.8px] md:text-[50px] md:leading-[60px]">
            Get a free quote today
          </h2>
          <p className="text-gray-200 box-border caret-transparent max-w-md mb-2.5">
            Get your free quote today for bespoke fencing, sheds & gates, trellis, decking, palisade fencing, or fencing repairs. Fully qualified and insured contractors with over 13 years' experience.
          </p>
          <a href="/contact"
            className="text-gray-900 text-sm font-bold bg-green-500 box-border caret-transparent inline-block leading-[19.6px] text-center border border-green-500 px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:text-white hover:bg-gray-900 hover:decoration-transparent"
          >
            Request a free quote
          </a>
        </div>
      </div>
    </section>
  );
};
