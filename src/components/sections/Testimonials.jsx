import React, { useState, useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import FadeIn from "../animations/FadeIn";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    }
  };

  const next = () =>
    scrollToIndex((currentIndex + 1) % testimonials.length);

  const prev = () =>
    scrollToIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section
      id="testimonial"
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-sm mb-4">
              <Quote className="w-4 h-4" />
              Testimonials
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by forward-thinking teams
            </h2>
            <p className="text-white/60">
              Real feedback from real people who love quality & logic
            </p>
          </div>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={0.1}>
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-8"
            >
              {testimonials.map((t, index) => (
                <div
                  key={t.id}
                  className="snap-start flex-shrink-0 w-[320px] md:w-[360px]"
                >
                  <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-primary/40 transition-all duration-500">
                    {/* Image */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-primary/30">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Quote */}
                    <Quote className="w-5 h-5 text-primary mb-2" />
                    <p className="text-white/80 italic mb-4">
                      “{t.quote}”
                    </p>

                    {/* Name */}
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-white/50 mb-3">
                      {t.role}, {t.institution}
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 text-primary">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary" />
                      ))}
                    </div>

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-primary/10 to-purple-500/10 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              onClick={prev}
              className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-primary hover:scale-110 transition"
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-primary hover:scale-110 transition"
              aria-label="Next"
            >
              <ChevronRight />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-6 bg-primary"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
