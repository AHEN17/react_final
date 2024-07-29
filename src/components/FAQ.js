import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            What is Namma Kudla?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Namma Kudla is a travel blog website where you can explore various destinations, read blogs, and learn about guides.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            How can I contribute to the blog?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              You can contribute by creating an account and submitting your blogs through the dashboard.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default FAQ;
