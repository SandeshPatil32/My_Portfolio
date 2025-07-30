import React from "react";
import Image from "next/image";
import AnimatedSection from "../components/AnimatedSection";

export default function Skills() {
  const frontend = [

    { name: "HTML & CSS", src: "/images/html_css.png" },
    { name: "JavaScript", src: "/images/js.png" },
    { name: "TailwindCSS", src: "/images/tailwind.png" },
    { name: "Bootstrap", src: "/images/bootstrap.png" },
    { name: "React JS", src: "/images/react.png" },
    { name: "Next JS", src: "/images/next.png"}

  ];

  const backend = [
    { name: "Python", src: "/images/python.png" },
    { name: "Flask", src: "/images/flask.png" },
    { name: "PHP", src: "/images/php.png" },
    { name: "Node.js", src: "/images/node.png" },
    { name: "Express", src: "/images/express.png"},
    { name: "Typescript", src: "/images/typescript.png"},
  ];

  const database = [
    { name: "MongoDB", src: "/images/mongo.png"},
    { name: "SQL", src: "/images/sql.png"},
  ]
  
  const others = [
    { name: "GitHub", src: "/images/github.png" },
    { name: "Cloud", src: "/images/cloud.png"},
    { name: "Docker", src: "/images/docker.png"},
    { name: "Linux", src: "/images/linux.png" },
    { name: "Ubuntu", src: "/images/ubuntu.png"},
    
  ];

  const renderSkills = (skills) =>
    skills.map((skill, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:scale-110 transition"
      >
        <Image src={skill.src} alt={skill.name} width={80} height={80} />
        <p className="mt-2 text-sm font-medium text-gray-700">{skill.name}</p>
      </div>
    ));

  return (
    <AnimatedSection>
      <section id="skills" className="bg-purple-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-700 mb-12">Skills</h2>

          {/* Frontend */}
          <h3 className="text-xl font-semibold text-purple-600 mb-4">
            Front-end
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-12">
            {renderSkills(frontend)}
          </div>

          {/* Backend */}
          <h3 className="text-xl font-semibold text-purple-600 mb-4">
            Back-end
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-12">
            {renderSkills(backend)}
          </div>

          {/*Databases*/}
          <h3 className="text-xl font-semibold text-purple-600 mb-4">
            Databases
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-12">
            {renderSkills(database)}
          </div>

          {/* Others */}
          <h3 className="text-xl font-semibold text-purple-600 mb-4">
            Other Tech
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {renderSkills(others)}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
