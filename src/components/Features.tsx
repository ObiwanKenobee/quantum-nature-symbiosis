import { motion } from "framer-motion";
import { Cpu, Leaf, Zap, Brain, Globe, Headset } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Biomimetic Architecture",
    description: "Mimicking natural systems for optimal resource distribution and adaptability.",
  },
  {
    icon: Leaf,
    title: "Quantum Computing Integration",
    description: "Hybrid quantum-classical systems enabling exponential processing power.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Energy-harvesting nanomaterials ensuring minimal environmental impact.",
  },
  {
    icon: Brain,
    title: "Bio-Quantum Intelligence",
    description: "Self-learning AI that evolves like living organisms.",
  },
  {
    icon: Globe,
    title: "Unified Computing",
    description: "Embedding ethical algorithms for human-centered solutions.",
  },
  {
    icon: Headset,
    title: "Celestial Metaverse",
    description: "Real-time simulations enabling predictive modeling for global challenges.",
  },
];

export const Features = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Pioneering Features of the Bio-Quantum Processor
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-celestial-500/50 transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 text-celestial-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};