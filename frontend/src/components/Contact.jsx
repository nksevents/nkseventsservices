import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Globe, Clock } from 'lucide-react';

const contactItems = [
  { icon: Phone,  label: 'Phone',    text: '+91 88257 67852',          href: 'tel:8825767852' },
  { icon: Mail,   label: 'Email',    text: 'info@nkseventsservices.in', href: 'mailto:info@nkseventsservices.in' },
  { icon: Globe,  label: 'Website',  text: 'www.nkseventsservices.in',  href: 'https://www.nkseventsservices.in' },
  { icon: MapPin, label: 'Address',  text: 'No 1, Annamalai Nagar, 3rd Cross St, Thiruvottiyur, Chennai – 600 019', href: null },
  { icon: Clock,  label: 'Hours',    text: 'Mon – Sat: 10:30 AM – 6:30 PM · Sun: By appointment', href: null },
];

const fields = [
  { label: 'Name',       name: 'name',      type: 'text',  placeholder: 'Your name' },
  { label: 'Email',      name: 'email',     type: 'email', placeholder: 'your@email.com' },
  { label: 'Phone',      name: 'phone',     type: 'tel',   placeholder: '+91 12345 67890' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', eventType: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Replace YOUR_FORM_ID_HERE with the actual ID from Formspree
      const FORMSPREE_URL = 'https://formspree.io/f/xeepryzg';

      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitMessage("Thank you! We'll get back to you within 24 hours.");
        setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
      } else {
        setSubmitMessage("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setSubmitMessage("Oops! There was a network error. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const inputCls = `w-full px-4 py-2.5 bg-background dark:bg-black/50 border border-border dark:border-white/20 rounded-lg text-foreground text-sm outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-muted-foreground/50`;

  return (
    <section id="contact" className="bg-background dark:bg-black py-20 px-6 relative overflow-hidden">
      <div className="absolute top-[20%] -right-[5%] w-[400px] h-[400px] bg-secondary/10 dark:bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <div className="text-center mb-12 max-w-xl mx-auto">
          <p className="font-semibold text-xs text-secondary uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-[2px] bg-secondary" />
            Get in Touch
            <span className="w-6 h-[2px] bg-secondary" />
          </p>
          <h2 className="font-bold text-4xl md:text-5xl text-foreground tracking-tight mb-3">Contact Us</h2>
          <p className="text-muted-foreground text-base">Let's discuss your event requirements.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* ── Left: info (2/5) ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-2xl text-foreground mb-1">Let's Talk</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Reach out and we'll make sure your event is in the best hands.
              </p>
            </div>

            {/* Compact contact list */}
            <ul className="flex flex-col gap-3">
              {contactItems.map(({ icon: Icon, label, text, href }) => {
                const inner = (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium mb-0.5">{label}</p>
                      <p className="text-sm font-semibold text-foreground leading-snug">{text}</p>
                    </div>
                  </li>
                );
                return href
                  ? <a key={label} href={href} className="group hover:opacity-80 transition-opacity">{inner}</a>
                  : <React.Fragment key={label}>{inner}</React.Fragment>;
              })}
            </ul>
          </div>

          {/* ── Right: form (3/5) ── */}
          <div className="lg:col-span-3 bg-card dark:bg-white/5 border border-border dark:border-white/[0.08] dark:border-[0.5px] rounded-2xl p-8 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.08)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Name / Email side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fields.slice(0, 2).map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs font-semibold text-foreground/70 mb-1.5">{f.label} <span className="text-primary">*</span></label>
                    <input type={f.type} name={f.name} value={formData[f.name]} onChange={handleChange} required placeholder={f.placeholder} className={inputCls} />
                  </div>
                ))}
              </div>

              {/* Phone / Event Type side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground/70 mb-1.5">Phone <span className="text-primary">*</span></label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 12345 67890" className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/70 mb-1.5">Event Type <span className="text-primary">*</span></label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange} required className={inputCls + ' cursor-pointer'}>
                    <option value="">Select type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="school">School / College Event</option>
                    <option value="social">Social Event</option>
                    <option value="technical">Technical Coordination</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-foreground/70 mb-1.5">Message <span className="text-primary">*</span></label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your event requirements..."
                  className={inputCls + ' resize-none'}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-[0_8px_20px_-8px_rgba(91,45,139,0.5)] hover:shadow-[0_12px_24px_-8px_rgba(143,43,203,0.5)] hover:-translate-y-0.5 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending…' : (<>Send Message <Send size={15} /></>)}
              </button>

              {submitMessage && (
                <div className="p-4 bg-primary/10 border border-primary/30 text-primary dark:text-secondary rounded-xl text-sm font-semibold text-center">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;