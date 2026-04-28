import logoImageUrl from "../../ImagesPhotos/ChatGPT Image Apr 28, 2026, 12_18_57 PM.png?url";

export const Logo = () => {
  return (
    <div className="box-border caret-transparent basis-[0%] grow">
      <a
        href="/"
        aria-label="home"
        className="relative text-neutral-900 box-border caret-transparent block float-left h-24 max-h-24 overflow-visible md:h-32 md:max-h-32"
      >
        <div className="box-border caret-transparent">
          <img
            src={logoImageUrl}
            alt="A Cut Above Arborist Logo"
            className="box-border caret-transparent inline-block max-w-full h-24 object-contain md:h-32"
          />
        </div>
      </a>
    </div>
  );
};
