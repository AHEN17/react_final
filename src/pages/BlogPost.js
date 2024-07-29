import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = ({ findBlogPostById }) => {
  const { id } = useParams();
  const blogPost = findBlogPostById(id);
  const navigate = useNavigate();

  if (!blogPost) {
    return <div className="text-center mt-5">Blog post not found.</div>;
  }

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <Container className="blog-post-container mt-5">
      <Button variant="secondary" onClick={goBack} className="mb-4">
        Back to Blogs
      </Button>
      <Card className="blog-post-card">
        <Card.Body>
          <Card.Title className="blog-post-title">{blogPost.title}</Card.Title>
          <Card.Text className="blog-post-content">{blogPost.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogPost;
