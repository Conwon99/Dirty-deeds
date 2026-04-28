export const NavActions = () => {
  return (
    <div className="items-center box-border caret-transparent flex basis-auto grow-0 shrink-0 justify-end justify-self-end md:basis-[0%] md:grow md:shrink">
      <div className="items-center box-border caret-transparent gap-x-3 hidden min-h-0 min-w-0 gap-y-1 md:flex md:min-h-[auto] md:min-w-[auto]">
        <div className="box-border caret-transparent hidden">
          <div className="box-border caret-transparent flex">
            <a
              href="/contact/"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'quoteButton_nav', {
                    event_category: 'CTA',
                    event_label: 'Navigation'
                  });
                }
              }}
              className="text-black items-center bg-transparent box-border caret-transparent gap-x-2 flex justify-between max-w-full gap-y-2 text-center w-full border pl-2 pr-1 py-1 rounded-[100px] border-solid border-transparent md:pl-3 hover:bg-neutral-100 hover:border-transparent"
            >
              <div className="relative box-border caret-transparent overflow-hidden">
                <div className="box-border caret-transparent">
                  <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                    Contact Us
                  </div>
                </div>
                <div className="absolute box-border caret-transparent w-full">
                  <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                    Contact Us
                  </div>
                </div>
              </div>
              <div className="text-white items-center bg-[#5F6F3A] box-border caret-transparent flex h-8 justify-center w-8 overflow-hidden rounded-[50%]">
                <div className="relative box-border caret-transparent">
                  <div className="box-border caret-transparent">
                    <div className="items-center box-border caret-transparent flex h-2 justify-center w-2 before:accent-auto before:caret-transparent before:text-amber-200 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                      <img
                        src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-1.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-full w-full"
                        style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(45%) saturate(500%) hue-rotate(330deg) brightness(110%) contrast(85%)' }}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-[-200%] box-border caret-transparent left-[-200%]">
                    <div className="items-center box-border caret-transparent flex h-2 justify-center w-2 before:accent-auto before:caret-transparent before:text-amber-200 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                      <img
                        src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-1.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-full w-full"
                        style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(45%) saturate(500%) hue-rotate(330deg) brightness(110%) contrast(85%)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <div className="box-border caret-transparent flex items-center gap-x-3">
            <a
              href="https://www.facebook.com/profile.php?id=61589055055704&mibextid=wwXIfr&rdid=VfRzALqUuwCsjOSL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17KGNZ644q%2F%3Fmibextid%3DwwXIfr#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A Cut Above Arborist on Facebook"
              className="text-black box-border caret-transparent hover:text-neutral-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/a.cut.above.arborist/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A Cut Above Arborist on Instagram"
              className="text-black box-border caret-transparent hover:text-neutral-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.335 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.265.058-1.645.069-4.849.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.174 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.174 8.796 2.163 12 2.163M12 0C8.741 0 8.333.014 7.052.072 5.775.131 4.902.333 4.14.63c-.789.306-1.459.717-2.126 1.384C1.347 2.681.936 3.351.63 4.14.333 4.902.131 5.775.072 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.948c.059 1.277.261 2.15.558 2.912.306.789.717 1.459 1.384 2.126.667.667 1.337 1.078 2.126 1.384.762.297 1.635.499 2.912.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.948-.072c1.277-.059 2.15-.261 2.912-.558.789-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.337 1.384-2.126.297-.762.499-1.635.558-2.912C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.948c-.059-1.277-.261-2.15-.558-2.912-.306-.789-.717-1.459-1.384-2.126C21.319 1.347 20.649.936 19.86.63c-.762-.297-1.635-.499-2.912-.558C15.667.014 15.259 0 12 0z" />
                <path d="M12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
            <a
              href="/contact/"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'quoteButton_nav', {
                    event_category: 'CTA',
                    event_label: 'Navigation'
                  });
                }
              }}
              className="text-black items-center bg-cta box-border caret-transparent gap-x-3 flex max-w-full min-h-0 min-w-0 gap-y-3 text-center border px-4 py-2 rounded-[100px] border-solid border-transparent md:min-h-[auto] md:min-w-[auto] hover:bg-white hover:border-cta-dark"
            >
              <div className="relative box-border caret-transparent min-h-0 min-w-0 overflow-hidden md:min-h-[auto] md:min-w-[auto]">
                <div className="box-border caret-transparent">
                  <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                    Message Us
                  </div>
                </div>
                <div className="absolute box-border caret-transparent w-full">
                  <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                    Message Us
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                <div className="items-center box-border caret-transparent flex h-4 justify-center w-4 before:accent-auto before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist after:md:min-h-[auto] after:md:min-w-[auto]">
                  <img
                    src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-2.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-2 w-3"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
