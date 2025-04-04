import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const SCheader = {
  paddingLeft: '8px',
  paddingTop: '4px',
  color: 'white',
  fontSize: '25px',
  background: '#042c47',
  borderRadius: '10px',
  width: 'auto',
  height: '40px',
};

const listContainer = {
  width: 'auto',
  marginTop: '120px',
  paddingLeft: '8px',
  paddingTop: '4px',
  color: 'rgb(19, 14, 14)',
  fontSize: '25px',
};

const listItem = {
  border: '1px solid black',
  borderRadius: '10px',
  width: 'auto',
  fontSize: '20px',
  margin: '10px',
  padding: '5px',
  listStyleType: 'none',
};

export default function ScrollToSCContents({ CareerRef, ExploreRef, JobRef, CounselingRef }) {
  const smoothScroll = (targetRef, duration) => {
    if (!targetRef.current) return; // Prevents errors if ref is null

    const targetPosition = targetRef.current.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutCubic = (time) => {
      return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
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

  const ScrollToAssessment = () => {
    if (CareerRef?.current) {
      smoothScroll(CareerRef, 2000);
    }
  };

  const scrollToExploreRef = () => {
    if (ExploreRef?.current) {
      smoothScroll(ExploreRef, 2000);
    }
  };

  const scrollToJobRef = () => {
    if (JobRef?.current) {
      smoothScroll(JobRef, 2000);
    }
  };

  const scrollToCounselingRef = () => {
    if (CounselingRef?.current) {
      smoothScroll(CounselingRef, 2000);
    }
  };

  return (
    <div>
      <div style={listContainer}>
        <h1 style={SCheader}>
          Tips on how to Choose the Right Institute for Your Studies
        </h1>

        <ul>
          <li style={listItem} className="list-hover" onClick={ScrollToAssessment}>
            Carry out a self-assessment to identify your strengths <i className="bi bi-arrow-down"></i>
          </li>
          <li style={listItem} className="list-hover" onClick={scrollToExploreRef}>
            Explore different institutes and choose wisely <i className="bi bi-arrow-down"></i>
          </li>
          <li style={listItem} className="list-hover" onClick={scrollToJobRef}>
            Check for future job demands <i className="bi bi-arrow-down"></i>
          </li>
          <li style={listItem} className="list-hover" onClick={scrollToCounselingRef}>
            Seek guidance from counselors or mentors <i className="bi bi-arrow-down"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
