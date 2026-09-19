import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "91d159ed";
const BASE_URL = "https://www.omdbapi.com/";

function useSearchMovies(query) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Effect 1: fetch movies whenever `query` changes
    useEffect(() => {
        if (!query || !query.trim()) {
            setMovies([]);
            setError(null);
            return;
        }

        // AbortController cancels the in-flight request if `query` changes
        // again (or the component unmounts) before it resolves - cleaner
        // than a manual "ignore" flag and it actually stops the network
        // request instead of just discarding its result.
        const controller = new AbortController();

        const fetchMovies = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(BASE_URL, {
                    params: { apikey: API_KEY, s: query, type: "movie" },
                    signal: controller.signal,
                });

                if (response.data.Response === "False") {
                    setMovies([]);
                    setError(response.data.Error || "No results found");
                } else {
                    setMovies(response.data.Search);
                }
            } catch (err) {
                if (axios.isCancel(err) || err.name === "CanceledError") {
                    // Expected when a newer keystroke supersedes this request
                    return;
                }

                // Distinguish "server responded with an error" from
                // "request never reached the server" so the message
                // shown to the user is actually useful.
                if (err.response) {
                    setError(`OMDb API error (${err.response.status}). Please try again.`);
                } else if (err.request) {
                    setError("Network error - check your connection and try again.");
                } else {
                    setError("Something went wrong while fetching movies.");
                }
                setMovies([]);
                console.error("API Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();

        return () => controller.abort();
    }, [query]);

    // Effect 2: logs whenever the movie data changes
    useEffect(() => {
        console.log("Movies updated:", movies);
    }, [movies]);

    return { movies, loading, error };
}

export default useSearchMovies;


// import axios from "axios";
// import { useState, useEffect } from "react";

// const API_KEY = "91d159ed";

// function useSearchMovies(query) {
//     const [movies, setMovies] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     // Effect 1: fetch movies whenever `query` changes
//     useEffect(() => {
//         if (!query || !query.trim()) {
//             setMovies([]);
//             return;
//         }

//         // Prevents a slow, stale request from overwriting a newer one
//         let ignore = false;

//         const fetchMovies = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 const response = await axios.get(
//                     `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=movie`
//                 );

//                 if (ignore) return;

//                 if (response.data.Response === "False") {
//                     setMovies([]);
//                     setError(response.data.Error || "No results found");
//                 } else {
//                     setMovies(response.data.Search);
//                 }
//             } catch (err) {
//                 if (!ignore) {
//                     console.log("API Error : ", err);
//                     setError("Something went wrong while fetching movies.");
//                     setMovies([]);
//                 }
//             } finally {
//                 if (!ignore) setLoading(false);
//             }
//         };

//         fetchMovies();

//         return () => {
//             ignore = true;
//         };
//     }, [query]);

//     // Effect 2: logs whenever the movie data changes
//     useEffect(() => {
//         console.log("Movies updated:", movies);
//     }, [movies]);

//     return { movies, loading, error };
// }

// export default useSearchMovies;

