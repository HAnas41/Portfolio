import React from "react";

const projects = [
  {
    title: "Strategy & Direction",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "\u269B", // Unicode icon example
  },
  {
    title: "Branding & Logo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "\uD83C\uDF10",
  },
  {
    title: "UI & UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "\u270E",
  },
  {
    title: "Webflow Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "\u269B",
  },
];

const ProjectCards = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-6">My Expertise</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-2xl border border-gray-200 text-center hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{project.icon}</div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
