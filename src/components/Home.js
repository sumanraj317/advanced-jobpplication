import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Job Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/job-list">Job List</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/admin">Admin Panel</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  
      <Container className="mt-5 text-center">
        <Row>
          <Col>
            <h1>Welcome to the Job Portal</h1>
            <p>Your gateway to exciting job opportunities!</p>
            <Link to="/job-list">
              <Button variant="primary" size="lg">Browse Job Listings</Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <Row>
          <Col md={4} className="mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Diverse Opportunities</h5>
                <p className="card-text">Explore a wide range of job listings from various industries.</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Easy Application Process</h5>
                <p className="card-text">Apply for jobs with a simple and straightforward application form.</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Get Hired Fast</h5>
                <p className="card-text">Connect with potential employers and get hired quickly.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

