export const AboutSection = () => {
  return (
    <section className="box-border caret-transparent py-[70px] md:py-[140px]">
      <div className="box-border caret-transparent max-w-[980px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent mb-[30px] md:mb-[50px]">
          <h2 className="text-gray-900 text-3xl font-bold box-border caret-transparent leading-[38px] mb-2.5 sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            About us
          </h2>
        </div>
        <div className="box-border caret-transparent mb-[30px] md:mb-[50px]">
          <img 
            src="/ABOUTMCINES.jpg" 
            alt="About Ayrshire Fencing Group" 
            className="box-border caret-transparent w-full h-auto rounded-[20px] object-cover"
          />
        </div>
        <p className="text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-2.5">
          With over 13 years' experience, Ayrshire Fencing Group is a reliable fencing contractor based in Irvine, North Ayrshire.
        </p>
        <p className="text-sm sm:text-base box-border caret-transparent my-5 leading-relaxed">
          At Ayrshire Fencing Group we understand the needs of our customers and we know that commercial and domestic customers want great quality and value. We are one of the best respected local fencing companies in Ayrshire and pride ourselves on the skills and quality that we bring to every job.
        </p>
        <p className="text-sm sm:text-base box-border caret-transparent leading-relaxed">
          All of our customers are different; for some, fencing is a matter of security, while for others, aesthetics is the main priority. We take the time to understand each client's priorities and needs, including function, look and budget to help them get the best possible value for money.
        </p>
        <p className="text-sm sm:text-base box-border caret-transparent leading-relaxed mt-5">
          Our professional team of fencing contractors are fully qualified and insured. We are proud of our fence fitters and of the service that they provide to every customer. Ayrshire Fencing Group's fitters are happy to quote for any job, no matter how big or small.
        </p>
      </div>
    </section>
  );
};

