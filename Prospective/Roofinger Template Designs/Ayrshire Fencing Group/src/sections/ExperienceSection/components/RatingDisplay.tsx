export const RatingDisplay = () => {
  return (
    <div className="text-gray-900 items-start box-border caret-transparent gap-x-2.5 flex flex-col justify-start gap-y-2.5 mb-5 md:items-center md:gap-x-[30px] md:flex-row md:gap-y-[30px] md:mb-[50px]">
      <div className="box-border caret-transparent flex items-center gap-x-3 md:gap-x-4">
        <a
          href="https://www.trustatrader.com/traders/ayrshire-fencing-group"
          target="_blank"
          rel="noopener noreferrer"
          className="box-border caret-transparent hover:opacity-80"
          aria-label="Trust a Trader"
        >
          <img
            src="/trust.jpg"
            alt="Trust a Trader"
            className="box-border caret-transparent h-10 w-auto md:h-12"
          />
        </a>
        <a
          href="https://www.facebook.com/100089970103885/"
          target="_blank"
          rel="noopener noreferrer"
          className="box-border caret-transparent hover:opacity-80"
          aria-label="Facebook Reviews"
        >
          <svg
            className="box-border caret-transparent h-10 w-10 md:h-12 md:w-12 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">5/5 ratings</div>
        <div className="box-border caret-transparent flex items-center gap-x-1 mt-2.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="box-border caret-transparent h-5 w-5 text-orange-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};
