import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';


const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Courses", href: "#" },
    { name: "Dive Sites", href: "#" },
    { name: "Reviews", href: "#" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} fill="currentColor" />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Youtube size={20} fill="currentColor" />, label: "Youtube", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#0B3B73] text-white pt-16 pb-8 md:pt-20 md:pb-10 font-sans">
      <div className="max-w-9xl mx-auto px-6 md:px-12 lg:px-16">
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 md:mb-20">
          
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">Paradise Diving Mexico</h3>
            <p className="text-[#A5B4C7] text-sm leading-relaxed max-w-xs">
              Your premier PADI 5-Star dive center in Playa del Carmen, Riviera Maya.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold tracking-tight">Quick Links</h4>
            <nav className="flex flex-col space-y-4">
              {quickLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[#A5B4C7] hover:text-[#00AEEF] transition-colors text-sm font-medium w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

      
          <div className="space-y-6">
            <h4 className="text-lg font-bold tracking-tight">Contact</h4>
            <div className="text-[#A5B4C7] text-sm space-y-1.5 leading-relaxed font-medium">
              <p>Calle 14 Norte</p>
              <p>Playa del Carmen, Q.R.</p>
              <p>Mexico 77710</p>
              <a 
                href="tel:+529841234567" 
                className="block pt-4 text-white hover:text-[#00AEEF] transition-colors"
              >
                +52 984 123 4567
              </a>
            </div>
          </div>

        
          <div className="space-y-6">
            <h4 className="text-lg font-bold tracking-tight">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-[#005485] p-3 rounded-full hover:bg-[#00AEEF] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        
        <div className="pt-10 border-t border-white/10 text-center">
          <p className="text-[#8E9AAF] text-xs md:text-sm font-medium">
            © 2025 Paradise Diving Mexico. All rights reserved. PADI 5-Star Dive Center #12345
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;