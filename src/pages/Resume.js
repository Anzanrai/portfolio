import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../scss/resume.css';
import LinkIcon from '@mui/icons-material/Link';

const Resume = () => {
  const educationalQualifications = [
    {
      institute: 'Federation University, Ballarat, VIC, Australia',
      degree: 'Masters of Technology (Software Engineering)',
      date: 'March 2018 - November 2019',
    },
    {
      institute: 'Institute of Engineering, Pulchowk, Lalitpur, Nepal',
      degree: 'Bachelors in Computer Engineering',
      date: 'November 2010 - November 2014',
    },
  ];

  const experiences = [
    {
      position: 'Software Developer',
      date: 'January 2021 - Present',
      location:
        'Robonomics AI, Stone & Chalk, Level 4, 11 York Street, Wynyard Green, Sydney NSW 2000',
    },
    {
      position: 'Software Developer Intern',
      date: '',
      location:
        'Kensho Data, Citadel Towers, 799 Pacific Highway, Chatswood NSW 2067',
    },
    {
      position: 'Academic Mentor',
      date: 'October 2019',
      location: 'ATMC Sydney, 540 George Street, Sydney, NSW 2000',
    },
    {
      position: 'Software Engineer',
      date: 'November 2016 - March 2018',
      location: 'Infina Hub, Koteshwor, Tinkune, Kathmandu, Nepal',
    },
    {
      position: 'Production Engineer',
      date: 'November 2014 - November 2016',
      location:
        'Deerwalk Services Pvt. Ltd., Mahadevsthan, Sifal, Kathmandu, Nepal',
    },
  ];

  const extraCourses = [
    {
      title: 'Algorithmic Toolbox',
      offeredBy: 'offered by Coursera',
      link:
        'https://www.coursera.org/account/accomplishments/verify/9D89WK5QMSJF',
    },
    {
      title: 'Introduction to Big Data',
      offeredBy: 'offered by Coursera',
      link:
        'https://www.coursera.org/account/accomplishments/certificate/TFNETBMCYE7E',
    },
    {
      title: 'Python Data Structures',
      offeredBy: 'offered by Coursera',
      link:
        'https://www.coursera.org/account/accomplishments/certificate/XQMEA5RREMPQ',
    },
  ];

  const renderEducation = () => {
    return (
      <>
        <div className="resume-content_section_title">Education</div>
        {educationalQualifications.map((qualification) => {
          return (
            <div className="resume-content_section_entity_title">
              <div className="resume-content_section_institute_title">
                {qualification.institute}
              </div>
              <div className="resume-content_section_degree_title">
                {qualification.degree}
              </div>
              <div className="resume-content_section_date">
                {qualification.date}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const renderExperience = () => {
    return (
      <>
        <div className="resume-content_section_title">Experience</div>
        {experiences.map((experience) => {
          return (
            <div className="resume-content_section_entity_title">
              <div className="resume-content_section_institute_title">
                {experience.position}
              </div>
              <div className="resume-content_section_date">
                {experience.date}
                {!!experience.date ? <br /> : ''}
                {experience.location}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const redirectToCertificate = (certificateLink) => {
    window.open(certificateLink);
  };

  const renderExtraCourses = () => {
    return (
      <>
        <div className="resume-content_section_title">
          Other Completed Courses
        </div>
        {extraCourses.map((course) => {
          return (
            <div className="resume-content_section_entity_title">
              <div className="resume-content_section_institute_title">
                {course.title}{' '}
                <span style={{ fontSize: '12px', fontWeight: 'normal' }}>
                  {course.offeredBy}
                </span>
              </div>
              <LinkIcon
                className="resume-content_section_link"
                onClick={() => redirectToCertificate(course.link)}
              />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Layout>
        <Navbar />
        <div className="resume-content">
          <h4 className="resume-title">Resume</h4>
          {renderEducation()}
          {renderExperience()}
          {renderExtraCourses()}
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Resume;
