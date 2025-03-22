// src/components/Hero.tsx
import { motion } from "framer-motion";

const Hero: React.FC = () => (
  <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-dark-blue hero-gradient p-4">
    <div className=" w-full text-center flex flex-col gap-4 items-center  max-w-3xl  mx-auto">
      <p className="font-jakarta font-bold text-base text-[#7191FF]">
        Leverage on Automation
      </p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-5xl md:text-7xl  max-w-2xl font-figTree font-[600] text-white mb-4"
      >
        AI Models for Business Solutions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-lg md:text-xl font-jakarta text-white mb-6"
      >
        Leverage the power of AI to automate, analyze, and optimize your
        workflows. Our specialized models are designed to fit different business
        needs.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="px-6 py-3 bg-white text-bg-[#041428] rounded-lg hover:bg-gray-200 cursor-pointer font-semibold transition duration-300"
      >
        Get Started Now
      </motion.button>
    </div>
  </section>
);

export default Hero;
