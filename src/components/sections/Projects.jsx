import { Briefcase ,  Sparkles , Target,Global,Palette ,Zap ,ChevronLeft,ChevronRight} from "lucide-react";
import {projects,categories} from '../../data/projects'
import FadeIn from "../animations/FadeIn";
import ProjectCard from '../ui/ProjectCard'
import { useState } from "react";
import { useRef } from "react";
const Projects = () => {
    const [activeCatagory,setActiveCatagory] = useState('All');
    const [currentIndex,setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

  return (
    <div>Projects</div>
  )
}

export default Projects