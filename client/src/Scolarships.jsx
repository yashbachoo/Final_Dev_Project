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
    backgroundImage: "url('directions.jpg')",
    width: '100%',
    height: '400px', // Adjust as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: "10px",
    borderRadius: "10px",
    
  };

function Scolarships({scolarshipRef}) {
    return (
        <div style={wrapper}>

            <div style={subheading} ref={scolarshipRef}>
                <h1>Academic tips</h1>
            </div>

        <div style={paragraphStyle}>
            <p>Navigating your academic and career journey can feel overwhelming, but the right guidance can make all the difference. 
                Career assessments, which include personality tests, interest-based evaluations, and skills assessments, help students 
                better understand their strengths and preferences, ensuring they make informed career decisions. Additionally, choosing 
                the right educational institution and program plays a key role in shaping your future. By considering factors like 
                available programs, tuition fees, and future job demands, students can position themselves for success. Combining thoughtful
                research, counseling, and strategic planning will empower you to make decisions that align with both your academic
            abilities and long-term career goals.
            </p>
        </div><br></br><br></br>

        <div style={skillspicture}></div>

        <Link className='bodybtn' to="/SCcontents">More tips</Link>
        
        <hr className='linebreak'></hr><br></br>


        </div>

    );
}

export default Scolarships;