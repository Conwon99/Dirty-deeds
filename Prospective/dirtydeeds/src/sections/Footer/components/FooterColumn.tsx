export type FooterColumnProps = {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent text-center mb-[30px] md:text-start md:mb-0">
      <h3 className="text-orange-500 text-lg box-border caret-transparent leading-[19.8px] text-center uppercase mb-5 font-bebas_neue md:text-xl md:leading-[22px] md:text-start">
        {props.title}
      </h3>
      <ul className="box-border caret-transparent list-none text-center pl-0 md:text-start">
        {props.links.map((link, index) => (
          <li
            key={index}
            className="box-border caret-transparent text-center mb-3 md:text-start"
          >
            <a
              href={link.href}
              className="text-sm box-border caret-transparent inline-block leading-[21px] opacity-90 text-center font-avenir md:text-base md:leading-6 md:text-start hover:text-orange-500 hover:border-orange-500"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
