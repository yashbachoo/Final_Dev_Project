import React, { useRef } from 'react';
import SCcareerAssess from './SCcontents/SCcareerAssess';
import Scrolltosccontents from './SCcontents/Scrolltosccontents';
import SCExplore from './SCcontents/SCExplore';
import SCcheckfuturejobs from './SCcontents/SCcheckfuturejobs';
import SCcounseling from './SCcounseling';
import MiniImageSlider2 from './MiniImageSlider2';

function SCAllcontents() {
  const CareerRef = useRef(null);
  const ExploreRef = useRef(null);
  const JobRef = useRef(null);
  const counselingRef = useRef(null);

  return (
    <div>
      <header>
        <div className="hstack">
          <nav className="nav-menu p-2">
            <ul>
              {/* Example Navigation */}
              {/* <li className="list2" onClick={scrollToCareerAssessment}>Career</li> */}
              {/* <li className="list2" onClick={scrollToSkills}>MySkills</li> */}
              {/* <li className="list2" onClick={scrollToExplore}>Explore</li> */}
              {/* <li className="list2" onClick={scrollToScolarship}>Scholarships</li> */}
            </ul>
          </nav>
        </div>
      </header>
      
      
      <main>
      <Scrolltosccontents
          CareerRef={CareerRef}
          ExploreRef={ExploreRef}
          JobRef={JobRef}
          CounselingRef={counselingRef}
        />
      <div className="Homecontainer">
        <SCcareerAssess CareerRef={CareerRef} />
        <SCExplore ExploreRef={ExploreRef} />
        <SCcheckfuturejobs JobRef={JobRef} />
        <SCcounseling counselingRef={counselingRef} />
      </div>
        
        <MiniImageSlider2 />
      </main>
    </div>
  );
}

export default SCAllcontents;
