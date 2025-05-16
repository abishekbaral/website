import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Team() {
  const teamMembers = [
    {
      name: "Rajesh Sharma",
      role: "CEO & Co-founder",
      bio: "With over 15 years of experience in environmental sustainability and waste management, Rajesh leads our vision for responsible e-waste management in Nepal.",
      linkedin: "https://www.linkedin.com/in/rajeshsharma",
      email: "rajesh@fullychargednepal.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Anita Gurung",
      role: "Co-founder & Operations Director",
      bio: "Anita brings her expertise in logistics and operational excellence, ensuring our collection and processing systems run efficiently and effectively.",
      linkedin: "https://www.linkedin.com/in/anitagurung",
      email: "anita@fullychargednepal.com",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Sunil Paudel",
      role: "Electronics Engineer",
      bio: "As our technical expert, Sunil oversees the safe dismantling of electronic devices and assessment of EV batteries for potential second-life applications.",
      linkedin: "https://www.linkedin.com/in/sunilpaudel",
      email: "sunil@fullychargednepal.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Priya Thapa",
      role: "Mechanical Engineer",
      bio: "Priya specializes in the mechanical aspects of recycling systems and EV battery disassembly, ensuring safe and efficient processing of complex components.",
      linkedin: "https://www.linkedin.com/in/priyathapa",
      email: "priya@fullychargednepal.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80"
    }
  ];

  return (
    <section className="section py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Team</h2>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Meet the passionate professionals behind Fully Charged Nepal who are dedicated to creating a sustainable future for e-waste and EV battery management in Nepal.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                <div className="flex items-center space-x-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}