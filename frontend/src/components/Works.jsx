import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, X, ChevronDown, ChevronUp } from 'lucide-react';

const Works = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const works = [
    // 1. OneEyes
    {
      id: 1,
      title: 'Oneyes-Startup Fest',
      client: '@Sairam Engg College',
      type: 'Buisness Expo',
      date: 'TBD',
      location: 'Chennai',
      video: '/assets/drone-video.mp4',
      description: 'Startup fest and tech exhibition designed for students and upcoming entrepreneurs.',
      embedLink: ''
    },
    // 2. Hello Techies Connect
    {
      id: 2,
      title: 'Hello Techies Connect',
      client: '@Shiash Infotech',
      type: 'Networking',
      date: 'TBD',
      location: 'Chennai',
      image: '/assets/HelloPro.png',
      description: 'An exclusive networking meetup designed for collaboration and growth.',
      embedLink: ''
    },
    // 3. Career Launchpad
    {
      id: 3,
      title: 'Career Launchpad for Error Makes Clever',
      client: '@Cowrks',
      type: 'Corporate',
      date: 'TBD',
      location: 'Chennai',
      image: '/assets/CareerLaunchPad.png',
      description: 'A dedicated corporate launchpad event for career acceleration and placement.',
      embedLink: ''
    },
    // 4. Editors Connect
    {
      id: 4,
      title: 'Editors Connect for Pro Editors Club',
      client: '@Kamarajar Arangam',
      type: 'Networking',
      date: 'TBD',
      location: 'Chennai',
      image: '/assets/EditorsConnect.jpeg',
      description: 'A dedicated connect event bridging professionals in the creative editing space.',
      embedLink: ''
    },
    // 5. Bakthavachalam School Alumni Meet
    {
      id: 5,
      title: 'Bakthavachalam School Alumni Meet',
      client: '@Bakthavachalam School',
      type: 'Alumni Meet',
      date: 'TBD',
      location: 'Chennai',
      video: '/assets/Bakthavachalam-Alumini-Meet.mp4',
      description: 'A nostalgic gathering for alumni to reconnect and celebrate their shared history.',
      embedLink: ''
    },
    // 6. Chennai FreeLancer Club Meet
    {
      id: 6,
      title: 'Chennai FreeLancer Club Meet',
      client: '@IITM Research Park',
      type: 'Community',
      date: 'TBD',
      location: 'Chennai',
      video: '/assets/cfc-video.mp4',
      description: 'A vibrant meetup for freelancers to network, share insights, and collaborate.',
      embedLink: ''
    }
  ];

  const moreWorks = [
    // 7. Chennai Events Hub
    {
      id: 7,
      title: 'Chennai Events Hub (Find Your Business Partner)',
      client: '@Chennai Events Hub',
      type: 'Community',
      date: 'TBD',
      location: 'Chennai',
      image: '/assets/CFC.jpeg',
      description: 'A special community-driven gathering focusing on specialized fields and networking.',
      embedLink: ''
    },
    // 8. Hello Techies Meetup
    {
      id: 8,
      title: 'Hello Techies Meetup',
      client: '@Shiash Infotech',
      type: 'Networking',
      date: 'TBD',
      location: 'Chennai',
      image: '/assets/HelloTechies1.jpeg',
      description: 'A special event connecting tech professionals, innovators, and industry leaders.',
      embedLink: ''
    },
    // 9. Dummy
    {
      id: 9,
      title: 'Innovation Summit 2025',
      client: '@Future Core',
      type: 'Corporate',
      date: 'Oct 2025',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      description: 'A visionary summit exploring the future of technology and sustainable business practices.',
      embedLink: ''
    }
  ];

  const visibleWorks = showMore ? [...works, ...moreWorks] : works;

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
          {visibleWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="group bg-card dark:bg-white/5 border border-border dark:border-white/[0.08] dark:border-[0.5px] rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer backdrop-blur-md hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(91,45,139,0.2)] dark:hover:shadow-[0_12px_40px_rgba(143,43,203,0.15)] flex flex-col h-full"
            >
              {/* Media Section */}
              <div className="relative w-full h-[280px] overflow-hidden">
                {work.video ? (
                  <video
                    key={work.video}
                    src={work.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
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
                  {work.title.includes('(') ? (
                    <>
                      {work.title.split('(')[0]}
                      <span className="block text-[16px] font-semibold mt-1 text-muted-foreground group-hover:text-primary/70 transition-colors">
                        ({work.title.split('(')[1]}
                      </span>
                    </>
                  ) : work.title}
                </h3>
                
                <p className="text-[16px] text-purple-600 dark:text-purple-500 font-bold mb-4 tracking-wide">
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

        {/* Load More / Show Less Button */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-primary/40 text-primary font-semibold text-sm tracking-wide hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_8px_30px_rgba(91,45,139,0.3)] transition-all duration-300"
          >
            {showMore ? (
              <>
                Show Less
                <ChevronUp size={16} className="transition-transform duration-300" />
              </>
            ) : (
              <>
                View More Events
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </>
            )}
          </button>
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
                  key={selectedWork.video}
                  src={selectedWork.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
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
                {selectedWork.title.includes('(') ? (
                  <>
                    {selectedWork.title.split('(')[0]}
                    <span className="block text-[22px] font-bold mt-2 text-muted-foreground">
                      ({selectedWork.title.split('(')[1]}
                    </span>
                  </>
                ) : selectedWork.title}
              </h3>
              
              <p className="text-xl text-purple-600 dark:text-purple-500 font-bold mb-8">
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