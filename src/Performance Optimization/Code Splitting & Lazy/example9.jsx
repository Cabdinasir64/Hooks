import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-purple-700 text-white py-8 px-8 text-center"
    >
      <p>© 2025 MySite. All rights reserved.</p>
    </motion.footer>
  );
}
