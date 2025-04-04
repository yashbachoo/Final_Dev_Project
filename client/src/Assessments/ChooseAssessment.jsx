import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Assessment from "./SkillsAssessment";
import PersonalityAssessment from "./personalityAssessment";
import InterestAssessment from "./InterestAssessment";


function ChooseAssessment() {
    const [selectedAssessment, setSelectedAssessment] = useState(null);
    const [showAssessment, setShowAssessment] = useState(false);

    const handleSelectAssessment = (assessment) => {
        if (selectedAssessment === assessment) {
            setShowAssessment(true);
            return;
        } else if (selectedAssessment === PersonalityAssessment) {
            setShowAssessment(true);
            return;
        }


        setTimeout(() => {
            setSelectedAssessment(assessment);
            setShowAssessment(true);
        }, 500); 
    };

    return (
        <div className="ChooseAssessmentContainer">
            <h1 className="heading">Choose Your Assessment</h1>
            <p>Select the type of assessment you want to take:</p>

            {/* Cards for assessment selection */}
            <div className="ChooseAssessmentCards">
                <div className="card one" onClick={() => handleSelectAssessment("personality")}>
                    <h3>Personality Assessment</h3>
                    <p>Understand your personality traits and strengths.</p>
                </div>

                <div className="card two" onClick={() => handleSelectAssessment("skills")}>
                    <h3>Skills Assessment</h3>
                    <p>Evaluate your skills and abilities.</p>
                </div>

                <div className="card three" onClick={() => handleSelectAssessment("interest")}>
                    <h3>Interest Assessment</h3>
                    <p>Discover what fields align with your interests.</p>
                </div>
            </div>

            {/* Display the selected assessment component with slide transition */}
            <div className="assessment-content">
                <CSSTransition
                    in={showAssessment && selectedAssessment === "personality"}
                    timeout={500}
                    classNames="slide"
                    unmountOnExit
                >
                    <div>
                        {selectedAssessment === "personality" && <PersonalityAssessment />}
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={showAssessment && selectedAssessment === "skills"}
                    timeout={500}
                    classNames="slide"
                    unmountOnExit
                >
                    <div>
                        {selectedAssessment === "skills" && <Assessment />}
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={showAssessment && selectedAssessment === "interest"}
                    timeout={500}
                    classNames="slide"
                    unmountOnExit
                >
                    <div>
                        {selectedAssessment === "interest" && <InterestAssessment />}
                    </div>
                </CSSTransition>
            </div>

            {/* Button to reset and go back to selection */}
            {selectedAssessment && (
                <button onClick={() => setSelectedAssessment(null)} className="back-btn">
                    ⬅ Back to Selection
                </button>
            )}
        </div>
    );
}

export default ChooseAssessment;

