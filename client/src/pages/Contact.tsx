import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us - Fully Charged Nepal";
  }, []);

  return (
    <div>
      <section className="relative bg-green-50 text-gray-800 text-center py-20 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-800">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8">
            Get in touch with our team to schedule a pickup or learn more about our services.
          </p>
        </div>
      </section>
      <section className="section py-16 px-4 text-center">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-left bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Visit Us</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-3">Office Location</h3>
                <p className="flex items-start mb-2">
                  <span className="mr-3">📍</span>
                  <span>Kathmandu, Nepal</span>
                </p>
                <p className="flex items-start mb-2">
                  <span className="mr-3">📞</span>
                  <span>+977 1 234 5678</span>
                </p>
                <p className="flex items-start mb-2">
                  <span className="mr-3">✉️</span>
                  <span>info@fullychargednepal.com</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3">⏰</span>
                  <span>Mon-Fri: 9AM-5PM</span>
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-3">Service Coverage</h3>
                <p className="text-gray-700">
                  We provide pickup services throughout the Kathmandu Valley, with plans to expand to other major cities in Nepal soon. For locations outside our service area, please contact us to discuss options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}
