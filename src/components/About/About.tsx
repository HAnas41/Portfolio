import Image from "next/image";

export default function About() {
    return (
      <section className="flex flex-row items-center gap-2 p-12">
        {/* Image with background effect */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 ml-16"> {/* Added ml-4 for a slight left margin */}
          <div className="absolute inset-0 rounded-full blur-2xl opacity-50"></div>
          <Image 
  src="/images/Mypic.jpeg" 
  alt="Profile Picture" 
  width={400} 
  height={400} 
  className="rounded-lg shadow-lg" 
/>
          
        </div>
  
        {/* About Me Text */}
        <div className="max-w-lg p-1 ml-auto mr-16">
          <h3 className="text-sm uppercase text-gray-500 tracking-wider">About</h3>
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
            faucibus massa sollicitudin amet augue.
          </p>
          <p className="text-gray-600 mt-2">
            Vestibulum dolor mattis consectetur eget commodo vitae. Amet
            pellentesque sit pulvinar lorem mi.
          </p>
        </div>
      </section>
    );
}
