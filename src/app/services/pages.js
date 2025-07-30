import React from "react";
import Image from "next/image";
import AnimatedSection from "../components/AnimatedSection";
const services = [
  {
    title: "Full Stack Development",
    icon: "/images/developer.png",
    description:
      "I build complete web applications from scratch — front-end interfaces, back-end logic, and database integration using technologies like React, Node.js, Express, and MongoDB.",
  },
  {
    title: "API Integration",
    icon: "/images/API.png",
    description:
      "I specialize in integrating third-party and custom APIs for secure, efficient, and seamless communication between frontend and backend services.",
  },
  {
    title: "SEO Friendly Website",
    icon: "/images/seo.png",
    description:
      "I develop SEO-friendly websites with semantic code, proper meta tags, fast loading, and responsive structure for better search engine indexing.",
  },
  {
    title: "Responsive Web Design",
    icon: "/images/responsive.png",
    description:
      "I create mobile-first responsive websites with Tailwind CSS ensuring a seamless experience across all devices.",
  },
];

export default function Services() {
  return (
    <AnimatedSection>
      <section id="services" className="bg-purple-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-violet-700 mb-4">
            My Services
          </h2>
          <p className="text-gray-600 font-medium mb-14 max-w-2xl mx-auto">
            Turning ideas into interactive digital experiences — I design and
            develop full-stack web apps with style and functionality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition"
              >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="bg-violet-100 p-4 rounded-full">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="pt-12">
                  <h3 className="text-violet-700 font-bold text-lg mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {service.description}
                  </p>
                  <button className="bg-violet-600 text-white text-xs px-6 py-2 rounded-full hover:bg-violet-700 transition">
                    MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
