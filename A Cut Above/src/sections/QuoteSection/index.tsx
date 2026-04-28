import { QuoteForm } from "./components/QuoteForm";
import { TermsAndConditions } from "./components/TermsAndConditions";
import contactImageUrl from "../../../ImagesPhotos/arborist_hero.png?url";

export type QuoteSectionProps = {
  showTerms?: boolean;
};

export const QuoteSection = ({ showTerms = true }: QuoteSectionProps) => {
  return (
    <section id="contact" className="bg-[#05070f] py-[60px] md:py-[100px]">
      <div className="max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="grid overflow-hidden rounded-2xl bg-[#111827] shadow-2xl lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[640px]">
            <img
              src={contactImageUrl}
              alt="A Cut Above Arborist tree work"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
            <div className="relative flex h-full flex-col justify-center px-8 py-10 text-white md:px-10 lg:px-12">
              <h2 className="max-w-[460px] text-3xl font-bold leading-tight tracking-[-0.52px] md:text-[44px] md:leading-[52px]">
                Get in touch for your free, no-obligation quote
              </h2>
              <a
                href="tel:+447860203475"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag("event", "phone_quote_section", {
                      event_category: "Phone",
                      event_label: window.location.pathname,
                    });
                  }
                }}
                className="mt-8 inline-flex w-fit items-center gap-4 rounded-full bg-black/60 px-6 py-4 text-lg font-bold text-[#D6DDC2] shadow-lg backdrop-blur-sm transition hover:bg-black/80"
              >
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07860 203475
              </a>
            </div>
          </div>
          <div className="bg-[#111827] p-6 md:p-8 lg:p-10">
            <QuoteForm />
            {showTerms && <TermsAndConditions />}
          </div>
        </div>
      </div>
    </section>
  );
};
