// src/components/Clients.tsx
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const clients = [
  { name: "Sisyphus", logo: "/images/sisyphus.png" },
  { name: "Circle", logo: "/images/circolee.png" },
  { name: "Catalog", logo: "/images/catalog.png" },
  { name: "Sisyphus", logo: "/images/sisyphus.png" },
  { name: "Circle", logo: "/images/circolee.png" },
];

// Duplicate the clients array multiple times to ensure enough logos to fill the viewport
const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

const Clients: React.FC = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Calculate the total width of the logos container
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 2); // Divide by 2 because we duplicated the clients
    }
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    if (containerWidth > 0) {
      const scrollAnimation = {
        x: [0, -containerWidth], // Start at 0 and move to the negative width of the container
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // Adjust speed (lower = faster)
            ease: "linear",
          },
        },
      };

      controls.start(scrollAnimation);
    }
  }, [controls, containerWidth]);

  // Pause animation on hover
  const handleHoverStart = () => controls.stop();
  const handleHoverEnd = () => {
    if (containerWidth > 0) {
      controls.start({
        x: [0, -containerWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    }
  };

  return (
    <section className="py-12 bg-gray-50 text-center">
      <p className="text-gray-600 mb-6 text-lg font-inter">
        Join 4,000+ companies already growing
      </p>
      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-16 md:gap-20"
          animate={controls}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          {duplicatedClients.map((client, index) => (
            <motion.img
              key={`${client.name}-${index}`}
              src={client.logo}
              alt={client.name}
              className="h-10 md:h-12 flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
