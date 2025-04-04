import React from 'react';

const subheading = {
    margin: "10px",
    marginTop: "100px",
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




  const skillspicture = {
    backgroundImage: "url('newobjectivepic.jpg')",
    width: '100%',
    height: '400px', // Adjust as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: "100px",
    borderRadius: "10px",
    
  };

function Introduction({introRef}) {
    return (
        <div>

            <div style={subheading} ref={introRef}>
                <h1>Our Aim</h1>
            </div>

        <div style={paragraphStyle}>
            <p>Our main goal is to offer a simple yet detailed understanding of the various 
                career paths awaiting our Mauritian Students seeking to take a step forward into the professional world, 
                whether on a national or international horizon. Our expertise covers a wide range of constant opportunity accelerated fields 
                like Technology, Finance, Marketing, Management and more. We seek to provide the proper guidance and ensure to present all existing 
                career opportunities and choices to each individual, specially those uncertain and indecisive students who are yet to find their own journey 
                by offering a throughout analysis of one’s skills, qualifications and passion followed by a well drafted and elaborated plan on how to reach 
                their desired target.</p>
        </div>

        <div style={skillspicture}></div>
        <hr className='linebreak'></hr>


        </div>

    );
}

export default Introduction;