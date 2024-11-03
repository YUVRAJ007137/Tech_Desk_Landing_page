import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Film, Video, Camera, Palette } from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import Background from './components/Background';
import ContactForm from './components/ContactForm';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault(); // Prevent default scroll behavior
      window.scrollBy({
        top: event.deltaY * 0.3, // Adjust the multiplier to control scroll speed
        behavior: 'smooth',
      });
    };

    // Attach the event listener
    window.addEventListener('wheel', handleScroll, { passive: false });

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500); // Adjust the time as needed
    return () => clearTimeout(timer); 
  }, []);

  const services = [
    { icon: <Monitor size={32} />, title: "Web Design", description: "Custom-crafted websites that capture your brand's essence and drive results." },
    { icon: <Smartphone size={32} />, title: "App Development", description: "Native Android applications built with the latest technologies and best practices." },
    { icon: <Film size={32} />, title: "Filmmaking", description: "Professional film production services that tell your story beautifully." },
    { icon: <Video size={32} />, title: "Video Editing", description: "Expert video editing that transforms raw footage into compelling content." },
    { icon: <Camera size={32} />, title: "Cinematography", description: "Cinematic visuals that capture moments with artistic precision." },
    { icon: <Palette size={32} />, title: "Graphics Design", description: "Creative designs that make your brand stand out in the digital landscape." }
  ];

  // Loading screen with logo
  if (isLoading) {
    return (
      <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
        <img src="/logo.jpg" alt="Logo" className="logo" /> {/* Update to correct path */}
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="section">
        <div className="text-center">
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
      <section id="services" className="section">
        <div>
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
      <section id="portfolio" className="section">
        <div>
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Featured <span className="text-[#D4AF37]">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { id: 1, src: '/projects/Violence detection.png', link: 'https://violence-detection.vercel.app/', title: 'Violence Detection AI' },
              { id: 2, src: '/projects/rubby.png', link: 'https://rubbyroomchat.vercel.app/', title: 'Rubby Room Chat' },
              { id: 3, src: '/projects/MineMods.png', link: 'https://siddesh0002t.github.io/MineMods/', title: 'MineMods' }
            ].map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-lg group">
                <img 
                  src={item.src}
                  alt={`${item.title} project preview`}
                  className="w-full h-64 object-contain bg-black transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <a 
                      href={item.link}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#D4AF37] hover:underline"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Get in <span className="text-[#D4AF37]">Touch</span>
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md text-white py-8 border-t border-[#D4AF37]/20">
        <div className="text-center">
          <p className="text-gray-400">© 2024 Tech Desk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
