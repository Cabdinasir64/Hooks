import React, { useState, useEffect } from "react";

const UseEffect8 = () => {
    const [query, setQuery] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        setLoading(true);

        const fetchInitialPosts = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                setPosts([]);
            } finally {
                setLoading(false);
                setInitialLoad(false);
            }
        };

        if (initialLoad) {
            fetchInitialPosts();
            return;
        }

        if (query.trim() === "") {
            setPosts([]);
            setLoading(false);
            return;
        }

        const handler = setTimeout(() => {
            const fetchPosts = async () => {
                try {
                    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`);
                    const data = await res.json();
                    setPosts(data);
                } catch (error) {
                    setPosts([]);
                } finally {
                    setLoading(false);
                }
            };

            fetchPosts();
        }, 1000);

        return () => clearTimeout(handler);
    }, [query, initialLoad]);

    return (
        <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
            <input
                type="text"
                placeholder="Search posts..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full max-w-md p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {loading && (
                <div className="mt-6 w-full max-w-md space-y-4">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="h-16 bg-gray-300 animate-pulse rounded" />
                    ))}
                </div>
            )}

            {!loading && posts.length === 0 && query.trim() !== "" && (
                <p className="mt-4 text-red-500">No results found.</p>
            )}

            {!initialLoad && !loading && posts.length === 0 && query.trim() === "" && (
                <p className="mt-4 text-gray-500">Type something to search posts</p>
            )}

            <ul className="mt-6 w-full max-w-md space-y-4">
                {!loading && posts.map((post) => (
                    <li
                        key={post.id}
                        className="bg-white p-4 rounded shadow hover:bg-gray-50 transition"
                    >
                        <h2 className="font-semibold text-lg">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UseEffect8;