import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Alice", feedback: "Amazing experience!" },
  { name: "Bob", feedback: "Highly recommend!" },
  { name: "Charlie", feedback: "Five stars!" },
];

export default function Testimonial() {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-8 bg-white"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-purple-50 rounded-xl shadow-md text-center"
          >
            <p className="text-purple-600 mb-4">"{t.feedback}"</p>
            <h4 className="font-bold text-purple-700">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
