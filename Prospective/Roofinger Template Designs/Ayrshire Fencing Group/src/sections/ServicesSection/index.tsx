
import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesSection = () => {
  return (
    <section id="services" className="box-border caret-transparent pt-[70px] md:pt-[140px]">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-gray-900 text-3xl font-bold box-border caret-transparent leading-[38px] sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            Our Services
          </h2>
        </div>
        <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:grid-cols-[1fr_1fr_1fr]">
          <ServiceCard
            href="/service/bespoke-fencing"
            iconUrl="https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg"
            iconAlt="Service Icon"
            title="Bespoke Fencing"
            description="Custom-designed fences tailored to your specific needs. Whether you need privacy, security, or aesthetic appeal, we create fencing solutions that match your requirements."
          />
          <ServiceCard
            href="/service/decking"
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922a6c5c1d8102612221_service-02.svg"
            iconAlt="Service Icon"
            title="Decking"
            description="Professional installation of timber decking for gardens and outdoor spaces. Transform your outdoor area with high-quality decking solutions."
          />
          <ServiceCard
            href="/service/sheds-gates"
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922a0e27a271e441091e_service-03.svg"
            iconAlt="Service Icon"
            title="Sheds & Gates"
            description="Supply and installation of gates and sheds. From garden gates to secure access gates, and custom sheds to match your needs."
          />
          <ServiceCard
            href="/service/trellis"
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922ca00205c2937593ea_service-04.svg"
            iconAlt="Service Icon"
            title="Trellis"
            description="Professional installation of trellis for gardens and outdoor spaces. Add structure and support for climbing plants with our quality trellis solutions."
          />
          <ServiceCard
            href="/service/palisade-fencing"
            iconUrl="https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg"
            iconAlt="Service Icon"
            title="Palisade Fencing"
            description="Secure and durable palisade fencing solutions. Ideal for security and boundary definition, providing robust protection for your property."
          />
          <ServiceCard
            href="/service/fencing-repairs"
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922a6c5c1d8102612221_service-02.svg"
            iconAlt="Service Icon"
            title="Fencing Repairs"
            description="Expert repair services for all types of fencing. We fix damage, replace sections, and restore your fencing to its best condition."
          />
        </div>
      </div>
    </section>
  );
};
