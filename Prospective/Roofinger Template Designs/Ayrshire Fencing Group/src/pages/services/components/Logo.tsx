import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      to="/"
      aria-label="home"
      className="relative text-zinc-800 box-border caret-transparent block float-left justify-self-start mr-auto hover:decoration-transparent"
    >
      <img
        src="/logo.png"
        alt="Ayrshire Fencing Group Logo"
        className="box-border caret-transparent inline-block h-[26px] max-w-full w-full md:h-9"
      />
    </Link>
  );
};

