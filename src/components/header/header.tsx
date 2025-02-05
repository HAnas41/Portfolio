import React from 'react'
import Logo from '../logo/logo';
import {Poppins} from "@next/font/google";
import Projects from '../project/project';
import AboutMe from '../About/About';
import Navlist from '../navlist/navList';
const poppins = Poppins({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
function Header() {
  return (
    <header className={`shadow-md flex justify-evenly items-center py-1 ${poppins.className}`}>
        <Logo/>
      <Navlist/>
      
      
    </header>
  );
};
export default Header;