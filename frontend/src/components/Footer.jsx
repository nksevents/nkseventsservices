import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = ['Home', 'Services', 'Our Works', 'About', 'Testimonials', 'Contact'];
  const services = ['Corporate Events', 'School & College', 'Social Events', 'Networking', 'Award Shows', 'Expos'];

  return (
    <footer className="bg-background dark:bg-black border-t border-border dark:border-white/[0.08] dark:border-[0.5px] pt-10 pb-6 px-6 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-8">
          
          {/* Company Info & Socials */}
          <div className="lg:pr-4">
            <img 
              src="/main_logo.png"
              alt="NKS Events Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 dark:bg-white/90 dark:p-1.5 dark:rounded-lg mb-4"
            />
            <p className="text-[13px] font-medium text-muted-foreground leading-snug mb-5">
              Professional event execution and coordination partner for corporates, schools, and communities across Chennai.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/nkseventmgt/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://instagram.com/nkseventsservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://wa.me/918825767852" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const elementId = link === 'Home' ? 'hero' : link === 'Our Works' ? 'works' : link.toLowerCase();
                    const element = document.getElementById(elementId);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm text-foreground mb-4">Event Services</h4>
            <div className="flex flex-col gap-2.5">
              {services.map((service) => (
                <div key={service} className="text-[13px] font-medium text-muted-foreground">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm text-foreground mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:8825767852" className="flex items-center gap-2.5 text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors group">
                <Phone size={14} className="text-primary flex-shrink-0" />
                +91 88257 67852
              </a>
              <a href="mailto:info@nkseventsservices.in" className="flex items-center gap-2.5 text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors group">
                <Mail size={14} className="text-primary flex-shrink-0" />
                info@nkseventsservices.in
              </a>
              <div className="flex items-start gap-2.5 text-[13px] font-medium text-muted-foreground leading-snug">
                <MapPin size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  No 1, Annamalai Nagar,<br/>
                  3rd Cross St, Thiruvottiyur,<br/>
                  Chennai - 600 019
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border dark:border-white/[0.08] dark:border-[0.5px] pt-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] font-medium text-muted-foreground">
            © {currentYear} NKS Events & Services. All rights reserved.
          </p>
          <p className="text-[11px] font-bold text-primary/70 uppercase tracking-widest">
            Professional Event Management
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;