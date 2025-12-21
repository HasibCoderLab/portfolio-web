import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Send, MessageSquare, Briefcase, Sparkles } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', message: 'Please fill in all fields' });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email' });
            return;
        }

        // Success Simulation
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon..' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    const socialIcons = {
        github: Github,
        linkedin: Linkedin,
        twitter: Twitter
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-[#030712]">
            {/* Background Glow Effect - Same as Testimonials */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn delay={0}>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4 backdrop-blur-md">
                            <Sparkles className="w-4 h-4 fill-primary/20" />
                            <span className="tracking-wider uppercase">Get in touch</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                            Let's work together
                        </h2>
                        <p className="text-white/60 text-lg">
                            Have a project in mind? Let's discuss how we can bring your ideas to life.
                        </p>
                    </div>
                </FadeIn>

                {/* Left Side: Contact Info - 5 Columns */}
                <div className="lg:col-span-5 space-y-6">
                    <FadeIn delay={100} direction="left">
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl h-full flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
                            <p className="text-white/50 mb-10 font-light leading-relaxed">
                                I'm always open to discussing new projects or creative ideas.
                            </p>

                            {/* Icon Boxes - Vertical Style */}
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                {/* Email Box */}
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 group text-center">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Email Me</p>
                                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm text-white font-medium break-all hover:text-primary transition-colors">
                                        {PERSONAL_INFO.email}
                                    </a>
                                </div>

                                {/* Location Box */}
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 group text-center">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Location</p>
                                    <p className="text-sm text-white font-medium">
                                        {PERSONAL_INFO.location}
                                    </p>
                                </div>
                            </div>

                            {/* Social Links Section - Pushed to bottom */}
                            <div className="mt-auto pt-8 border-t border-white/5">
                                <p className="text-xs font-semibold text-white/30 mb-6 uppercase tracking-[0.2em] text-center">Social Networks</p>
                                <div className="flex justify-center gap-4">
                                    {Object.entries(SOCIAL_LINKS).slice(0, 3).map(([platform, url]) => {
                                        const Icon = socialIcons[platform];
                                        return Icon ? (
                                            <a
                                                key={platform}
                                                href={url}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                                className='w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-lg'
                                            >
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        ) : null;
                                    })}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Contact;