import React, { useState, useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/testimonials"; // Ensure your data structure matches
import FadeIn from "../animations/FadeIn";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const testimonialStats = [
        { value: '3x', label: 'Faster Delivery' },
        { value: '100%', label: 'On-Time' },
        { value: '5*', label: 'Avg Rating' },
    ];

    const scrollToIndex = (index) => {
        if (index < 0 || index >= testimonials.length) return;
        setCurrentIndex(index);
        if (scrollContainerRef.current) {
            const cardWidth = 350 + 24; // Card width + gap
            scrollContainerRef.current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
        }
    };

    const nextTestimonial = () => {
        const next = (currentIndex + 1) % testimonials.length;
        scrollToIndex(next);
    };

    const prevTestimonial = () => {
        const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
        scrollToIndex(prev);
    };

    return (
        <section id="testimonial" className="py-24 relative overflow-hidden bg-[#050505] text-white">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full opacity-50" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn delay={0}>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-sm mb-6 backdrop-blur-md">
                            <Quote className="w-4 h-4 fill-primary/20" />
                            <span className="font-semibold tracking-wider uppercase text-xs">Testimonials</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">forward-thinking</span> teams
                        </h2>
                        <p className="text-white/50 text-lg leading-relaxed">
                            Empowering clients with logic, high-quality code, and seamless digital experiences.
                        </p>
                    </div>
                </FadeIn>

                {/* Main Carousel Wrapper */}
                <div className="relative group max-w-6xl mx-auto">
                    
                    {/* Navigation Buttons - Hidden on Mobile */}
                    <button 
                        onClick={prevTestimonial}
                        className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 backdrop-blur-xl hidden md:flex group-hover:left-[-12px]"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button 
                        onClick={nextTestimonial}
                        className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 backdrop-blur-xl hidden md:flex group-hover:right-[-12px]"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Scroll Container */}
                    <div
                        className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                        ref={scrollContainerRef}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id || index}
                                className="w-[320px] md:w-[400px] flex-shrink-0 snap-center"
                            >
                                <div className="h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-500 group/card relative overflow-hidden">
                                    
                                    {/* Glass Highlight Effect */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />

                                    {/* Header: Profile & Rating */}
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-primary/20 ring-offset-4 ring-offset-transparent">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 bg-primary p-1.5 rounded-lg">
                                                <Quote className="w-3 h-3 text-black fill-current" />
                                            </div>
                                        </div>
                                        <div className="flex gap-1 text-yellow-500 bg-yellow-500/5 px-3 py-1 rounded-full border border-yellow-500/10">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-3 h-3 ${i < testimonial.rating ? 'fill-current' : 'opacity-30'}`} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quote Text */}
                                    <p className="text-white/80 text-lg italic leading-relaxed mb-8 min-h-[100px]">
                                        "{testimonial.quote}"
                                    </p>

                                    {/* Footer: User Details */}
                                    <div className="pt-6 border-t border-white/5">
                                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                                        <p className="text-primary text-sm font-medium">{testimonial.role} @ {testimonial.institution}</p>
                                    </div>

                                    {/* Stats Badge - Optional Dynamic Info */}
                                    {testimonialStats[index % 3] && (
                                        <div className="absolute top-8 right-8 opacity-5 text-4xl font-black italic select-none">
                                            {testimonialStats[index % 3].value}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className={`transition-all duration-500 rounded-full ${
                                    index === currentIndex
                                        ? 'bg-primary w-10 h-2'
                                        : 'bg-white/20 w-2 h-2 hover:bg-white/40'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;