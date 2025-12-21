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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
                    {/* Left Side: Contact Info - 5 Columns */}
                    <div className="lg:col-span-5 space-y-6">
                        <FadeIn delay={100} direction="left">
                            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl h-full">
                                <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
                                <p className="text-white/50 mb-8 font-light leading-relaxed">
                                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                </p>

                                <div className="space-y-6">
                                    {/* Email Card */}
                                    <div className="flex items-center gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Email</p>
                                            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white font-medium hover:text-primary transition-colors">
                                                {PERSONAL_INFO.email}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Location Card */}
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Location</p>
                                            <p className="text-white font-medium">{PERSONAL_INFO.location}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links Section */}
                                <div className="mt-12 pt-8 border-t border-white/5">
                                    <p className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">Connect with me</p>
                                    <div className="flex gap-3">
                                        {Object.entries(SOCIAL_LINKS).slice(0, 3).map(([platform, url]) => {
                                            const Icon = socialIcons[platform];
                                            return Icon ? (
                                                <a
                                                    key={platform}
                                                    href={url}
                                                    target='_blank'
                                                    rel="noopener noreferrer"
                                                    className='w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300'
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

                    {/* Right Side: Contact Form - 7 Columns */}
                    <div className="lg:col-span-7">
                        <FadeIn delay={200} direction="right">
                            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-white/60 ml-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-white transition-all placeholder:text-white/20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-white/60 ml-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-white transition-all placeholder:text-white/20"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-white/60 ml-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-white transition-all resize-none placeholder:text-white/20"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full group relative flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-primary/20 overflow-hidden"
                                >
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <span className="relative z-10">Send Message</span>
                                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>

                                {status.message && (
                                    <div className={`p-4 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300 ${
                                        status.type === 'success' 
                                        ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                    }`}>
                                        <p className="text-sm font-medium flex items-center gap-2 italic">
                                            {status.type === 'success' ? '✓' : '✕'} {status.message}
                                        </p>
                                    </div>
                                )}
                            </form>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;