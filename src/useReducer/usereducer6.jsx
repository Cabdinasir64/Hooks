import React, { useReducer, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function galleryReducer(state, action) {
    switch (action.type) {
        case "loadImages":
            return { ...state, images: action.payload, mainIndex: 0, loading: false };
        case "setMainImage":
            return { ...state, mainIndex: action.payload };
        case "nextImage":
            return { ...state, mainIndex: (state.mainIndex + 1) % state.images.length };
        case "prevImage":
            return {
                ...state,
                mainIndex:
                    (state.mainIndex - 1 + state.images.length) % state.images.length,
            };
        default:
            return state;
    }
}

const initialState = {
    images: [],
    mainIndex: 0,
    loading: true,
};

const UseReducer6 = () => {
    const [state, dispatch] = useReducer(galleryReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            const imgs = [
                "https://picsum.photos/id/1015/800/500",
                "https://picsum.photos/id/1016/800/500",
                "https://picsum.photos/id/1018/800/500",
                "https://picsum.photos/id/1020/800/500",
                "https://picsum.photos/id/1024/800/500",
            ];
            dispatch({ type: "loadImages", payload: imgs });
        }, 1000);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold text-purple-700 mb-6">
                🎨 Gallery Reducer 6
            </h1>

            {state.loading ? (
                <p className="text-lg">⏳ Loading gallery...</p>
            ) : (
                <>
                    {/* Main Image */}
                    <div className="relative w-[800px] max-w-full overflow-hidden rounded-2xl shadow-lg">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={state.mainIndex}
                                src={state.images[state.mainIndex]}
                                alt="Main"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-[500px] object-cover"
                            />
                        </AnimatePresence>

                        {/* Prev Button */}
                        <button
                            onClick={() => dispatch({ type: "prevImage" })}
                            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-purple-600 rounded-full p-3 shadow"
                        >
                            ◀
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={() => dispatch({ type: "nextImage" })}
                            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-purple-600 rounded-full p-3 shadow"
                        >
                            ▶
                        </button>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-4 mt-6 overflow-x-auto max-w-full p-2">
                        {state.images.map((img, idx) => (
                            <motion.img
                                key={idx}
                                src={img}
                                alt={`Thumbnail ${idx}`}
                                className={`w-28 h-20 object-cover rounded-lg cursor-pointer border-4 transition-all ${idx === state.mainIndex
                                    ? "border-purple-500"
                                    : "border-transparent"
                                    }`}
                                whileHover={{ scale: 1.1 }}
                                onClick={() => dispatch({ type: "setMainImage", payload: idx })}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default UseReducer6;
