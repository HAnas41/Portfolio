import { Poppins } from '@next/font/google';

import React from 'react'
import ProjectCards from '../projectCards/projectCards';
const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function Projects() {
  return (
    <section className={`${poppins.className} flex justify-center items-center flex-col font-bold`}>
      
      <ProjectCards/>
      </section>
  )
}

export default Projects