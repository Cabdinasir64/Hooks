import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const UseEffect14 = () => {
    const location = useLocation();
    const course = location.state;
    const navigate = useNavigate();

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center"
                >
                    <div className="text-5xl mb-4">😕</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Course Not Found</h2>
                    <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or may have been removed.</p>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate("/")}
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium shadow-md"
                    >
                        Browse All Courses
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-6">
            <AnimatePresence>
                <motion.div
                    layoutId={`card-${course.id}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        duration: 0.5
                    }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.button
                        onClick={() => navigate(-1)}
                        className="mb-6 flex items-center gap-2 text-white hover:text-gray-200 transition-colors group"
                        whileHover={{ x: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span
                            className="text-2xl group-hover:-translate-x-1 transition-transform"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            ←
                        </motion.span>
                        <span className="font-medium">Back to courses</span>
                    </motion.button>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="md:flex">
                            {/* Course Image Section */}
                            <div className="md:w-2/5 bg-gradient-to-r from-blue-100 to-indigo-100 p-6 flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-center"
                                >
                                    <div className="text-8xl mb-4">📚</div>
                                    <div className="text-blue-800 font-medium">{course.category}</div>
                                </motion.div>
                            </div>

                            {/* Course Details Section */}
                            <div className="md:w-3/5 p-6 md:p-8">
                                <motion.div
                                    initial={{ x: -10 }}
                                    animate={{ x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
                                        {course.category}
                                    </span>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-3">{course.name}</h2>
                                    <p className="text-gray-600 mb-6">{course.description}</p>

                                    <div className="flex flex-wrap gap-4 mb-6">
                                        <div className="flex items-center text-gray-700">
                                            <span className="mr-2">⏱️</span>
                                            <span>{course.duration || "8 Weeks"}</span>
                                        </div>
                                        <div className="flex items-center text-gray-700">
                                            <span className="mr-2">👨‍🏫</span>
                                            <span>{course.instructor || "Expert Instructor"}</span>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-gray-50 p-5 rounded-xl"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <div className="text-2xl font-bold text-blue-600">${course.price}</div>
                                            {course.rating && (
                                                <div className="flex items-center mt-1">
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <span key={i}>★</span>
                                                        ))}
                                                    </div>
                                                    <span className="ml-2 text-sm text-gray-600">
                                                        {course.rating} ({course.reviews || 0} reviews)
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium shadow-md"
                                        >
                                            Enroll Now
                                        </motion.button>
                                    </div>
                                    <p className="text-sm text-gray-500 text-center">30-day money back guarantee</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default UseEffect14;