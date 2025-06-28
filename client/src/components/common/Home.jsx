import React from 'react';
import { Link } from 'react-router-dom';

// React Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Ant Design
import { Carousel, Statistic } from 'antd';
import { LikeOutlined } from '@ant-design/icons'; // or use modern theme if preferred
// Image
import doctor from '../../images/docter.png';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="text-white text-decoration-none">DocSpot</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              {/* Optional additional links */}
            </Nav>
            <Nav className="d-flex gap-3">
              <Link to="/" className="nav-link text-white">Home</Link>
              <Link to="/login" className="nav-link text-white">Login</Link>
              <Link to="/register" className="nav-link text-white">Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container fluid className="home-container py-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
            <img src={doctor} alt="Doctor" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
          </Col>
          <Col xs={12} md={6}>
            <h1 className="display-5 fw-bold">
              We Don't Judge you be free to Share your Sorrow
            </h1>
            <p className="lead mt-3">
             Book the spot to get free from your unknow sadness of heart and loanliness.
            </p>
            <Button variant="primary" className="mt-3 px-4">
              <Link to="/login" className="text-white text-decoration-none">Book your Doctor</Link>
            </Button>
          </Col>
        </Row>
      </Container>


    
      {/* About Section */}
      <Container className="mb-5">
        <h1 className="text-center mb-4">Psychology</h1>
        <p className="text-center fs-5">
          Your not alone, we are here to help you, recent studies state that every day 10,0000 people feeling unknow sadness and loanliness.

          we will help you to get free from your unknow sadness of heart and loanliness.Just mova a small step towards us we pickup to hapiness and we will be there with you.
        </p>
      </Container>
    </>
  );
};

export default Home;