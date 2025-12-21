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

  const scrollToIndex = (index) =>{
    setCurrentIndex(index);
    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.offsetWidth / 3; 
            container.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            })
        }
  }

  };
const Testimonials = () => {
  return (
    <div>Testimonials</div>
  )
}

export default Testimonials