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
        className="box-border caret-transparent inline-block h-12 max-w-full w-full md:h-16 lg:h-20 scale-[1.75] md:scale-[2] lg:scale-[2.25] origin-left"
      />
    </a>
  );
};
