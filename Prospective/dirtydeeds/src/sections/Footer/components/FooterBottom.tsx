export const FooterBottom = () => {
  return (
    <div className="box-border caret-transparent mt-10">
      <div className="items-center box-border caret-transparent gap-x-5 flex flex-col justify-between gap-y-5 text-center md:gap-x-[normal] md:flex-row md:gap-y-[normal] md:text-start">
        <p className="text-sm box-border caret-transparent leading-[22.75px] opacity-70 text-center font-avenir md:text-start">
          © 2025 DIRTY DEEDS exterior cleaning. All rights reserved.
        </p>
        <div className="items-center box-border caret-transparent gap-x-5 flex gap-y-5 text-center md:text-start">
          <a
            href="https://www.facebook.com/profile.php?id=100090370285579"
            aria-label="Facebook"
            className="items-center bg-white/10 box-border caret-transparent flex h-10 justify-center text-center w-10 rounded-[50%] md:text-start hover:bg-orange-500"
          >
            <img
              src="https://c.animaapp.com/mhrschno1dTzQg/assets/icon-1-1.svg"
              alt="Facebook"
              className="aspect-[auto_12_/_22] box-border caret-transparent max-w-full text-center w-3 md:text-start"
            />
          </a>
          <a
            href="#!"
            aria-label="Instagram (coming soon)"
            tabIndex={-1}
            className="pointer-events-none items-center bg-white/10 box-border caret-transparent flex h-10 justify-center text-center w-10 rounded-[50%] opacity-50 md:text-start"
          >
            <img
              src="https://c.animaapp.com/mhrschno1dTzQg/assets/icon-2-1.svg"
              alt="Instagram (coming soon)"
              className="aspect-[auto_22_/_22] box-border caret-transparent max-w-full text-center w-[22px] md:text-start"
            />
          </a>
          <a
            href="#!"
            aria-label="LinkedIn (coming soon)"
            tabIndex={-1}
            className="pointer-events-none items-center bg-white/10 box-border caret-transparent flex h-10 justify-center text-center w-10 rounded-[50%] opacity-50 md:text-start"
          >
            <img
              src="https://c.animaapp.com/mhrschno1dTzQg/assets/icon-3-1.svg"
              alt="LinkedIn (coming soon)"
              className="aspect-[auto_33_/_24] box-border caret-transparent max-w-full text-center w-[33px] md:text-start"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
