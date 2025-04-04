import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
    },
    card: {
        backgroundColor: "#ffffff",
        padding: "1.5rem",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        maxWidth: "350px",
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "600",
        color: "#e74c3c",
        marginBottom: "0.5rem",
    },
    text: {
        color: "#4b5563",
        fontSize: "1rem",
    },
    button: {
        marginTop: "1rem",
        padding: "10px 16px",
        backgroundColor: "#3498db",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "background-color 0.3s",
    },
    buttonHover: {
        backgroundColor: "#2980b9",
    }
};

const NotLoggedIn = () => {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Access Denied</h2>
                <p style={styles.text}>You must be logged in to view this content.</p>
                <button
                    style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => navigate("/login")}
                >
                    Go to Login
                </button>
            </div>
        </div>
    );
};

export default NotLoggedIn;
