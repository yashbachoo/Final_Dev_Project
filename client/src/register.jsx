import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar';
import './style.css';
import React from 'react';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        setErrorMessage(''); // Reset error message before making the request
    
        // Make the POST request to register the user
        axios.post('http://localhost:4000/register', { name, email, password })
        .then((response) => {
            console.log('Response Data:', response.data);
            
            if (response.data.user) {
                localStorage.setItem('userName', response.data.name); // Instead of response.data.user.name
                localStorage.setItem('userName', response.data.user.name || "Guest");
                localStorage.setItem('userEmail', response.data.user.email || "Not provided");
    
                // Refresh the page so Dashboard picks up new values
                window.location.reload();
            } else {
                console.error('Invalid user data from backend:', response.data);
            }
    
            navigate('/login');
        })
        .catch((error) => {
            console.error('Unexpected error:', error);
            setErrorMessage(error.response?.data?.message || 'An error occurred. Please try again.');
        });
    }    
    
    return (
        <>
            <div className="form-container">
                <h2>Register</h2>
                {/* Show error message if exists */}
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Submit</button>
                </form>

                <div className="form-footer">
                    <p>
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Signup;
