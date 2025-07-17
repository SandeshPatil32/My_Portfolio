import Image from "next/image";
import About from "./about/page";
import Projects from "./projects/page";
import Skills from "./skills/pages";
import Services from "./services/pages";
import Contact from "./contact/page";

export default function HomePage() {
  return (
    <>

        <section id="home" className="	bg-purple-50 pr-52 pt-3">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
    
            <div className="flex-shrink-0"> 
              <Image
                src="/images/Profile.png"
                alt="Sandesh Patil"
                width={450}
                height={200}
                className="rounded-2xl shadow-lg"
              />
            </div>

    
            <div className="text-gray-800 max-w-xl p-10 pb-40">
              <h1 className="text-3xl md:text-4xl font-bold text-purple-700">
                Hey, I m Sandesh Patil.
              </h1>
              <p className="text-lg font-medium text-gray-700 mb-4">
                I’m a passionate{" "}
                <span className="text-purple-700 font-bold underline">
                  Full Stack Developer
                </span>{" "}
                focused on building clean, efficient, and user-friendly web
                applications.
              </p>
              <p className="text-md text-gray-600">
                I love turning ideas into reality through code and constantly
                learning new technologies to grow my skills.
              </p>
            </div>
          </div>
        </section>
        <About />
        <Projects />
        <Skills />
        <Services />
        <Contact/>
    </>
  );
}
