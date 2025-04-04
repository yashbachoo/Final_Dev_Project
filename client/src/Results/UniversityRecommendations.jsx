import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import universities from "../Data/universities";

export default function UniversityRecommendations() {
  const location = useLocation();
  const { scAggregate, hscAggregate, selectedSCSubjects, selectedHSCSubjects } = location.state || {};

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [outputData, setOutputData] = useState(null); 

  useEffect(() => {
    setUser({ _id: "67ea2c41f05fce400d5458b4" });
  }, []);

  const eligibleUniversities = universities.filter(
    (uni) => hscAggregate >= uni.minScore
  );

  const saveUserData = () => {
    if (!user || !user._id || user._id.length !== 24) {
      alert("Invalid user ID! Please log in again.");
      return;
    }

    if (typeof scAggregate !== "number" || typeof hscAggregate !== "number") {
      alert("Invalid scores! Make sure SC and HSC aggregates are provided.");
      return;
    }

    const requestData = {
      userId: user._id,
      scAggregate,
      hscAggregate,
      selectedSCSubjects,
      selectedHSCSubjects,
      recommendations: eligibleUniversities,
    };

    // Save to localStorage
    localStorage.setItem("userProfileData", JSON.stringify(requestData));

    setOutputData(requestData); // Set state, useEffect will handle navigation

    console.log("Final request data:", requestData);

    // Optionally, you can also send the data to a server if needed
    axios.post("http://localhost:4000/save-profile", requestData)
      .then((response) => {
        console.log("Server Response:", response.data);
        setMessage(response.data.message || "Profile saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving user data:", error);
        setMessage(error.response?.data?.message || "An error occurred.");
      });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (outputData) {
      navigate("/UserProfile", { state: outputData });
    }
  }, [outputData]); // Navigate only when outputData is updated

  return (
    <div className="university-container">
      <h3 className="university-header">Recommended Universities</h3>



      {message && <p className="success-message">{message}</p>}

      {eligibleUniversities.length > 0 ? (
        <div className="university-grid">
          {eligibleUniversities.map((uni, index) => (
            <div key={index} className="university-card">
              <img src={uni.image} alt={uni.name} className="university-image" />
              <div className="university-info">
                <h4>{uni.name}</h4>
                <p>📍 {uni.location}</p>
              </div>
              <button className="details-button">Learn More ➝</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-match">No universities match this score.</p>
      )}

      {/* Display stored outputData for debugging */}
      {outputData && (
        <div className="output-data">
          <h4>Stored Output Data:</h4>
          <pre>{JSON.stringify(outputData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
