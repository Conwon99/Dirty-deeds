import { Link } from "react-router-dom";

export const NavbarLogo = () => {
  return (
    <Link
      to="/"
      aria-label="home"
      className="relative text-zinc-800 box-border caret-transparent block float-left justify-self-start mr-auto hover:decoration-transparent"
    >
      <img
        src="/logo.png"
        alt="Ayrshire Fencing Group Logo"
        className="box-border caret-transparent inline-block h-[26px] max-w-full w-[132px] md:h-9 scale-[1.75] md:scale-[2] lg:scale-[2.25] origin-left"
      />
    </Link>
  );
};

