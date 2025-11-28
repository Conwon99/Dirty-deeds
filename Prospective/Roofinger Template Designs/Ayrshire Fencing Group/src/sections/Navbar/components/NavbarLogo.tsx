export const NavbarLogo = () => {
  return (
    <a
      href="/"
      aria-label="home"
      className="relative text-zinc-800 box-border caret-transparent block float-left justify-self-start mr-auto hover:decoration-transparent"
    >
      <img
        src="/logo.png"
        alt="Ayrshire Fencing Group Logo"
        className="box-border caret-transparent inline-block h-10 max-w-full w-full md:h-12 lg:h-14 scale-[1.2] md:scale-[1.3] lg:scale-[1.4] origin-left"
      />
    </a>
  );
};
