import React from 'react';

const OurClients = () => {
  // Placeholders for the 7 client logos you mentioned.
  // Replace these `image` paths with your individual logo links when ready.
  const clients = [
    { id: 1, name: 'Chennai Freelancers Club', image: '/assets/cfc.png' },
    { id: 2, name: 'Hello Techies', image: '/assets/hellotechies.png' },
    { id: 3, name: 'Pro Editors Club', image: '/assets/proeditors.png' },
    { id: 4, name: 'Oneyes Infotech Solutions', image: '/assets/neyes.png' },
    { id: 5, name: 'Harks Tech', image: '/assets/harkstech.png' },
    { id: 6, name: 'Thynk Loop', image: '/assets/thinkloop.png' },
    { id: 7, name: 'E-Learn', image: '/assets/e-learn.png' },
  ];

  // We duplicate the array to create a seamless CSS infinite loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="bg-muted dark:bg-zinc-950 py-20 px-6 border-b border-border dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-semibold text-sm text-secondary uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-secondary"></span>
            Our Clients
            <span className="w-8 h-[2px] bg-secondary"></span>
          </p>
          <h2 className="font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">Trusted By</h2>
          <p className="text-muted-foreground text-lg">
            Proudly partnering with leading organizations and communities
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden flex w-full">
          {/* Gradient overlay for fade effect on left edge */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-muted dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          
          {/* The scrolling track */}
          <div className="flex animate-marquee-left items-center w-max">
            {duplicatedClients.map((client, index) => (
              <div 
                key={`${client.id}-${index}`} 
                className="flex-none mx-6 sm:mx-10 w-40 sm:w-48 h-24 sm:h-28 flex items-center justify-center p-2 hover:-translate-y-2 transition-transform duration-300 group cursor-default"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="max-w-full max-h-full object-contain block group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { 
                      e.target.style.display = 'none'; 
                      e.target.nextSibling.style.display = 'block'; 
                    }}
                  />
                  <span style={{display: 'none'}} className="text-xs font-semibold text-muted-foreground text-center leading-tight">
                    {client.name}
                    <br/>
                    <span className="text-[10px] text-primary/70">(Add Logo)</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlay for fade effect on right edge */}
          <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-muted dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
