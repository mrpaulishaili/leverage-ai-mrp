// src/components/FeatureCard.tsx
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  slug: string;
  isActive: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  slug,
  isActive,
}) => (
  <motion.div
    className={`flex-shrink-0 w-[70%] md:w-[78%]  h-auto md:h-[80vh] mx-4 bg-[#F6FAF3] rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
      isActive ? "mt-4 " : "mt-20"
    }`}
    animate={{
      opacity: isActive ? 1 : 0.5,
      scale: isActive ? 1.05 : 0.95,
      marginTop: isActive ? "1rem" : "4rem",
    }}
    transition={{ duration: 0.5 }}
  >
    <div className="grid md:grid-cols-2 gap-4 md:gap-10 h-full">
      {/* Text Side */}
      <div className="p-4 sm:p-6 flex flex-col text-center md:text-left justify-center items-center md:items-start gap-2">
        <p className="text-sm uppercase text-gray-500 font-figTree font-bold">
          {title}
        </p>
        <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold text-dark-blue mb-4 font-inter">
          {description}
        </h3>
        <a
          href={`#${slug}`}
          className="inline-block px-4 py-3 text-sm leading-none bg-[#03217F] text-white rounded-lg hover:bg-dark-blue transition duration-300 font-inter"
        >
          Learn More
        </a>
      </div>

      {/* Image Side */}
      {image ? (
        <div
          className="h-64 md:h-full rounded-xl rounded-tr-none md:mt-8 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : (
        <div className="h-96 md:h-full bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500 font-inter">Image Placeholder</p>
        </div>
      )}
    </div>
  </motion.div>
);

export default FeatureCard;
