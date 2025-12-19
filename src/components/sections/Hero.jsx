import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";
import { Star, ChevronDown } from "lucide-react";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../background/RadialGradientBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background Gradient */}
      <RadialGradientBackground variant="hero" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-8 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-xs md:text-sm text-white/90 tracking-widest uppercase">
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Next.js <span className="text-primary">Developer</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg text-white/60 max-w-[550px] mb-10 leading-relaxed">
                Building modern, scalable, and high-performance web applications with a focus on user experience.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative inline-flex items-center justify-center"
              >
                <div className="absolute -inset-0.5 bg-primary rounded-[17px] blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative bg-white text-black rounded-[17px] px-8 py-4 text-base font-semibold cursor-pointer hover:bg-gray-100 transition-colors">
                  Get in Touch.
                </div>
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {STATS.map((stat, index) => (
                  <div key={index} className="border-l border-white/10 pl-6 first:border-l-0 first:pl-0">
                    <div className="text-3xl font-bold text-primary mb-1 font-mono">
                      {stat.value}
                    </div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Image & Tech Stack */}
          <div className="relative">
            <FadeIn delay={200}>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] max-w-[450px] ml-auto group border border-white/5">
                
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-[-6px] bg-gradient-to-r from-primary/40 via-cyan-500/20 to-primary animate-[spin_6s_linear_infinite] rounded-2xl"></div>
                </div>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl m-[4px] h-[calc(100%-8px)] bg-black">
                  <img 
                    src="/developer.png" 
                    alt="developer-pic"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Technology Icons Overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center justify-around bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-4">
                      {[SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb].map((Icon, i) => (
                        <div key={i} className="hover:scale-125 transition-transform duration-300 cursor-help">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-50 p-2 rounded-full border border-white/10 bg-white/5"
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
};

export default Hero;