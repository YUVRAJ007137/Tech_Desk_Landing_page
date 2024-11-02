import React from 'react';
import { Monitor, Smartphone, Film, Video, Camera, Palette } from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import Background from './components/Background';
import ContactForm from './components/ContactForm';

function App() {
  const services = [
    {
      icon: <Monitor size={32} />,
      title: "Web Design",
      description: "Custom-crafted websites that capture your brand's essence and drive results."
    },
    {
      icon: <Smartphone size={32} />,
      title: "App Development",
      description: "Native Android applications built with the latest technologies and best practices."
    },
    {
      icon: <Film size={32} />,
      title: "Filmmaking",
      description: "Professional film production services that tell your story beautifully."
    },
    {
      icon: <Video size={32} />,
      title: "Video Editing",
      description: "Expert video editing that transforms raw footage into compelling content."
    },
    {
      icon: <Camera size={32} />,
      title: "Cinematography",
      description: "Cinematic visuals that capture moments with artistic precision."
    },
    {
      icon: <Palette size={32} />,
      title: "Graphics Design",
      description: "Creative designs that make your brand stand out in the digital landscape."
    }
  ];

  return (
    <div className="min-h-screen">
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto mt-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your one-stop digital marketing agency for cutting-edge web design, app development, and creative media solutions.
          </p>
          <a href="#contact" className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#C4A137] transition-colors">
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Our <span className="text-[#D4AF37]">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Featured <span className="text-[#D4AF37]">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative overflow-hidden rounded-lg group">
                <img 
                  src={`https://source.unsplash.com/random/800x600?technology=${item}`}
                  alt="Portfolio item"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">Project {item}</h3>
                    <p className="text-[#D4AF37]">View Details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Get in <span className="text-[#D4AF37]">Touch</span>
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md text-white py-8 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Tech Desk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;