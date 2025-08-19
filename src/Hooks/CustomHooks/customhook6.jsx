import useFetch from "./customhook7";
import { motion } from "framer-motion";

export default function CustomHook6() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return (
      <motion.div
        className="flex justify-center items-center h-screen"
        animate={{ opacity: [0, 1], scale: [0.8, 1] }}
        transition={{ duration: 0.6 }}
      >
        <div className="loader border-4 border-blue-400 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="text-red-500 text-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {error.message}
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h2 className="text-xl font-bold mb-2">{item.title || item.name}</h2>
          <p className="text-gray-600">{item.body || item.email}</p>
        </motion.div>
      ))}
    </div>
  );
}
