import type { Location } from "@/data/locations";
import { services } from "@/data/services";

export type LocationContentSectionProps = {
  location: Location;
};

export const LocationContentSection = ({
  location,
}: LocationContentSectionProps) => {
  const { name, neighborhoods = [] } = location;
  const areaList =
    neighborhoods.length > 0
      ? neighborhoods.join(", ")
      : name;

  return (
    <section className="bg-white box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="max-w-[800px] prose prose-neutral">
          <p className="text-[15px] text-neutral-700 leading-6 md:text-base mb-8">
            Trees and hedges in {name} need careful, practical maintenance to stay safe, healthy and manageable. We help homeowners, landlords and commercial sites with pruning, removals, stump grinding, hedge cutting and urgent storm-damage callouts, bringing the right equipment and safe working methods to your property.
          </p>

          {services.map((service) => (
            <div key={service.slug} className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-black mb-3 font-heading uppercase">
                {service.title} in {name}
              </h2>
              <p className="text-[15px] text-neutral-700 leading-6 md:text-base">
                Our {service.title.toLowerCase()} service is available across {name} and the surrounding areas. We assess access, risks and the best method before work begins, then complete the job safely and leave the area tidy.
              </p>
            </div>
          ))}

          <h2 className="text-2xl font-bold tracking-tight text-black mt-12 mb-3 font-heading uppercase">
            Why professional tree work matters in {name}
          </h2>
          <p className="text-[15px] text-neutral-700 leading-6 md:text-base">
            We cover {areaList} and the wider area. Professional tree surgery helps reduce hazards, improve light, manage growth and protect nearby buildings, boundaries and access routes. Get in touch to confirm we cover your postcode and arrange a quote.
          </p>
        </div>
      </div>
    </section>
  );
};
