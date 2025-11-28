export const ContactForm = () => {
  return (
    <form
      name="wf-form-Contact-Form"
      aria-label="Contact Form"
      className="box-border caret-transparent"
    >
      <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
        <label className="text-gray-900 text-base box-border caret-transparent block mb-[5px] md:text-lg">
          Name
        </label>
        <input
          name="Name"
          placeholder="Dennis Barrett"
          type="text"
          className="text-gray-900 text-base bg-slate-200 box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border border-slate-200 mb-2.5 px-5 py-2.5 rounded-[20px] border-solid"
        />
      </div>
      <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
        <label className="text-gray-900 text-base box-border caret-transparent block mb-[5px] md:text-lg">
          Email
        </label>
        <input
          name="Email"
          placeholder="your.email@example.com"
          type="email"
          className="text-gray-900 text-base bg-slate-200 box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border border-slate-200 mb-2.5 px-5 py-2.5 rounded-[20px] border-solid"
        />
      </div>
      <div className="items-start box-border caret-transparent gap-x-0 flex flex-col justify-start gap-y-0 md:[align-items:normal] md:gap-x-[30px] md:flex-row md:justify-normal md:gap-y-[30px]">
        <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
          <label className="text-gray-900 text-base box-border caret-transparent block mb-[5px] md:text-lg">
            Phone
          </label>
          <input
            name="Phone-No"
            placeholder="07926 592704"
            type="tel"
            className="text-gray-900 text-base bg-slate-200 box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border border-slate-200 mb-2.5 px-5 py-2.5 rounded-[20px] border-solid"
          />
        </div>
        <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
          <label className="text-gray-900 text-base box-border caret-transparent block mb-[5px] md:text-lg">
            Select Service
          </label>
          <select
            name="Field"
            className="text-base bg-slate-200 caret-transparent block h-12 leading-[normal] align-middle w-full border-slate-200 mb-2.5 px-5 py-2 rounded-[20px]"
          >
            <option
              value=""
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Select Service...
            </option>
            <option
              value="Bespoke Fencing"
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Bespoke Fencing
            </option>
            <option
              value="Sheds & Gates"
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Sheds & Gates
            </option>
            <option
              value="Trellis"
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Trellis
            </option>
            <option
              value="Decking"
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Decking
            </option>
            <option
              value="Palisade Fencing"
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Palisade Fencing
            </option>
            <option
              value="Fencing Repairs"
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Fencing Repairs
            </option>
          </select>
        </div>
      </div>
      <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
        <label className="text-gray-900 text-base box-border caret-transparent block mb-[5px] md:text-lg">
          Message
        </label>
        <textarea
          name="Message"
          placeholder="Tell us about your fencing and decking needs..."
          rows={6}
          className="text-gray-900 text-base bg-slate-200 box-border caret-transparent block leading-[25.6px] align-middle w-full border border-slate-200 mb-2.5 px-5 py-2.5 rounded-[20px] border-solid resize-vertical"
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="text-gray-900 text-sm font-bold bg-orange-500 box-border caret-transparent leading-[19.6px] text-center text-nowrap w-full border border-orange-500 px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:text-white hover:bg-gray-900"
      />
    </form>
  );
};

