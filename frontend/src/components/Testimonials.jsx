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
      name: 'Meera Patel',
      company: 'Innovation Hub Pvt Ltd',
      role: 'Marketing Director',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      videoUrl: ''
    },
    {
      name: 'Suresh Menon',
      company: 'Star College of Arts',
      role: 'Event Coordinator',
      thumbnail: 'https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg',
      videoUrl: ''
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <div 
                key={index} 
                className="group bg-card dark:bg-white/5 border border-border dark:border-white/[0.08] dark:border-[0.5px] rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(91,45,139,0.15)]"
                onClick={() => video.videoUrl && window.open(video.videoUrl, '_blank')}
              >
                <div className="relative w-full h-[300px] overflow-hidden">
                  <img 
                    src={video.thumbnail}
                    alt={`${video.name} testimonial`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/90 hover:bg-secondary/95 text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(91,45,139,0.5)]">
                      <Play size={36} fill="currentColor" className="ml-2" />
                    </div>
                  </div>
                  
                  {!video.videoUrl && (
                    <div className="absolute bottom-4 left-4 right-4 py-2 px-4 bg-white/95 text-primary text-xs font-bold uppercase tracking-wider text-center rounded-lg shadow-md">
                      Video link coming soon
                    </div>
                  )}
                </div>
                
                <div className="p-8">
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