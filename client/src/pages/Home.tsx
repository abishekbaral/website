import Hero from "@/components/Hero";
import Challenges from "@/components/Challenges";
import Solutions from "@/components/Solutions";
import ProcessSteps from "@/components/ProcessSteps";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import { useEffect } from "react";

export default function Home() {
  // Set document title on component mount
  useEffect(() => {
    document.title = "Fully Charged Nepal - Sustainable E-waste & EV Battery Management";
  }, []);

  return (
    <div>
      <Hero />
      <Challenges />
      <Solutions />
      <ProcessSteps />
      <Impact />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
