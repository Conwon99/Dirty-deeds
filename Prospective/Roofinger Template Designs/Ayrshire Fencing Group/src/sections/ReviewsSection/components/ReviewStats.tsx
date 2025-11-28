export const ReviewStats = () => {
  return (
    <div className="box-border caret-transparent flex flex-col items-center justify-center gap-6 mb-[40px] md:mb-[50px] md:flex-row md:gap-8">
      <a
        href="https://www.trustatrader.com/traders/ayrshire-fencing-group-saltcoats-irvine-troon-and-prewick"
        target="_blank"
        rel="noopener noreferrer"
        className="box-border caret-transparent flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors hover:decoration-transparent"
      >
        <div className="box-border caret-transparent flex items-center gap-2">
          <div className="text-green-500 text-2xl font-bold box-border caret-transparent">
            ★★★★★
          </div>
        </div>
        <div className="box-border caret-transparent">
          <div className="text-white text-lg font-bold box-border caret-transparent">
            16+ 5 Star Reviews
          </div>
          <div className="text-gray-300 text-sm box-border caret-transparent">
            from Trust a Trader
          </div>
        </div>
        <img
          src="/trust.jpg"
          alt="Trust a Trader Logo"
          className="box-border caret-transparent h-8 w-auto"
        />
      </a>
      <a
        href="https://www.facebook.com/100089970103885/"
        target="_blank"
        rel="noopener noreferrer"
        className="box-border caret-transparent flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors hover:decoration-transparent"
      >
        <div className="box-border caret-transparent flex items-center gap-2">
          <div className="text-green-500 text-2xl font-bold box-border caret-transparent">
            ★★★★★
          </div>
        </div>
        <div className="box-border caret-transparent">
          <div className="text-white text-lg font-bold box-border caret-transparent">
            6+ 5 Star Reviews
          </div>
          <div className="text-gray-300 text-sm box-border caret-transparent">
            from Facebook
          </div>
        </div>
        <svg
          className="box-border caret-transparent h-8 w-8 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-label="Facebook"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
    </div>
  );
};

