import React from 'react';
import { Link } from 'react-router-dom';

// const subheading = {
//     margin: "10px",
//     marginTop: "100px",
//     fontSize: "18px",
//     fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
//     textAlign: "center",
//     padding: "10px",


// }

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
    marginTop: '50px',
    paddingLeft: '8px',
    paddingTop: '4px',
    color: 'white',
    fontSize: '25px',
    /* border: '1px solid #2980b9', */
    background: '#042c47',
    borderRadius: '10px',
    width: 'auto',
    height: '40px',
}

const SCSubheader={
    paddingLeft: '8px',
    paddingTop: '4px',
    color: 'white',
    fontSize: '25px',
    /* border: '1px solid #2980b9', */
    background: ' #2980b9',
    borderRadius: '10px',
    width: '100%',
    height: '40px',

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

function SCcounseling({counselingRef}) {
    return (
        <div>

            <h1 style={SCheader} ref={counselingRef}>Seek advice from counselors</h1>

        <div style={paragraphStyle}>
            <p>Selecting the right educational institution is a crucial decision that can shape your future career opportunities. 
                Career counseling helps students make informed choices by assessing their
                 strengths, career goals, and academic needs. Here’s how counseling can guide you in choosing the best institution:</p><br></br><br></br>

        </div>

        <h1 style={SCSubheader}>Understanding Your Career Goals</h1>

        <p style={paragraphStyle}>A counselor will help you identify your interests, strengths, and long-term aspirations,
            explore potential career paths that align with your skills and
            determine whether a university, college, or vocational institute best fits your goals..</p>


        <h1 style={SCSubheader}>Use Online Counseling Platforms</h1>
        <p style={paragraphStyle}>Online platforms provide convenient access to career and academic counseling.      
            Websites like <Link to="https://www.mymajors.com"> MY Majors </Link>
              and <Link to="https://www.careerexplorer.com/community/"> CareerExplorer </Link> will help you explore study paths and career options. Platforms 
             such as EdX and LinkedIn Learning offer courses and expert advice to enhance your skills. These platforms 
             offer flexibility, allowing you to seek guidance at any time.
             Just ensure you verify the credibility of the counselors and platforms for reliable advice..</p>


        <hr className='linebreak'></hr>


        </div>

    );
}

export default SCcounseling;