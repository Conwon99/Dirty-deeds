import { useState, useEffect } from "react";

interface ServicesDropdownProps {
  onCloseMobileMenu?: () => void;
}

export const ServicesDropdown = ({ onCloseMobileMenu }: ServicesDropdownProps = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    { name: "Bespoke Fencing", href: "/service/bespoke-fencing" },
    { name: "Decking", href: "/service/decking" },
    { name: "Sheds & Gates", href: "/service/sheds-gates" },
    { name: "Trellis", href: "/service/trellis" },
    { name: "Palisade Fencing", href: "/service/palisade-fencing" },
    { name: "Fencing Repairs", href: "/service/fencing-repairs" },
  ];

  const handleLinkClick = () => {
    if (onCloseMobileMenu) {
      onCloseMobileMenu();
    }
    setIsOpen(false);
  };

  return (
    <li
      className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 md:min-h-[auto] md:min-w-[auto] md:mx-1 lg:mx-1.5 relative"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <a
        href="/services"
        onClick={(e) => {
          if (isMobile) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:text-gray-900 hover:text-orange-500 hover:border-orange-500"
      >
        <div className="text-slate-900 text-xs box-border caret-transparent leading-4 min-h-0 min-w-0 md:text-gray-900 md:text-sm md:leading-5 lg:text-[15px] lg:leading-6 lg:min-h-[auto] lg:min-w-[auto]">
          Services
        </div>
      </a>
      {isOpen && (
        <nav className="absolute items-start box-border caret-transparent gap-x-2.5 flex flex-col justify-start min-w-full gap-y-2.5 pt-[5px] top-full left-0 z-50 md:min-w-[200px] md:pt-2">
          <div className="items-start bg-white box-border caret-transparent gap-x-2.5 flex-col justify-start gap-y-2.5 border border-slate-200 shadow-lg pt-3 pb-3 px-4 rounded-[20px] border-solid">
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                onClick={handleLinkClick}
                className="relative box-border caret-transparent block text-nowrap align-top w-full mb-2 text-sm hover:text-orange-500 hover:decoration-transparent last:mb-0"
              >
                {service.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </li>
  );
};

