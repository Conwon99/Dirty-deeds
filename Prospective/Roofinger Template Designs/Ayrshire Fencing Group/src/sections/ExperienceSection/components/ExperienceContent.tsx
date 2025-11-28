import { RatingDisplay } from "@/sections/ExperienceSection/components/RatingDisplay";
import { TestimonialsCarousel } from "@/sections/ExperienceSection/components/TestimonialsCarousel";

export const ExperienceContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-[30px] flex flex-col justify-between gap-y-[30px] md:gap-x-[50px] md:gap-y-[50px]">
      <div className="box-border caret-transparent">
        <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[38px] mb-2.5 sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
          About Us
        </h2>
        <p className="text-gray-200 text-sm sm:text-base box-border caret-transparent mt-2.5 mb-5 md:mt-5 md:mb-[50px] leading-relaxed">
          Fully qualified and insured, we provide professional fencing services. From bespoke fencing, sheds & gates, trellis, decking, palisade fencing, to fencing repairs - we handle it all. With over 13 years' experience, we deliver quality workmanship and value on every project.
        </p>
        <a
          href="/about"
          className="text-green-500 text-sm bg-gray-900 box-border caret-transparent inline-block leading-[19.6px] text-center border border-gray-900 px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:text-gray-900 hover:bg-green-500 hover:decoration-transparent"
        >
          More about us
        </a>
      </div>
      <div className="box-border caret-transparent mt-8 md:mt-10">
        <RatingDisplay />
        <TestimonialsCarousel />
      </div>
    </div>
  );
};
