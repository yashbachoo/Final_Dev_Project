import Navbar from './Navbar';
import ImageSlider from "./ImageSlider";
import HomeBody from './HomeBody';
import React from 'react';


  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    height: "500px",
    BackgroundSize: "cover",
    margin: "0 auto",

  };


function Home(){

    const slides = [
        { url: "background.jpg", title: "", text: "Plan your path to success" },
        { url: "homepage.jpg", title: "", text: "Explore endless opportunities" },
        { url: "opportunities.jpg", title: "Forest", text: "Look for opportunities" },
    ];
    
    return(
    <div>
        <Navbar />  
        <div>
            {/* <Background /> */}
        </div>
        <div>
           <div style={containerStyles}>
            <ImageSlider slides={slides} />
           </div>           
       </div>
       <div>
        <HomeBody/>
       </div>
    </div>
    )
}

export default Home;