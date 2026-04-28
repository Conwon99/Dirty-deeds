import { useState } from "react";

const faqs: { question: string; answer: string }[] = [
  {
    question: "What areas do you cover?",
    answer:
      "We cover Perth and Kinross and Angus, including Perth, Scone, Blairgowrie, Pitlochry, Aberfeldy, Crieff, Auchterarder, Kinross, Dunkeld, Coupar Angus, Alyth and nearby villages. Get in touch to confirm we cover your area.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We carry out all types of tree work, including pruning, crown reductions, tree removal, sectional dismantling, stump grinding, hedge cutting, site clearance and 24 hour emergency tree work.",
  },
  {
    question: "Do you offer 24 hour emergency tree work?",
    answer:
      "Yes. If a tree has fallen, become dangerous, or is causing an immediate safety concern, call 07860 203475 and we will respond as quickly as possible.",
  },
  {
    question: "Are you qualified and insured?",
    answer:
      "Yes. A Cut Above Arborist is fully qualified and works with safe, professional methods for tree surgery and arborist work. Insurance details can be confirmed when you book.",
  },
  {
    question: "Do I need permission before tree work starts?",
    answer:
      "Some trees are protected by Tree Preservation Orders or conservation area rules. If you are unsure, we can advise what to check with your local authority before work begins.",
  },
  {
    question: "Will you remove branches and waste?",
    answer:
      "Yes. We can remove branches, logs and green waste as part of the job, or leave logs and woodchip on site if you would prefer to keep them.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Call 07860 203475 or use the contact form. We will ask for details about the tree, access and the work required, and may request photos so we can provide an accurate quote.",
  },
];

export const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border flex flex-col gap-y-8 md:gap-y-10">
          <div className="box-border inline-block border border-[#D6DDC2] px-3 py-1 rounded-[1000px] border-solid w-fit">
            <span className="font-medium leading-[22px]">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
            Frequently Asked Questions
          </h2>
          <div className="box-border flex flex-col gap-y-0 border border-[#D6DDC2] rounded-xl overflow-hidden">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#D6DDC2] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left flex items-center justify-between gap-4 py-5 px-5 md:py-6 md:px-6 hover:bg-[#F3F5EC]/50 transition"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-heading uppercase text-base md:text-lg font-bold text-black">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-[15px] leading-6 text-neutral-700 md:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
