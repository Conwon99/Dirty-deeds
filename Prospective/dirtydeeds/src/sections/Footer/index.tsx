import { FooterColumns } from "@/sections/Footer/components/FooterColumns";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="text-white bg-stone-900 box-border caret-transparent pt-10 pb-5 md:pt-[60px]">
      <div className="box-border caret-transparent max-w-[1440px] w-full mx-auto px-4 md:px-16">
        <FooterColumns />
        <FooterBottom />
      </div>
    </footer>
  );
};
