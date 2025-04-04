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
    /* border: '1px solid #2980b9', */
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
    /* border: '1px solid #2980b9', */
    background: ' #2980b9',
    borderRadius: '10px',
    width: '100%',
    height: '40px',

}

const highlight = {
    fontWeight:'bold',
}



//   const Assessmentpic = {
//     backgroundImage: "url('Assessment.jpg')",
//     width: '500px',
//     marginLeft:'auto',
//     marginRight:'auto',
//     height: '400px', // Adjust as needed
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     marginTop: "50px",
//     borderRadius: "10px",
    
//   };

  const list = {
    textAlign:'start',
    fontSize:'17px',

  }

function SCcheckfuturejobs({JobRef}) {
    return (
        <div>

            <div style={subheading} >
            </div>
            <h3 style={SCheader} ref={JobRef}>Check for future job demands 
            </h3>


        <div style={paragraphStyle}>
            <p> When selecting a career path, it’s crucial to consider whether your chosen field will provide long-term job opportunities. 
                A career that aligns with emerging trends and future demands can enhance your job security and professional growth.
                By analysing the potential growth of specific industries, you can strategically position yourself for a dominant job prospect
                in the evolving job market. </p>

                <h1 style={SCSubheader}>How to analyse for potential growth in job demand.
                </h1><br></br>
                <p>When analysing, you have to take multiple factors into consideration including:
            </p>
            <ul style={list}>
                <li><em style={highlight}>Technological Advancements & Innovation </em><br></br>
                Rapid technological advancements lead to shifts in job demand.
                </li><br></br>

                <li><em style={highlight}>Economic Trends & Market Demand	
                </em><br></br>
                The economic climate directly affects job availability.
                </li><br></br>

                <li><em style={highlight}>Sustainability & Environmental Changes</em><br></br>
                With increasing focus on sustainability and climate change, green jobs are on the rise.</li>

            </ul>

            <h1 style={SCSubheader}>In conclusion
            </h1><br></br>
            <p>When planning your career path, research industries with high growth potential and evaluate whether your 
            skills align with future job demands. Keeping an eye on economic trends, technological advancements, and 
            sustainability efforts can help you make an informed career choice that leads to long-term success.
            </p>



        </div>

        <hr className='linebreak'></hr>


        </div>

    );
}

export default SCcheckfuturejobs;