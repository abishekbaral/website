import { useEffect } from "react";
import Impact from "@/components/Impact";
import ContactForm from "@/components/ContactForm";
import Team from "@/components/Team";

export default function About() {
  useEffect(() => {
    document.title = "About Us - Fully Charged Nepal";
  }, []);

  return (
    <div>
      <section className="relative bg-green-50 text-gray-800 text-center py-20 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-800">About Us</h1>
          <p className="text-xl md:text-2xl mb-8">
            Learn about our mission to create a sustainable future through responsible e-waste and EV battery management.
          </p>
        </div>
      </section>
      <section className="section py-16 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Our Story</h2>
          <div className="max-w-3xl mx-auto text-left">
            <p className="text-gray-700 mb-6">
              Fully Charged Nepal was founded with a clear mission: to address the growing challenge of electronic waste and EV battery disposal in Nepal through sustainable, environmentally responsible solutions.
            </p>
            <p className="text-gray-700 mb-6">
              As Nepal's digital infrastructure grows and electric vehicles become more prevalent, we recognized the urgent need for proper management of these waste streams to protect our environment and communities.
            </p>
            <p className="text-gray-700">
              Today, we're proud to offer comprehensive collection, recycling, and repurposing services that contribute to a circular economy and support Nepal's sustainable development goals.
            </p>
          </div>
        </div>
      </section>
      <Team />
      <Impact />
      <ContactForm />
    </div>
  );
}
