import React from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Heart,
  ExternalLink
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";

const Footer = () => {
  return (
    <footer className="mt-2 py-20 border-t border-white/5 bg-[#030712]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Left Side: Info */}
          <FadeIn delay={100}>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name.split(' ')[1]}
                </h3>
                <p className="text-gray-400 mt-2 max-w-md leading-relaxed">
                  {PERSONAL_INFO.tagline}
                </p>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="flex items-center gap-4 group"
                >
                  <div className="p-2.5 bg-gray-900 border border-white/10 rounded-xl group-hover:border-cyan-500/50 transition-colors">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-gray-900 border border-white/10 rounded-xl">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-gray-300">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Side: Quick Links or Socials */}
          <FadeIn delay={300}>
            <div className="flex flex-col md:items-end justify-center">
               <div className="flex gap-4">
                  {/* Example Social Icon Style */}
                  <a href={SOCIAL_LINKS.github} className="p-3 bg-gray-900 border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:scale-110 transition-all">
                    <Github className="w-6 h-6 text-gray-400 hover:text-white" />
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} className="p-3 bg-gray-900 border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:scale-110 transition-all">
                    <Linkedin className="w-6 h-6 text-gray-400 hover:text-white" />
                  </a>
               </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={500}>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} <span className="text-gray-300">{PERSONAL_INFO.name}</span>. All Rights Reserved.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>using</span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs">
                React & Tailwind
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;