import React from 'react';
import { Link } from 'react-router-dom';



const paragraphStyle = {
    textAlign: "left",
    marginLeft:'auto',
    maxWidth:'800px',
    marginRight:'auto',
    width: "auto",
    marginTop: "10px",
    fontSize: "20px",
}

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
}

const SCSubheader={
    marginTop: '50px',
    paddingLeft: '8px',
    paddingTop: '4px',
    color: 'white',
    fontSize: '25px',
    background: ' #2980b9',
    borderRadius: '10px',
    width: '100%',
    height: '40px',

}

const SCaggregate={
    backgroundImage:"url('SCaggregate.png')",
    width: '400px',
    marginLeft:'auto',
    marginRight:'auto',
    height: '250px', // Adjust as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: "10px",
}


//   const Assessmentpic = {
//     backgroundImage: "url('Assessment.jpg')",
//     width: '500px',
//     marginLeft:'auto',
//     marginRight:'auto',

//     height: '400px', // Adjust as needed
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     marginTop: "100px",
//     borderRadius: "10px",
    
//   };

function SCExplore({ExploreRef}){
    return (
        <div>

            <h1 style={SCheader} ref={ExploreRef}>Explore your career options</h1>

        <div style={paragraphStyle}>
            <p>When choosing an educational institution, one of the most important steps is ensuring that you meet the admission requirements. 
                This will help you avoid wasting time on institutions where your chances of acceptance may be low. Seeking guidance from school counselors, teachers, 
                or past applicants can provide valuable insights into the process and ways to strengthen applications. By thoroughly evaluating these factors, SC students 
                can strategically apply to institutions that align with their academic 
                strengths and career aspirations, increasing their chances of securing admission.</p><br></br><br></br>
                <div style={SCaggregate}></div>

                <p>Carefully review the admission criteria for each institute, including academic qualifications, required subjects, and minimum grade expectations.</p>
        </div><br></br>
            <Link to={"/SCresults"}>Click here</Link><p>to find out your eligibility.</p>
        <h1 style={SCSubheader}>How to choose.</h1>

        <p style={paragraphStyle}>Available Programs & Specializations
        Look for institutions that offer programs aligning with your career goals. Consider specialized courses, faculty expertise, and research opportunities.</p>


        <h1 style={SCSubheader}>Tuition Fees & Financial Aid</h1>
        <p style={paragraphStyle}>Higher education can be expensive, so research tuition fees and additional costs like 
             and study materials. Look into scholarship opportunities,
             financial aid, and student loans to ease the financial burden.</p>


        <hr className='linebreak'></hr>


        </div>

    );
}

export default SCExplore;