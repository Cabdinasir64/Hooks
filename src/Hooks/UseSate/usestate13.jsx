import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/29564918/pexels-photo-29564918/free-photo-of-scenic-autumn-forest-with-exposed-tree-roots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/31840057/pexels-photo-31840057/free-photo-of-misty-forest-road-in-ocypel-poland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/29579819/pexels-photo-29579819/free-photo-of-misty-forest-path-in-serene-pine-woodland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/10547396/pexels-photo-10547396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
];

const UseState13 = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold mb-6">🖼️ Image Gallery Preview</h2>

            {/* Main Image with animation */}
            <div className="w-full max-w-3xl mb-6 h-[350px] relative overflow-hidden rounded-lg">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={selectedImage.id}
                        src={selectedImage.url}
                        alt="Selected"
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                    />
                </AnimatePresence>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 flex-wrap justify-center">
                {images.map((img) => (
                    <img
                        key={img.id}
                        src={img.url}
                        alt={`Thumbnail ${img.id}`}
                        className={`w-24 h-16 object-cover rounded cursor-pointer border-4 transition duration-300 ${selectedImage.id === img.id ? 'border-blue-500' : 'border-transparent'
                            }`}
                        onClick={() => setSelectedImage(img)}
                    />
                ))}
            </div>
        </div>
    );
};

export default UseState13;
