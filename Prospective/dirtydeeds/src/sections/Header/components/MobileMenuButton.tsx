export const MobileMenuButton = () => {
  return (
    <button
      aria-label="Toggle navigation"
      className="text-black bg-transparent caret-transparent gap-x-1 flex flex-col leading-[normal] min-h-[auto] min-w-[auto] gap-y-1 text-center mr-4 p-2 md:hidden md:min-h-0 md:min-w-0"
    >
      <span className="bg-stone-900 box-border caret-transparent block h-[3px] min-h-[auto] min-w-[auto] w-[25px] md:min-h-0 md:min-w-0"></span>
      <span className="bg-stone-900 box-border caret-transparent block h-[3px] min-h-[auto] min-w-[auto] w-[25px] md:min-h-0 md:min-w-0"></span>
      <span className="bg-stone-900 box-border caret-transparent block h-[3px] min-h-[auto] min-w-[auto] w-[25px] md:min-h-0 md:min-w-0"></span>
    </button>
  );
};
