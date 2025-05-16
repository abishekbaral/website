export default function ProcessSteps() {
  const steps = [
    {
      number: 1,
      title: "Contact Us",
      description: "Get in touch via our form or phone."
    },
    {
      number: 2,
      title: "Schedule Pickup",
      description: "We arrange a convenient collection time."
    },
    {
      number: 3,
      title: "Safe Collection",
      description: "We safely collect your e-waste or batteries."
    },
    {
      number: 4,
      title: "Processing & Recycling",
      description: "We process items for reuse or recycling responsibly."
    }
  ];

  return (
    <section className="section py-16 px-4 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Simple Steps to Responsible Disposal</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {steps.map((step, index) => (
            <div key={index} className="process-step flex flex-col items-center w-full sm:w-1/2 md:w-1/4 max-w-xs">
              <div className="step-icon w-16 h-16 bg-blue-500 text-white text-2xl rounded-full flex justify-center items-center mb-4">
                {step.number}
              </div>
              <div className="step-number text-xl font-bold mb-2 text-gray-700">{step.title}</div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-gray-700">Our process ensures formal, responsible management over informal disposal.</p>
      </div>
    </section>
  );
}
