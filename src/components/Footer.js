import React from 'react';
import '../scss/layout.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/anjan-rai-58197878/');
  };

  const mailto = () => {
    window.open('mailto:anzaan.rai@gmail.com');
  };

  const openTwitter = () => {
    window.open('https://twitter.com/anzan_rai');
  };
  return (
    <div>
      <div className="footer-wrapper">
        <div className="footer-icon-wrapper">
          <LinkedInIcon
            onClick={() => openLinkedIn()}
            style={{ cursor: 'pointer' }}
          />
          <MailIcon style={{ cursor: 'pointer' }} onClick={() => mailto()} />
          <TwitterIcon
            style={{ cursor: 'pointer' }}
            onClick={() => openTwitter()}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
