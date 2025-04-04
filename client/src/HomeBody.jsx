import React, { useRef } from 'react';
import Introduction from './introduction';
import Skills from './Skills';
import Explore from './Explore';
import Scolarships from './scolarships';

function HomeBody() {
    const introRef = useRef(null);
    const skillsRef = useRef(null);
    const exploreRef = useRef(null);
    const scolarshipRef = useRef(null);

    const smoothScroll = (targetRef, duration) => {
        const targetPosition = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const easeInOutCubic = (time) => {
            return (time < 0.5) ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
        };

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutCubic(timeElapsed / duration) * distance + startPosition;
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    };

    const scrollToIntroduction = () => {
        if (introRef.current) {
            smoothScroll(introRef, 2000);  
        }
    };

    const scrollToSkills = () => {
        if (skillsRef.current) {
            smoothScroll(skillsRef, 2000);  
        }
    };

    const scrollToExplore = () => {
        if (skillsRef.current) {
            smoothScroll(exploreRef, 2000);  
        }
    };


    const scrollToScolarship = () => {
        if (skillsRef.current) {
            smoothScroll(scolarshipRef, 2000);  
        }
    };

    return (
        <div>

            <div className="hstack">
                <nav className="nav-menu p-2">
                    <ul>
                        <li className="list2" onClick={scrollToIntroduction}>Introduction</li>
                        <li className="list2" onClick={scrollToSkills}>MySkills</li>
                        <li className="list2" onClick={scrollToExplore}>Explore</li>
                        <li className="list2" onClick={scrollToScolarship}>Tips </li>
                    </ul>
                </nav>
            </div>

            <div className="Homecontainer">
                <Introduction introRef={introRef} />
                <Skills skillsRef={skillsRef} />
                <Explore exploreRef={exploreRef}/>
                <Scolarships scolarshipRef={scolarshipRef}/>
            </div>
        </div>
    );
}

export default HomeBody;
