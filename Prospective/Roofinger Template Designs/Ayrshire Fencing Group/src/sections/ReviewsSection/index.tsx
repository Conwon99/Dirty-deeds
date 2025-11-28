import { ReviewCard } from "@/sections/ReviewsSection/components/ReviewCard";
import { ReviewStats } from "@/sections/ReviewsSection/components/ReviewStats";

export const ReviewsSection = () => {
  return (
    <section className="box-border caret-transparent py-[70px] md:py-[140px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-white text-4xl font-bold box-border caret-transparent leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            What Our Customers Say
          </h2>
        </div>
        <ReviewStats />
        <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:grid-cols-[1fr_1fr] md:gap-y-[30px] lg:grid-cols-[1fr_1fr_1fr]">
          <ReviewCard
            author="Nicole Saunders"
            text="Brilliant service and an amazing job completed. Would highly recommend!"
            isRecommendation={true}
          />
          <ReviewCard
            author="Nicole Saunders"
            text="Highly recommend Ayrshire Fencing Group! Stewart and the guys turned up exactly when they said they would (even after I kept having to rearrange due to house moving dates) and finished the whole area so quickly! They have made such a difference to our garden and will definitely get the guys back to do another area in our garden and maybe even a pergola now I have noticed they do them 🤣!"
            isRecommendation={true}
          />
          <ReviewCard
            author="Susan Greenlees"
            text="I highly recommend Ayrshire fencing and I will definitely be using them again. Stewart was reliable and done a brilliant job on my fence and pergola. He went over and above to help with no issues at all, absolute brilliant price and I couldn't rave about this company enough. They also cleaned away all the mess from the rubble and the old fence which made things a lot easier. Thanks so much!"
            isRecommendation={true}
          />
        </div>
      </div>
    </section>
  );
};


