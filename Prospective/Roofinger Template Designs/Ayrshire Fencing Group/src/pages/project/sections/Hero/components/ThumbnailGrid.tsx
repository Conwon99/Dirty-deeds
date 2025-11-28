import { getProjectNumber } from "@/pages/project/sections/Hero/components/MainImage";

interface ThumbnailGridProps {
  slug?: string;
}

export const ThumbnailGrid = ({ slug }: ThumbnailGridProps) => {
  const projectNumber = getProjectNumber(slug);

  // Get which image number is used as hero
  const heroImageNumbers: Record<string, string> = {
    "new-roof-with-fascias-soffits": "004",
    "new-roughcast-job-completed": "003",
    "complete-roof-renovation": "001",
    "roof-roughcast-exterior-upgrade": "001",
  };

  const heroImageNumber = heroImageNumbers[slug || ""] || "001";

  // Show all images except the hero image
  const thumbnailImages = ["001", "002", "003", "004", "005"]
    .filter((num) => num !== heroImageNumber)
    .slice(0, 4)
    .map((number) => ({
      number,
      alt: `Project image ${number}`,
    }));

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
                src={`/projects/project-${projectNumber}-${img.number}.jpg`}
                alt={img.alt}
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </a>
          </div>
        ))}
      </div>
      {thumbnailImages.length === 0 && (
        <div className="text-gray-900 bg-orange-500 box-border caret-transparent text-center border border-slate-200 px-5 py-2.5 rounded-[20px] border-solid">
          <div className="box-border caret-transparent">No items found.</div>
        </div>
      )}
    </div>
  );
};
