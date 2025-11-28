export const Logo = () => {
  return (
    <div className="box-border caret-transparent ml-0 md:ml-4 lg:ml-6">
      <a
        href="/"
        aria-label="home"
        className="relative text-gray-900 box-border caret-transparent block h-10 max-h-10 overflow-visible md:h-12 md:max-h-12 lg:h-14 lg:max-h-14"
      >
        <img
          src="/logo.png"
          alt="Ayrshire Fencing Group Logo"
          className="box-border caret-transparent inline-block h-full max-w-full object-contain scale-[1.2] md:scale-[1.3] lg:scale-[1.4] origin-left"
        />
      </a>
    </div>
  );
};
