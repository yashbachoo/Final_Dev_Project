const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const EmployeeModel = require('./models/Employee');  // User authentication model
const ProfileModel = require('./models/profile');   // Profile model

const app = express();

// Middleware for JSON parsing
app.use(express.json());

app.use(cors({
    origin: '*',
  }));

// CORS configuration to allow requests from the frontend
app.use(cors({
    origin: ['http://localhost:5173'], // Allow both
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


// Handle preflight requests (OPTIONS)
app.options('*', cors());  // Enable CORS for preflight requests

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/registerStudents', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


/**
 * User Registration
 */
app.post('/register', async (req, res) => {
    console.log('Received data:', req.body); // Log the incoming request data

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email, and password are required" });
    }

    try {
        const existingUser = await EmployeeModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new EmployeeModel({ name, email, password: hashedPassword });

        const savedUser = await newUser.save();

        res.status(201).json({ message: "User registered successfully", user: savedUser });
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).json({ message: "Error registering user", error: err.message });
    }
});


/**
 * User Login
 */
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log("Received email:", email);  // Add this line to debug

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const user = await EmployeeModel.findOne({ email });

        if (!user) {
            console.log("User not found");  // Debugging line
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("Password mismatch");  // Debugging line
            return res.status(400).json({ message: "Invalid credentials" });
        }

        console.log("Login successful for user:", user.email);  // Debugging line
        res.json({
            message: "Login successful",
            user: { _id: user._id, email: user.email }
        });
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({ message: "Error during login", error: err.message });
    }
});

app.post('/logout', (req, res) => {
    res.json({ message: "Logged out successfully" });
});

// Protected Route Example
// app.get('/UserProfile', authenticateToken, (req, res) => {
//     res.json({ message: "Profile data", userId: req.user.userId, email: req.user.email });
// });

// app.get('/Dashboard', authenticateToken, (req, res) => {
//     res.json({ message: "Profile data", userId: req.user.userId, email: req.user.email });
// });





/**
 * Save or Update User Profile
 */
app.post('/save-profile', async (req, res) => {
    console.log("Incoming request body:", req.body); // ✅ Log full request body

    const { userId, scAggregate, hscAggregate, selectedSCSubjects, selectedHSCSubjects, recommendations = [] } = req.body;
    const userIdStr = String(userId); // ✅ Convert userId to string

    // Validate required fields
    if (!userId) return res.status(400).json({ message: "Missing userId field" });
    if (!mongoose.Types.ObjectId.isValid(userIdStr)) { // ✅ Validate userId AFTER conversion
        return res.status(400).json({ message: "Invalid userId format" });
    }
    if (scAggregate === undefined) return res.status(400).json({ message: "Missing scAggregate field" });
    if (hscAggregate === undefined) return res.status(400).json({ message: "Missing hscAggregate field" });
    if (!Array.isArray(selectedSCSubjects) || selectedSCSubjects.length === 0) {
        return res.status(400).json({ message: "Missing or invalid selectedSCSubjects field" });
    }
    if (!Array.isArray(selectedHSCSubjects) || selectedHSCSubjects.length === 0) {
        return res.status(400).json({ message: "Missing or invalid selectedHSCSubjects field" });
    }

    // Check if database is connected
    if (mongoose.connection.readyState !== 1) {
        return res.status(500).json({ message: "Database not connected" });
    }

    try {
        const userObjectId = new mongoose.Types.ObjectId(userIdStr); // ✅ Use the string-converted userId

        // Find the user profile
        let userProfile = await ProfileModel.findOne({ userId: userObjectId });

        if (userProfile) {
            // Update existing profile
            userProfile.scAggregate = scAggregate;
            userProfile.hscAggregate = hscAggregate;
            userProfile.selectedSCSubjects = selectedSCSubjects;
            userProfile.selectedHSCSubjects = selectedHSCSubjects;
            userProfile.recommendations = recommendations;
            await userProfile.save();
            console.log("User profile updated successfully.");
        } else {
            // Create new profile
            userProfile = new ProfileModel({
                userId: userObjectId,
                scAggregate,
                hscAggregate,
                selectedSCSubjects,
                selectedHSCSubjects,
                recommendations,
            });
            await userProfile.save();
            console.log("New user profile created successfully.");
        }

        return res.status(200).json({ message: "Profile processed successfully", userProfile });
    } catch (error) {
        console.error("Error processing user profile:", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
});



  


const data = [
    { id: 1, title: "University A", description: "Top-ranked university" },
    { id: 2, title: "University B", description: "Specialized in Engineering" },
    { id: 3, title: "Web Development", description: "Learn HTML, CSS, JS" },
    { id: 4, title: "Career Planning", description: "Get career guidance" }
];

app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const filteredResults = data.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
    );
    res.json(filteredResults);
});

// app.listen(4000, () => console.log("Server running on port 4000"));

/**
 * Retrieve User Profile
 */
app.get('/get-profile/:userId', async (req, res) => {
    try {
        const userId = mongoose.Types.ObjectId(req.params.userId);
        const userProfile = await ProfileModel.findOne({ userId });

        if (!userProfile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        res.json(userProfile);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving profile", error: err.message });
    }
});

// Start the server
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


