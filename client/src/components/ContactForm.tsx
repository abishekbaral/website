import { useState } from "react";

export default function ContactForm() {
  // For displaying thank you message after form submission
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us Today</h2>
            <p className="text-center text-gray-700 mb-8">
              Ready to responsibly dispose of your e-waste or EV batteries? Get in touch with us to schedule a pickup or learn more about our services.
            </p>
            
            {submitted ? (
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Thank You!</h3>
                <p className="text-green-600">Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form 
                action="https://formsubmit.co/fullychargednepal@gmail.com" 
                method="POST"
                className="space-y-6"
                onSubmit={() => setSubmitted(true)}
              >
                {/* Honeypot to prevent spam */}
                <input type="text" name="_honey" style={{display: 'none'}} />
                
                {/* Disable captcha */}
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Redirect after submission */}
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select 
                    id="service" 
                    name="service" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Select a Service</option>
                    <option value="e-waste">E-waste Collection</option>
                    <option value="battery">EV Battery Collection</option>
                    <option value="itad">IT Asset Disposition</option>
                    <option value="other">Other/Information</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
                    placeholder="Tell us about your needs or questions"
                    required
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-orange-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
