import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SearchResults() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('query');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/search?query=${searchQuery}`);
                setResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        if (searchQuery) {
            fetchData();
        }
    }, [searchQuery]);

    return (
        <div className="container mt-5">
            <h2>Search Results for "{searchQuery}"</h2>
            <ul className="list-group">
                {results.length > 0 ? results.map((item, index) => (
                    <li key={index} className="list-group-item">
                        <strong>{item.title}</strong> - {item.description}
                    </li>
                )) : <p>No results found.</p>}
            </ul>
        </div>
    );
}

export default SearchResults;
