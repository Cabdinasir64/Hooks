import React from "react";
import { motion } from "framer-motion";

const services = [
  { name: "Web Development", desc: "Build modern web apps" },
  { name: "Mobile Apps", desc: "iOS & Android solutions" },
  { name: "UI/UX Design", desc: "Beautiful user interfaces" },
];

export default function Service() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-8 bg-purple-50"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-md text-center"
          >
            <h3 className="text-xl font-bold mb-2 text-purple-700">{s.name}</h3>
            <p className="text-purple-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
