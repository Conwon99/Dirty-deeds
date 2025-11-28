import { PhoneLink } from "@/components/PhoneLink";

export const Footer = () => {
  return (
    <section className="text-white bg-cyan-950 box-border caret-transparent pt-[60px] pb-7 md:pt-[100px] md:pb-10">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="box-border caret-transparent gap-x-6 flex flex-col sm:flex-row sm:flex-wrap justify-between gap-y-6 md:gap-x-8 md:gap-y-8">
          <div className="box-border caret-transparent flex flex-col gap-y-4">
            <div className="text-white text-lg font-semibold box-border caret-transparent mb-2">
              Ayrshire Fencing Group
            </div>
            <p className="text-white/80 text-sm box-border caret-transparent max-w-xs leading-relaxed">
              Fully qualified and insured fencing contractors. Bespoke fencing, sheds & gates, trellis, decking, palisade fencing, and fencing repairs across Ayrshire.
            </p>

          </div>
          <div className="box-border caret-transparent flex flex-col gap-y-3">
            <div className="text-white text-base font-semibold box-border caret-transparent mb-2">
              Quick Links
            </div>
            <a href="/" className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent">
              Home
            </a>
            <a href="/about" className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent">
              About
            </a>
            <a href="/services" className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent">
              Services
            </a>
            <a href="/projects" className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent">
              Projects
            </a>
            <a href="/contact" className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent">
              Contact
            </a>
          </div>
          <div className="box-border caret-transparent flex flex-col gap-y-3">
            <div className="text-white text-base font-semibold box-border caret-transparent mb-2">
              Contact Us
            </div>
            <PhoneLink
              variant="footer"
              showIcon={false}
              className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent"
            />
            <a href="mailto:ayrshirefencinggroup@outlook.com" className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent">
              ayrshirefencinggroup@outlook.com
            </a>

          </div>
        </div>
        <div className="box-border caret-transparent border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-white/60 text-sm box-border caret-transparent">
            © {new Date().getFullYear()} Ayrshire Fencing Group. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
