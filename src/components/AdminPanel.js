
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, editJob, deleteJob } from '../redux/jobSlice';
import { Button, Modal, Form, Table, Container, Row, Col } from 'react-bootstrap';
import './AdminPanel.css';

const AdminPanel = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [currentJob, setCurrentJob] = useState({ id: '', title: '', company: '', experience: '' });
  const [isEdit, setIsEdit] = useState(false);

  const handleShowModal = (job = {}) => {
    setCurrentJob(job);
    setIsEdit(!!job.id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentJob({ id: '', title: '', company: '', experience: '' });
  };

  const handleSaveJob = () => {
    if (isEdit) {
      dispatch(editJob(currentJob));
    } else {
      dispatch(addJob({ ...currentJob, id: jobs.length + 1 }));
    }
    handleCloseModal();
  };

  const handleDeleteJob = (id) => {
    dispatch(deleteJob(id));
  };

  return (
    <Container className="admin-panel mt-4">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Admin Panel</h2>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="text-end">
          <Button variant="primary" onClick={() => handleShowModal()}>Add New Job</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Company</th>
                <th>Experience (Years)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.experience}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleShowModal(job)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteJob(job.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>


      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? 'Edit Job' : 'Add Job'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formJobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job title"
                value={currentJob.title}
                onChange={(e) => setCurrentJob({ ...currentJob, title: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formJobCompany" className="mt-3">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                value={currentJob.company}
                onChange={(e) => setCurrentJob({ ...currentJob, company: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formJobExperience" className="mt-3">
              <Form.Label>Experience (Years)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter experience in years"
                value={currentJob.experience}
                onChange={(e) => setCurrentJob({ ...currentJob, experience: e.target.value })}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveJob}>
            {isEdit ? 'Save Changes' : 'Add Job'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminPanel;
