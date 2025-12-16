import { useEffect, useState } from 'react';

export const useScrollspy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the current section
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionIds[i]);
            break; // Stop when the first matching section is found
          }
        }
      }
    };

    handleScroll(); // Call once on mount to set initial active section
    window.addEventListener('scroll', handleScroll,{passive:true});

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return   activeSection;
};
//Smooth scroll to a section
export const scrollToSection = (sectionId, offset = 80) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const top = section.offsetTop - offset;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
};
