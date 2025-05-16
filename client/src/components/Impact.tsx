export default function Impact() {
  const impacts = [
    {
      icon: "🌍",
      title: "Protecting the Environment",
      description: "Preventing pollution from hazardous materials and conserving natural resources."
    },
    {
      icon: "🔄",
      title: "Promoting Circularity",
      description: "Recovering valuable materials and giving batteries a second life reduces the need for new mining. We are committed to circular economy principles."
    },
    {
      icon: "🇳🇵",
      title: "A Cleaner Nepal",
      description: "Directly contributing to a healthier environment and sustainable development in Nepal, addressing the lack of specific government action."
    }
  ];

  const sdgs = [
    {
      number: "7",
      title: "Affordable & Clean Energy",
      description: "By repurposing EV batteries for stationary storage, we contribute to providing access to affordable and clean energy solutions."
    },
    {
      number: "8",
      title: "Decent Work & Economic Growth",
      description: "Creating formal sector jobs in waste management and promoting sustainable economic growth through resource recovery."
    },
    {
      number: "12",
      title: "Responsible Consumption & Production",
      description: "Promoting sustainable consumption patterns and responsible handling of technological waste."
    },
    {
      number: "13",
      title: "Climate Action",
      description: "Reducing greenhouse gas emissions through proper waste management and supporting the transition to renewable energy."
    }
  ];

  return (
    <section className="section py-16 px-4 text-center bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Our Impact: Contributing to a Circular Economy & Global Goals</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {impacts.map((impact, index) => (
            <div key={index} className="content-block w-full sm:w-1/2 lg:w-1/3 max-w-sm text-left p-6 bg-white rounded-lg shadow-md">
              <div className="icon-placeholder w-20 h-20 bg-green-600 text-white text-4xl rounded-lg mb-6 mx-auto sm:mx-0 flex items-center justify-center">
                {impact.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{impact.title}</h3>
              <p className="text-gray-700">{impact.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">Addressing Global Challenges: Our Commitment to the SDGs</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sdgs.map((sdg, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs p-4 bg-white rounded-lg shadow-md text-left">
                <div className="text-3xl font-bold text-orange-500 mb-2">{sdg.number}</div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">{sdg.title}</h4>
                <p className="text-gray-700 text-sm">{sdg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
