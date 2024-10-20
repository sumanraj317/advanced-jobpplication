
import React, { useState, useEffect } from 'react';
import { Button, Card, Form, Row, Col, Container } from 'react-bootstrap';
import JobDetailsModal from './JobDetailsModal';
import { db } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsCollection = collection(db, "jobs");
        const jobSnapshot = await getDocs(jobsCollection);
        const jobList = jobSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setJobs(jobList);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const handleShowDetails = (job) => {
    setSelectedJob(job);
    setShowDetailsModal(true);
  };

  const handleCloseDetails = () => setShowDetailsModal(false);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Job List</h2>
      <Form className="mb-4">
        <Form.Group controlId="search">
          <Form.Control
            type="text"
            placeholder="Search for jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Row>
        {jobs
          .filter((job) =>
            job.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((job) => (
            <Col md={4} key={job.id} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Text>
                    <strong>Company:</strong> {job.company} <br />
                    <strong>Experience Required:</strong> {job.experienceRequired} years <br />
                    <strong>Skills Required:</strong> {Array.isArray(job.skills) ? job.skills.join(', ') : 'N/A'}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleShowDetails(job)}>
                    Apply for Job
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>

      {selectedJob && (
        <JobDetailsModal
          show={showDetailsModal}
          onHide={handleCloseDetails}
          job={selectedJob}
        />
      )}
    </Container>
  );
};

export default JobList;
