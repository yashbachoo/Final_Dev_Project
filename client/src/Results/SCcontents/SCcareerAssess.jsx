import React from 'react';

const subheading = {
  margin: "10px",
  marginTop: "100px",
  fontSize: "18px",
  fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  textAlign: "center",
  padding: "10px",
};

const paragraphStyle = {
  textAlign: "left",
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '800px',
  width: "auto",
  marginTop: "10px",
  fontSize: "20px",
};

const SCheader = {
  top: '20px',
  paddingLeft: '8px',
  paddingTop: '4px',
  color: 'white',
  fontSize: '25px',
  background: '#042c47',
  borderRadius: '10px',
  width: 'auto',
  height: '40px',
};

const highlight = {
  fontWeight: 'bold',
};

const Assessmentpic = {
  backgroundImage: "url('Assessment.jpg')",
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: '400px', // Adjust as needed
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginTop: "50px",
  borderRadius: "10px",
};

const list = {
  textAlign: 'start',
  fontSize: '17px',
};

function SCcareerAssess({ CareerRef }) {
  return (
    <div>

      <div style={subheading} >
      </div>
      <h3 style={SCheader} ref={CareerRef}>Are you conflicted about choosing your career path that fits you?</h3>
      <div style={Assessmentpic}></div>

      <div style={paragraphStyle}>
        <p>- A career assessment will surely guide you to your potential 
          career path that aligns with your strengths and preferences. The main purpose is to ensure students make informed decisions about their careers 
          by providing motivations and preferences. Ultimately, there are different types of career assessments including: </p>
        <ul style={list}>
          <li><em style={highlight}>Personality Assessments </em>
            Personality tests analyze traits, behaviors, and characteristics that 
            influence work styles and professional interactions. 
            These tests help determine which careers align with a student’s 
            natural disposition. Popular personality assessments include:</li><br></br>
          <li><em style={highlight}>Interest-Based Assessments </em>
            These assessments evaluate what subjects, activities, or industries genuinely interest a student. 
            They match personal interests to potential career paths.</li><br></br>
          <li><em style={highlight}>Skills and Aptitude Tests </em>
            These tests measure a student’s abilities in areas like problem-solving, 
            logical reasoning, numerical skills, and verbal communication. 
            They help identify strengths and weaknesses in specific subjects or fields.</li>
        </ul>
      </div>

      <hr className='linebreak'></hr>
    </div>
  );
}

export default SCcareerAssess;
