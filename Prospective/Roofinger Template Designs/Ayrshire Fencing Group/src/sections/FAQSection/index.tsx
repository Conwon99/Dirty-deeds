import { FAQItem } from "@/sections/FAQSection/components/FAQItem";

export const FAQSection = () => {
  return (
    <section className="bg-transparent box-border caret-transparent pt-[70px] pb-[100px] md:pt-[100px]">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 md:gap-x-20 md:grid-cols-[minmax(200px,0.25fr)_1fr] md:gap-y-20">
          <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[38px] mb-2.5 sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            FAQs
          </h2>
          <div className="items-start box-border caret-transparent gap-x-[30px] flex flex-col justify-start gap-y-[30px]">
            <FAQItem 
              question="What types of fencing and decking services do you offer?" 
              answer="We offer a comprehensive range of services including bespoke fencing, sheds & gates, trellis, decking, palisade fencing, and fencing repairs. All services are tailored to meet your specific needs, whether for domestic or commercial properties."
            />
            <FAQItem 
              question="Are you fully qualified and insured?" 
              answer="Yes, our fitters are fully qualified and insured. We take pride in operating professionally and safely. You can trust us to handle your fencing and decking needs with the highest standards of workmanship and reliability."
            />
            <FAQItem 
              question="Do you offer free quotes?" 
              answer="Yes, we provide free, no-obligation quotes for all our services. Contact us today to discuss your requirements and we'll provide you with a competitive quote tailored to your project."
            />
            <FAQItem 
              question="What areas do you serve?" 
              answer="We serve domestic and commercial customers throughout Ayrshire. Based in Irvine, North Ayrshire, we're well-positioned to serve clients across the region. Contact us to confirm if we cover your area."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
