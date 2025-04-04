import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const profileContainer = {
  marginTop: "100px",
};

export default function UserProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');
  
  // State to hold profile data
  const [profileData, setProfileData] = useState({
    scAggregate: null,
    hscAggregate: null,
    selectedSCSubjects: [],
    selectedHSCSubjects: []
  });
  
  useEffect(() => {
    if (!token) {
      navigate('/NotLoggedIn');
      return;
    }
    
    // First try to get data from location state (if navigating from form submission)
    const stateData = location.state || {};
    
    // If we have new data from location state, update localStorage
    if (stateData.scAggregate || stateData.hscAggregate || 
        (stateData.selectedSCSubjects && stateData.selectedSCSubjects.length) || 
        (stateData.selectedHSCSubjects && stateData.selectedHSCSubjects.length)) {
      
      // Save to localStorage
      localStorage.setItem('userProfileData', JSON.stringify({
        scAggregate: stateData.scAggregate || null,
        hscAggregate: stateData.hscAggregate || null,
        selectedSCSubjects: stateData.selectedSCSubjects || [],
        selectedHSCSubjects: stateData.selectedHSCSubjects || []
      }));
      
      // Update state with the new data
      setProfileData({
        scAggregate: stateData.scAggregate || null,
        hscAggregate: stateData.hscAggregate || null,
        selectedSCSubjects: stateData.selectedSCSubjects || [],
        selectedHSCSubjects: stateData.selectedHSCSubjects || []
      });
    } else {
      // Try to load data from localStorage if no new data from state
      const savedData = localStorage.getItem('userProfileData');
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          setProfileData(parsedData);
        } catch (error) {
          console.error("Error parsing profile data from localStorage:", error);
        }
      }
    }
  }, [token, navigate, location.state]);

  return (
    <div style={profileContainer}>
      {token ? (
        <>
          <div className="aggregate-display">
            <p><strong>SC Aggregate Score: </strong>{profileData.scAggregate || 'Not Available'}</p>
            <p><strong>HSC Aggregate Score: </strong>{profileData.hscAggregate || 'Not Available'}</p>
          </div>
          <div className="subjects-display">
            <h4>Selected SC Subjects:</h4>
            {profileData.selectedSCSubjects && profileData.selectedSCSubjects.length > 0 ? (
              <ul>{profileData.selectedSCSubjects.map((subject, index) => <li key={index}>{subject}</li>)}</ul>
            ) : (
              <p>No SC subjects selected</p>
            )}
            <h4>Selected HSC Subjects:</h4>
            {profileData.selectedHSCSubjects && profileData.selectedHSCSubjects.length > 0 ? (
              <ul>{profileData.selectedHSCSubjects.map((subject, index) => <li key={index}>{subject}</li>)}</ul>
            ) : (
              <p>No HSC subjects selected</p>
            )}
          </div>
        </>
      ) : (
        <div className="alert alert-warning">
          <h3>You are logged out</h3>
          <p>Please log in to view your profile.</p>
        </div>
      )}
    </div>
  );
}