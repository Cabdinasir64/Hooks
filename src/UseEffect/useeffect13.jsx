import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const UseEffect13 = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/data.json");
                const data = await res.json();
                setCourses(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };


        fetchData();



    }, []);

    const handleClick = (course) => {
        navigate(`/course`, { state: course });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse text-lg text-gray-600">Loading courses...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-6 bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">All Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <AnimatePresence>
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            layoutId={`card-${course.id}`}
                            initial={{ opacity: 0, y: 20, }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.5 }}
                            className="bg-white p-5 rounded-xl shadow-md cursor-pointer"
                            onClick={() => handleClick(course)}
                        >
                            <motion.h3 className="text-xl font-semibold text-gray-800">{course.name}</motion.h3>
                            <motion.p className="mt-2 text-sm text-gray-500">{course.category}</motion.p>
                            <motion.p className="mt-3 text-lg font-medium text-blue-600">${course.price}</motion.p>
                            {course.rating && (
                                <motion.div className="flex items-center mt-2">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default UseEffect13;