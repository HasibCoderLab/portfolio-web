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
    <nav
  className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled 
    ? 'bg-black/30 backdrop-blur-lg' 
    : 'bg-transparent'
  }`}
  style={{ transform: 'translate3d(0, 0, 0)' }}
>
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between">
      {/* লোগো সেকশন */}
      <div className="flex items-center gap-4">
        {/* লোগো আইকন বা টেক্সট */}
        <code className="w-6 h-6 text-primary">
          {/* এখানে আপনার লোগো আইকন বা SVG থাকবে */}
        </code>
        {/* আপনি চাইলে এখানে লোগোর নাম বা অন্য কিছু যুক্ত করতে পারেন */}
      </div>

      {/* অন্যান্য ন্যাভিগেশন আইটেম / বাটন */}
      <div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2" // আপনার প্রয়োজন অনুসারে ক্লাস যোগ করুন
          aria-label="home"
        >
          {PERSONAL_INFO.name.split(' ')[0]}
        </button>
      </div>
      
    </div>
  </div>
</nav>  
  )
}
export default Navbar