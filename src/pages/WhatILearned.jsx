import { motion } from 'framer-motion';

const WhatILearned = () => {
  const whatWorks = [
    "Clean architecture everytime",
    "Build for performance and scalability",
    "Build for accessibility",
    "Following Naming conventions",
    "User experience is everything",
    "Less isn't always more"
  ];

  const whatDoesntWork = [
    "Messy Code",
    "Awkward file names",
    "Sacrificing performance for complexity and finesse",
    "Mobile unfriendliness",
    "Animating everything",
    "Ignoring best practices"
  ];

  return (
    <div className="py-24 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What I've <span className="text-primary-500">Learned</span> on My Journey
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* What Works */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-500/20"
        >
          <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            What Works
          </h4>
          <ul className="space-y-3">
            {whatWorks.map((item, index) => (
              <motion.li 
                key={`works-${index}`} 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-neutral-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* What Doesn't Work */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-red-500/20"
        >
          <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            What Doesn't Work
          </h4>
          <ul className="space-y-3">
            {whatDoesntWork.map((item, index) => (
              item === "Animating everything" ? (
                <li key={`doesnt-work-${index}`} className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-neutral-300">{item}</span>
                </li>
              ) : (
                <motion.li 
                  key={`doesnt-work-${index}`} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-neutral-300">{item}</span>
                </motion.li>
              )
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatILearned;
