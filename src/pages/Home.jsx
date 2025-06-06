import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Ayodeji Ola</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Frontend Developer
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-base md:text-base text-gray-600 mb-8 max-w-[85%] lg:max-w-[600px] mx-auto"
          >
            I'm a results-driven Frontend Developer with a passion for building
            fast, scalable and user-friendly applications. I have a strong
            background in React, TypeScript, and other web technologies with
            proven experience in transforming challenging UI/UX designs into
            neat, readable code.
          </motion.p>

          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors glow-button"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
