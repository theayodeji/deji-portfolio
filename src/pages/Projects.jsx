import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import zoomfood from '/zoomfood.png';
import havva from '/havva.png';
import chatgram from '../assets/chatgram.png';
import coinlens from '/coinlens.png';
import thinkly from '/thinkly.png';
import snappad from '/snappad.png';
import portfolio from '/portfolio.png';

const projects = [
  {
    title: 'ThinklyAi',
    description: 'An AI-powered study tool for students.',
    tech: ['React', 'TailwindCSS', 'Framer Motion', 'Node.js', 'MongoDB', 'Gemini API'],
    github: 'https://github.com/theayodeji/thinkly-mvp',
    demo: 'https://github.com/theayodeji/thinkly-mvp',
    logo: thinkly,
  },
  {
    title: 'Zoomfood',
    description: 'An e-commerce platform for food delivery in urban areas.',
    tech: ['React', 'SASS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/theayodeji/zoomfood',
    demo: 'https://zoomfood-main.netlify.app/',
    logo: zoomfood,
  },
  {
    title: 'Snappad',
    description: 'A shortlet and home-rental platform for travellers.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/theayodeji/snappad',
    demo: '#',
    logo: snappad,
  },
  {
    title: 'Portfolio Website',
    description: 'This gorgeous portfolio website you\'re scrolling through.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/theayodeji/snappad',
    demo: '#',
    logo: portfolio,
  },
  {
    title: 'Havva',
    description: 'A medical chatbot providing health diagnostics and valuable health information to users.',
    tech: ['React', 'OpenAI API', 'Tailwind CSS'],
    github: 'https://github.com/Bumblebig/Havva',
    demo: 'https://havvadiagnosis.vercel.app',
    logo: havva,
  },
  {
    title: 'CoinLens',
    description: 'A web-based crypto currency price tracking application',
    tech: ['React', 'Node.js', 'Coingecko API', 'Tailwind CSS'],
    github: 'https://github.com/theayodeji/dexlens',
    logo: coinlens,
  },
  {
    title: 'Chatgram',
    description: 'A web-based chat application using websockets and Node.js',
    tech: ['React', 'Node.js', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/theayodeji/chatgram',
    demo: 'https://chatgram-demo.netlify.app',
    logo: chatgram,
  },

];

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative rounded-lg shadow-md cursor-pointer hover:scale-105 duration-200 flex flex-col"
  >
      <img src={project.logo} alt="" className='w-full h-[160px] object-cover object-top rounded-t-lg'/>
      <div className="p-6 bg-white/10 rounded-lg h-full flex-1">
        <h3 className="text-xl text-white font-bold mb-2">{project.title}</h3>
        <p className="text-white mb-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-500 text-white rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-600 transition-colors"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-600 transition-colors"
          >
            <FaExternalLinkAlt className="h-6 w-6" />
          </a>
        </div>
      </div>
  </motion.div>
);

const Projects = () => {
  const scrollRef = useRef(null);
  const scrollByAmount = 400;
  return (
    <section id="projects" className="py-20">
      <div className="w-[95%] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl text-white font-bold text-center mb-12">Projects <span className="text-primary-500">I've worked on</span></h2>
        {/* Horizontal scroll row with controls */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto no-scrollbar pb-2"
          >
            <div className="flex gap-6 my-6 snap-x snap-mandatory">
              {projects.map((project) => (
                <div key={project.title} className="flex items-stretch shrink-0 snap-start w-80 md:w-[28rem]">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollRef.current?.scrollBy({ left: -scrollByAmount, behavior: 'smooth' })}
            className="hidden sm:flex items-center justify-center absolute left-0 top-1/2 -translate-y-3/4  h-10 w-10 rounded-full bg-white/90 shadow hover:bg-white transition"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollRef.current?.scrollBy({ left: scrollByAmount, behavior: 'smooth' })}
            className="hidden sm:flex items-center justify-center absolute right-0 top-1/2 -translate-y-3/4 h-10 w-10 rounded-full bg-white/90 shadow hover:bg-white transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
