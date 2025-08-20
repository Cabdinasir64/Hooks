import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "Fast", desc: "Our platform is blazing fast." },
  { title: "Reliable", desc: "99.9% uptime guaranteed." },
  { title: "Secure", desc: "Your data is safe with us." },
];

export default function Feature() {
  return (
    <motion.section
      id="features"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-8 bg-white"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-purple-50 rounded-xl shadow-md text-center"
          >
            <h3 className="text-xl font-bold mb-2 text-purple-700">{f.title}</h3>
            <p className="text-purple-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
