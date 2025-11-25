import { Phone } from "lucide-react";

export const DesktopMenu = () => {
  return (
    <div className="fixed items-center bg-white shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px] box-border caret-transparent gap-x-12 flex basis-[0%] flex-col grow justify-end min-h-0 min-w-0 opacity-0 gap-y-12 translate-y-[-150.0%] invisible p-6 top-20 inset-x-0 md:static md:bg-transparent md:shadow-none md:flex-row md:flex-nowrap md:min-h-[auto] md:min-w-[auto] md:opacity-100 md:transform-none md:visible md:p-0 md:top-auto md:inset-x-auto">
      <ul className="box-border caret-transparent gap-x-8 flex flex-col list-none gap-y-8 text-center invisible w-full pl-0 md:flex-row md:flex-nowrap md:text-start md:visible md:w-auto">
        <li className="box-border caret-transparent text-center invisible md:text-start md:visible whitespace-nowrap">
          <a
            href="#services"
            className="text-xl box-border caret-transparent leading-[30px] text-center invisible font-bebas_neue md:text-start md:visible hover:text-orange-500 hover:border-orange-500 whitespace-nowrap"
          >
            SERVICES
          </a>
        </li>
        <li className="box-border caret-transparent text-center invisible md:text-start md:visible whitespace-nowrap">
          <a
            href="#service-area"
            className="text-xl box-border caret-transparent leading-[30px] text-center invisible font-bebas_neue md:text-start md:visible hover:text-orange-500 hover:border-orange-500 whitespace-nowrap"
          >
            SERVICE AREA
          </a>
        </li>
        <li className="box-border caret-transparent text-center invisible md:text-start md:visible whitespace-nowrap">
          <a
            href="#about"
            className="text-xl box-border caret-transparent leading-[30px] text-center invisible font-bebas_neue md:text-start md:visible hover:text-orange-500 hover:border-orange-500 whitespace-nowrap"
          >
            ABOUT
          </a>
        </li>
        <li className="box-border caret-transparent text-center invisible md:text-start md:visible whitespace-nowrap">
          <a
            href="#contact"
            className="text-xl box-border caret-transparent leading-[30px] text-center invisible font-bebas_neue md:text-start md:visible hover:text-orange-500 hover:border-orange-500 whitespace-nowrap"
          >
            CONTACT
          </a>
        </li>
      </ul>
      <a
        href="tel:+447483414765"
        className="text-white text-xl items-center bg-orange-500 box-border caret-transparent gap-x-2 flex justify-center leading-[30px] min-h-[42px] whitespace-nowrap invisible w-full px-6 py-3 rounded-[100px] font-bebas_neue md:visible md:w-auto hover:bg-orange-600 shrink-0"
      >
        <Phone className="h-5 w-5 shrink-0" />
        <span className="box-border caret-transparent block whitespace-nowrap invisible md:visible">
          07483 414 765
        </span>
      </a>
    </div>
  );
};
