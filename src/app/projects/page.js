"use client";
import React from "react";
import AnimatedSection from "../components/AnimatedSection";
export default function page() {
  return (
    <AnimatedSection>
      <section id="projects" className="bg-purple-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-700 mb-6">
            My Projects
          </h2>
          <p className="text-center text-gray-600 mb-12">
            A collection of my recent works — combining functionality, security,
            and clean UI.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Website Vulnerability Analyzer
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                A tool that scans websites for common security flaws such as
                XSS, SQL injection, and outdated SSL/TLS. Built for ethical
                testing and education.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                Tech: Node.js, Express, Axios, HTML, Tailwind CSS
              </div>
              <div className="flex gap-4">
                <a
                  href="https://website-vulnerability-scanner-1.onrender.com/"
                  className="text-purple-600 hover:underline text-sm" target="blank"
                >
                  🔗 Live Demo
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Number Counter App
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                A simple app that lets users increment, decrement, and reset a
                counter with a sleek UI. Great for beginners learning React
                state.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                Tech: React.js, Tailwind CSS, JavaScript
              </div>
              <div className="flex gap-4">
                <a
                  href="https://react-counter-app-ten-teal.vercel.app/"
                  target="blank"
                  className="text-purple-600 hover:underline text-sm"
                >
                  🔗 Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
