import { useEffect, useState } from 'react';

export default function useData(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            try {
                if ((url ===" " || url==="" || url===null )) {
                    setIsLoading(false);
                    console.log(" you have Invalid url for fetch ");
                    return;
                }
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setTimeout(() => { // for avalible to see loading (ezafi )
                    setIsLoading(false);
                }, 500); 
            }
        };

        fetchData();

        // Clean up function to cancel ongoing fetch when component unmounts or when URL changes
        return () => {
            setIsLoading(true);
            setData(null);
            setError(null);
        };
    }, [url]);

    return { data, isLoading, error };
}
