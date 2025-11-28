interface ServiceImageProps {
  slug?: string;
}

export const ServiceImage = ({ slug }: ServiceImageProps = {}) => {
  const getImageSrc = () => {
    if (slug === "decking") {
      return "/projects/project-4.jpg";
    }
    return "/projects/project-1.jpg";
  };

  const getImageAlt = () => {
    if (slug === "decking") {
      return "Decking service in Ayrshire";
    }
    return "Fencing service in Ayrshire";
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
