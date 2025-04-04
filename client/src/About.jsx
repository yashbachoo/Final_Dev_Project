import React from "react";




const About = () => {
    const containerStyle = {
      maxWidth: "800px",
      margin: "0 auto",
      marginTop:"100px",
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
    };
  
    const headingStyle = {
      color: "#2c3e50",
      borderBottom: "2px solid #3498db",
      paddingBottom: "0.5rem",
    };
  
    const paragraphStyle = {
      lineHeight: "1.6",
    };
  
    const italicStyle = {
      fontStyle: "italic",
    };
  
    const listStyle = {
      marginLeft: "1.5rem",
      lineHeight: "1.6",
    };
  
    const contactListStyle = {
      listStyle: "none",
      paddingLeft: 0,
      lineHeight: "1.6",
    };
  
    const dividerStyle = {
      margin: "2rem 0",
      border: "1px solid #ecf0f1",
    };
  
    const footerStyle = {
      textAlign: "center",
      marginTop: "2rem",
      color: "#7f8c8d",
    };
  
    const smallTextStyle = {
      fontSize: "0.9rem",
    };
  
    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>About Academic Pathways</h1>
  
        <p style={paragraphStyle}>
          <strong>This platform is developed by the Global Academic Pathways Consortium (GAPC)</strong>
          <br />
          The Global Academic Pathways Consortium (GAPC) is a collaborative network of universities, colleges, and 
          educational organizations dedicated to empowering students worldwide to make informed academic decisions. 
          Our mission is to bridge gaps in educational access by providing free, unbiased guidance and resources 
          tailored to learners at all stages. Support is delivered through two flagship platforms:
        </p>
  
        <ul style={listStyle}>
          <li><strong>EduGuide:</strong> Designed for K-12 students and educators (launched in 2015)</li>
          <li><strong>UniPath:</strong> Focused on higher education and postgraduate pathways (launched in 2018)</li>
        </ul>
  
        <p style={paragraphStyle}>
          GAPC is sustained through partnerships and a subscription model. Institutions outside our free-access 
          regions can subscribe to unlock full platform features.
        </p>
  
        <p style={{ ...paragraphStyle, ...italicStyle }}>
          The consortium is headquartered at Stanford University.
        </p>
  
        <hr style={dividerStyle} />
  
        <h2 style={headingStyle}>Data Sources and Partnerships</h2>
        <p style={paragraphStyle}>
          To ensure accuracy, we collaborate with leading organizations and integrate data from trusted third-party providers:
        </p>
  
        <ul style={listStyle}>
          <li><strong>K-12 curriculum and program data:</strong> U.S. Department of Education & international boards</li>
          <li><strong>University rankings and program details:</strong> QS World University Rankings & Times Higher Education</li>
          <li><strong>Career and salary trends:</strong> Bureau of Labor Statistics (BLS) & OECD reports</li>
          <li><strong>Scholarship and financial aid:</strong> Aggregated from Scholarship.com & government databases</li>
        </ul>
  
        <hr style={dividerStyle} />
  
        <h2 style={headingStyle}>Contact Us</h2>
        <ul style={contactListStyle}>
          <li><strong>Email:</strong> academicpathways@stanford.edu</li>
          <li><strong>Phone:</strong> +1 (650) 123-4567</li>
          <li><strong>Address:</strong> Global Academic Pathways Consortium, 450 Serra Mall, Stanford, CA 94305</li>
        </ul>
  
        <hr style={dividerStyle} />
  
        <div style={footerStyle}>
          <h3>Welcome to GAPC</h3>
          <p style={smallTextStyle}>
            <strong>Global Academic Pathways Consortium</strong>
            <br />
            Formerly Global Education Network (2009-2020)
          </p>
        </div>
      </div>
    );
  };
  
  export default About;
  