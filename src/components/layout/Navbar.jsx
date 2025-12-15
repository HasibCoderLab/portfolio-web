import React, { useEffect, useState } from 'react'
import {Code,Menu,X} from "lucide-react"
import {NAV_LINKS ,PERSONAL_INFO } from "../../utils/constants"
const Navbar = () => {
   const [isOpenMenu , setIsOpenMenu] = useState(false);
   const [isScrolled , setIsScrolled] = useState(false);
const activeSections = useScrollSpy(NAV_LINKS.map(link => link.id));
  useEffect(() =>{

  },[])
  return (
    <div>Navbar</div>
  )
}

export default Navbar