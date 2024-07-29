import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element } from 'react-scroll';
import NavbarComponent from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Destinations from './pages/Destinations';
import GuideProfile from './pages/GuideProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';
import Footer from './components/Footer';
import { UserProvider } from './utils/UserContext';
import axios from 'axios';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs: ", err);
      }
    };

    const fetchDestinations = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/destinations');
        setDestinations(res.data);
      } catch (err) {
        console.error("Error fetching destinations: ", err);
      }
    };

    fetchBlogs();
    fetchDestinations();
  }, []);

  const addBlog = async (newBlog) => {
    try {
      const res = await axios.post('http://localhost:5000/api/blogs', newBlog);
      setBlogs([...blogs, res.data]);
    } catch (err) {
      console.error("Error adding blog: ", err);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (err) {
      console.error("Error deleting blog: ", err);
    }
  };

  const addDestination = async (newDestination) => {
    try {
      const res = await axios.post('http://localhost:5000/api/destinations', newDestination);
      setDestinations([...destinations, res.data]);
    } catch (err) {
      console.error("Error adding destination: ", err);
    }
  };

  return (
    <UserProvider>
      <div>
        <NavbarComponent />
        <Element name="home" className="element">
          <Home />
        </Element>
        <Element name="blog" className="element">
          <Blog blogPosts={blogs} />
        </Element>
        <Element name="destinations" className="element">
          <Destinations destinations={destinations} />
        </Element>
        <Element name="guideProfile" className="element">
          <GuideProfile />
        </Element>
        <Element name="login" className="element">
          <Login />
        </Element>
        <Element name="register" className="element">
          <Register />
        </Element>
        <Element name="dashboard" className="element">
          <PrivateRoute>
            <Dashboard 
              addBlog={addBlog} 
              deleteBlog={deleteBlog} 
              addDestination={addDestination} 
              blogPosts={blogs} 
              destinations={destinations} 
            />
          </PrivateRoute>
        </Element>
        <Footer />
      </div>
    </UserProvider>
  );
};

export default App;
