const formatSlugToTitle = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

interface HeroContentProps {
  slug?: string;
}

export const HeroContent = ({ slug }: HeroContentProps) => {
  const title = slug ? formatSlugToTitle(slug) : "Service";

  return (
    <div className="box-border caret-transparent text-center w-full mb-[30px] mx-auto md:w-4/5 md:mb-[50px]">
      <h1 className="text-white text-[38px] font-bold box-border caret-transparent leading-[49.4px] mb-5 md:text-[68px] md:leading-[88.4px]">
        {title}
      </h1>
      <p className="text-slate-200 box-border caret-transparent max-w-full mx-auto md:max-w-[70%]">
        High-quality and durable fencing and decking solutions for residential &amp;
        commercial properties, providing long-lasting protection &amp; aesthetic appeal.
      </p>
    </div>
  );
};
