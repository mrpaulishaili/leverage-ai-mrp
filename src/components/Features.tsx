// src/components/Features.tsx
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import FeatureCard from "./cards/FeatureCard";

const tabs = [
  {
    title: "Market Prediction",
    description:
      "Use AI insights for smarter business decisions and stay competitive.",
    slug: "market-prediction",
    image: "/images/cards/market-prediction.webp",
  },
  {
    title: "Finance",
    description:
      "Our AI models analyze financial data for confident investments.",
    image: "/images/cards/finance.webp",
    slug: "finance",
  },
  {
    title: "Analytics",
    description:
      "Transform data into insights with AI analytics that enhance decisions.",
    image: "/images/cards/finance.webp",
    slug: "analytics",
  },
  {
    title: "Content Generation",
    description:
      "Create quality content easily with AI that knows your brand and audience.",
    image: "/images/cards/content.webp",
    slug: "content-generation",
  },
  {
    title: "Customer Support",
    description: "Use AI chatbots for instant, personalized customer support.",
    image: "/images/cards/customer.webp",
    slug: "customer-support",
  },
];

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].slug);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll the active card to the center
  useEffect(() => {
    if (containerRef.current) {
      const activeIndex = tabs.findIndex((tab) => tab.slug === activeTab);
      const cardWidth =
        containerRef.current.children[activeIndex]?.clientWidth || 0;
      const containerWidth = containerRef.current.clientWidth;
      const scrollPosition =
        activeIndex * (cardWidth + 16) - containerWidth / 2 + cardWidth / 2; // 16 is the gap (mx-2)
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-max mx-auto p-1 bg-transparent rounded-xl shadow-sm border border-[#03217F]">
        {tabs.map((tab) => (
          <motion.button
            key={tab.slug}
            onClick={() => setActiveTab(tab.slug)}
            className={`relative cursor-pointer px-4 py-2 rounded-lg font-inter text-sm md:text-base transition-all font-semibold duration-300 whitespace-nowrap ${
              activeTab === tab.slug
                ? "bg-[#03217F] text-gray-200 shadow-md"
                : "bg-gray-50 text-gray-500 hover:bg-gray-100"
            }`}
            aria-current={activeTab === tab.slug ? "true" : "false"}
          >
            {tab.title}
            {activeTab === tab.slug && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 "
                layoutId="underline"
                initial={false}
                transition={{ type: "spring" }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Feature Cards Carousel */}
      <div
        ref={containerRef}
        className="flex overflow-x-hidden  snap-x snap-mandatory snap-center pb-4 hide-scrollbar justify-start"
      >
        {tabs.map((tab) => (
          <FeatureCard
            key={tab.slug}
            title={tab.title}
            description={tab.description}
            image={tab.image}
            slug={tab.slug}
            isActive={activeTab === tab.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
