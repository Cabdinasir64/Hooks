import React, { useEffect, useState } from "react";

const UseEffect6 = () => {
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
                setLoading(false);
            }
        };
        const timeoutId = setTimeout(() => {
            fetchPosts();
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            {loading ? (
                <p className="text-xl text-gray-600">Loading posts...</p>
            ) : (
                <ul className="space-y-4 w-full max-w-xl">
                    {posts.map((post) => (
                        <li key={post.id} className="bg-white p-4 shadow rounded">
                            <h2 className="font-semibold text-lg mb-1">{post.title}</h2>
                            <p className="text-gray-700">{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UseEffect6;
