import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Founder, Lead Developer',
    company: 'Zoomfood (pre-launch)',
    duration: 'January 2024 - Present',
    achievements: [
      'Spearheaded the development of a food delivery platform tailored to urban environments',
      'Led end-to-end product development including UI design, engineering, and user acquisition strategy',
      'Oversaw the technical implementation using React, Next.js, and MongoDB for the platform MVP',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Black Innovations Africa',
    duration: 'October 2023 - January 2024',
    achievements: [
      'Built Examy, a mini educational platform focused on an engaging learning experience using React, Tanstack Query, and Tailwind CSS',
      'Developed a brochure website for an e-banking client, increasing lead generation',
      'Improved performance and maintainability of an automobile e-commerce site with clean code practices',
    ],
  },
  {
    role: 'Internship Trainee, Software Developer',
    company: 'McGeorge Consulting Ltd.',
    duration: 'April 2024 - November 2024',
    achievements: [
      'Led frontend development of an AI-powered medical chatbot, using React, Tailwind CSS powered by the OpenAI API, to assist with health diagnostics',
      'Transformed complex UI/UX designs into responsive, high-performance components on existing company projects',
      'Contributed to general product brainstorming to enhance interactivity and user experience',
    ],
  },
];


const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-500">{exp.role}</h3>
              <p className="text-gray-600 mb-4">{exp.company}</p>
              <p className="text-gray-500 mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-600">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
