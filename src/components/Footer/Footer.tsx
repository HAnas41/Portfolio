export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8 mt-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Section */}
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Muhammad Anas</h3>
              <p className="text-sm mt-2">Web Developer | Front-End Specialist</p>
            </div>

            {/* Middle Section (Links) */}
            <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
              <a href="#home" className="hover:underline">Home</a>
              <a href="#about" className="hover:underline">Expertise</a>
              <a href="#projects" className="hover:underline">About</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>

            {/* Right Section (Social Media Links) */}
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://www.linkedin.com" target="_blank" className="hover:text-blue-600">
                <i className="fab fa-linkedin fa-lg"></i> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" className="hover:text-gray-500">
                <i className="fab fa-github fa-lg"></i> GitHub
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-red-600">
                <i className="fas fa-envelope fa-lg"></i> Email
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-6 text-sm">
            <p>&copy; 2025 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}
