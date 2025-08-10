"use client";
import Image from "next/image";
import AnimatedSection from "../components/AnimatedSection";

export default function About() {

  return (
    <AnimatedSection>
      <section id="about" className="bg-purple-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-700 mb-6">
            About Me
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
            I m a passionate Full Stack Developer who enjoys turning complex
            ideas into scalable, user-friendly web applications. I specialize in
            crafting clean interfaces, building APIs, and learning emerging tech
            daily.
          </p>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/image2.jpg" // Ensure this image exists in /public/images/
                alt="Sandesh Patil"
                width={350}
                height={350}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Hi, I’m{" "}
                <span className="font-bold text-purple-700">Sandesh Patil</span>
                , a self-motivated developer based in India. I love building
                elegant and functional web applications using modern
                technologies.
              </p>
              <p>
                I have hands-on experience with{" "}
                <span className="font-semibold text-gray-800">
                  React.js, Next.js, Node.js, Express, MongoDB, Python,
                  Typescript
                </span>{" "}
                and more. I m always learning new frameworks and tools to expand
                my skill set.
              </p>
              <p>
                In addition to development, I enjoy working on UI/UX, API
                integration, and performance optimization to deliver
                high-quality, production-ready projects.
              </p>
              <a
                href="https://drive.google.com/file/d/1-B4G2MhyTMEolpzhMaKIA6i6b9ML4Hf2/view?usp=sharing"
                className="bg-violet-600 text-white px-5 py-2 rounded-lg hover:bg-violet-800 transition"
                target="blank"
              >
                Download resume
              </a>

              <div className="bg-purple-100 p-5 rounded-xl shadow-md">
                <ul className="list-disc list-inside text-purple-800 font-semibold">
                  <li>Full Stack Web Development</li>
                  <li>Quick Learner & Problem Solver</li>
                  <li>Open to Freelance or Remote Roles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
