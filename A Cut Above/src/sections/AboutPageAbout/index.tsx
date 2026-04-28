import aboutTreeWorkImageUrl from "../../../ImagesPhotos/670431316_18087555836056361_5022063728821463636_n (1).jpg?url";
import aboutDetailImageUrl from "../../../ImagesPhotos/670428133_18087555848056361_2695285749880354502_n.jpg?url";
import aboutFallenTreeImageUrl from "../../../ImagesPhotos/fallen tree.jpg?url";

export const AboutPageAbout = () => {
  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="box-border caret-transparent max-w-[988px]">
              <div className="text-3xl font-bold box-border caret-transparent blur-0 tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
                Need a tree surgeon near you?
              </div>
            </div>
          </div>
          <div className="items-center md:items-end box-border caret-transparent gap-x-7 flex flex-col justify-center md:justify-between gap-y-7 mt-[18px] md:gap-x-10 md:flex-row md:gap-y-10 md:mt-5">
            <div className="box-border caret-transparent gap-x-[18px] flex blur-0 flex-col max-w-[488px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
              <div className="text-neutral-700 box-border caret-transparent space-y-4">
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  With 10 years of experience, I provide professional arboricultural services backed by formal college training and high-risk expertise. My career includes time with W M Shorthouse Forestry Ltd, Cortis Tree and Land Management, and specialized utility work for SSE.
                </div>
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  From large-scale forestry to private residential care, I bring a methodical, safety-first approach to every project across the full range of tree surgery services.
                </div>
                <div className="mt-8 pt-6 border-t border-[#D6DDC2]">
                  <h3 className="text-lg font-semibold font-heading uppercase text-black mb-4">
                    Services Provided
                  </h3>
                  <div className="flex flex-col gap-y-3">
                    {[
                      "Tree Pruning & Crown Reduction",
                      "Tree Removal & Dismantling",
                      "Stump Grinding",
                      "Hedge Cutting & Maintenance",
                      "Emergency Tree Work 24/7",
                      "Fallen Tree Removal",
                    ].map((service) => (
                    <div key={service} className="flex items-start gap-2">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5F6F3A]" aria-hidden>
                        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-neutral-700 md:text-base">
                        {service}
                      </span>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent gap-y-4 flex flex-col w-full max-w-full md:max-w-none md:w-auto">
              <div className="box-border caret-transparent blur-0 h-[300px] w-full overflow-hidden rounded-2xl md:h-[400px] md:w-[500px]">
                <img
                  src={aboutTreeWorkImageUrl}
                  sizes="(max-width: 767px) 100vw, 500px"
                  alt="A Cut Above Arborist - tree surgery"
                  className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                />
              </div>
              <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 w-full md:flex-row md:gap-y-0 md:w-auto">
                <div className="box-border caret-transparent blur-0 h-[190px] w-full overflow-hidden rounded-2xl md:h-[190px] md:w-[240px]">
                  <img
                    src={aboutDetailImageUrl}
                    sizes="(max-width: 767px) 100vw, 240px"
                    alt="A Cut Above Arborist - arborist work"
                    className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                  />
                </div>
                <div className="box-border caret-transparent blur-0 h-[190px] w-full overflow-hidden rounded-2xl md:h-[190px] md:w-[240px]">
                  <img
                    src={aboutFallenTreeImageUrl}
                    sizes="(max-width: 767px) 100vw, 240px"
                    alt="A Cut Above Arborist - fallen tree clearance"
                    className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
