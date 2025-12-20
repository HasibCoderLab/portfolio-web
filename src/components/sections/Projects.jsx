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

    const filteredProject = activeCatagory === 'All'
    ?projects
    :projects.filter(project => project.catagory === activeCatagory);


    // Reset carousel when catagory changes

    const handleCatagoryChange =  (catagory) =>{
        setActiveCatagory(catagory);
        setCurrentIndex(0);
        if(scrollContainerRef.current){
                scrollContainerRef.current.scrollTo({left:0,behavior:'smoth'});
        }
    }

  return (
    <div>Projects</div>
  )
}

export default Projects