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



const ExplorePicture1 = {
    backgroundImage: 'url("Quizpic.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '180px', // This sets the height of the image
};




function Explore({exploreRef}){
    return (
        <div style={wrapper}>

            <div style={subheading} ref={exploreRef}>
                <h1>Explore your options</h1>
            </div>

        <div style={paragraphStyle}>
            <p>
            </p>
        </div><br></br><br></br>


        <div className='card-container'>
                <div className="card1">
                    <div style={ExplorePicture1} className="card-img-top" alt="Card image" />
                    <div className="card-body">
                        <h5 className="card-title">SC</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <Link className="card-link" to="/SCresults">Go to page</Link>
                    </div>
                </div>
            </div>





        



        <hr className='linebreak'></hr><br></br>


        </div>

    );
}

export default Explore;