const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Generate JWT Token
 * @param {Object} user - The user object to generate token for
 * @returns {string} - The signed JWT token
 */
const generateToken = (user) => {
    const payload = {
        userId: user._id,
        email: user.email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
    return token;
};

/**
 * Verify JWT Token
 * @param {string} token - The JWT token to verify
 * @returns {Object} - Decoded user data from the token
 */
const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (err) {
        return null; // If the token is invalid or expired, return null
    }
};

module.exports = { generateToken, verifyToken };
