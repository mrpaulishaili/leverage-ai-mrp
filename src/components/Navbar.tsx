// src/components/Navbar.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  "Models",
  "Pricing",
  "About Us",
  "Contact Us",
  "Custom Models",
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const controls = useAnimation();

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Listen for scroll events and toggle the background
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate hamburger icon lines
  const topLineVariants = {
    open: { rotate: 45, y: 8 },
    closed: { rotate: 0, y: 0 },
  };

  const middleLineVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomLineVariants = {
    open: { rotate: -45, y: -8 },
    closed: { rotate: 0, y: 0 },
  };

  // Animate mobile menu reveal
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Animate nav links with stagger
  const linkVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delayChildren: 0.2, staggerChildren: 0.1 },
    },
    closed: { opacity: 0, y: 20 },
  };

  const linkItemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 },
  };

  return (
    <header>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 sm:p-6 transition-all duration-300 ${
          scrolled
            ? "bg-dark-blue/90 backdrop-blur-md"
            : "bg-transparent navbar-blur"
        }`}
      >
        {/* Logo */}
        <a href="/" className="text-xl font-bold">
          <img src="/logo.webp" alt="Logo" className="h-8 w-8" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 text-white">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-gray-300 transition-colors duration-300 font-inter text-sm lg:text-base"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Buttons (Visible on all screens) */}
        <div className="flex space-x-2">
          <button className="px-3 py-1 font-semibold sm:px-4 sm:py-2 border border-white text-white rounded hover:bg-white hover:text-dark-blue transition duration-300 font-inter text-sm sm:text-base">
            Login
          </button>
          <button className="px-3 py-1 font-semibold sm:px-4 sm:py-2 bg-white text-dark-blue rounded hover:bg-gray-200 transition duration-300 font-inter text-sm sm:text-base">
            Get Started Now
          </button>
        </div>

        {/* Hamburger Icon (Visible on mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden cursor-pointer flex flex-col justify-center items-center space-y-1.5 z-50"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <motion.span
            className="w-6 h-0.5 bg-white"
            variants={topLineVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white"
            variants={middleLineVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white"
            variants={bottomLineVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed top-0 left-0 right-0 bg-dark-blue/95 backdrop-blur-md z-40 flex flex-col items-center justify-center min-h-screen md:hidden"
      >
        <motion.div
          variants={linkVariants}
          className="flex flex-col items-center space-y-6"
        >
          {navItems.map((item) => (
            <motion.a
              key={item}
              href="#"
              variants={linkItemVariants}
              onClick={() => setIsOpen(false)} // Close menu on link click
              className="text-white text-xl font-inter hover:text-gray-300 transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Navbar;
