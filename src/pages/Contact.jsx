import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaPhone, FaEnvelope, FaMap } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p className="text-gray-600">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be a part of your visions.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/dejithedev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/deji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/deji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaXTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaDownload className="h-6 w-6" />
              </a>
            </div>
            <span className="flex items-center gap-2"><FaPhone /> +234-906-119-6902</span>
            <a href="mailto:ayodeji.ola.e@gmail.com" className="flex items-center gap-2"><FaEnvelope /> ayodeji.ola.e@gmail.com</a>
            <span className="flex items-center gap-2"><FaMap /> Ilorin, Kwara State, Nigeria</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
