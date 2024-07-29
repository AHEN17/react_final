import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import culturalImage from '../assets/cultures.jpg';
import beachesImage from '../assets/Someshwaraa.jpg';
import templesImage from '../assets/temp.jpg';
import naturalBeautyImage from '../assets/nature.jpg';
import localCuisineImage from '../assets/localcui.jpg';
import backgroundImage from '../assets/bg.jpg';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    {
      title: 'Beaches',
      image: beachesImage,
      description: 'Experience picturesque beaches like Panambur Beach and Tannirbhavi Beach.',
      link: '/destinations/beaches',
    },
    {
      title: 'Cultural Heritage',
      image: culturalImage,
      description: 'Mangaluru is steeped in cultural richness with influences from Hindu, Christian, and Muslim communities.',
      link: '/destinations/cultural',
    },
    {
      title: 'Temples',
      image: templesImage,
      description: 'Visit ancient temples such as Kudroli Gokarnath Temple and Mangaladevi Temple.',
      link: '/destinations/temples',
    },
    {
      title: 'Natural Beauty',
      image: naturalBeautyImage,
      description: 'Explore the natural beauty of Mangaluru surrounded by the Western Ghats and the Arabian Sea.',
      link: '/destinations/natural-beauty',
    },
    {
      title: 'Local Cuisine',
      image: localCuisineImage,
      description: 'Indulge in delicious local cuisine blending flavors from various communities.',
      link: '/destinations/local-cuisine',
    },
  ];

  const handleShow = (section) => {
    setSelectedSection(section);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedSection(null);
  };

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container fluid className="mt-5">
        <Row>
          <Col>
            <p className="home-description">
              {/* Add your description here */}
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          {sections.slice(0, 3).map((section, index) => (
            <Col md={4} key={index}>
              <Card className="home-card">
                <div onClick={() => handleShow(section)}>
                  <Card.Img variant="top" src={section.image} />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-3">
          {sections.slice(3).map((section, index) => (
            <Col md={6} key={index}>
              <Card className="home-card">
                <div onClick={() => handleShow(section)}>
                  <Card.Img variant="top" src={section.image} />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSection?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedSection?.image}
            alt={selectedSection?.title}
            className="img-fluid mb-3"
          />
          <p>{selectedSection?.description}</p>
          <Link to={selectedSection?.link}>
            <Button variant="primary" onClick={handleClose}>
              Learn More
            </Button>
          </Link>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
