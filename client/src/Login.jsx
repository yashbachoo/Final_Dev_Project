import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
    const navigate = useNavigate();

    // Check if the user is already logged in (token in localStorage)
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true); // User is already logged in
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrorMessage('');  // Clear previous errors

        // Make the POST request to login the user
        axios
            .post('http://localhost:4000/login', { email, password }) // Ensure correct backend URL
            .then((response) => {
                console.log('Success:', response.data);
                if (response.data.message === "Login successful") {
                    // Store auth token in localStorage
                    localStorage.setItem('authToken', response.data.token); 
                    setIsLoggedIn(true); // Update login state
                    navigate('/'); // Navigate to home page after successful login
                }
            })
            .catch((error) => {
                console.error('Unexpected error:', error);
                if (error.response) {
                    if (error.response.data) {
                        setErrorMessage(error.response.data.message); // Display error message from backend
                    } else {
                        setErrorMessage('Unexpected response from the server.');
                    }
                } else if (error.request) {
                    setErrorMessage('No response from the server. Please check the server.');
                } else {
                    setErrorMessage('An error occurred. Please try again.');
                }
            });
    };

    const handleLogout = () => {
        // Remove the user data from localStorage
        localStorage.removeItem('authToken');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
    
        // Update the login state
        setIsLoggedIn(false);
    
        // Redirect to login page
        navigate('/login');
    };
    

    return (
        <div className="form-container">
            {isLoggedIn ? (
                <>
                    <h2>Welcome back!</h2>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <h2>Login</h2>

                    {/* Display error message if exists */}
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Login</button><br></br><br></br>

                        <h4>Have not regiestred yet? 
                            <Link to="/register"> Click here.</Link>
                        </h4>
                    </form>
                </>
            )}
        </div>
    );
}

export default Login;
