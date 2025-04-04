import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (searchQuery.trim() !== '') {
                try {
                    const response = await axios.get(`http://localhost:4000/search?query=${searchQuery}`);
                    setSuggestions(response.data);
                } catch (error) {
                    console.error('Error fetching search results:', error);
                    setSuggestions([]);
                }
            } else {
                setSuggestions([]);
            }
        };
        fetchSuggestions();
    }, [searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== '') {
            navigate(`/search?query=${searchQuery}`);
            setSuggestions([]);
            setDropdownVisible(false); // Hide dropdown after search
        }
    };

    const handleSuggestionClick = (suggestion) => {
        navigate(`/search?query=${suggestion.title}`);
        setSearchQuery('');
        setSuggestions([]);
        setDropdownVisible(false); // Hide dropdown
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
        } else if (e.key === 'ArrowUp') {
            setSelectedIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            handleSuggestionClick(suggestions[selectedIndex]);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CareerPlanning</a>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                            <Link className="nav-link active" to="/Dashboard">Dashboard</Link>
                            <Link className="nav-link active" to="/About">About</Link>
                        </li>
                    </ul>

                    <form className="d-flex ms-auto position-relative" onSubmit={handleSearch}>
                        <input 
                            className="form-control search-input" 
                            type="search" 
                            placeholder="Search..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            onFocus={() => setDropdownVisible(true)}
                            onBlur={() => setTimeout(() => setDropdownVisible(false), 200)}
                        />
                        <button className="btn search-btn" type="submit">Search</button>

                        {/* Search Suggestions Dropdown */}
                        {isDropdownVisible && (
                            <ul className="dropdown-menu show position-absolute w-100">
                                {suggestions.length > 0 ? (
                                    suggestions.map((suggestion, index) => (
                                        <li 
                                            key={index} 
                                            className={`dropdown-item ${selectedIndex === index ? 'active' : ''}`} 
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            {suggestion.title}
                                        </li>
                                    ))
                                ) : (
                                    <li className="dropdown-item text-muted">No results found</li>
                                )}
                            </ul>
                        )}
                    </form>

                    {/* Conditionally render login/logout */}
                    {token ? (
                        <button className="btn btn-outline-danger ms-3" onClick={() => {
                            localStorage.removeItem('authToken');
                            navigate('/login');
                        }}>Logout</button>
                    ) : (
                        <Link className="login-button" to="/login">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
