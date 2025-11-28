import { getProjectNumber, getProjectImagePrefix } from "@/pages/project/sections/Hero/components/MainImage";

interface ThumbnailGridProps {
  slug?: string;
}

export const ThumbnailGrid = ({ slug }: ThumbnailGridProps) => {
  const imagePrefix = getProjectImagePrefix(slug);
  
  // Define how many images each project has
  const projectImageCounts: Record<string, number> = {
    "wooden-gate-and-fencing": 5,
    "fencing-project-two": 4,
    "wooden-fencing": 4,
    "decking-project-four": 3,
    "decking-project-five": 4,
    "decking-project-six": 3,
  };

  const imageCount = projectImageCounts[slug || ""] || 4;
  
  // Check if this is a decking project that uses 3-digit numbering (002, 003, etc.)
  const isDeckingProject = slug?.includes("decking-project-four") || slug?.includes("decking-project-five") || slug?.includes("decking-project-six");
  
  // Generate image numbers (2, 3, 4, etc.) excluding the hero image (which is always 1)
  const thumbnailImages = Array.from({ length: imageCount - 1 }, (_, i) => i + 2)
    .map((number) => {
      // For all decking projects, use 3-digit format (002, 003, etc.)
      // For other projects, use their existing format
      let formattedNumber: string;
      if (isDeckingProject) {
        formattedNumber = number.toString().padStart(3, "0");
      } else {
        formattedNumber = number.toString();
      }
      return {
        number: formattedNumber,
        alt: `Project image ${number}`,
      };
    });

  return (
    <div className="box-border caret-transparent">
      <div
        role="list"
        className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-full gap-y-5"
      >
        {thumbnailImages.map((img, index) => (
          <div key={index} role="listitem" className="box-border caret-transparent">
            <a
              href="#"
              aria-label="open lightbox"
              className="box-border caret-transparent inline-block h-full max-w-full underline w-full overflow-hidden rounded-[20px] hover:decoration-transparent"
            >
              <img
                src={`/projects/${imagePrefix}-${img.number}.jpg`}
                alt={img.alt}
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </a>
          </div>
        ))}
      </div>
      {thumbnailImages.length === 0 && (
        <div className="text-white bg-gray-800 box-border caret-transparent text-center border border-gray-700 px-5 py-2.5 rounded-[20px] border-solid">
          <div className="box-border caret-transparent">No items found.</div>
        </div>
      )}
    </div>
  );
};
