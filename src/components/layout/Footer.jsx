import React from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { Icon: Github, href: SOCIAL_LINKS.github, label: 'Github' },
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
  ];

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[#030712]">
      {/* Aesthetic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Section */}
          <FadeIn delay={0} className="lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent tracking-tighter">
                {PERSONAL_INFO.name.split(' ')[0]}<span className="text-primary">.</span>
              </h3>
              <p className="text-white/50 text-lg max-w-sm leading-relaxed font-light">
                {PERSONAL_INFO.tagline || "Building digital experiences that merge art with logic."}
              </p>
              
              <div className="flex gap-4">
                {socialIcons.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary hover:-translate-y-1"
                  >
                    <social.Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={100}>
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-4">
                {NAV_LINKS?.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/40 hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={200}>
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Keep in Touch</h4>
              <div className="space-y-4">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/50 transition-all">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white/50 group-hover:text-white transition-colors text-sm truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </a>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white/50 text-sm">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={300}>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="space-y-1">
              <p className="text-white/30 text-sm tracking-wide">
                © {currentYear} <span className="text-white/60 font-medium">{PERSONAL_INFO.name}</span>. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-white/30 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>using <span className="text-white/60 font-medium">React & Tailwind</span></span>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;