import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Results() {
  const navigate = useNavigate();
  const [examType, setExamType] = useState("SC");
  const [examYear, setExamYear] = useState("");
  const [scAggregate, setScAggregate] = useState(null);
  const [hscAggregate, setHscAggregate] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // SC subjects
  const scSubjectsList = [
    "ACCOUNTING/PRINCIPLES OF ACCOUNTING",
    "ADDITIONAL MATHS",
    "ADDITIONAL GENERAL SCIENCE",
    "AGRICULTURAL SCIENCE",
    "AGRICULTURE",
    "APPLIED SCIENCE",
    "ARABIC",
    "ART",
    "ART & DESIGN",
    "BIBLE KNOWLEDGE",
    "BIOLOGY",
    "BOTANY",
    "BRITISH GOVERNMENT",
    "BUSINESS STUDIES",
    "CDT: DESIGN & COMMUNICATION",
    "CHEMISTRY",
    "CHINESE",
    "CHINESE LITERATURE",
    "COMBINED SCIENCE",
    "COMMERCE",
    "COMMERCIAL STUDIES",
    "COMPUTING/COMPUTER STUDIES/COMPUTER SCIENCE",
    "COOKERY",
    "DESIGN & TECHNOLOGY",
    "DESIGN & TECHNOLOGY (COMMUNICATION)",
    "DESIGN & TEXTILES",
    "DEVELOPMENT STUDIES",
    "ECONOMICS",
    "ECONOMICS & PUBLICS AFFAIRS",
    "ELECTRONICS",
    "ENGINEERING SCIENCE",
    "ENGLISH LANGUAGE",
    "ENGLISH LITERATURE",
    "ENTERPRISE",
    "ENVIRONMENTAL MANAGEMENT",
    "ENVIRONMENTAL STUDIES",
    "FASHION & FABRICS",
    "FASHION & TEXTILES/DRESS TEXTILES",
    "FILM STUDIES",
    "FOOD & NUTRITION",
    "FRENCH",
    "FRENCH LITERATURE",
    "GENERAL SCIENCE",
    "GEOGRAPHY",
    "GEOMETRICAL & BUILDING DRAWING",
    "GERMAN",
    "GLOBAL PERSPECTIVE",
    "GLOBAL POLITICS",
    "GMD",
    "GRAPHICAL COMMUNICATION",
    "GREEK",
    "HEALTH SCIENCE",
    "HINDI",
    "HINDUISM",
    "HISTORY",
    "HOME ECONOMICS",
    "HOME MANAGEMENT",
    "HUMAN & SOCIAL BIOLOGY",
    "ICT",
    "INFORMATION TECHNOLOGY",
    "INTRO DIPLOMA TO IT",
    "ISLAMIC RELIGION & CULTURE",
    "ISLAMIC RELIGIOUS KNOWLEDGE",
    "ISLAMIC STUDIES",
    "ISLAMYAT",
    "KREOL",
    "LATIN",
    "LAW",
    "LITERATURE IN HINDI",
    "LOGIC",
    "MANDARIN",
    "MARATHI",
    "MARINE SCIENCE",
    "MATHEMATICS",
    "MEDIA STUDIES",
    "METALWORK",
    "METALWORK (ENGINEERING)",
    "MODERN STANDARD CHINESE",
    "MUSIC",
    "OTHERS",
    "PHYSICAL EDUCATION",
    "PHYSICAL SCIENCE",
    "PHYSICS",
    "POLITICS & GOVERNMENT",
    "PSYCHOLOGY",
    "PURE MATHS",
    "RELIGIOUS STUDIES",
    "SANSKRIT",
    "SCIENCE FOR ALL",
    "SHONA",
    "SOCIOLOGY",
    "SPANISH",
    "STATISTICS",
    "SURVEYING",
    "TAMIL"
  ];
  
  

  // HSC subjects
  const hscSubjectsList = [
    "ACCOUNTING",
    "AGRICULTURE",
    "APPLIED MATHS",
    "ARABIC",
    "ART",
    "ART & DESIGN",
    "BIBLICAL STUDIES",
    "BIOLOGY",
    "BOTANY",
    "BUSINESS STUDIES",
    "CHEMISTRY",
    "CHINESE",
    "COMPUTING/COMPUTER STUDIES/COMPUTER SCIENCE",
    "COOKERY",
    "DESIGN & TECHNOLOGY",
    "DESIGN & TECHNOLOGY (COMMUNICATION)",
    "DESIGN & TEXTILES",
    "DIVINITY",
    "ECONOMICS",
    "ECONOMICS & PUBLIC AFFAIRS",
    "ELECTRONICS",
    "ENGLISH / ENGLISH LITERATURE",
    "ENTERPRISE",
    "ENVIRONMENTAL MANAGEMENT",
    "ENVIRONMENTAL STUDIES",
    "FASHION & TEXTILES/DRESS TEXTILES",
    "FILM STUDIES",
    "FOOD STUDIES",
    "FRENCH",
    "FURTHER MATHS",
    "GENERAL STUDIES",
    "GEOGRAPHY",
    "GEOLOGY",
    "GERMAN",
    "GLOBAL PERSPECTIVE",
    "GLOBAL POLITICS",
    "GMD",
    "GOVERNMENT & POLITICAL",
    "GRAPHICAL COMMUNICATION",
    "GREEK",
    "HINDI",
    "HINDUISM",
    "HISTORY",
    "HOME ECONOMICS",
    "ICT",
    "INFORMATION TECHNOLOGY",
    "INTRO DIPLOMA TO IT",
    "ISLAMIC STUDIES",
    "ISLAMYAT",
    "ITGS (IT in a Global Society)",
    "Kreol",
    "LATIN",
    "LAW",
    "MANAGEMENT OF BUSINESS",
    "MARATHI",
    "MARINE SCIENCE",
    "MATHEMATICS",
    "METALWORK",
    "MUSIC",
    "OTHERS",
    "PHYSICAL EDUCATION",
    "PHYSICAL SCIENCE",
    "PHYSICS",
    "POLITICS & GOVERNMENT",
    "PSYCHOLOGY",
    "PUBLIC AFFAIRS",
    "PURE MATHS",
    "RELIGIOUS STUDIES",
    "SANSKRIT",
    "SOCIOLOGY",
    "SPANISH",
    "STATISTICS",
    "SURVEYING",
    "TAMIL",
    "TELUGU",
    "Theatre",
    "THINKING SKILLS",
    "TRAVEL & TOURISM",
    "URDU",
    "WOODWORK",
    "WORLD AFFAIRS",
    "ZOOLOGY"
  ];
  

  // Subsidiary subjects for HSC
  const subsidiarySubjectsList = [
    "ACCOUNTING",
    "AGRICULTURE",
    "APPLIED MATHS",
    "ARABIC",
    "ART",
    "ART & DESIGN",
    "BIBLICAL STUDIES",
    "BIOLOGY",
    "BOTANY",
    "BRITISH GOVERNMENT",
    "BUSINESS STUDIES",
    "CHEMISTRY",
    "CHINESE",
    "COMMERCE",
    "COMPUTING/COMPUTER STUDIES/COMPUTER SCIENCE",
    "COOKERY",
    "DESIGN & TECHNOLOGY",
    "DESIGN & TEXTILES",
    "DIVINITY",
    "ECONOMICS",
    "ELECTRONICS",
    "ENGLISH",
    "ENGLISH LITERATURE",
    "ENTERPRISE",
    "ENVIRONMENTAL MANAGEMENT",
    "ENVIRONMENTAL STUDIES",
    "FASHION & TEXTILES/DRESS TEXTILES",
    "FILM STUDIES",
    "FOOD STUDIES",
    "FRENCH",
    "FRENCH LANGUAGE",
    "FRENCH LITERATURE",
    "FURTHER FRENCH STUDIES",
    "FURTHER MATHS",
    "FURTHER RELIGIOUS STUDIES",
    "GENERAL PAPER",
    "GEOGRAPHY",
    "GEOLOGY",
    "GERMAN",
    "GERMAN LANGUAGE",
    "GLOBAL PERSPECTIVE",
    "GLOBAL POLITICS",
    "GMD",
    "GRAPHICAL COMMUNICATION",
    "GREEK",
    "HINDI",
    "HINDI",
    "HINDUISM",
    "HISTORY",
    "HOME ECONOMICS",
    "ICT",
    "INFORMATION TECHNOLOGY",
    "INTRO DIPLOMA TO IT",
    "ISLAMIC STUDIES",
    "ISLAMYAT",
    "ITGS (IT in a Global Society)",
    "Kreol",
    "LATIN",
    "LAW",
    "LITERATURE IN HINDI",
    "MANAGEMENT OF BUSINESS",
    "MARATHI",
    "MARINE SCIENCE",
    "MATHEMATICS",
    "METALWORK",
    "MUSIC",
    "OTHERS",
    "PHYSICAL EDUCATION",
    "PHYSICAL SCIENCE",
    "PHYSICS",
    "POLITICS & GOVERNMENT",
    "PSYCHOLOGY",
    "PUBLIC AFFAIRS",
    "PURE MATHS",
    "RELIGIOUS STUDIES",
    "SOCIOLOGY",
    "SPANISH",
    "STATISTICS",
    "SURVEYING",
    "TAMIL",
    "TELUGU",
    "Theatre",
    "THINKING SKILLS",
    "TRAVEL & TOURISM",
    "URDU",
    "WOODWORK",
    "WORLD AFFAIRS"
  ];

  // Uppercase letter grades for SC and HSC main subjects
  const scMainGrades = ["A+", "A", "B+", "B", "C+", "C", "D", "F"];
  const hscMainGrades = ["A", "B", "C", "D", "E"];

  // Lowercase letter grades for HSC subsidiary subjects
  const subsidiaryGrades = ["a", "b", "c", "d", "f"];

  // SC and HSC grade to score mappings
  const scGradeToScore = {
    "A+": 1, "A": 2, "B+": 3, "B": 4, "C+": 5, "C": 6, "D": 7, "F": 8,
  };

  const hscGradeToScore = {
    "A": 12, "B":8 , "C":6 , "D": 4, "E": 5,
  };

  const [SCresults, setSCResults] = useState(
    Array.from({ length: 8 }, (_, i) => ({
      subject: scSubjectsList[i % scSubjectsList.length], 
      grade: "A",
    }))
  );

  const [HSCresults, setHSCResults] = useState(
    Array.from({ length: 3 }, (_, i) => ({
      subject: hscSubjectsList[i % hscSubjectsList.length], 
      grade: "A",
    }))
  );

  const [HSCsubsidiaryResults, setHSCSubsidiaryResults] = useState(
    Array.from({ length: 2 }, (_, i) => ({
      subject: subsidiarySubjectsList[i % subsidiarySubjectsList.length], 
      grade: "a",
    }))
  );

  const handleChange = (index, field, value, isHSC, isSubsidiary) => {
    if (isSubsidiary) {
      setHSCSubsidiaryResults(prev => {
        const updatedResults = [...prev];
        updatedResults[index] = { ...updatedResults[index], [field]: value };
        return updatedResults;
      });
    } else {
      const setResults = isHSC ? setHSCResults : setSCResults;
      setResults(prev => {
        const updatedResults = [...prev];
        updatedResults[index] = { ...updatedResults[index], [field]: value };
        return updatedResults;
      });
    }
  };
  

  const removeSubject = (index) => {
    if (SCresults.length > 4) {
      setSCResults(SCresults.filter((_, i) => i !== index));
    }
  };

  const addSubject = () => {
    if (SCresults.length < scSubjectsList.length) {
      setSCResults([
        ...SCresults,
        { subject: scSubjectsList[SCresults.length % scSubjectsList.length], grade: "A" },
      ]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Collect the selected subjects for SC and HSC
    const selectedSCSubjects = SCresults.map(result => result.subject);
    const selectedHSCSubjects = HSCresults.map(result => result.subject);
  
    if (examType === "SC") {
      setIsSubmitted(true);
      setTimeout(() => setExamType("HSC"), 500);
    } else {
      const scAggregate = calculateAggregate(SCresults, scGradeToScore);
  
      // Filter main subjects only for HSC results
      const hscMainSubjects = HSCresults.filter(result =>
        hscSubjectsList.includes(result.subject)
      );
  
      const hscAggregate = calculateAggregate(hscMainSubjects, hscGradeToScore);
  
      // Prepare the payload to send to the backend
      const payload = {
        scAggregate,
        hscAggregate,
        selectedSCSubjects,
        selectedHSCSubjects,
      };
  
      console.log("Data to be sent to backend:", payload);
  
      // Send the data to the next page (UniversityRecommendations)
      setScAggregate(scAggregate);
      setHscAggregate(hscAggregate);
  
      navigate("/UniversityRecommendations", {
        state: {
          scAggregate,
          hscAggregate,
          examType,
          selectedSCSubjects,  // Add selected SC subjects
          selectedHSCSubjects, // Add selected HSC subjects
        },
      });
    }
  };
  
// Handles all the subjects that has been selected
// const handleSubjectSelection = (e, index) => {
//   const updatedSubjects = [...selectedSubjects];
//   updatedSubjects[index] = { ...updatedSubjects[index], subject: e.target.value };
//   setSelectedSubjects(updatedSubjects);
// };



  
  

  const calculateAggregate = (results, gradeToScore) => {
    return results.reduce((total, { grade }) => total + (gradeToScore[grade] || 0), 0);
  };
  

  return (
    <div>
      <div className="SC-container">
        <h1 className="SC-header">{examType} Results</h1>
        <h5>Please enter your {examType} results.</h5>

        <motion.div
          key={examType}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <form 
          onSubmit={(e) => { 
            e.preventDefault(); // Prevent default form submission behavior
            handleSubmit(e);
 
            }} className="exam-form ">


            <div className="SC-inputyear">
              <label className="ExamYear">Exam Year</label>
              <input
                type="number"
                value={examYear}
                onChange={(e) => {
                  setExamYear(e.target.value);
                }}
                required
                className="yearinput"
              />
            </div>

            <div className="subject-header-row">
              <span className="subject-header">Input your subjects</span>
              <span className="Grade-header">Input grades</span>
            </div>

            {(examType === "SC" ? SCresults : HSCresults).map((result, index) => (
              <div key={index} className="subject-row">
                <select
                  className="SC-input subject"
                  value={result.subject}
                  onChange={(e) => {
                    handleChange(index, "subject", e.target.value, examType === "HSC", false);
                    // handleSubjectSelection(e, index);
                  }}
                  required
                  placeholder={"Input your subject"}
                >
                  {(examType === "SC" ? scSubjectsList : hscSubjectsList).map((subject) => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>

                <select
                  className="SC-input grade"
                  value={result.grade}
                  onChange={(e) => handleChange(index, "grade", e.target.value, examType === "HSC", false)}
                  required
                  placeholder={"Grade"}
                >
                  {(examType === "SC" ? scMainGrades : hscMainGrades).map((grade) => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>

                {/* Add Remove buttons only for SC form */}
                {examType === "SC" && (
                  <div className="subject-actions">
                    {SCresults.length > 5 && (
                      <button
                        type="button"
                        onClick={() => removeSubject(index)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    )}

                  </div>
                )}
              </div>
            ))}

            {/* Only show subsidiary subjects for HSC */}
            {examType === "HSC" && (
              <>
                <div className="subject-header-row">
                  <span className="subject-header">Subsidiary Subject</span>
                  <span className="Grade-header">Input Grades</span>
                </div>
                {HSCsubsidiaryResults.map((result, index) => (
                  <div key={index} className="subject-row">
                    <select
                      className="SC-input subject"
                      value={result.subject}
                      onChange={(e) => handleChange(index, "subject", e.target.value, true, true)}
                      required
                    >
                      {subsidiarySubjectsList.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>

                    <select
                      className="SC-input grade"
                      value={result.grade}
                      onChange={(e) => handleChange(index, "grade", e.target.value, true, true)}
                      required
                    >
                      {subsidiaryGrades.map((grade) => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </>
            )}

            <button
              type="submit"
              className="submit-btn"
            >
              {examType === "SC" ? "Next" : "Submit"}
            </button>

            {SCresults.length < scSubjectsList.length && (
                      <button
                        type="button"
                        onClick={addSubject}
                        className="add-btn"
                      >
                        Add Subject
                      </button>
                    )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
