import React, { useState } from "react";

const questions = [
    { text: "I enjoy solving complex problems and working with numbers." },
    { text: "I like expressing myself through art, music, or writing." },
    { text: "I feel excited about building and designing new things." },
    { text: "I enjoy helping people and making a positive impact on their lives." },
    { text: "I prefer working with computers and technology over other tasks." }
];

const options = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

const accessment = {
    alignContent: "center",
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "20px",
    margin: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid black",
    top: "10%",
    padding: "10px",
    borderRadius: "10px"
};

const Next = {
    borderRadius: "8px",
    padding: "5px",
    backgroundColor: "rgb(159, 245, 130)",
    border: "none",
    marginTop: "20px",
    width: "100px",
};

const Back = {
    marginLeft: "10px",
    borderRadius: "8px",
    padding: "5px",
    backgroundColor: "rgb(159, 245, 130)",
    border: "none",
    marginTop: "20px",
    width: "100px",
};

function InterestAssessment() {
    const [currentStep, setCurrentStep] = useState(0);
    const [responses, setResponses] = useState(Array(questions.length).fill(null));
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleSelect = (index) => {
        const newResponses = [...responses];
        newResponses[currentStep] = index;
        setResponses(newResponses);
    };
    

    const generateFeedback = () => {
        let interestAreas = [];
    
        // Check responses and push corresponding interest areas
        if (responses[0] >= 3) interestAreas.push("Mathematics, Finance, Data Science");
        if (responses[1] >= 3) interestAreas.push("Arts, Music, Writing, Design");
        if (responses[2] >= 3) interestAreas.push("Engineering, Architecture, Construction");
        if (responses[3] >= 3) interestAreas.push("Healthcare, Teaching, Social Work");
        if (responses[4] >= 3) interestAreas.push("Technology, Software Development, Cybersecurity");
    
        // Generate feedback string
        const interestAreasString = interestAreas.length > 0 
            ? `Your interest areas: ${interestAreas.join(", ")}.` 
            : "You have a diverse set of interests! Consider exploring different fields.";
    
        // Set the feedback
        setFeedback(interestAreasString);
    
        // Save the interest areas in localStorage
        localStorage.setItem("interestAreas", JSON.stringify(interestAreas));  // Consistent naming here
    };
    
    

    const handleNext = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setLoading(true);
            setTimeout(() => {
                generateFeedback();
                setShowResults(true);
                setLoading(false);
            }, 2000);
        }
    };

    const handleRestart = () => {
        setCurrentStep(0);
        setResponses(Array(questions.length).fill(null));
        setShowResults(false);
        setLoading(false);
        setFeedback("");
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSavePeerFeedback = () => {
        const existingPeerFeedbacks = JSON.parse(localStorage.getItem("peerFeedback")) || [];
        const newFeedback = {
            timestamp: new Date().toISOString(),
            feedback: feedback,
        };
    
        existingPeerFeedbacks.push(newFeedback);
        localStorage.setItem("peerFeedback", JSON.stringify(existingPeerFeedbacks));
    
        // Update the latest peer feedback immediately for real-time UI update
        setLatestPeerFeedback(newFeedback);
    
        alert("Peer feedback has been saved!");
    };
    
    
    

    return (
        <div className="Assess-container">
            <div className="progressbarcontainer">
                <div className="progress-bar progress2" style={{ width: `${(currentStep / questions.length) * 100}%` }}></div>
            </div>

            {!showResults ? (
                <div className="Assess-block">
                    <h2 className="Step"> {currentStep + 1}/{questions.length}</h2>
                    <p className="Questions">{questions[currentStep].text}</p>
                    <div className="Assess-btn">
                        {options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelect(index)}
                                className={`option-button ${responses[currentStep] === index ? "selected" : ""}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="nextback">
                        <button
                            onClick={handleNext}
                            disabled={responses[currentStep] === null || loading}
                            style={Next}
                        >
                            {loading ? "Loading..." : (currentStep < questions.length - 1 ? "Next" : "Finish")}
                        </button>
                        <button onClick={handleBack} style={Back}>
                            Back
                        </button>
                    </div>
                </div>
            ) : (
                <div className="completion-screen">
                    <h2 style={accessment}>Assessment Complete!</h2>
                    <p className="feedback">{feedback}</p>
                </div>
            )}

            <button onClick={handleRestart} className="restart-btn">
                Restart Assessment
            </button>

            {loading && (
                <div className="loader-container">
                    <div className="spinner"></div>
                    <p>Processing your results...</p>
                </div>
            )}

                <button 
                    onClick={handleSavePeerFeedback} 
                    className="save-peer-feedback-btn"
                    disabled={!feedback}  
                >
                    Save Peer Feedback
                </button>
                </div>

        
    );
}

export default InterestAssessment;