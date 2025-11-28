interface ServiceImageProps {
  slug?: string;
}

export const ServiceImage = ({ slug }: ServiceImageProps = {}) => {
  const getImageSrc = () => {
    if (slug === "decking") return "/projects/project-4.jpg";
    if (slug === "fencing") return "/projects/project-1.jpg";
    if (slug === "fence-repairs") return "/projects/project-2.jpg";
    if (slug === "gates") return "/projects/project-3.jpg";
    if (slug === "sheds") return "/projects/project-5.jpg";
    if (slug === "garden-rooms") return "/projects/project-6.jpg";
    return "/projects/project-1.jpg";
  };

  const getImageAlt = () => {
    if (slug === "decking") return "Decking service in Ayrshire";
    if (slug === "fencing") return "Fencing service in Ayrshire";
    if (slug === "fence-repairs") return "Fence repair service in Ayrshire";
    if (slug === "gates") return "Gate installation service in Ayrshire";
    if (slug === "sheds") return "Shed installation service in Ayrshire";
    if (slug === "garden-rooms") return "Garden room installation service in Ayrshire";
    return "Service in Ayrshire";
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
