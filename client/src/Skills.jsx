import React from 'react';
import { Link } from 'react-router-dom';

const subheading = {
    margin: "10px",
    marginTop: "5px",
    fontSize: "18px",
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    textAlign: "center",
    padding: "10px",


}

const paragraphStyle = {
    textAlign: "center",
    width: "800px",
    marginTop: "10px",
    fontSize: "20px",
}

const wrapper = {
    paddingTop: "20px",
}



  const skillspicture = {
    backgroundImage: "url('Skills.jpg')",
    width: '100%',
    height: '400px', // Adjust as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: "10px",
    borderRadius: "10px",
    
  };

function Skills({skillsRef}) {
    return (
        <div style={wrapper}>

            <div style={subheading} ref={skillsRef}>
                <h1>MySkills</h1>
            </div>

        <div style={paragraphStyle}>
            <p>
            This feature enables one to self assess one’s personal strengths and weaknesses. 
            The ability to recognize one’s weaknesses and strengths is pivotal especially when still in pursuit and exploring in this competition-driven career trajectory. 
            Allowing one to recognize their own competence not only help in terms of boost of confidence but allows one to improve and even perfection required natural personality 
            traits one is expected to have in a specific work field.  For example, a person choosing Law is expected to be sharp, detail-oriented and ability to ingrain mass knowledge.

            </p>
        </div><br></br><br></br>

        <div style={skillspicture}></div>
        <Link className='bodybtn' to="/TestSkills">Test myself</Link>
        <hr className='linebreak'></hr><br></br>


        </div>

    );
}

export default Skills;