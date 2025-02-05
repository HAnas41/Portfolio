import Image from "next/image";

const Logo =()=> {
    return(
        <>
       <Image 
  className="size-20 rounded-full"
  src="/images/2022_portfolio.jpeg"
  alt="logo"
  width={80} 
  height={80} 
/>
        </>
    )
} 
export default Logo