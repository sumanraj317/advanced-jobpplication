
// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// const JobDetailsModal = ({ show, onHide, job }) => {
//   const [applied, setApplied] = useState(false); // Track if the user has applied
//   const [email, setEmail] = useState(''); // To capture applicant's email
//   const [resume, setResume] = useState(null); // To capture applicant's resume

//   if (!job) {
//     return null;
//   }

//   const handleApply = () => {
//     if (email && resume) {
//       // Here, you can add functionality to send the application (store in DB, send email, etc.)
//       console.log("Applied for job:", job.title, "with email:", email, "and resume:", resume);
//       setApplied(true); // Mark as applied
//     } else {
//       alert('Please enter your email and attach your resume.');
//     }
//   };

//   const handleResumeUpload = (e) => {
//     setResume(e.target.files[0]);
//   };

//   return (
//     <Modal show={show} onHide={onHide}>
//       <Modal.Header closeButton>
//         <Modal.Title>Job Details</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p><strong>Title:</strong> {job.title}</p>
//         <p><strong>Company:</strong> {job.company}</p>
//         <p><strong>Experience Required:</strong> {job.experienceRequired} years</p>
//         <p><strong>Skills Required:</strong> {job.skills ? job.skills.join(', ') : 'N/A'}</p>
//         <p><strong>Description:</strong> {job.description}</p>

//         {applied ? (
//           <p className="text-success">You have successfully applied for this job!</p>
//         ) : (
//           <>
//             <Form.Group controlId="email" className="mb-3">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group controlId="resume" className="mb-3">
//               <Form.Label>Upload Resume</Form.Label>
//               <Form.Control type="file" onChange={handleResumeUpload} />
//             </Form.Group>
//           </>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onHide}>
//           Close
//         </Button>
//         {!applied && (
//           <Button variant="primary" onClick={handleApply}>
//             Apply for Job
//           </Button>
//         )}
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default JobDetailsModal;
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
