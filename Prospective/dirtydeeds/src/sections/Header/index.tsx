import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="fixed bg-white shadow-[rgba(0,0,0,0.1)_0px_2px_4px_0px] box-border caret-transparent z-[1020] top-0 inset-x-0">
      <Navbar />
    </header>
  );
};
