import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">Deji</div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
