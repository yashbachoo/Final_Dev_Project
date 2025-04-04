import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Signup from './register';
import Login from './Login';
import Home from './Home';
import Footer from './Footer';
import TestSkills from './Assessments/TestSkills';
import Navbar from './Navbar';
import SCresults from './Results/SCresults';
import SCAllcontents from './Results/SCAllcontents';
import UniversityRecommendations from './Results/UniversityRecommendations';
import UserProfile from './UserProfile';  
import Dashboard from './Dashboard';
import About from './About';
import NotLoggedIn from './NotLoggedIn';

function App() {
    return (
        <Router   future={{
            v7_relativeSplatPath: true,
          }}>
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <main style={{ flex: 1 }}> 
                    <Routes>
                        <Route path='NotLoggedIn' element={<NotLoggedIn/>}/>
                        <Route path="/SCresults" element={<SCresults />} />
                        <Route path='/About' element={<About/>}/>
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route path="/register" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/UserProfile" element={<UserProfile />} /> 
                        <Route path="/TestSkills" element={<TestSkills />} />
                        <Route path="/" element={<Home />} />
                        <Route path='/SCcontents' element={<SCAllcontents />} />
                        <Route path="/UniversityRecommendations" element={<UniversityRecommendations />} />
                    </Routes>
                </main>
            </div>
            
            <Navbar />
            <Footer />
        </Router>
    );
}

export default App;
