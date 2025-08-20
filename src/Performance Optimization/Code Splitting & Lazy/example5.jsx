import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-100 to-purple-200 py-32 flex flex-col items-center text-center relative overflow-hidden"
    >
      <motion.img
        src="https://plus.unsplash.com/premium_photo-1754759082755-4bb1bf09ba2a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero Background"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 max-w-4xl px-4">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold mb-6 text-purple-700"
        >
          Welcome to MySite
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-purple-600 mb-8"
        >
          Explore our amazing features and services. Lazy loading + animations make the experience smooth!
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
        >
          Get Started
        </motion.button>
      </div>
    </motion.section>
  );
}
