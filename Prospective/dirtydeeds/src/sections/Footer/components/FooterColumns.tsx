import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterColumns = () => {
  return (
    <div className="box-border caret-transparent gap-x-[30px] grid grid-cols-[1fr] gap-y-[30px] text-center pb-10 border-t-white border-b-white/10 border-x-white border-b md:gap-x-10 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] md:gap-y-10 md:text-start">
      <FooterBrand />
      <FooterColumn
        title="Services"
        links={[
          {
            text: "Jet Washing",
            href: "#services",
          },
          {
            text: "Decking & Wall Cleaning",
            href: "#services",
          },
          {
            text: "Gutter & Fascia Cleaning",
            href: "#services",
          },
          {
            text: "Garden Tidy-Ups",
            href: "#services",
          },
          {
            text: "Waste Removal & Uplifts",
            href: "#services",
          },
          { text: "Request Free Quote →", href: "#contact" },
        ]}
      />
      <FooterColumn
        title="Service Areas"
        links={[
          { text: "Rankinston, Ayrshire", href: "#service-area" },
          { text: "Ayrshire Villages", href: "#service-area" },
          { text: "Surrounding Areas", href: "#service-area" },
          { text: "Eco-Friendly Promise", href: "#eco-promise" },
          {
            text: "Facebook Updates",
            href: "https://www.facebook.com/profile.php?id=100090370285579",
          },
          { text: "Call 07483 414 765 →", href: "tel:+447483414765" },
        ]}
      />
      <FooterColumn
        title="Company"
        links={[
          { text: "About Dirty Deeds", href: "#about" },
          { text: "Mission & Values", href: "#eco-promise" },
          {
            text: "Facebook Messenger",
            href: "https://www.facebook.com/profile.php?id=100090370285579",
          },
          { text: "Email Us", href: "mailto:shinshoe9@gmail.com" },
          { text: "Free Quote Hotline", href: "tel:+447483414765" },
        ]}
      />
      <FooterColumn
        title="Resources"
        links={[
          {
            text: "Eco-Friendly Products",
            href: "#eco-promise",
          },
          {
            text: "Plant & Pet Safe Cleaning",
            href: "#eco-promise",
          },
          {
            text: "Waste Disposal Standards",
            href: "#eco-promise",
          },
          {
            text: "Request A Quote",
            href: "#contact",
          },
          {
            text: "Facebook Gallery",
            href: "https://www.facebook.com/profile.php?id=100090370285579",
          },
        ]}
      />
    </div>
  );
};
