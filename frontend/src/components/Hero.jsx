import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-28 pb-10 px-6">
      {/* Auto-playing Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black dark:bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        >
          {/* Using custom video source */}
          <source src="/assets/hero-video.mp4" type="video/mp4" />
          {/* Placeholder videos (commented out) 
          <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/2774422/2774422-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          */}
        </video>
        
        {/* Background Effects (commented out per user request)
        <div className="absolute inset-0 bg-primary mix-blend-screen dark:bg-gradient-to-br dark:from-primary/80 dark:via-black/60 dark:to-[#1c0d2b]/95 dark:mix-blend-multiply transition-all duration-500"></div>
        <div className="absolute inset-0 bg-white/20 dark:bg-black/40 transition-all duration-500"></div>
        */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full text-center mx-auto flex flex-col items-center">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both relative">
          
          {/* Text backdrop gradient removed as per user request */}

          <div className="inline-block px-5 py-2 bg-primary/5 dark:bg-white/10 backdrop-blur-md border border-primary/20 dark:border-white/20 rounded-full mb-8 shadow-lg shadow-primary/10 dark:shadow-primary/20 hover:bg-primary/10 dark:hover:bg-white/15 transition-colors cursor-default">
            <span className="text-primary dark:text-white/90 text-sm font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary dark:bg-secondary shadow-[0_0_10px_rgba(91,45,139,0.5)] dark:shadow-[0_0_10px_theme(colors.secondary.DEFAULT)] animate-pulse"></span>
              End-to-End Event Solutions
            </span>
          </div>
          
          <h1 className="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.1] text-foreground dark:text-white mb-6 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,1)] dark:drop-shadow-[0_0_25px_rgba(0,0,0,1)] relative z-10">
            Creating Unforgettable <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black dark:from-secondary dark:to-[#c276f5] dark:drop-shadow-[0_0_15px_rgba(143,43,203,0.3)]">
              Experiences
            </span>
          </h1>
          
          <p className="font-sans font-semibold text-lg md:text-xl text-black/80 dark:text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,1)] dark:drop-shadow-[0_0_15px_rgba(0,0,0,1)] relative z-10">
            Professional event execution and coordination for corporates, educational institutions, and communities. We turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button 
              onClick={scrollToContact} 
              className="group inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(91,45,139,0.2)] dark:shadow-[0_0_20px_rgba(91,45,139,0.5)] hover:shadow-[0_15px_30px_rgba(143,43,203,0.3)] dark:hover:shadow-[0_0_30px_rgba(143,43,203,0.6)] hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('works');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="group inline-flex items-center gap-3 bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 backdrop-blur-md border border-primary/10 dark:border-white/20 text-foreground dark:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 w-full sm:w-auto justify-center shadow-sm"
            >
              <div className="bg-primary dark:bg-white/90 text-white dark:text-primary p-2 rounded-full group-hover:scale-110 transition-transform shadow-md">
                <Play size={16} className="ml-0.5" fill="currentColor" />
              </div>
              View Our Work
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-4xl mx-auto w-full animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
          {[
            { number: "50+", label: "Events Executed" },
            { number: "5+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, i) => (
            <div key={i} className="group relative p-8 bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 backdrop-blur-md rounded-2xl border border-primary/10 dark:border-white/[0.08] dark:border-[0.5px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-secondary/20 overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-4xl md:text-5xl font-extrabold text-foreground dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-white dark:to-white/70 mb-2 relative z-10 w-fit mx-auto">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-primary dark:text-secondary font-semibold uppercase tracking-wider relative z-10">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;