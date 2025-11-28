import { MainImage } from "@/pages/project/sections/Hero/components/MainImage";
import { ThumbnailGrid } from "@/pages/project/sections/Hero/components/ThumbnailGrid";

interface ImageGalleryProps {
  slug?: string;
}

export const ImageGallery = ({ slug }: ImageGalleryProps) => {
  return (
    <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 md:grid-cols-[1fr_0.75fr]">
      <MainImage slug={slug} />
      <ThumbnailGrid slug={slug} />
    </div>
  );
};
