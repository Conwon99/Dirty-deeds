interface ServiceInfoProps {
  slug?: string;
}

export const ServiceInfo = ({ slug }: ServiceInfoProps = {}) => {
  const isDecking = slug === "decking";

  return (
    <div className="items-start box-border caret-transparent gap-x-5 flex flex-col justify-start gap-y-5 md:gap-x-[50px] md:gap-y-[50px]">
      <div className="box-border caret-transparent">
        <h2 className="text-gray-900 text-[22px] font-bold box-border caret-transparent leading-[30.8px] mb-2.5 md:text-[34px] md:leading-[40.8px] md:mb-[30px]">
          {isDecking ? "About our decking installations" : "About our fencing installations"}
        </h2>
        <p className="box-border caret-transparent mb-2.5">
          {isDecking
            ? "Our decking installation services are designed to transform your outdoor space with durable, high-quality timber decking. Whether you need decking for your garden, patio, or commercial property, we offer various materials and styles to suit your needs and enhance your outdoor living area."
            : "Our fencing installation services are designed to provide your property with durable, secure fencing that enhances both security and aesthetic appeal. Whether you need fencing for your home or commercial property, we offer various materials and styles to suit your needs."}
        </p>
      </div>
      <div className="box-border caret-transparent">
        <h2 className="text-gray-900 text-[22px] font-bold box-border caret-transparent leading-[30.8px] mb-2.5 md:text-[34px] md:leading-[40.8px] md:mb-[30px]">
          {isDecking ? "Why choose our decking installations?" : "Why choose our fencing installations?"}
        </h2>
        <p className="box-border caret-transparent mb-2.5">
          {isDecking
            ? "Our decking installations combine top-quality timber materials and expert craftsmanship, ensuring durability and style for your outdoor space."
            : "Our installations combine top-quality materials and expert craftsmanship, ensuring durability and style for your property's protection."}
        </p>
        <ul
          role="list"
          className="box-border caret-transparent mt-[15px] mb-2.5 pl-5 md:mt-[30px]"
        >
          {isDecking ? (
            <>
              <li className="box-border caret-transparent mb-5">
                High-quality timber materials for maximum durability and weather resistance.
              </li>
              <li className="box-border caret-transparent mb-5">
                Fully qualified and experienced team for reliable craftsmanship.
              </li>
              <li className="box-border caret-transparent mb-5">
                Various decking styles and finishes available to match your preferences.
              </li>
              <li className="box-border caret-transparent mb-5">
                Professional installation with attention to detail and quality.
              </li>
            </>
          ) : (
            <>
              <li className="box-border caret-transparent mb-5">
                High-quality materials for maximum durability.
              </li>
              <li className="box-border caret-transparent mb-5">
                Fully qualified and experienced team for reliable craftsmanship.
              </li>
              <li className="box-border caret-transparent mb-5">
                Various fencing styles available to suit your needs.
              </li>
              <li className="box-border caret-transparent mb-5">
                Professional installation with comprehensive service.
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="box-border caret-transparent">
        <h2 className="text-gray-900 text-[22px] font-bold box-border caret-transparent leading-[30.8px] mb-2.5 md:text-[34px] md:leading-[40.8px] md:mb-[30px]">
          {isDecking ? "Our installation process" : "Our installation process"}
        </h2>
        <p className="box-border caret-transparent mb-2.5">
          We follow a thorough, step-by-step approach, from consultation to
          completion, ensuring a seamless experience and exceptional results for
          every project.
        </p>
        <ol
          role="list"
          className="box-border caret-transparent list-decimal mt-[15px] mb-2.5 pl-5 md:mt-[30px]"
        >
          <li className="box-border caret-transparent mb-5">
            Consultation: We start with a free consultation to understand your
            needs.
          </li>
          <li className="box-border caret-transparent mb-5">
            {isDecking ? "Site Assessment: A thorough assessment of your outdoor space to plan the decking layout." : "Site Inspection: A thorough site inspection to assess your requirements."}
          </li>
          <li className="box-border caret-transparent mb-5">
            Proposal: A detailed proposal with clear timelines and pricing.
          </li>
          <li className="box-border caret-transparent mb-5">
            Installation: Expert installation using top-tier materials,
            completed on time.
          </li>
        </ol>
      </div>
    </div>
  );
};
