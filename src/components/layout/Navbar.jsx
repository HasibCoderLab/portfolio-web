import React, { useEffect, useState } from 'react'
import {Code,Menu,X} from "lucide-react"
import { scrollToSection, useScrollspy } from "../../hooks/useScrollSpy";
import {NAV_LINKS ,PERSONAL_INFO } from "../../utils/constants"


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollspy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  const handleNavClick = (sectionId) =>{
    scrollToSection(sectionId);
    setIsMenuOpen(false)
  }
  return (
    <div 
      
      className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled
        ? 'bg-black/30 backdrop-blur-lg' 
        : 'bg-transparent'
      }`}
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      <div className=''>
        {/*logo */}
      </div>
    </div>
  );
}

export default Navbar;
