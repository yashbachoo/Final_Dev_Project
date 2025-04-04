import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [latestAssessmentFeedback, setLatestAssessmentFeedback] = useState(null);
  const [latestPeerFeedback, setLatestPeerFeedback] = useState(null);
  const [profileData, setProfileData] = useState({
    scAggregate: null,
    hscAggregate: null,
    selectedSCSubjects: [],
    selectedHSCSubjects: []
  });

// Directly get the user's interest areas from localStorage
let userInterestAreas = JSON.parse(localStorage.getItem("interestAreas")) || [];

// Ensure it's an array of strings
if (!Array.isArray(userInterestAreas)) {
  // If it's not an array, we reset to an empty array
  userInterestAreas = [];
} else {
  // Ensure every element is a string and trim any whitespace
  userInterestAreas = userInterestAreas.map(item => {
    // Convert the item to string if it's not already and trim any spaces
    return String(item).trim();
  });
}


// Now userInterestAreas is guaranteed to be an array of strings




  // Get universities data from localStorage
  const universitiesData = JSON.parse(localStorage.getItem("universitiesData"));

  const navigate = useNavigate();
  
  // Redirect to login if user is not authenticated
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  
  // Load latest assessment feedback
  useEffect(() => {
    const savedAssessments = JSON.parse(localStorage.getItem("allFeedback")) || [];
    if (savedAssessments.length > 0) {
      setLatestAssessmentFeedback(savedAssessments[savedAssessments.length - 1]); // Get the latest assessment feedback
    }
  }, []);
  
  // Load latest peer feedback (or another feedback type)
  useEffect(() => {
    const savedPeerFeedbacks = JSON.parse(localStorage.getItem("peerFeedback")) || [];
    if (savedPeerFeedbacks.length > 0) {
      setLatestPeerFeedback(savedPeerFeedbacks[savedPeerFeedbacks.length - 1]); // Get the latest peer feedback
    }
  }, []);
  
  // Load profile data from localStorage
  useEffect(() => {
    const savedProfileData = localStorage.getItem('userProfileData');
    if (savedProfileData) {
      try {
        const parsedData = JSON.parse(savedProfileData);
        setProfileData(parsedData);
      } catch (error) {
        console.error("Error parsing profile data from localStorage:", error);
      }
    }
  }, []);
  
  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail") || "Not available";
  const profileImage = localStorage.getItem("profileImage") || "https://via.placeholder.com/150";
  
  return (
    <div style={styles.container}>
      {/* Profile Section */}
      <div style={styles.profileBox}>
        <img src={profileImage} alt="Profile" style={styles.profileImage} />
        <h1 style={styles.heading}>{userName}</h1>
        <h4 style={styles.subheading}>{userEmail}</h4>
        <p style={styles.bio}>Hey, I'm {userName} 👋 and I'm a software engineering student.</p>
      </div>
      
      {/* Academic Profile Information */}
      <div style={styles.academicSection}>
        <h3 style={styles.sectionTitle}>Academic Profile</h3>
        <div style={styles.academicInfo}>
          <p><strong>SC Aggregate:</strong> {profileData.scAggregate || 'Not Available'}</p>
          <p><strong>HSC Aggregate:</strong> {profileData.hscAggregate || 'Not Available'}</p>
        </div>
        
        <div style={styles.subjectsContainer}>
          <div style={styles.subjectColumn}>
            <h4>SC Subjects:</h4>
            {profileData.selectedSCSubjects && profileData.selectedSCSubjects.length > 0 ? (
              <ul style={styles.subjectsList}>
                {profileData.selectedSCSubjects.map((subject, index) => (
                  <li key={index} style={styles.subjectItem}>{subject}</li>
                ))}
              </ul>
            ) : (
              <p>No SC subjects available</p>
            )}
          </div>
          
          <div style={styles.subjectColumn}>
            <h4>HSC Subjects:</h4>
            {profileData.selectedHSCSubjects && profileData.selectedHSCSubjects.length > 0 ? (
              <ul style={styles.subjectsList}>
                {profileData.selectedHSCSubjects.map((subject, index) => (
                  <li key={index} style={styles.subjectItem}>{subject}</li>
                ))}
              </ul>
            ) : (
              <p>No HSC subjects available</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div style={styles.skillsSection}>
        <h3>Languages and Tools:</h3>
        <span>📌 HTML</span> <span>📌 CSS</span> <span>📌 React</span>
      </div>
      
      {/* Latest Assessment Feedback */}
      <div style={styles.feedbackCard}>
        <h4 style={styles.feedbackHeading}>Here's how you can work on your personality traits and strengths</h4>
        {latestAssessmentFeedback ? (
          <p style={styles.feedbackText}>{latestAssessmentFeedback.feedback}</p>
        ) : (
          <p>Carry out the personality assessment to find out improvements.</p>
        )}
      </div>
      
{/* Latest Peer Feedback */}
<div style={styles.feedbackCard}>
  <h4 style={styles.feedbackHeading}>Based on the interest assessment, these are the fields that align with you:</h4>
  {latestPeerFeedback ? (
    <p style={styles.feedbackText}>{latestPeerFeedback.feedback}</p>
  ) : (
    <p>No peer feedback available.</p>
  )}
</div>

{/* Universities Section */}
<div style={styles.universitiesSection}>
  <h3 style={styles.sectionTitle}>Available Universities</h3>
  <div style={styles.universitiesContainer}>
    {universitiesData && universitiesData.length > 0 ? (
      universitiesData
        .filter((university) => {
          console.log("Processing University:", university.name);

          // Ensure feedback exists and split into an array of interest areas
          const feedbackAreas = latestPeerFeedback?.feedback
            ? latestPeerFeedback.feedback.split(",").map(area => area.trim().toLowerCase())
            : [];

          // Ensure available courses exist
          const availableCourses = university.availableCourses || [];

          // Check if at least one course matches any feedback area
          const isRelevant = availableCourses.some(course =>
            feedbackAreas.some(area => area === course.toLowerCase().trim())
          );

          console.log("Relevant:", isRelevant);
          return isRelevant; // Keep only relevant universities
        })
        .map((university, index) => (
          <div key={index} style={styles.universityCard}>
            <img
              src={university.image || "https://via.placeholder.com/150"}
              alt={university.name}
              style={styles.universityImage}
            />
            <h4 style={styles.universityName}>{university.name}</h4>
            <p><strong>Location:</strong> {university.location}</p>
            <p><strong>Min Score:</strong> {university.minScore}</p>
            <p><strong>Available Courses:</strong> {university.availableCourses.join(", ")}</p>
          </div>
        ))
    ) : (
      <p>No universities available.</p>
    )}
  </div>
</div>



    </div>
  );
}

export default Dashboard;


// CSS Styles
const styles = {
    container: {
        textAlign: "center",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        marginTop: "100px",
        maxWidth: "800px",
        margin: "100px auto 0",
        backgroundColor: "#f9f9f9", // Subtle background to contrast with the profile box
        borderRadius: "16px", // Rounded corners for modern look
      },
      profileBox: {
        padding: "25px",
        backgroundColor: "#fff",
        borderRadius: "16px", // More rounded corners for modern feel
        boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      },
      profileBoxHover: {
        transform: "scale(1.05)", // Zoom effect on hover
        boxShadow: "0 10px 20px rgba(0,0,0,0.15)", // Increased shadow on hover
      },
      profileImage: {
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        border: "2px solid #FF6F61", // Vibrant border for the profile image
      },
      heading: {
        fontSize: "28px", // Larger font size for the heading
        fontWeight: "bold",
        color: "#333", // Dark color for better contrast
        marginBottom: "10px"
      },
      subheading: {
        fontSize: "18px", 
        color: "#777",
        marginBottom: "20px"
      },
      bio: {
        fontSize: "16px",
        color: "#555", // Slightly darker gray for better readability
      },
      academicSection: {
        marginTop: "30px",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "16px", // More rounded corners for modern look
        boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      },
      academicSectionHover: {
        transform: "scale(1.05)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      },
      sectionTitle: {
        textAlign: "left",
        borderBottom: "2px solid #FF6F61", // Vibrant border under title
        paddingBottom: "12px",
        marginBottom: "18px",
        fontSize: "20px",
        fontWeight: "600",
        color: "#333"
      },
      academicInfo: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
        gap: "20px"
      },
      subjectsContainer: {
        display: "flex",
        justifyContent: "space-between"
      },
      subjectColumn: {
        flex: "1",
        padding: "0 12px",
        textAlign: "left"
      },
      subjectsList: {
        listStyleType: "none",
        padding: "0",
        margin: "0"
      },
      subjectItem: {
        margin: "6px 0",
        padding: "6px 12px",
        backgroundColor: "black", // Vibrant color for subject tags
        color: "#fff", // White text on the vibrant background
        borderRadius: "8px",
        display: "inline-block",
        marginRight: "8px",
        fontSize: "14px",
      },
      skillsSection: {
        marginTop: "30px",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "16px", // More rounded corners for modern look
        boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      },
      skillsSectionHover: {
        transform: "scale(1.05)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      },
      feedbackCard: {
        marginTop: "30px",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "16px", 
        boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      },
      feedbackCardHover: {
        transform: "scale(1.05)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      },
      feedbackHeading: {
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "left",
        borderBottom: "2px solid #FF6F61", // Vibrant border under heading
        paddingBottom: "12px",
        marginBottom: "20px"
      },
      feedbackText: {
        fontSize: "16px",
        textAlign: "left",
        color: "#555"
      },
      
  universitiesSection: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "16px", // More rounded corners for a modern feel
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Slightly stronger shadow
    transition: "all 0.3s ease-in-out", // Smooth transition effect when hovering
    borderTop: "8px solid #FF6F61" // Vibrant color accent for the section header
  },
  universitiesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", // Increased min-width for better card spacing
    gap: "24px",
    marginTop: "10px" // Add some spacing between section and the grid
  },
  universityCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: "12px", // More rounded corners for cards
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.15)", // Softer shadow for depth
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Animation for hover effects
    cursor: "pointer", // Visual cue for clickable items
    overflow: "hidden", // Ensures child elements like images don't overflow
    border: "2px solid #FF6F61", // Adding vibrant border for a modern touch
  },
  universityCardHover: {
    transform: "scale(1.05)", // Subtle zoom effect on hover
    boxShadow: "0 8px 18px rgba(0, 0, 0, 0.2)", // Increased shadow on hover
    borderColor: "#FF6F61", // Keeping the vibrant color on hover for the card border
  },
  universityImage: {
    width: "100%",
    height: "160px", // Slightly taller image for better presentation
    objectFit: "cover",
    borderRadius: "10px", // Rounded corners for a smooth, modern look
    transition: "all 0.3s ease-in-out", // Smooth transition on hover
  },
  universityImageHover: {
    transform: "scale(1.1)", // Zoom effect for the image on hover
  },
  universityName: {
    fontSize: "20px", // Larger font size for the university name
    fontWeight: "600", // Subtle weight for a modern look
    color: "#333", // Darker color for better readability
    marginTop: "15px",
    transition: "color 0.3s ease", // Smooth transition for color change on hover
  },
  universityLocation: {
    fontSize: "14px", 
    color: "#666", // Lighter gray for secondary information
    marginTop: "10px"
  },
  universityMinScore: {
    fontSize: "14px", 
    fontWeight: "500", // Slightly bolder for emphasis
    color: "#444",
    marginTop: "8px"
  },
  universityCourses: {
    fontSize: "14px",
    color: "#FF6F61", // Vibrant color for links (orange-red)
    marginTop: "12px",
    fontWeight: "500",
    cursor: "pointer",
    textDecoration: "underline", // Underlined to indicate it's clickable
    transition: "color 0.3s ease", // Smooth color transition
  },
  universityCoursesHover: {
    color: "#E23E2D" // Darker vibrant color when hovering over courses
  },
  button: {
    backgroundColor: "#FF6F61", // Bright, vibrant button color
    color: "#fff", // White text for contrast
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "background-color 0.3s ease",
    marginTop: "20px",
  },
  buttonHover: {
    backgroundColor: "#E23E2D" // Darker vibrant color on hover
  }
  


  
};





