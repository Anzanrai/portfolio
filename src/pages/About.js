import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import final from '../images/final.png';

import '../scss/about.css';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="about-content">
          <h4 className="about-title">About Me</h4>
          <div className="about-content_image">
            <img
              alt="profile"
              src={final}
              style={{ width: '100px', height: '100px', borderRadius: '50px' }}
            />
          </div>
          <div className="about-content_name">Anjan Rai</div>
          <div className="about-content_position">Fullstack Developer</div>
          <div className="about-content_description">
            A full-stack developer with experience of working in multiple
            programming languages over 3 years. Excellent team collaborator with
            strong problem solving, requirement analysis, analytical skills and
            fast learning ability.
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default About;
