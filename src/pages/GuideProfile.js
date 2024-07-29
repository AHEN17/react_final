import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './GuideProfile.css'; // Import your CSS file
import G1 from '../assets/G1.jpg';
import G2 from '../assets/G2.jpg';
import G3 from '../assets/G3.jpg';


const GuideProfile = () => {
  const guides = [
    {
      name: 'John Doe',
      image: G1,
      languages: ['English', 'Spanish', 'French'],
      specializations: 'Cultural tours, hiking adventures',
      experience: '10+ years in guiding, licensed tour guide',
      review: 'John was incredibly knowledgeable and made our trip unforgettable!',
      email: 'john.doe@example.com',
      phone: '+123456789'
    },
    {
      name: 'Jane Smith',
      image: G2,
      languages: ['English', 'German', 'Italian'],
      specializations: 'Historical tours, culinary experiences',
      experience: '8+ years in guiding, certified tour leader',
      review: 'Jane provided insightful historical context and made our tour enjoyable!',
      email: 'jane.smith@example.com',
      phone: '+987654321'
    },
    {
      name: 'Michael Brown',
      image: G3,
      languages: ['English', 'Mandarin', 'Japanese'],
      specializations: 'City tours, photography walks',
      experience: '5+ years in guiding, photography enthusiast',
      review: 'Michael\'s photography tips really enhanced our tour experience!',
      email: 'michael.brown@example.com',
      phone: '+246813579'
    }
  ];

  return (
    <Container className="profile-container mt-5">
      {guides.map((guide, index) => (
        <Row key={index} className="mb-5">
          <Col md={4}>
            <Image src={guide.image} roundedCircle fluid className="profile-image" />
          </Col>
          <Col md={8} className="profile-details">
            <h1>{guide.name}</h1>
            <p><strong>Languages:</strong> {guide.languages.join(', ')}</p>
            <p><strong>Specializations:</strong> {guide.specializations}</p>
            <p><strong>Experience:</strong> {guide.experience}</p>
            <p>
              {guide.name} is passionate about sharing the rich culture and natural beauty of the destinations he guides. With a focus on personalized experiences and safety, {guide.name} ensures every tour is memorable and insightful.
            </p>
            <p className="customer-review">
              <strong>Customer Reviews:</strong> "{guide.review}"
            </p>
            <p className="contact-info">
              For booking or inquiries, please contact {guide.name} at {' '}
              <a href={`mailto:${guide.email}`}>{guide.email}</a> or {' '}
              <a href={`tel:${guide.phone}`}>{guide.phone}</a>.
            </p>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default GuideProfile;
