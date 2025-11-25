import { ReviewsWidget } from "@/sections/TestimonialsSection/components/ReviewsWidget";

export const TestimonialsSection = () => {
  return (
    <section className="bg-white box-border caret-transparent py-10 md:py-20">
      <div className="box-border caret-transparent max-w-[1440px] w-full mx-auto px-5">
        <h2 className="text-[32px] box-border caret-transparent leading-[35.2px] text-center uppercase mb-[30px] font-bebas_neue md:text-5xl md:leading-[52.8px] md:mb-10">
          COMMUNITY FEEDBACK COMING SOON
        </h2>
        <ReviewsWidget />
      </div>
    </section>
  );
};
