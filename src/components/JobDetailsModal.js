
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const JobDetailsModal = ({ show, onHide, job }) => {
  const navigate = useNavigate(); // Hook for navigation

  if (!job) {
    return null;
  }

  const handleApply = () => {
    navigate('/apply', { state: { job } }); // Navigate to apply with job details
    onHide(); // Close the modal after navigation
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Job Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Title:</strong> {job.title}</p>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Experience Required:</strong> {job.experienceRequired} years</p>
        <p><strong>Skills Required:</strong> {job.skills ? job.skills.join(', ') : 'N/A'}</p>
        <p><strong>Description:</strong> {job.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleApply}>
          Apply for Job
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JobDetailsModal;
