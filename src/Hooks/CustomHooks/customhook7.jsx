import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error("Network response was not ok");
                const json = await res.json();
                setData(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        const timeoutId = setTimeout(fetchData, 5000);
        return () => clearTimeout(timeoutId);
    }, [url]);

    return { data, loading, error };
}
