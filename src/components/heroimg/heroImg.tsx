import Image from "next/image";

const HeroImg =() => {
    return(
        <>
        <Image 
  src="/images/Mypic.jpeg" 
  alt="Profile Picture" 
  width={150} 
  height={150} 
  className="rounded-lg shadow-lg" 
/>
        </>
    )

}
export default HeroImg;