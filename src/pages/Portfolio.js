import React from 'react';
import LinkIcon from '@mui/icons-material/Link';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import flappybird from '../images/flappy_copy.jpg';
import globalmedics from '../images/globalmedics.gif';
import infiniabiz from '../images/infiniabiz.jpeg';
import revvedai from '../images/revved_copy.png';

import '../scss/portfolio.css';

const Portfolio = () => {
  const projectDetails = [
    {
      title: 'RevvedAI',
      image: revvedai,
      description:
        'RevvedAI is a mobile app to assess and keep track of educational performance of students with features to nudge the students by their tutors.',
      link: 'https://www.revved.ai/try-supreme/',
    },
    {
      title: 'GlobalMedics',
      image: globalmedics,
      description:
        'Creasume is an online platform which would provide you with an interface to input your data and create attractive resumes from available templates, with a feature to save your profile and details and download your resume in pdf format.',
      link: 'https://globalmedics.ai/',
    },
    {
      title: 'Infiniabiz',
      image: infiniabiz,
      description:
        'InfiniaBiz is an e-commerce app which was developed to carry out busineess operations among different business organisations.',
      link: '',
    },
    {
      title: 'Flappy Bird clone',
      image: flappybird,
      description:
        'This is a clone of Flappy Bird mobile game which was built using HTML, CSS, and JavaScript with the purpose of learning animation through css and javascript.',
      link: 'https://anzanrai.github.io/flappy-bird/',
    },
  ];

  const redirectExternal = (link) => {
    window.open(link);
  };

  const renderProjectDetails = () => {
    return (
      <>
        {projectDetails.map((projectDetail, indx) => {
          return (
            <div className="portfolio-content_project_wrapper">
              <div className="portfolio-content_project_wrapper_image">
                <img
                  src={projectDetail.image}
                  // className="portfolio-content_project_wrapper_image"
                />
              </div>
              <div className="portfolio-content_project_wrapper_description">
                {projectDetail.description}
                <span>
                  {!!projectDetail.link ? (
                    <div
                      className="portfolio-content_project_wrapper_link"
                      onClick={() => redirectExternal(projectDetail.link)}
                    >
                      Link <LinkIcon />
                    </div>
                  ) : (
                    ''
                  )}
                </span>
              </div>
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
        <div className="portfolio-content">
          <h4 className="portfolio-content_title">Portfolio</h4>
          <div className="portfolio-content_detail_wrapper">
            {renderProjectDetails()}
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Portfolio;
