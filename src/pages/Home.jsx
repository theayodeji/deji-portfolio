import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const socials = [
    {
      name: "Github",
      url: "https://github.com/theayodeji",
      icon: <FaGithub />,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/ayodejiola",
      icon: <FaLinkedin />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/dejithedev",
      icon: <FaXTwitter />,
    },
  ];

  // useSpring makes the motion smooth and lag slightly behind
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX - 200); // center blob
      mouseY.set(event.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="bg-[#141414] isolate overflow-hidden relative"
    >
      <div className="flex items-center justify-center min-h-[600px] h-screen bg-[#14141490] backdrop-blur-2xl">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-2 md:mb-4">
              Hi, I'm <span className="text-primary-500">Ayodeji Ola</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-2 md:mb-4">
              A Fullstack Developer
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-sm md:text-base text-neutral-400 mb-8 max-w-[90%] lg:max-w-[750px] mx-auto"
            >
              I'm a results-driven Fullstack Developer with a passion for
              building fast, scalable and user-friendly applications. I have a
              strong background in React, TypeScript, Node.js, Python, and other
              technologies with proven experience in transforming challenging
              UI/UX designs into neat, readable code and building robust,
              performant backend applications.
            </motion.p>

            <div className="flex justify-center gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors glow-button"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-primary-50 transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          <div className="flex items-center justify-center gap-4 mt-5">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white text-3xl transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Smooth-follow blob */}
      <motion.div
        className="w-[400px] h-[400px] bg-primary-500/40 rounded-full absolute -z-10 blur-3xl"
        style={{
          top: smoothY,
          left: smoothX,
        }}
      />
    </section>
  );
};

export default Home;
