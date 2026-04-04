import React from 'react';
import { Building2, GraduationCap, Users, Network, Award, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building2 size={28} />,
      title: 'Corporate Events',
      description: 'Conferences, seminars, team building activities, product launches, and annual meetings executed with precision and professionalism.',
      features: ['Conference Management', 'Team Building', 'Product Launches', 'Corporate Meetings']
    },
    {
      icon: <GraduationCap size={28} />,
      title: 'School & College Events',
      description: 'Annual days, cultural fests, sports meets, competitions, and educational events handled end-to-end.',
      features: ['Annual Day Functions', 'Cultural Fests', 'Sports Events', 'Academic Competitions']
    },
    {
      icon: <Users size={28} />,
      title: 'Social Events',
      description: 'Weddings, parties, community gatherings, and celebrations coordinated with attention to detail and care.',
      features: ['Wedding Coordination', 'Private Parties', 'Community Events', 'Celebrations']
    },
    {
      icon: <Network size={28} />,
      title: 'Networking Events',
      description: 'Professional networking sessions, industry meetups, business mixers, and corporate networking events designed to foster connections.',
      features: ['Business Mixers', 'Industry Meetups', 'Professional Networking', 'Corporate Socials']
    },
    {
      icon: <Award size={28} />,
      title: 'Award Shows',
      description: 'Prestigious award ceremonies, recognition events, and gala nights executed with elegance and professionalism.',
      features: ['Award Ceremonies', 'Gala Nights', 'Recognition Events', 'Corporate Awards']
    },
    {
      icon: <Package size={28} />,
      title: 'Expos',
      description: 'Trade shows, exhibitions, product showcases, and expo events with comprehensive booth management and coordination.',
      features: ['Trade Shows', 'Product Exhibitions', 'Booth Management', 'Expo Coordination']
    }
  ];

  return (
    <section id="services" className="bg-background dark:bg-black py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-semibold text-sm text-secondary uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-secondary"></span>
            What We Do
            <span className="w-8 h-[2px] bg-secondary"></span>
          </p>
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-6 tracking-tight">Our Services</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Comprehensive event management solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card dark:bg-white/5 border border-border dark:border-white/[0.08] dark:border-[0.5px] p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(91,45,139,0.15)] dark:hover:shadow-[0_20px_40px_-15px_rgba(143,43,203,0.15)] cursor-pointer relative overflow-hidden flex flex-col"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Icon */}
              <div className="text-secondary dark:text-primary mb-4 p-3 bg-primary/5 dark:bg-[#7C3AED]/15 dark:border dark:border-[#7C3AED]/30 rounded-xl inline-flex w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm">
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

export default Services;