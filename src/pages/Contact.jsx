import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaPhone, FaEnvelope, FaMap } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="h-6 w-6" />,
      url: "https://github.com/theayodeji",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      url: "https://www.linkedin.com/in/ayodejiola",
      label: "LinkedIn"
    },
    {
      icon: <FaXTwitter className="h-6 w-6" />,
      url: "https://twitter.com/dejithedev",
      label: "Twitter"
    },
    {
      icon: <FaDownload className="h-6 w-6" />,
      url: "/deji-portfolio/ayodeji-fullstack-resume.pdf",
      label: "Resume"
    }
  ];

  return (
    <section id="contact" className="relative py-28 bg-black/60">
      <div className="w-[95%] mx-auto px-4">
        <div className="relative z-20 text-center text-white mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary-500">Touch</span>
          </h2>
          <p className="text-neutral-400">Let's work together!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-neutral-300">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be a part of your visions. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="p-2 bg-white/5 rounded-lg">
                  <FaPhone className="h-5 w-5 text-primary-500" />
                </div>
                <span>+234-906-119-6902</span>
              </div>
              <a 
                href="mailto:ayodeji.ola.e@gmail.com" 
                className="flex items-center gap-4 text-neutral-300 hover:text-primary-500 transition-colors"
              >
                <div className="p-2 bg-white/5 rounded-lg">
                  <FaEnvelope className="h-5 w-5 text-primary-500" />
                </div>
                <span>ayodeji.ola.e@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="p-2 bg-white/5 rounded-lg">
                  <FaMap className="h-5 w-5 text-primary-500" />
                </div>
                <span>Ilorin, Kwara State, Nigeria</span>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-primary-500/20 rounded-lg text-neutral-300 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            <form className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-neutral-300">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-neutral-300">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary-500/5 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Contact;
