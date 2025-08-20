import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-md py-4 px-8 flex justify-between items-center"
    >
      <h1 className="text-2xl font-bold text-purple-700">MySite</h1>
      <div className="flex gap-6">
        <a href="#features" className="hover:text-purple-600 transition">Features</a>
        <a href="#services" className="hover:text-purple-600 transition">Services</a>
        <a href="#testimonials" className="hover:text-purple-600 transition">Testimonials</a>
      </div>
    </motion.nav>
  );
}
