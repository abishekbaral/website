import { useEffect } from "react";
import ProcessSteps from "@/components/ProcessSteps";
import ContactForm from "@/components/ContactForm";

export default function Process() {
  useEffect(() => {
    document.title = "Our Process - Fully Charged Nepal";
  }, []);

  return (
    <div>
      <section className="relative bg-green-50 text-gray-800 text-center py-20 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-800">Our Process</h1>
          <p className="text-xl md:text-2xl mb-8">
            How we handle your e-waste and EV batteries from collection to recycling.
          </p>
        </div>
      </section>
      <ProcessSteps />
      <ContactForm />
    </div>
  );
}
