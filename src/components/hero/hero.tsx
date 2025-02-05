import React from 'react'
import HeroContent from '../herocontent/heroContent';
import {Poppins} from "@next/font/google";
import HeroImg from '../heroimg/heroImg';
const poppins = Poppins({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
function Hero() {
  return (
    <section className={`${poppins.className} py-20 flex justify-evenly items-center`}>
      <HeroContent/>
      <HeroImg/>
    </section>
  )
};
export default Hero