import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const Navbar = () => {
  return (
    <nav className="bg-white box-border caret-transparent w-full">
      <div className="relative items-center box-border caret-transparent flex h-20 justify-between max-w-[1440px] mx-auto px-5 gap-4 md:h-[102px]">
        <div className="flex items-center md:hidden">
          <MobileMenuButton />
        </div>
        <div className="hidden md:flex md:items-center md:flex-1"></div>
        <div className="absolute left-1/2 -translate-x-1/2 z-10">
          <NavbarLogo />
        </div>
        <div className="flex items-center justify-end flex-1 ml-auto">
          <DesktopMenu />
        </div>
      </div>
    </nav>
  );
};
