import { motion } from "framer-motion";

const experiences = [
  {
    role: "FullStack Software Developer",
    company: "McGeorge Consulting Ltd.",
    duration: "November 2025 - Present",
    achievements: [
      "Built an API for Nigerian e-invoicing compliance with a dashbord for non technical users",
      "Architected a fullstack Human resource management Saas, reducing the need for manual data entry, employee management, talent search, thus increasing efficiency",
      "Helped the company obtain accreditation for NRS System Integration by  demonstrating technical expertise",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Page234",
    duration: "January 2026 - Present",
    achievements: [
      "Architected and built a real-time group chat application configured for high-concurrency, low-latency messaging",
      "Engineered a secure user authentication and authorization system using Better-Auth implementing OAuth, email/password, login support",
      "Implemented an efficient file upload system with server-side validation and optimized image compression, reducing storage costs by 20%",
      "Managed secure deployment on DigitalOcean using Docker and Nginx, optimizing for performance and establishing automated CI/CD pipelines with GitHub Actions",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Black Innovations Africa",
    duration: "October 2023 - January 2024",
    achievements: [
      "Built Examy, a mini educational platform focused on an engaging learning experience using React, Tanstack Query, and Tailwind CSS",
      "Developed a brochure website for an e-banking client, increasing lead generation",
      "Improved performance and maintainability of an automobile e-commerce site with clean code practices",
    ],
  },
  {
    role: "Internship Trainee, Software Developer",
    company: "McGeorge Consulting Ltd.",
    duration: "April 2024 - November 2024",
    achievements: [
      "Led frontend development of an AI-powered medical chatbot, using React, Tailwind CSS powered by the OpenAI API, to assist with health diagnostics",
      "Transformed complex UI/UX designs into responsive, high-performance components on existing company projects",
      "Contributed to general product brainstorming to enhance interactivity and user experience",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 bg-black/60">
      <div className="w-[95%] mx-auto px-4">
        <div className="relative z-20 text-center text-white mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Where I've <span className="text-primary-500">Worked</span>
          </h2>
          <p className="text-neutral-400">My professional journey so far</p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-primary-500">{exp.company}</p>
                </div>
                <span className="text-sm text-white bg-primary-500/70 text-primary-300 px-3 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-500 mr-2">▹</span>
                    <span className="text-neutral-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-20 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-0 -left-20 w-64 h-64 bg-primary-500/15 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Experience;
