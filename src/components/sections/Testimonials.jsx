import React from 'react'
import React, { useState, useRef } from "react";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { testimonials } from "../../data/testimonials";
import FadeIn from "../animations/FadeIn";
import ProjectCard from "../ui/Card";

const Projects = () => {
 


    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);


    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.offsetWidth;

            scrollContainerRef.current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
        };
    };

    const testimonials = () => {
    
        const newIndex = Math.min(currentIndex + 1) % testimonials.length;
        scrollToIndex(newIndex);
    };

    const prevtestimonials = () => {
        const newIndex = Math.max(currentIndex - 1 + testimonials.length) % testimonials.length;
        scrollToIndex(newIndex);
    };

  

  };
const Testimonials = () => {
  return (
    <div>Testimonials</div>
  )
}

export default Testimonials