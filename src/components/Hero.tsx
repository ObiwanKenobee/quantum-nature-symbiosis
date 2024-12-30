import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--celestial-500)_0%,_transparent_100%)] opacity-20" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-celestial-900/10 text-celestial-400 backdrop-blur-sm border border-celestial-500/20">
            Welcome to NVIDIA Celestial
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-celestial-200">
            Redefining Computing for a Sustainable Future
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Inspired by nature, powered by quantum intelligence, and guided by ethical principles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-celestial-500 text-white font-medium hover:bg-celestial-600 transition-colors duration-300">
              Discover Celestial
            </button>
            <button className="px-8 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 backdrop-blur-sm transition-colors duration-300 border border-white/20">
              Explore the Vision
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};