import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import { FaN } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#2965F1" },
  { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "PHP", icon: FaPhp, color: "#777BB4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  {name: "Next.js", icon: FaN, color: "#0d0d0d"}
];

const Skills = () => {
  return (
    <section className="relative bg-black/30 pb-32 pt-18" id="skills">
      <div className="relative z-20 text-center text-white mb-14">
        <h2 className="text-3xl md:text-5xl md:mb-4 font-bold">
          My <span className="text-primary-500">Stack</span>
        </h2>
        <p className="text-neutral-400">Technologies I work with</p>
      </div>
      
      <div className="rotate-[-10deg] bg-white/10 w-[110%] translate-x-[-5%] py-5 overflow-hidden">
        <div className="flex">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-20 flex-shrink-0 px-10">
              {skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={`${i}-${idx}`}
                    className="flex flex-col items-center justify-center flex-shrink-0"
                  >
                    <Icon
                      size={60}
                      color={skill.color}
                      className="drop-shadow-lg flex-shrink-0"
                    />
                    <span className="text-white text-center text-lg mt-2 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
