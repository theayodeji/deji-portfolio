import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Zoomfood',
    description: 'An e-commerce platform for food delivery in urban areas.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/theayodeji/zoomfood',
    demo: '#',
  },
  {
    title: 'Havva',
    description: 'A medical chatbot providing health diagnostics and valuable health information to users.',
    tech: ['React', 'OpenAI API', 'Tailwind CSS'],
    github: 'https://github.com/theayodeji/hava-bot',
    demo: '#',
  },
  {
    title: 'Core Banking App',
    description: 'A web-based fintech application for peer-to-peer transactions and utilities.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/AYANO-EMMANUEL/core-banking-app',
    demo: '#',
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
  >
    <h3 className="text-xl font-bold mb-4">{project.title}</h3>
    <p className="text-gray-600 mb-6">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
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
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        <FaGithub className="h-6 w-6" />
      </a>
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        <FaExternalLinkAlt className="h-6 w-6" />
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
