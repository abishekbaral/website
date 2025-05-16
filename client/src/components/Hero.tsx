import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative bg-green-50 text-gray-800 text-center py-20 px-4 overflow-hidden">
      <div 
        className="hero-background absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30 z-[-1]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')" 
        }}
      ></div>
      <div className="container mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-800">WHAT ARE WE REALLY CHARGING UP FOR?</h1>
        <p className="text-xl md:text-2xl mb-8">
          FULLY CHARG<span className="text-[#ff9800]">⚡</span>D NEPAL: Your trusted partner for safe, environmentally sound e-waste and EV battery collection, repurposing, and recycling solutions in Nepal, powering a sustainable future.
        </p>
        <Link href="/contact" className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition duration-300">
          Request a Pickup
        </Link>
      </div>
    </section>
  );
}
