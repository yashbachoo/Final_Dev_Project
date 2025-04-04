import React, { useState } from "react";

const questions = [
    { text: "I love social interaction and get energized when meeting new people." },
    { text: "In a group setting, I tend to take the lead and keep the conversations going." },
    { text: "I feel comfortable starting conversations with strangers." },
    { text: "I enjoy being the center of attention in social settings." },
];

const options = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

const styles = {
    assessment: {
        alignContent: "center",
        fontSize: "30px",
        fontWeight: "bold",
        marginBottom: "20px",
        margin: "10px auto",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "10px",
    },
    button: {
        borderRadius: "8px",
        padding: "5px",
        backgroundColor: "rgb(159, 245, 130)",
        border: "none",
        marginTop: "20px",
        width: "150px",
    },
};

function PersonalityAssessment() {
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

    const generateFeedback = (index, answer) => {
        switch (index) {
            case 0: // Social Interaction
                return answer === 4 ? 
                    "You're a social butterfly, full of energy! Keep spreading positivity, but also respect others' need for space." :
                    answer === 3 ? 
                    "You enjoy socializing but also appreciate personal time—balance is key! Try joining small social events to strengthen connections." :
                    answer === 2 ? 
                    "You prefer avoiding social interactions, and that's okay! Challenge yourself to engage in short conversations to build confidence." :
                    "You’re more introverted and value solitude. Start with one-on-one interactions or online communities to ease into social settings.";
    
            case 1: // Leadership in Groups
                return answer === 4 ? 
                    "You're a natural leader in group settings! Use this strength to uplift and support your team members." :
                    answer === 3 ? 
                    "You contribute but prefer others to take the lead. Practicing small leadership roles, like leading discussions, can boost confidence." :
                    answer === 2 ? 
                    "You tend to stay quiet and avoid taking the lead, but even small contributions make a difference! Try speaking up once in each group meeting." :
                    "You prefer staying in the background. Start by sharing ideas in safe spaces or small groups to build leadership skills.";
    
            case 2: // Initiating Conversations
                return answer === 4 ? 
                    "You confidently initiate conversations! This skill is invaluable in networking—keep it up!" :
                    answer === 3 ? 
                    "You're comfortable with strangers but may not always start the conversation. Try preparing a few icebreakers to make it easier!" :
                    answer === 2 ? 
                    "You tend to avoid initiating conversations with strangers. Practicing small talk, like commenting on shared experiences, can help." :
                    "You feel very uncomfortable approaching new people. Start with simple greetings or questions about common interests to ease into conversations.";
    
            case 3: // Being in the Spotlight
                return answer === 4 ? 
                    "You thrive in the spotlight and enjoy being noticed! Use this to inspire and motivate others." :
                    answer === 3 ? 
                    "You're comfortable being in the center of attention, but it's not your top priority—great balance! Consider public speaking to further refine this skill." :
                    answer === 2 ? 
                    "You prefer staying out of the spotlight, and that’s okay. Practicing speaking in small groups can help build confidence." :
                    "You avoid being the center of attention at all costs. Try expressing yourself through writing, art, or structured discussions to gradually step out of your comfort zone.";
    
            default:
                return "Thank you for your response! Keep growing and exploring new opportunities.";
        }
    };
    

    const generateAllFeedback = () => {
        const allFeedback = responses.map((response, index) => generateFeedback(index, response));
        setFeedback(allFeedback.join(" "));
    };

    const handleSaveFeedback = () => {
        const savedAssessments = JSON.parse(localStorage.getItem("allFeedback")) || [];
        savedAssessments.push({ timestamp: new Date().toISOString(), feedback });
        localStorage.setItem("allFeedback", JSON.stringify(savedAssessments));
        alert("Assessment feedback saved!");
    };

    const handleSavePeerFeedback = () => {
        const savedPeerFeedbacks = JSON.parse(localStorage.getItem("peerFeedback")) || [];
        savedPeerFeedbacks.push({ timestamp: new Date().toISOString(), feedback });
        localStorage.setItem("peerFeedback", JSON.stringify(savedPeerFeedbacks));
        alert("Peer feedback saved!");
    };

    const handleNext = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setLoading(true);
            setTimeout(() => {
                generateAllFeedback();
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
                            style={styles.button}
                        >
                            {loading ? "Loading..." : (currentStep < questions.length - 1 ? "Next" : "Finish")}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="completion-screen">
                    <h2 style={styles.assessment}>Assessment Complete!</h2>
                    <ul className="responses">
                        {responses.map((response, index) => (
                            <li key={index}>
                                <strong>Question {index + 1}:</strong> {options[response]}
                            </li>
                        ))}
                    </ul>
                    <p className="feedback">{feedback}</p>

                    <button onClick={handleRestart} className="restart-btn" style={styles.button}>
                        Restart Assessment
                    </button>

                    <button 
                        onClick={handleSaveFeedback} 
                        className="save-feedback-btn"
                        disabled={!feedback}  
                        style={styles.button}
                    >
                        Save Assessment Feedback
                    </button>

                    {/* <button 
                        onClick={handleSavePeerFeedback} 
                        className="save-feedback-btn"
                        style={styles.button}
                    >
                        Save Peer Feedback
                    </button> */}
                </div>
            )}

            {loading && (
                <div className="loader-container">
                    <div className="spinner"></div>
                    <p>Processing your results...</p>
                </div>
            )}
        </div>
    );
}

export default PersonalityAssessment;
