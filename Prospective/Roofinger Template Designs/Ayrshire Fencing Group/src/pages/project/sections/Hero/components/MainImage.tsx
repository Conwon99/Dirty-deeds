const projectHeroImages: Record<
  string,
  { src: string; alt: string; projectNumber: string }
> = {
  "new-roof-with-fascias-soffits": {
    src: "/projects/project-004-004.jpg",
    alt: "Fencing project completed in Ayrshire",
    projectNumber: "004",
  },
  "new-roughcast-job-completed": {
    src: "/projects/project-002-003.jpg",
    alt: "Fencing project completed in Ayrshire",
    projectNumber: "002",
  },
  "complete-roof-renovation": {
    src: "/projects/project-003-001.jpg",
    alt: "Fencing project completed in Ayrshire",
    projectNumber: "003",
  },
  "roof-roughcast-exterior-upgrade": {
    src: "/projects/project-005-001.jpg",
    alt: "Fencing project completed in Ayrshire",
    projectNumber: "005",
  },
};

interface MainImageProps {
  slug?: string;
}

export const MainImage = ({ slug }: MainImageProps) => {

  const project =
    (slug && projectHeroImages[slug]) ??
    projectHeroImages["new-roof-with-fascias-soffits"];

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
    projectHeroImages["new-roof-with-fascias-soffits"];
  return project.projectNumber;
};
