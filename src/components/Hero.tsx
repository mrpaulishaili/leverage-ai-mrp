// src/components/Hero.tsx
import { motion, Variants } from "framer-motion";

// Variants for the headline (with a bounce effect)
const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.2,
    },
  },
};

// Variants for the subheading (staggered word animation)
const subheadingContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.4,
    },
  },
};

const subheadingWordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

// Variants for the button (with a pulse effect)
const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.6,
    },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: -1, // Changed from Infinity to -1 for infinite looping
      repeatType: "loop",
      ease: "easeInOut",
      delay: 1,
    },
  },
};

// Variants for the background gradient animation
const gradientVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 0.5,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
      delay: 0.2,
    },
  },
  glow: {
    opacity: [0.5, 0.3, 0.5],
    scale: [1, 1.1, 1],
    transition: {
      duration: 5,
      repeat: -1, // Changed from Infinity to -1 for infinite looping
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const Hero: React.FC = () => {
  // Split the subheading into words for staggered animation
  const subheadingText =
    "Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs.";
  const subheadingWords = subheadingText.split(" ");

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-dark-blue hero-gradient p-4">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-radial from-blue-500/50 to-transparent"
        variants={gradientVariants}
        initial="hidden"
        animate={["visible", "glow"]}
      />

      <div className="relative w-full text-center flex flex-col gap-4 items-center max-w-3xl mx-auto z-10">
        <p className="font-jakarta font-bold text-base text-[#7191FF]">
          Leverage on Automation
        </p>

        {/* Headline with Bounce Effect */}
        <motion.h1
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl max-w-2xl font-figTree font-[600] text-white mb-4"
        >
          AI Models for Business Solutions
        </motion.h1>

        {/* Subheading with Staggered Word Animation */}
        <motion.p
          variants={subheadingContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl font-jakarta text-white mb-6"
        >
          {subheadingWords.map((word, index) => (
            <motion.span
              key={index}
              variants={subheadingWordVariants}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Button with Pulse Effect */}
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate={["visible", "pulse"]}
          className="px-6 py-3 bg-white text-[#041428] rounded-lg hover:bg-gray-200 cursor-pointer font-semibold transition duration-300"
        >
          Get Started Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
