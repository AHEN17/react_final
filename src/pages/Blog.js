import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './Blog.css';

const Blog = ({ blogPosts }) => {
  if (!blogPosts || blogPosts.length === 0) {
    return <div className="text-center mt-5">No blog posts available.</div>;
  }

  return (
    <Container className="blog-container mt-5">
      <h1 className="blog-title mb-4">Explore Namma Kudla</h1>
      <Row>
        {blogPosts.map((post) => (
          <Col key={post.id} lg={4} md={6} className="mb-4">
            <Card className="h-100 blog-card">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
