import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, X } from 'lucide-react';

const Works = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const works = [
    {
      id: 1,
      title: 'Corporate Annual Conference',
      client: 'Tech Solutions Pvt Ltd',
      type: 'Corporate Event',
      date: 'March 2024',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      video: 'https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4', // Auto-playing video added
      description: 'Organized a large-scale corporate conference with 500+ attendees featuring keynote speakers, breakout sessions, and networking events.',
      embedLink: ''
    },
    {
      id: 2,
      title: 'Grand Wedding Celebration',
      client: 'Sharma Family',
      type: 'Wedding Event',
      date: 'February 2024',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/758898/pexels-photo-758898.png',
      description: 'Complete wedding coordination including venue setup, catering management, entertainment, and guest coordination for 800+ guests.',
      embedLink: ''
    },
    {
      id: 3,
      title: 'Professional Business Networking',
      client: 'Chennai Business Forum',
      type: 'Networking Event',
      date: 'January 2024',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
      description: 'High-profile business networking event connecting 200+ entrepreneurs and industry leaders with structured networking sessions and panel discussions.',
      embedLink: ''
    },
    {
      id: 4,
      title: 'Excellence Awards Gala',
      client: 'Industry Excellence Foundation',
      type: 'Award Show',
      date: 'December 2023',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg',
      description: 'Prestigious award ceremony recognizing industry leaders with elegant stage setup, award presentations, and celebrity host coordination.',
      embedLink: ''
    },
    {
      id: 5,
      title: 'Tech Innovation Expo',
      client: 'Chennai Tech Hub',
      type: 'Expo',
      date: 'November 2023',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      description: 'Major technology exhibition featuring 100+ exhibitors, product showcases, booth management, and visitor coordination.',
      embedLink: ''
    },
    {
      id: 6,
      title: 'Cultural Festival',
      client: 'Community Welfare Association',
      type: 'Community Event',
      date: 'October 2023',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg',
      description: 'Large-scale cultural festival with 2000+ attendees, featuring multiple performance stages, food stalls, and activity zones.',
      embedLink: ''
    },
    {
      id: 7,
      title: 'Annual Day Celebration',
      client: 'Greenfield International School',
      type: 'School Event',
      date: 'September 2023',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/35532879/pexels-photo-35532879.jpeg',
      description: 'School annual day with student performances, stage management, sound and lighting, and audience coordination.',
      embedLink: ''
    },
    {
      id: 8,
      title: 'Live Stage Performance',
      client: 'Arts & Culture Society',
      type: 'Cultural Event',
      date: 'August 2023',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/35486044/pexels-photo-35486044.jpeg',
      description: 'Professional stage setup for live performances including lighting design, sound engineering, and backstage management.',
      embedLink: ''
    },
    {
      id: 9,
      title: 'Wedding Ceremony',
      client: 'Kumar Family',
      type: 'Wedding Event',
      date: 'July 2023',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg',
      description: 'Traditional wedding ceremony coordination with decor, photography, catering, and guest management.',
      embedLink: ''
    }
  ];

  return (
    <section id="works" className="bg-muted dark:bg-zinc-950 py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-[30%] -left-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-semibold text-sm text-secondary uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-secondary"></span>
            Our Portfolio
            <span className="w-8 h-[2px] bg-secondary"></span>
          </p>
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-6 tracking-tight">Our Works</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Explore our successful events across corporate, social, and community sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="group bg-card dark:bg-white/5 border border-border dark:border-white/[0.08] dark:border-[0.5px] rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer backdrop-blur-md hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(91,45,139,0.2)] dark:hover:shadow-[0_12px_40px_rgba(143,43,203,0.15)] flex flex-col h-full"
            >
              {/* Media Section */}
              <div className="relative w-full h-[280px] overflow-hidden">
                {work.video ? (
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src={work.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute top-4 right-4 px-4 py-1.5 bg-primary/95 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                  {work.type}
                </div>

                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-sm font-medium flex items-center gap-2">
                    Click to view details <ExternalLink size={14} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="text-[22px] font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                
                <p className="text-[15px] text-secondary font-semibold mb-4">
                  {work.client}
                </p>

                <p className="text-[15px] text-muted-foreground mb-6 line-clamp-2 leading-relaxed flex-1">
                  {work.description}
                </p>

                <div className="flex gap-4 flex-wrap mt-auto pt-4 border-t border-border dark:border-white/[0.08] dark:border-[0.5px]">
                  <div className="flex items-center gap-1.5 text-[13px] font-medium text-foreground/70">
                    <Calendar size={15} className="text-primary" />
                    {work.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-[13px] font-medium text-foreground/70">
                    <MapPin size={15} className="text-primary" />
                    {work.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for work details */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="bg-card dark:bg-zinc-900 border border-primary/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[300px] sm:h-[400px] w-full">
              {selectedWork.video ? (
                 <video 
                 autoPlay 
                 muted 
                 loop 
                 playsInline 
                 className="w-full h-full object-cover"
               >
                 <source src={selectedWork.video} type="video/mp4" />
               </video>
              ) : (
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card dark:from-zinc-900 to-transparent"></div>
              <button 
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 sm:p-10 -mt-20 relative z-10">
              <div className="inline-block px-4 py-1 min-w-[max-content] bg-primary text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-md shadow-primary/30">
                {selectedWork.type}
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
                {selectedWork.title}
              </h3>
              
              <p className="text-xl text-secondary font-semibold mb-8">
                {selectedWork.client}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl">
                {selectedWork.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-muted dark:bg-white/5 p-6 rounded-xl border border-border dark:border-white/[0.08] dark:border-[0.5px]">
                <div>
                  <div className="text-sm text-muted-foreground font-medium mb-1">Date</div>
                  <div className="text-base text-foreground font-semibold">{selectedWork.date}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium mb-1">Location</div>
                  <div className="text-base text-foreground font-semibold">{selectedWork.location}</div>
                </div>
                {selectedWork.embedLink && (
                  <div className="col-span-2 flex items-center justify-end">
                    <a
                      href={selectedWork.embedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-secondary text-white rounded-xl font-semibold transition-colors shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-secondary/30"
                    >
                      View Live Project
                      <ExternalLink size={18} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
