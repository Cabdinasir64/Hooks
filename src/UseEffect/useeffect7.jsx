import React, { useEffect, useState } from "react";

const UseEffect7 = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                setPosts(data.slice(0, 5));
                setLoading(false);
            } catch (err) {
                console.error("Error:", err);
                setLoading(false);
            }
        };

        const timeoutId = setTimeout(fetchPosts, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">

            <ul className="space-y-4 w-full max-w-xl">
                {loading
                    ? Array.from({ length: 5 }).map((_, index) => (
                        <li key={index} className="bg-white p-4 shadow rounded animate-pulse">
                            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                        </li>
                    ))
                    : posts.map((post) => (
                        <li key={post.id} className="bg-white p-4 shadow rounded">
                            <h2 className="font-semibold text-lg mb-1">{post.title}</h2>
                            <p className="text-gray-700">{post.body}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default UseEffect7;
