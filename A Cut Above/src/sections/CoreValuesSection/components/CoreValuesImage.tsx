import aboutImageUrl from "../../../../ImagesPhotos/670068124_18085351625056361_8543755538711337465_n (1).jpg?url";

export const CoreValuesImage = () => {
  return (
    <div className="box-border caret-transparent gap-y-4 flex flex-col w-full max-w-full md:max-w-none md:w-auto md:max-w-[700px]">
      <div className="box-border caret-transparent blur-0 h-[300px] w-full overflow-hidden rounded-2xl md:h-[600px] md:w-full">
        <img
          src={aboutImageUrl}
          sizes="(max-width: 767px) 100vw, 700px"
          alt="A Cut Above Arborist tree work"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
      </div>
    </div>
  );
};
