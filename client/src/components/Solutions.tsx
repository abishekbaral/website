export default function Solutions() {
  const solutions = [
    {
      icon: "♻️",
      title: "E-waste Collection & Recycling",
      description: "Responsible handling and environmentally sound dismantling of various electronics."
    },
    {
      icon: "🔒",
      title: "IT Asset Disposition (ITAD)",
      description: "Offering secure data destruction for IT assets to protect your information."
    },
    {
      icon: "🔋",
      title: "EV Battery Management",
      description: "Collection, assessment for second life applications (like stationary storage), or safe recycling."
    }
  ];

  return (
    <section className="section py-16 px-4 text-center bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Our Sustainable Solution</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="content-block w-full sm:w-1/2 lg:w-1/3 max-w-sm text-left p-6 bg-white rounded-lg shadow-md">
              <div className="icon-placeholder w-20 h-20 bg-green-600 text-white text-4xl rounded-lg mb-6 mx-auto sm:mx-0 flex items-center justify-center">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{solution.title}</h3>
              <p className="text-gray-700">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
