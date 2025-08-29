import React from "react";
import { FaReact, FaHtml5, FaGithub } from "react-icons/fa";
import { SiCss3, SiBootstrap, SiJavascript } from "react-icons/si";
import { MdDevices } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";

function About() {
  return (
    <section id="about" className="section container py-20 text-gray-200 bg-[#111]">
      <h2 className="section-title text-3xl font-bold text-white mb-12 text-center">
        About Me
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <p className="leading-relaxed text-gray-300">
          Hi, I’m <span className="font-bold text-white">Yogaraj</span> — a Frontend Developer
          who loves turning ideas into clean, functional, and responsive web applications.
          I specialize in building user-friendly interfaces with{" "}
          <span className="font-bold text-white">React.js</span> and modern web technologies.
          My focus is on creating seamless digital experiences that combine performance,
          accessibility, and design.
        </p>

        <p className="leading-relaxed text-gray-300">
          With hands-on experience in frontend development and a strong background in
          client-facing roles, I bring both{" "}
          <span className="font-bold text-white">technical expertise</span> and{" "}
          <span className="font-bold text-white">problem-solving skills</span> to every project.
          I enjoy collaborating with designers and back-end teams to deliver scalable,
          maintainable, and impactful solutions.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Skills */}
      <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <li className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 hover:scale-105 transition">
          <FaReact className="text-blue-400 text-xl" /> React.js & JavaScript (ES6+)
        </li>
        <li className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 hover:scale-105 transition">
          <FaHtml5 className="text-orange-500 text-xl" /> HTML5
          <SiCss3 className="text-blue-500 text-xl ml-1" /> CSS3
          <SiBootstrap className="text-purple-500 text-xl ml-1" /> Bootstrap
        </li>
        <li className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 hover:scale-105 transition">
          <FaGithub className="text-gray-300 text-xl" /> GitHub & Version Control
        </li>
        <li className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 hover:scale-105 transition">
          <MdDevices className="text-green-400 text-xl" /> Responsive Web Design
        </li>
        <li className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 hover:scale-105 transition">
          <VscDebug className="text-yellow-400 text-xl" /> Debugging & Performance Optimization
        </li>
      </ul>
    </section>
  );
}

export default About;
