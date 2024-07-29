import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ blogPosts = [], addBlog, deleteBlog, destinations = [], addDestination }) => {
  const [role, setRole] = useState('tourist');
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');
  const [newDestinationTitle, setNewDestinationTitle] = useState('');
  const [newDestinationContent, setNewDestinationContent] = useState('');
  const [newDestinationImage, setNewDestinationImage] = useState('');

  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleAddBlog = () => {
    if (newBlogTitle && newBlogContent) {
      addBlog({
        title: newBlogTitle,
        content: newBlogContent,
      });
      setNewBlogTitle('');
      setNewBlogContent('');
    } else {
      console.log('Please fill out both title and content for the blog.');
    }
  };

  const handleDeleteBlog = (id) => {
    deleteBlog(id);
  };

  const handleAddDestination = () => {
    if (newDestinationTitle && newDestinationContent && newDestinationImage) {
      addDestination({
        title: newDestinationTitle,
        content: newDestinationContent,
        image: newDestinationImage,
        sectionId: 1, // Example: Change this based on where you want to add the destination
      });
      setNewDestinationTitle('');
      setNewDestinationContent('');
      setNewDestinationImage('');
    } else {
      console.log('Please fill out all fields for destination.');
    }
  };

  const goToRegisterPage = () => {
    navigate('/register');
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Dashboard</h1>
      <Form.Group as={Row} controlId="formRole">
        <Form.Label column sm={2}>Select Role</Form.Label>
        <Col sm={10}>
          <Form.Control as="select" value={role} onChange={handleRoleChange}>
            <option value="tourist">Tourist</option>
            <option value="blogger">Blogger</option>
            <option value="admin">Admin</option>
          </Form.Control>
        </Col>
      </Form.Group>

      {role === 'blogger' && (
        <div className="mt-4">
          <h2>Blogger Options</h2>
          <Form.Group controlId="formNewBlogTitle">
            <Form.Label>New Blog Title</Form.Label>
            <Form.Control
              type="text"
              value={newBlogTitle}
              onChange={(e) => setNewBlogTitle(e.target.value)}
              placeholder="Enter blog title"
            />
          </Form.Group>
          <Form.Group controlId="formNewBlogContent" className="mt-2">
            <Form.Label>New Blog Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={newBlogContent}
              onChange={(e) => setNewBlogContent(e.target.value)}
              placeholder="Enter blog content"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleAddBlog} className="mt-2">
            Add Blog
          </Button>
        </div>
      )}

      {role === 'admin' && (
        <>
          <div className="mt-4">
            <h2>Admin Options</h2>
            <Form.Group controlId="formNewDestinationTitle">
              <Form.Label>New Destination Title</Form.Label>
              <Form.Control
                type="text"
                value={newDestinationTitle}
                onChange={(e) => setNewDestinationTitle(e.target.value)}
                placeholder="Enter destination title"
              />
            </Form.Group>
            <Form.Group controlId="formNewDestinationContent" className="mt-2">
              <Form.Label>New Destination Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newDestinationContent}
                onChange={(e) => setNewDestinationContent(e.target.value)}
                placeholder="Enter destination content"
              />
            </Form.Group>
            <Form.Group controlId="formNewDestinationImage" className="mt-2">
              <Form.Label>New Destination Image URL</Form.Label>
              <Form.Control
                type="text"
                value={newDestinationImage}
                onChange={(e) => setNewDestinationImage(e.target.value)}
                placeholder="Enter image URL"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddDestination} className="mt-2">
              Add Destination
            </Button>
          </div>

          <div className="mt-4">
            <h2>Manage Blogs</h2>
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <Card key={post.id} className="mb-3">
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>
                    <Button variant="danger" onClick={() => handleDeleteBlog(post.id)}>
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No blog posts available.</p>
            )}
          </div>
        </>
      )}

      {role === 'tourist' && (
        <div className="mt-4">
          <h2>Tourist Options</h2>
          <Button variant="primary" onClick={goToRegisterPage} className="mt-2">
            Register
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Dashboard;
