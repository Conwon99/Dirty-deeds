interface ServiceInfoProps {
  slug?: string;
}

export const ServiceInfo = ({ slug }: ServiceInfoProps = {}) => {
  const isDecking = slug === "decking";
  const isFencing = slug === "fencing";
  const isFenceRepairs = slug === "fence-repairs";
  const isGates = slug === "gates";
  const isSheds = slug === "sheds";
  const isGardenRooms = slug === "garden-rooms";

  const getTitle = () => {
    if (isDecking) return "About our decking installations";
    if (isFencing) return "About our fencing installations";
    if (isFenceRepairs) return "About our fence repair services";
    if (isGates) return "About our gate installation services";
    if (isSheds) return "About our shed installation services";
    if (isGardenRooms) return "About our garden room installations";
    return "About our services";
  };

  const getDescription = () => {
    if (isDecking) return "Our decking installation services are designed to transform your outdoor space with durable, high-quality timber decking. Whether you need decking for your garden, patio, or commercial property, we offer various materials and styles to suit your needs and enhance your outdoor living area.";
    if (isFencing) return "Our fencing installation services are designed to provide your property with durable, secure fencing that enhances both security and aesthetic appeal. We offer a wide range of fencing types to suit every need and budget.";
    if (isFenceRepairs) return "Expert repair services for all types of fencing. We fix damage, replace sections, and restore your fencing to its best condition, ensuring your property remains secure and well-maintained.";
    if (isGates) return "Supply and installation of gates for all purposes. From garden gates to secure access gates, we provide quality gate solutions to match your needs and enhance your property's security and appearance.";
    if (isSheds) return "Custom sheds designed and built to match your requirements. Professional installation of quality sheds for storage and garden use, providing practical and attractive solutions for your outdoor space.";
    if (isGardenRooms) return "Create additional living space with our professional garden room installations. High-quality garden rooms designed to enhance your outdoor living experience, providing versatile spaces for work, relaxation, or entertainment.";
    return "Our services are designed to provide your property with durable, weather-resistant solutions that enhance its look. We offer various materials and styles to suit your needs.";
  };

  return (
    <div className="items-start box-border caret-transparent gap-x-5 flex flex-col justify-start gap-y-5 md:gap-x-[50px] md:gap-y-[50px]">
      <div className="box-border caret-transparent">
        <h2 className="text-gray-900 text-[22px] font-bold box-border caret-transparent leading-[30.8px] mb-2.5 md:text-[34px] md:leading-[40.8px] md:mb-[30px]">
          {getTitle()}
        </h2>
        <p className="box-border caret-transparent mb-2.5">
          {getDescription()}
        </p>
        {isFencing && (
          <div className="box-border caret-transparent mt-5">
            <h3 className="text-gray-900 text-lg font-bold box-border caret-transparent leading-[25.2px] mb-3 md:text-xl md:leading-[28px]">
              Types of Fencing We Install:
            </h3>
            <ul
              role="list"
              className="box-border caret-transparent mt-[15px] mb-2.5 pl-5 md:mt-[20px]"
            >
              <li className="box-border caret-transparent mb-3">
                <strong>Wooden Fencing:</strong> Traditional and versatile, wooden fencing offers natural beauty and can be customized to match your property's style.
              </li>
              <li className="box-border caret-transparent mb-3">
                <strong>Composite Fencing:</strong> Low-maintenance and durable, composite fencing combines the look of wood with enhanced weather resistance.
              </li>
              <li className="box-border caret-transparent mb-3">
                <strong>Chainlink Fencing:</strong> Cost-effective and practical, chainlink fencing provides security and visibility while maintaining boundaries.
              </li>
              <li className="box-border caret-transparent mb-3">
                <strong>Nylofor Fencing:</strong> Modern and secure, nylofor fencing offers excellent privacy and weather resistance with a contemporary appearance.
              </li>
              <li className="box-border caret-transparent mb-3">
                <strong>Concrete Fencing:</strong> Maximum durability and security, concrete fencing provides long-lasting protection with minimal maintenance.
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="box-border caret-transparent">
        <h2 className="text-gray-900 text-[22px] font-bold box-border caret-transparent leading-[30.8px] mb-2.5 md:text-[34px] md:leading-[40.8px] md:mb-[30px]">
          Why choose our {isDecking ? "decking" : isFencing ? "fencing" : isFenceRepairs ? "fence repair" : isGates ? "gate" : isSheds ? "shed" : isGardenRooms ? "garden room" : ""} services?
        </h2>
        <p className="box-border caret-transparent mb-2.5">
          {isDecking
            ? "Our decking installations combine top-quality timber materials and expert craftsmanship, ensuring durability and style for your outdoor space."
            : isFencing
            ? "Our fencing installations combine top-quality materials and expert craftsmanship, ensuring durability and style for your property's protection."
            : isFenceRepairs
            ? "Our fence repair services ensure your fencing is restored to its best condition, maintaining security and appearance for your property."
            : isGates
            ? "Our gate installations combine quality materials and expert craftsmanship, ensuring security and aesthetic appeal for your property."
            : isSheds
            ? "Our shed installations combine quality materials and expert craftsmanship, providing practical and attractive storage solutions."
            : isGardenRooms
            ? "Our garden room installations combine quality materials and expert craftsmanship, creating versatile and comfortable additional living spaces."
            : "Our installations combine top-quality materials and expert craftsmanship, ensuring durability and style."}
        </p>
        <ul
          role="list"
          className="box-border caret-transparent mt-[15px] mb-2.5 pl-5 md:mt-[30px]"
        >
          <li className="box-border caret-transparent mb-5">
            High-quality materials for maximum durability and weather resistance.
          </li>
          <li className="box-border caret-transparent mb-5">
            Fully qualified and experienced team for reliable craftsmanship.
          </li>
          <li className="box-border caret-transparent mb-5">
            {isDecking
              ? "Various decking styles and finishes available to match your preferences."
              : isFencing
              ? "Wide range of fencing types available to suit your needs."
              : isFenceRepairs
              ? "Expert repair services for all types of fencing damage."
              : isGates
              ? "Various gate styles and designs available to match your property."
              : isSheds
              ? "Custom designs available to match your requirements and space."
              : isGardenRooms
              ? "Versatile designs to suit various uses and preferences."
              : "Various styles available to suit your needs."}
          </li>
          <li className="box-border caret-transparent mb-5">
            Professional installation with attention to detail and quality.
          </li>
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
