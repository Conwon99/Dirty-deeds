export const CompanyIntro = () => {
  return (
    <div
      id="about"
      className="items-center box-border caret-transparent gap-x-5 flex flex-col justify-center gap-y-5 text-center mb-[100px] md:gap-x-10 md:flex-row md:gap-y-10 md:text-start"
    >
      <img
        src="/images/dd-removebg-preview.png"
        alt="DIRTY DEEDS exterior cleaning logo"
        className="box-border caret-transparent max-w-[260px] w-full md:max-w-[320px]"
      />
      <h2 className="text-4xl box-border caret-transparent leading-[44px] max-w-[600px] text-center font-gading_retro md:text-[50px] md:leading-[60px] md:text-start">
        <span className="text-4xl box-border caret-transparent leading-[44px] text-center font-bebas_neue md:text-[50px] md:leading-[60px] md:text-start">
          is Your One-Stop Exterior Cleaning &amp; Waste Team
        </span>
      </h2>
    </div>
  );
};
