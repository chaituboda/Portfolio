import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container" id="education">
      <div className="education-wrapper">
        <main className="education-main">
          <section className="education-section">
            <header className="education-title">
              <h2>EDUCATION</h2>
            </header>
            <div className="education-details">
              <div className="education-box">
               
                <h3>Sai Teja Vidyaniketan</h3>
                <p>
                 2017-2018
                </p>
                <p>
                 Secondary School of Certificate (95%)
                </p>
              </div>

              <div className="education-box">
               
                <h3>Aditya Junior College</h3>
                <p>
                 2018-2020
                </p>
                <p>
                Intermediate_MPC(95%)
                </p>
              </div>

              <div className="education-box">
                
                <h3>Kakinada Institute of Engineering and Technology</h3>
                <p>
                 2020-2024
                </p>
                <p>
                 B Tech (Bachelor of Technology)_Computer Science Engineering (CSE) (7.45 CGPA)
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Education;


