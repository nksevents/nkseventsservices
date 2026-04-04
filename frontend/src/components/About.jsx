import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const checkItems = [
  'End-to-end event management',
  'Zero last-minute surprises',
  '50+ vendor network in Chennai',
  'On-time, on-budget delivery',
  'Dedicated coordination team',
  'Post-event support & debrief',
];

const steps = [
  {
    num: '01',
    title: 'Understanding',
    desc: 'We listen closely to your requirements and understand your vision before anything else.',
  },
  {
    num: '02',
    title: 'Planning',
    desc: 'Detailed coordination with vendors, stakeholders, and timelines — nothing left to chance.',
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Flawless on-ground delivery with real-time problem solving and clear communication.',
  },
  {
    num: '04',
    title: 'Follow-through',
    desc: 'Post-event debrief, feedback collection, and ongoing support to close the loop.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-background dark:bg-black py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">

        {/* ── Left column ── */}
        <div>
          <p className="font-semibold text-sm text-secondary uppercase tracking-widest mb-4 flex items-center gap-2">
            About Us
            <span className="w-8 h-[2px] bg-secondary" />
          </p>

          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-6 tracking-tight">
            Who We Are
          </h2>

          <p className="text-foreground/80 text-lg leading-relaxed mb-4 font-medium">
            NKS Events &amp; Services is a Chennai-based event company with over a decade of
            executing seamless experiences — from boardrooms to ballrooms.
          </p>

          <p className="text-muted-foreground text-[15px] leading-relaxed mb-10">
            We partner with corporates, educational institutions, communities, and individuals
            to transform their vision into reality — handling every detail from initial planning
            and vendor coordination to on-ground execution and post-event review.
          </p>

          {/* 2-column checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
            {checkItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                <span className="font-medium text-[15px] text-foreground/90 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-secondary text-white text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Get in touch
              <ArrowRight size={16} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-secondary text-sm font-semibold hover:underline underline-offset-4 transition"
            >
              View our work
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="bg-card dark:bg-white/5 border border-primary/10 dark:border-white/[0.08] dark:border-[0.5px] p-10 md:p-12 rounded-3xl shadow-[0_20px_40px_-15px_rgba(91,45,139,0.1)]">
          <h3 className="font-bold text-2xl text-foreground mb-10">Our Approach</h3>

          <div className="flex flex-col">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`relative pl-16 group cursor-default ${
                  idx !== steps.length - 1
                    ? 'pb-10 border-b border-primary/10 dark:border-white/[0.08] mb-10'
                    : ''
                }`}
              >
                <div className="absolute left-0 top-0 text-5xl font-extrabold text-primary/20 dark:text-[#c084fc]/30 leading-none -mt-2 transition-colors duration-300 group-hover:text-primary/40 dark:group-hover:text-[#c084fc]/50 select-none">
                  {step.num}
                </div>
                <h4 className="font-bold text-[17px] text-foreground mb-1.5 relative z-10 group-hover:text-primary transition-colors duration-200">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-[15px] leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;