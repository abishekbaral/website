export default function Challenges() {
  const challenges = [
    {
      icon: "🗑️",
      title: "Increasing Waste Volume",
      description: "The volume of electronic waste and emerging EV battery waste is rapidly growing in Nepal."
    },
    {
      icon: "⚖️",
      title: "Lack of Regulations",
      description: "There is a significant lack of specific collection guidelines and regulations for this waste stream in Nepal."
    },
    {
      icon: "☣️",
      title: "Hazardous Materials",
      description: "Improper disposal, often mixed with municipal waste, releases toxic materials like lead, mercury, lithium, cobalt, and nickel, harming health and environment."
    }
  ];

  return (
    <section className="section py-16 px-4 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Nepal's Growing E-waste & EV Battery Challenge</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="content-block w-full sm:w-1/2 lg:w-1/3 max-w-sm text-left p-6 bg-white rounded-lg shadow-md">
              <div className="icon-placeholder w-20 h-20 bg-green-600 text-white text-4xl rounded-lg mb-6 mx-auto sm:mx-0 flex items-center justify-center">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{challenge.title}</h3>
              <p className="text-gray-700">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
