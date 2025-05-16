import { useEffect } from "react";
import Solutions from "@/components/Solutions";
import ContactForm from "@/components/ContactForm";

export default function Services() {
  useEffect(() => {
    document.title = "Services - Fully Charged Nepal";
  }, []);

  return (
    <div>
      <section className="relative bg-green-50 text-gray-800 text-center py-20 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-800">Our Services</h1>
          <p className="text-xl md:text-2xl mb-8">
            Comprehensive e-waste and EV battery management solutions for individuals and businesses in Nepal.
          </p>
        </div>
      </section>
      <Solutions />
      <ContactForm />
    </div>
  );
}
