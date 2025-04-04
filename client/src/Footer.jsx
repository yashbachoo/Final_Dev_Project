import React from "react";

function Footer() {
    return (
        <footer style={styles.footer} className="footer">
            <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
        </footer>
    );
}

const styles = {
    footer: {
        textAlign: "center",
        padding: "10px",
        background: "#333",
        color: "white",
        width: "100%",  
        marginTop: "auto",
        position: "absolute",
        left:0,
        height: '300px',
        zIndex: 1000

    }
};

export default Footer;
