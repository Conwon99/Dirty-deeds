interface ServiceImageProps {
  slug?: string;
}

export const ServiceImage = ({ slug }: ServiceImageProps = {}) => {
  const getImageSrc = () => {
    // Decking images
    if (slug === "decking" || slug === "timber-decking-irvine" || slug === "composite-decking-irvine" || slug === "wooden-decking-irvine") return "/projects/project-4.jpg";
    // Fencing images
    if (slug === "fencing" || slug === "custom-fence-construction-irvine" || slug === "wood-fence-installation-irvine" || slug === "wooden-fencing-irvine" || slug === "garden-fence-installation-irvine" || slug === "composite-fencing-installation-irvine" || slug === "composite-fencing-irvine" || slug === "chainlink-fencing-installation-irvine" || slug === "chainlink-fencing-irvine" || slug === "nylofor-fencing-irvine" || slug === "concrete-fencing-irvine") return "/projects/project-1.jpg";
    if (slug === "fence-repairs" || slug === "fence-replacement-irvine") return "/projects/project-2.jpg";
    if (slug === "gates") return "/projects/project-3.jpg";
    if (slug === "sheds") return "/projects/project-5.jpg";
    if (slug === "garden-rooms") return "/projects/project-6.jpg";
    return "/projects/project-1.jpg";
  };

  const getImageAlt = () => {
    if (slug === "composite-decking-irvine") return "Composite decking installation in Irvine, Ayrshire";
    if (slug === "wooden-decking-irvine") return "Wooden decking installation in Irvine, Ayrshire";
    if (slug === "wooden-fencing-irvine") return "Wooden fencing installation in Irvine, Ayrshire";
    if (slug === "composite-fencing-irvine") return "Composite fencing installation in Irvine, Ayrshire";
    if (slug === "chainlink-fencing-irvine") return "Chainlink fencing installation in Irvine, Ayrshire";
    if (slug === "nylofor-fencing-irvine") return "Nylofor fencing installation in Irvine, Ayrshire";
    if (slug === "concrete-fencing-irvine") return "Concrete fencing installation in Irvine, Ayrshire";
    if (slug === "decking" || slug === "timber-decking-irvine") return "Decking service in Irvine, Ayrshire";
    if (slug === "fencing" || slug === "custom-fence-construction-irvine" || slug === "wood-fence-installation-irvine" || slug === "garden-fence-installation-irvine" || slug === "composite-fencing-installation-irvine" || slug === "chainlink-fencing-installation-irvine") return "Fencing service in Irvine, Ayrshire";
    if (slug === "fence-repairs" || slug === "fence-replacement-irvine") return "Fence repair service in Irvine, Ayrshire";
    if (slug === "gates") return "Gate installation service in Irvine, Ayrshire";
    if (slug === "sheds") return "Shed installation service in Irvine, Ayrshire";
    if (slug === "garden-rooms") return "Garden room installation service in Irvine, Ayrshire";
    return "Service in Irvine, Ayrshire";
  };

  return (
    <div className="box-border caret-transparent overflow-hidden mb-5 rounded-[20px] md:mb-[50px]">
      <img
        src={getImageSrc()}
        alt={getImageAlt()}
        className="box-border caret-transparent inline-block h-full max-w-full w-full"
      />
    </div>
  );
};
