import React from 'react';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import '../scss/home.css';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="home-content">
          <h4 class="home-title">Home</h4>
          <p>
            Make three hobbies; one reading, one game and one work, so that you
            remain physically and mentally fit.
          </p>
          <p>
            Opportunity knocks the door of the one who is prepared. If
            opportunity does not know your door, build a door of opportunity.
          </p>
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default Home;
