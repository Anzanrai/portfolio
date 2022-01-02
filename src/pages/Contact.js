import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../scss/contact.css';

function Contact() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="contact-content">
          <h4 className="contact-content_title">Contact</h4>
          <div className="contact-content_details">
            <div className="contact-content_description">
              <p className="contact-content_text">
                I would love to hear from you. You can get in touch with me in
                the provided details below.
              </p>
            </div>
            <div className="contact-content_medium_details">
              <p>
                <span className="contact-content_medium">Mobile: </span>
                <span className="contact-content_text">+61424706221</span>
                <br />
                <span className="contact-content_medium">Email: </span>
                <span className="contact-content_text">
                  anzaan.rai@gmail.com
                </span>
                <br />
                <span className="contact-content_medium">Linkedin: </span>
                <span className="contact-content_text">
                  https://www.linkedin.com/in/anjan-rai-58197878/
                </span>
                <br />
                <span className="contact-content_medium">Twitter: </span>
                <span className="contact-content_text">
                  https://twitter.com/anzan_rai
                </span>
              </p>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default Contact;
