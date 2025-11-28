import { PhoneLink } from "@/components/PhoneLink";

export const Footer = () => {
  return (
    <section className="text-white bg-cyan-950 box-border caret-transparent pt-[60px] pb-7 md:pt-[100px] md:pb-10">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="box-border caret-transparent gap-x-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-x-8 md:gap-y-8">
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
          <div className="box-border caret-transparent flex flex-col gap-y-3">
            <div className="text-white text-base font-semibold box-border caret-transparent mb-2">
              Our Location
            </div>
            <div className="box-border caret-transparent w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.1234567890123!2d-4.655!3d55.619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDM3JzA4LjQiTiA0wrAzOScxOC4wIlc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ayrshire Fencing Group Location - Irvine, Scotland"
                className="box-border caret-transparent w-full h-full"
              ></iframe>
            </div>
            <p className="text-white/80 text-sm box-border caret-transparent mt-2">
              Serving Irvine & Ayrshire, Scotland
            </p>
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
