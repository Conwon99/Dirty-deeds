const projectHeroImages: Record<
  string,
  { src: string; alt: string; projectNumber: string; imagePrefix: string }
> = {
  "wooden-gate-and-fencing": {
    src: "/projects/project-1.jpg",
    alt: "Wooden gate and fencing project completed in Ayrshire",
    projectNumber: "001",
    imagePrefix: "wooden-gate-fencing",
  },
  "fencing-project-two": {
    src: "/projects/project-2.jpg",
    alt: "Fencing project completed in Ayrshire",
    projectNumber: "002",
    imagePrefix: "project-2",
  },
  "wooden-fencing": {
    src: "/projects/project-3.jpg",
    alt: "Wooden fencing project completed in Ayrshire",
    projectNumber: "003",
    imagePrefix: "wooden-fencing",
  },
  "decking-project-four": {
    src: "/projects/project-4.jpg",
    alt: "Decking project completed in Ayrshire",
    projectNumber: "004",
    imagePrefix: "project-004",
  },
  "decking-project-five": {
    src: "/projects/project-5.jpg",
    alt: "Decking project completed in Ayrshire",
    projectNumber: "005",
    imagePrefix: "project-005",
  },
  "decking-project-six": {
    src: "/projects/project-6.jpg",
    alt: "Decking project completed in Ayrshire",
    projectNumber: "006",
    imagePrefix: "project-006",
  },
};

interface MainImageProps {
  slug?: string;
}

export const MainImage = ({ slug }: MainImageProps) => {

  const project =
    (slug && projectHeroImages[slug]) ??
    projectHeroImages["wooden-gate-and-fencing"];

  return (
    <a
      href="#"
      aria-label="open lightbox"
      className="box-border caret-transparent block h-full max-w-full underline w-full overflow-hidden rounded-[20px] hover:decoration-transparent"
    >
      <img
        src={project.src}
        alt={project.alt}
        className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
      />
    </a>
  );
};

export const getProjectNumber = (slug?: string): string => {
  const project =
    (slug && projectHeroImages[slug]) ??
    projectHeroImages["wooden-gate-and-fencing"];
  return project.projectNumber;
};

export const getProjectImagePrefix = (slug?: string): string => {
  const project =
    (slug && projectHeroImages[slug]) ??
    projectHeroImages["wooden-gate-and-fencing"];
  return project.imagePrefix || `project-${project.projectNumber}`;
};
