export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      quote: "As a Kathmandu-based tech company, we were concerned about responsibly disposing of our outdated equipment. Fully Charged provided a seamless solution with excellent service and the knowledge that our e-waste wouldn't harm our environment.",
      name: "Krishna Sharma",
      title: "CTO, NepalTech Solutions"
    },
    {
      rating: 5,
      quote: "We needed to dispose of several EV batteries and weren't sure how to do it safely. Fully Charged Nepal collected them professionally and gave us confidence that they would be handled responsibly.",
      name: "Anita Gurung",
      title: "Operations Manager, Green Transport Nepal"
    }
  ];

  return (
    <section className="section py-16 px-4 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Our Customers' Experience</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 max-w-sm p-6 bg-white rounded-lg shadow-md text-left">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">★★★★★</div>
                <div className="ml-2 text-gray-600">5.0</div>
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="font-semibold text-gray-900">- {testimonial.name}</div>
              <div className="text-sm text-gray-600">{testimonial.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
