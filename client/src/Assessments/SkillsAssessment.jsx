import React, { useState } from "react";



var questions = [
    { text: "I strive for accuracy and precision in all my tasks." },
    { text: "I notice even the smallest inconsistencies and errors in my work." },
    { text: "I am able to maintain high standards even under tight deadlines." },
    { text: "I frequently check my work to ensure it meets the required standards." },
    // { text: "Improving and refining systems or processes is a priority for me." },
    // { text: "I am able to focus on a task for long periods of time without losing concentration." },
    // { text: "I am able to multitask effectively and manage my time well." },
    // { text: "I am able to prioritize tasks effectively and manage my time well." },
    // { text: "I am able to work well under pressure and meet tight deadlines." },
    // { text: "I am able to remain calm and focused in stressful situations." },
];

var options = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

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




function Assessment() {
    const [currentStep, setCurrentStep] = useState(0);
    const [responses, setResponses] = useState(Array(questions.length).fill(null));
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleSelect = (index) => {
        setResponses((prevResponses) => {
            const newResponses = [...prevResponses];
            newResponses[currentStep] = index;
            return newResponses;
        });
    };



    const progress = showResults ? 100 : ((currentStep) / questions.length) * 100;

    const analyzeResponses = () => {
        const scores = {
            0: 1, // Strongly Disagree
            1: 2, // Disagree
            2: 3, // Neutral
            3: 4, // Agree
            4: 5  // Strongly Agree
        };

        const TypingEffect = ({ text }) => {
            console.log("TypingEffect received:", text);
            return <p>{text}</p>;
        };
        
    
        const totalScore = responses.reduce((sum, response) => sum + scores[response], 0);
        const avgScore = totalScore / questions.length;
    
        let feedbackMessages = [
            <TypingEffect key="score" text={`Your avg is: ${avgScore}`} />
        ];
    
        if (avgScore <= 2.5) {
            feedbackMessages.push(<TypingEffect key="focus" text={<p>
                Your results suggest that attention to detail, maintaining high standards,<br></br>
                and working under pressure may not be your strongest areas. <br></br>
                You might benefit from focusing on developing precision, consistency, and better task management strategies. <br></br>
                Try to practice refining your processes, staying calm under stress, and improving your focus and multitasking abilities.<br></br> 
                Taking time to refine your work will help in achieving better results and handling tight deadlines more efficiently.</p>} />);
        } else if (avgScore >= 2.5 && avgScore <= 3.5) {
            feedbackMessages.push(<TypingEffect key="balanced" text={<p>
                Your results indicate that you have some strong qualities,<br></br>
                such as a general focus on accuracy and the ability to maintain standards in certain situations. However, <br></br>
                there’s still room for growth in areas like multitasking, managing pressure, and fine-tuning your processes for<br></br>
                 higher consistency. You might benefit from refining your approach to time management and improving your concentration <br></br>
                 over long periods. Consider focusing on developing these skills further to enhance your ability to handle complex tasks
                  under tight deadlines and improve your overall performance.</p>} />);
        } else {
            feedbackMessages.push(<TypingEffect key="precision" text={<p>
                Here’s what your skills say about you:<br></br>

                🎯 Meticulous & Detail-Oriented: You naturally spot inconsistencies and errors, 
                ensuring that everything you work on meets the highest quality.<br></br>

                ✔️ Reliability Under Pressure: Even in high-stress environments, 
                you maintain focus, meet deadlines, and deliver consistent results.<br></br>

                ✔️ Process Improvement Mindset: You not only follow standards but actively refine and 
                improve systems, making you a valuable asset in leadership and optimization roles.<br></br>

                ✔️ Time Management Mastery: Your ability to prioritize and multitask allows you to handle 
                multiple responsibilities efficiently.<br></br>

                ✔️ Calm & Composed: You stay collected even in challenging situations, which is a crucial 
                skill for decision-making and leadership.</p>} />);
        }
    
        setFeedback(feedbackMessages);  // Set all messages at once
    };
    
    

    const handleNext = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setLoading(true); // Show loader
            setTimeout(() => {
                analyzeResponses(); // Analyze results after delay
                setShowResults(true);
                setLoading(false);
                handleSaveFeedback(); // Save the latest feedback (overwriting old ones)

            }, 2000); // Simulate 2-second loading
        }
    };

    const handleSaveFeedback = () => {
        // Create a new feedback object with a timestamp or unique ID
        const newFeedback = {
            timestamp: new Date().toISOString(),
            feedback: feedback // This is the feedback generated from the assessment
        };
    
        // Save the new feedback to localStorage, replacing any old feedback
        localStorage.setItem("latestAssessmentFeedback", JSON.stringify(newFeedback));
    
        console.log("Feedback saved:", newFeedback);
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



    return (
        <div className="Assess-container">

            <div className="progressbarcontainer">
                <div className="progress-bar progress" style={{ width: `${progress}%` }}></div>
            </div>

            {!showResults ? (
                <div className="Assess-block">
                    <h2 className="Step"> {currentStep + 1}/{questions.length}</h2>
                    <p className="Questions">{questions[currentStep].text}</p>
                    <div className="Assess-btn">
                        {options.map((option, index) => (
                            <button
                                key={index}
                                id={`option-${index}`}
                                data-option={option}
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
                            id="Next"
                        >
                            {loading ? "Loading..." : (currentStep < questions.length - 1 ? "Next" : "Finish")}
                        </button>
                        <button onClick={handleBack} className="nav-btn back-btn" style={Back}>
                            Back
                        </button>
                    </div>
                </div>
            ) : (
                

                <div className="completion-screen">
                    <h2 style={accessment}>Assessment Complete!</h2>

                    <ul className="responses">
                        {responses.map((response, index) => (
                            <li key={index}>
                                <strong>Question {index + 1}:</strong> 
                                <span> {options[response]}</span>
                            </li>
                        ))}
                    </ul>


                    <p className="feedback">{feedback}</p>

                </div>
            )}
            <div>
            <button onClick={handleRestart} className="restart-btn">
                        Restart Assessment
            </button>
                
            </div>
            <button 
                    onClick={handleSaveFeedback} 
                    className="save-feedback-btn"
                    disabled={!feedback}  
                >
                    Save Feedback
                </button>
            
            {loading && (
                <div className="loader-container">
                    <div className="spinner"></div>
                    <p>Processing your results...</p>
                </div>
            )}


        </div>
    );
}

export default Assessment;
