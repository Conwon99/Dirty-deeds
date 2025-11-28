const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 100; // Account for fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  // If it's an anchor link and we're on the homepage, scroll smoothly
  if (href.startsWith("#")) {
    e.preventDefault();
    const elementId = href.substring(1);
    smoothScrollTo(elementId);
  }
  // If it's a regular link (like /contact), let it navigate normally
};

interface DesktopNavProps {
  isMobileMenuOpen?: boolean;
  onCloseMobileMenu?: () => void;
}

export const DesktopNav = ({ isMobileMenuOpen = false, onCloseMobileMenu }: DesktopNavProps) => {
  const isHomePage = typeof window !== "undefined" && window.location.pathname === "/";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onCloseMobileMenu) {
      onCloseMobileMenu();
    }
    if (href.startsWith("#")) {
      e.preventDefault();
      if (isHomePage) {
        smoothScrollTo(href.substring(1));
      } else {
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <nav
      role="navigation"
      className={`absolute box-border caret-transparent ${isMobileMenuOpen ? 'flex' : 'hidden'} basis-[0%] grow float-none justify-center min-h-0 min-w-0 left-0 right-0 top-full z-50 md:relative md:flex md:float-right md:min-h-[auto] md:min-w-[auto] md:left-auto md:right-auto md:top-auto md:z-auto`}
    >
      <ul
        role="list"
        className="absolute text-gray-700 items-start bg-white shadow-[rgba(0,0,0,0.05)_0px_8px_50px_0px] box-border caret-transparent gap-x-5 flex flex-col justify-around list-none max-h-[880px] min-h-0 min-w-0 gap-y-5 w-full overflow-auto mt-2.5 pt-5 pb-[30px] px-5 rounded-[20px] top-0 inset-x-0 md:static md:[align-items:normal] md:bg-transparent md:shadow-none md:gap-x-1 md:flex-row md:justify-normal md:max-h-none md:min-h-[auto] md:min-w-[auto] md:gap-y-2 md:w-auto md:overflow-visible md:mt-0 md:p-0 md:rounded-none md:top-auto md:inset-x-auto"
      >
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 md:min-h-[auto] md:min-w-[auto] md:mx-1 lg:mx-1.5">
          <a
            href={isHomePage ? "#home" : "/"}
            onClick={(e) => handleLinkClick(e, isHomePage ? "#home" : "/")}
            className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:text-gray-900 hover:text-orange-500 hover:border-orange-500"
          >
            <div className="text-slate-900 text-xs box-border caret-transparent leading-4 min-h-0 min-w-0 md:text-gray-900 md:text-sm md:leading-5 lg:text-[15px] lg:leading-6 lg:min-h-[auto] lg:min-w-[auto]">
              Home
            </div>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 md:min-h-[auto] md:min-w-[auto] md:mx-1 lg:mx-1.5">
          <a
            href={isHomePage ? "#about" : "/#about"}
            onClick={(e) => handleLinkClick(e, isHomePage ? "#about" : "/#about")}
            className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:text-gray-900 hover:text-orange-500 hover:border-orange-500"
          >
            <div className="text-slate-900 text-xs box-border caret-transparent leading-4 min-h-0 min-w-0 md:text-gray-900 md:text-sm md:leading-5 lg:text-[15px] lg:leading-6 lg:min-h-[auto] lg:min-w-[auto]">
              About
            </div>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 md:min-h-[auto] md:min-w-[auto] md:mx-1 lg:mx-1.5">
          <a
            href={isHomePage ? "#projects" : "/#projects"}
            onClick={(e) => handleLinkClick(e, isHomePage ? "#projects" : "/#projects")}
            className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:text-gray-900 hover:text-orange-500 hover:border-orange-500"
          >
            <div className="text-slate-900 text-xs box-border caret-transparent leading-4 min-h-0 min-w-0 md:text-gray-900 md:text-sm md:leading-5 lg:text-[15px] lg:leading-6 lg:min-h-[auto] lg:min-w-[auto]">
              Projects
            </div>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 md:min-h-[auto] md:min-w-[auto] md:mx-1 lg:mx-1.5">
          <a
            href="/contact"
            onClick={() => {
              if (onCloseMobileMenu) {
                onCloseMobileMenu();
              }
            }}
            className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:text-gray-900 hover:text-orange-500 hover:border-orange-500"
          >
            <div className="text-slate-900 text-xs box-border caret-transparent leading-4 min-h-0 min-w-0 md:text-gray-900 md:text-sm md:leading-5 lg:text-[15px] lg:leading-6 lg:min-h-[auto] lg:min-w-[auto]">
              Contact
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

