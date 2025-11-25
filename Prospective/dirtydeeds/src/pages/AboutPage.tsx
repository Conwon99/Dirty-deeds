import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const AboutPage = () => {
  return (
    <div className="text-stone-900 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-apple_system">
      <Header />
      <main className="pt-20 md:pt-[102px]">
        {/* Hero Section */}
        <section className="bg-[linear-gradient(135deg,rgb(26,26,26),rgb(45,45,45),rgb(26,26,26))] box-border caret-transparent py-20 md:py-32">
          <div className="box-border caret-transparent max-w-[1440px] w-full mx-auto px-4 md:px-16">
            <div className="text-center max-w-[800px] mx-auto">
              <h1 className="text-white text-4xl box-border caret-transparent leading-10 uppercase mb-5 font-bebas_neue md:text-6xl md:leading-[70px] md:mb-6">
                About DIRTY DEEDS
              </h1>
              <p className="text-white text-lg font-medium box-border caret-transparent leading-7 font-avenir md:text-xl md:leading-8">
                Professional exterior cleaning with attitude—Done Dirt Cheap!
              </p>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="box-border caret-transparent py-16 md:py-24">
          <div className="box-border caret-transparent max-w-[1440px] w-full mx-auto px-4 md:px-16">
            <div className="max-w-[900px] mx-auto">
              <h2 className="text-3xl box-border caret-transparent leading-9 uppercase mb-8 text-center font-bebas_neue md:text-5xl md:leading-[60px] md:mb-12">
                Our Story
              </h2>
              <div className="space-y-6 font-medium box-border caret-transparent leading-[26px] text-left md:text-justify font-avenir">
                <p>
                  DIRTY DEEDS exterior cleaning is a Rankinston-based exterior cleaning and waste-management company serving Ayrshire and the surrounding areas. We pride ourselves on delivering professional results at affordable prices—hence our slogan, "Done Dirt Cheap."
                </p>
                <p>
                  Our team combines jet-washing expertise with responsible waste management to give your property the facelift it deserves. From driveways, patios, and walls to garden tidy-ups and rubbish uplifts, we handle the messy jobs you don't want to do.
                </p>
                <p>
                  We care about the environment and your family's safety, which is why we use 100% biodegradable cleaning products that are safe for plants and pets and avoid chemical run-off into waterways. Serving Ayrshire and the surrounding areas, we offer honest advice, reliable service, and free, no-obligation quotations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="bg-neutral-50 box-border caret-transparent py-16 md:py-24">
          <div className="box-border caret-transparent max-w-[1440px] w-full mx-auto px-4 md:px-16">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="text-3xl box-border caret-transparent leading-9 uppercase mb-12 text-center font-bebas_neue md:text-5xl md:leading-[60px] md:mb-16">
                Our Mission & Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="bg-white box-border caret-transparent p-8 rounded-[20px] shadow-[rgb(0,0,0)_10px_10px_0px_0px] border-2 border-solid border-stone-900">
                  <h3 className="text-2xl box-border caret-transparent leading-8 uppercase mb-4 font-bebas_neue md:text-3xl md:leading-9">
                    Our Mission
                  </h3>
                  <p className="font-medium box-border caret-transparent leading-[26px] font-avenir">
                    To provide reliable, eco-friendly exterior cleaning and waste-management services while protecting clients' property and the environment. We deliver sparkling clean results at affordable prices, ensuring every customer feels they've received exceptional value.
                  </p>
                </div>
                <div className="bg-white box-border caret-transparent p-8 rounded-[20px] shadow-[rgb(0,0,0)_10px_10px_0px_0px] border-2 border-solid border-stone-900">
                  <h3 className="text-2xl box-border caret-transparent leading-8 uppercase mb-4 font-bebas_neue md:text-3xl md:leading-9">
                    Our Values
                  </h3>
                  <ul className="space-y-3 font-medium box-border caret-transparent leading-[26px] list-disc list-inside font-avenir">
                    <li>Eco-friendly products with zero chemical run-off</li>
                    <li>Plant-safe and pet-safe cleaning methods</li>
                    <li>Professional service with peace of mind</li>
                    <li>Fully insured and reliable</li>
                    <li>Affordable pricing—Done Dirt Cheap!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="box-border caret-transparent py-16 md:py-24">
          <div className="box-border caret-transparent max-w-[1440px] w-full mx-auto px-4 md:px-16">
            <div className="max-w-[900px] mx-auto">
              <h2 className="text-3xl box-border caret-transparent leading-9 uppercase mb-8 text-center font-bebas_neue md:text-5xl md:leading-[60px] md:mb-12">
                What We Do
              </h2>
              <div className="space-y-6 font-medium box-border caret-transparent leading-[26px] text-left md:text-justify font-avenir">
                <p>
                  DIRTY DEEDS exterior cleaning is your one-stop shop for exterior maintenance and clean-ups. We offer a comprehensive range of services designed to keep your outdoor spaces looking their best:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-xl font-bold box-border caret-transparent mb-3 font-bebas_neue">
                      Jet Washing
                    </h4>
                    <p className="font-medium box-border caret-transparent leading-[26px] font-avenir">
                      High-pressure cleaning of driveways, patios, walls, and decking to remove dirt, moss, algae, and stains.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold box-border caret-transparent mb-3 font-bebas_neue">
                      Garden Tidy-Ups
                    </h4>
                    <p className="font-medium box-border caret-transparent leading-[26px] font-avenir">
                      Removal of garden waste, overgrowth, and debris, plus general tidy-up of gardens and outdoor spaces.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold box-border caret-transparent mb-3 font-bebas_neue">
                      Waste Removal
                    </h4>
                    <p className="font-medium box-border caret-transparent leading-[26px] font-avenir">
                      Uplift and disposal of household rubbish, green waste, and unwanted items, including appliance removals.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold box-border caret-transparent mb-3 font-bebas_neue">
                      Gutter Cleaning
                    </h4>
                    <p className="font-medium box-border caret-transparent leading-[26px] font-avenir">
                      Clearing and cleaning of gutters and fascias to remove leaves, debris, and staining.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-orange-500 box-border caret-transparent py-16 md:py-24">
          <div className="box-border caret-transparent max-w-[1440px] w-full mx-auto px-4 md:px-16">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="text-white text-3xl box-border caret-transparent leading-9 uppercase mb-8 font-bebas_neue md:text-5xl md:leading-[60px] md:mb-12">
                Why Choose DIRTY DEEDS?
              </h2>
              <div className="space-y-6 text-white font-medium box-border caret-transparent leading-[26px] text-left md:text-center font-avenir">
                <p>
                  We're not just cleaners—we're your trusted partners in maintaining beautiful outdoor spaces. With a focus on eco-friendly methods, professional service, and competitive pricing, we deliver results that exceed expectations.
                </p>
                <p>
                  Fully insured and committed to your peace of mind, we stand behind our work with a promise of quality, reliability, and affordability. No cowboys—just professional service delivered with a smile.
                </p>
                <div className="mt-10">
                  <a
                    href="/#contact"
                    className="text-orange-500 text-lg items-center bg-white box-border caret-transparent inline-flex justify-center min-h-12 gap-x-2.5 uppercase text-nowrap px-10 py-4 rounded-[100px] border-2 border-solid border-white font-bebas_neue md:text-xl hover:bg-orange-500 hover:text-white"
                  >
                    Get Your Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="box-border caret-transparent py-16 md:py-24">
          <div className="box-border caret-transparent max-w-[1440px] w-full mx-auto px-4 md:px-16">
            <div className="max-w-[600px] mx-auto text-center">
              <h2 className="text-3xl box-border caret-transparent leading-9 uppercase mb-6 font-bebas_neue md:text-4xl md:leading-[50px] md:mb-8">
                Ready to Get Started?
              </h2>
              <p className="font-medium box-border caret-transparent leading-[26px] mb-8 font-avenir">
                Contact DIRTY DEEDS exterior cleaning today for a free, no-obligation quote. We're always open for enquiries and ready to help transform your outdoor spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+447483414765"
                  className="text-white text-lg items-center bg-orange-500 box-border caret-transparent inline-flex justify-center min-h-12 gap-x-2.5 uppercase text-nowrap px-10 py-4 rounded-[100px] border-2 border-solid border-orange-500 font-bebas_neue md:text-xl hover:bg-orange-600"
                >
                  Call 07483 414 765
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100090370285579"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg items-center bg-orange-500 box-border caret-transparent inline-flex justify-center min-h-12 gap-x-2.5 uppercase text-nowrap px-10 py-4 rounded-[100px] border-2 border-solid border-orange-500 font-bebas_neue md:text-xl hover:bg-orange-600"
                >
                  Message on Facebook
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

