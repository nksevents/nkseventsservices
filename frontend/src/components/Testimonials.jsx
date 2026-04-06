import React from 'react';
import { Quote, Play } from 'lucide-react';

const Testimonials = () => {
  const textTestimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Tech Solutions Pvt Ltd',
      role: 'CEO',
      text: 'NKS Events handled our annual conference with 500+ attendees flawlessly. Their attention to detail and professional coordination made the event a huge success.'
    },
    {
      name: 'Dr. Priya Sharma',
      company: 'Greenfield International School',
      role: 'Principal',
      text: 'We have worked with NKS for our annual day and sports events for 3 years. They understand our requirements perfectly and execute with precision.'
    },
    {
      name: 'Anand Krishnan',
      company: 'Community Welfare Association',
      role: 'President',
      text: 'From planning to execution, NKS team was professional and responsive. They made our community festival a memorable experience for all 2000+ attendees.'
    }
  ];

  const videoTestimonials = [
    {
      name: 'Event Highlight',
      company: 'Error Makes Clever',
      role: 'Corporate Event',
      videoUrl: '/assets/promo-video.mp4'
    },
    {
      name: 'Community Meetup',
      company: 'Prathepa Leo',
      role: 'Networking Event',
      videoUrl: '/assets/center-vid.mp4'
    },
    {
      name: 'Special Edition',
      company: 'CFC',
      role: 'Community Gathering',
      videoUrl: '/assets/cfc-video.mp4'
    }
  ];

  return (
    <section id="testimonials" className="bg-muted dark:bg-zinc-950 py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-semibold text-sm text-secondary uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-secondary"></span>
            Client Feedback
            <span className="w-8 h-[2px] bg-secondary"></span>
          </p>
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-6 tracking-tight">Testimonials</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Trusted by organizations across Chennai
          </p>
        </div>

        {/* Text Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {textTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-card dark:bg-white/5 border border-border dark:border-white/[0.08] dark:border-[0.5px] p-10 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(91,45,139,0.1)] relative"
            >
              <div className="p-3 bg-muted dark:bg-white/10 rounded-xl inline-flex self-start mb-6 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Quote size={28} />
              </div>
              <p className="text-foreground/90 italic text-[15px] leading-[1.8] flex-1 mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="pt-6 border-t border-border dark:border-white/[0.08]">
                <div className="font-bold text-[17px] text-foreground mb-1 group-hover:text-primary transition-colors">
                  {testimonial.name}
                </div>
                <div className="text-[13px] text-secondary font-bold uppercase tracking-wider mb-1">
                  {testimonial.role}
                </div>
                <div className="text-[14px] text-muted-foreground font-medium">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="mt-20">
          <h3 className="font-bold text-3xl md:text-4xl text-foreground mb-12 text-center tracking-tight">
            Video Testimonials
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <div 
                key={index} 
                className="group bg-card dark:bg-white/5 border border-border dark:border-white/[0.08] dark:border-[0.5px] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(91,45,139,0.15)]"
              >
                <div className="relative w-full aspect-[9/16] overflow-hidden bg-black">
                  <video 
                    src={video.videoUrl}
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="font-bold text-[18px] text-foreground mb-1 group-hover:text-primary transition-colors">
                    {video.name}
                  </div>
                  <div className="text-[13px] text-secondary font-bold uppercase tracking-wider mb-1">
                    {video.role}
                  </div>
                  <div className="text-[14px] text-muted-foreground font-medium">
                    {video.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Testimonials;