import galleryImageOne from "../../../../ImagesPhotos/tree_pruning.jpg?url";
import galleryImageTwo from "../../../../ImagesPhotos/670431316_18087555836056361_5022063728821463636_n (1).jpg?url";
import galleryImageThree from "../../../../ImagesPhotos/670298543_18085986425056361_7899633911350532168_n.jpg?url";
import galleryImageFour from "../../../../ImagesPhotos/670068124_18085351625056361_8543755538711337465_n (1).jpg?url";
import galleryImageFive from "../../../../ImagesPhotos/fallen tree.jpg?url";
import galleryImageSix from "../../../../ImagesPhotos/670428133_18087555848056361_2695285749880354502_n.jpg?url";

export const GalleryGrid = () => {
  const images = [
    { src: galleryImageOne, alt: "Tree pruning by A Cut Above Arborist" },
    { src: galleryImageTwo, alt: "Professional tree surgery work" },
    { src: galleryImageThree, alt: "A Cut Above Arborist team at work" },
    { src: galleryImageFour, alt: "Tree surgeon completing safe tree work" },
    { src: galleryImageFive, alt: "Fallen tree emergency clearance" },
    { src: galleryImageSix, alt: "Arborist work across Perth and Kinross and Angus" },
  ];

  return (
    <div className="box-border caret-transparent gap-x-[18px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[18px] mt-10 md:gap-x-5 md:grid-cols-[1fr_1fr_1fr] md:gap-y-5 md:mt-14">
      {images.map((image, index) => (
        <a
          key={index}
          href={image.src}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative box-border caret-transparent blur-0 overflow-hidden rounded-lg md:rounded-xl block cursor-pointer hover:opacity-90 transition-opacity ${
            index === 0
              ? "col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] h-[400px] md:row-end-[span_2] md:row-start-[span_2] md:h-auto"
              : index === images.length - 1 && images.length % 3 === 1
              ? "col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] h-[277px] md:col-end-[span_2] md:col-start-[span_2]"
              : "h-[277px]"
          }`}
        >
          <img
            src={image.src}
            sizes="100vw"
            alt={image.alt}
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
            loading={index < 3 ? "eager" : "lazy"}
            onError={(e) => {
              console.error("Failed to load image:", image.src);
            }}
          />
        </a>
      ))}
    </div>
  );
};
