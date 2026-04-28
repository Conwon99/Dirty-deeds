import { useState } from "react";

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    houseNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formStarted, setFormStarted] = useState(false);

  const trackFormStart = () => {
    if (!formStarted && typeof window !== 'undefined') {
      setFormStarted(true);
      const pathname = window.location.pathname;
      let eventName = 'formstart_contact';
      
      if (pathname.includes('/services')) {
        eventName = 'formstart_service';
      }
      
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, {
          event_category: 'Form',
          event_label: pathname
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("postcode", formData.postcode);
      formDataToSend.append("houseNumber", formData.houseNumber);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("website", "https://acutabovearborist.co.uk/");

      const response = await fetch("https://formspree.io/f/movnnnry", {
        method: "POST",
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      // Formspree returns 200 OK with JSON on success
      if (response.ok) {
        // Redirect to thank you page on success
        window.location.href = "/thank-you";
      } else {
        // Try to get error message from response
        try {
          const errorData = await response.json();
          console.error('Form submission error:', errorData);
        } catch (e) {
          console.error('Form submission failed');
        }
        setSubmitStatus("error");
        setIsSubmitting(false);
      }
    } catch (error) {
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} action="https://formspree.io/f/movnnnry" method="POST" className="w-full">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              onFocus={trackFormStart}
              className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cta focus:ring-2 focus:ring-cta/40"
              placeholder="Name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cta focus:ring-2 focus:ring-cta/40"
              placeholder="Phone"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={trackFormStart}
              className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cta focus:ring-2 focus:ring-cta/40"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="postcode" className="block text-sm font-medium text-white mb-2">
              Post code
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cta focus:ring-2 focus:ring-cta/40"
              placeholder="Post code"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="houseNumber" className="block text-sm font-medium text-white mb-2">
              House number / name
            </label>
            <input
              type="text"
              id="houseNumber"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cta focus:ring-2 focus:ring-cta/40"
              placeholder="House number / name"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cta focus:ring-2 focus:ring-cta/40"
              placeholder="Message"
            />
          </div>
        </div>

        {submitStatus === "error" && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            There was an error submitting your request. Please try again.
          </div>
        )}

        <p className="mt-5 text-sm leading-5 text-white/65">
          By submitting this form you agree to be contacted by A Cut Above Arborist about your enquiry.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 rounded-xl bg-cta px-6 py-4 font-bold text-white transition hover:bg-cta-dark disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
