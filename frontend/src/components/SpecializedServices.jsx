import React from 'react';
import { Mic2, Users2, ShoppingBag, Video, Palette, ClipboardList } from 'lucide-react';

const SpecializedServices = () => {
  const specializedServices = [
    {
      icon: <Mic2 size={28} />,
      title: 'Technical Coordination',
      description: 'Complete technical support including sound systems, lighting, stage setup, and AV equipment management for all types of events.',
      features: ['Sound Systems', 'Lighting Design', 'Stage Setup', 'AV Equipment', 'Technical Support']
    },
    {
      icon: <Users2 size={28} />,
      title: 'Manpowers',
      description: 'Professional event staff, coordinators, ushers, security personnel, and support teams to ensure smooth event operations.',
      features: ['Event Staff', 'Coordinators', 'Security Personnel', 'Ushers', 'Support Teams']
    },
    {
      icon: <ShoppingBag size={28} />,
      title: 'Merchandise',
      description: 'Custom branded merchandise, promotional items, giveaways, and event materials designed and delivered for your events.',
      features: ['Branded Merchandise', 'Promotional Items', 'Event Giveaways', 'Custom Materials']
    },
    {
      icon: <Video size={28} />,
      title: 'Video Production',
      description: 'Professional video coverage, live streaming, event highlights, promotional videos, and post-production services.',
      features: ['Event Coverage', 'Live Streaming', 'Highlight Videos', 'Post-Production', 'Promotional Videos']
    },
    {
      icon: <Palette size={28} />,
      title: 'Handling Creatives',
      description: 'Creative design services including event branding, graphics, signage, backdrops, and visual identity for your events.',
      features: ['Event Branding', 'Graphic Design', 'Signage & Backdrops', 'Visual Identity', 'Creative Concepts']
    },
    {
      icon: <ClipboardList size={28} />,
      title: 'Event Support Services',
      description: 'Comprehensive support including registrations, walkie talkies for coordination, and medical team with ambulance service.',
      features: ['Registration Desk', 'Walkie Talkies', 'Medical Team', 'Ambulance Service', 'Emergency Support']
    }
  ];

  return (
    <section id="specialized" className="bg-muted dark:bg-zinc-950 py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-semibold text-sm text-secondary uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-secondary"></span>
            Additional Services
            <span className="w-8 h-[2px] bg-secondary"></span>
          </p>
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-6 tracking-tight">Specialized Support</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Comprehensive technical and operational support for seamless event execution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializedServices.map((service, index) => (
            <div
              key={index}
              className="group bg-card dark:bg-white/5 border border-border dark:border-white/[0.08] dark:border-[0.5px] p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(91,45,139,0.15)] dark:hover:shadow-[0_20px_40px_-15px_rgba(143,43,203,0.15)] cursor-pointer relative overflow-hidden flex flex-col"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Icon */}
              <div className="text-secondary dark:text-primary mb-4 p-3 bg-muted dark:bg-[#7C3AED]/15 dark:border dark:border-[#7C3AED]/30 rounded-xl inline-flex w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl text-foreground mb-3 relative z-10 inline-block">
                {service.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-[15px] leading-relaxed mb-6 relative z-10">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 relative z-10 mt-auto">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-foreground/80 flex items-center gap-3 font-medium">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedServices;