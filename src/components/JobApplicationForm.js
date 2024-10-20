
// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Button } from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';

// const JobApplicationForm = () => {
//   const location = useLocation();
//   const job = location.state?.job;

//   const validationSchema = Yup.object({
//     firstName: Yup.string().required('First Name is required'),
//     lastName: Yup.string().required('Last Name is required'),
//     email: Yup.string().email('Invalid email address').required('Email is required'),
//     skills: Yup.string().required('Skills are required'),
//     aboutMe: Yup.string().required('About Me is required'),
//   });

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Apply for {job?.title}</h2>
//       <Formik
//         initialValues={{ firstName: '', lastName: '', email: '', skills: '', aboutMe: '' }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           alert(JSON.stringify(values, null, 2));
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <div className="mb-3">
//               <label htmlFor="firstName" className="form-label">First Name</label>
//               <Field name="firstName" type="text" className="form-control" />
//               <ErrorMessage name="firstName" component="div" className="text-danger" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="lastName" className="form-label">Last Name</label>
//               <Field name="lastName" type="text" className="form-control" />
//               <ErrorMessage name="lastName" component="div" className="text-danger" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email</label>
//               <Field name="email" type="email" className="form-control" />
//               <ErrorMessage name="email" component="div" className="text-danger" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="skills" className="form-label">Skills</label>
//               <Field name="skills" type="text" className="form-control" />
//               <ErrorMessage name="skills" component="div" className="text-danger" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="aboutMe" className="form-label">About Me</label>
//               <Field name="aboutMe" as="textarea" className="form-control" />
//               <ErrorMessage name="aboutMe" component="div" className="text-danger" />
//             </div>
//             <Button type="submit" className="btn btn-primary" disabled={isSubmitting}>
//               Submit
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default JobApplicationForm;
// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Button } from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';

// const JobApplicationForm = () => {
//   const location = useLocation();
//   const job = location.state?.job; // Retrieve job from the location state

//   const validationSchema = Yup.object({
//     firstName: Yup.string().required('First Name is required'),
//     lastName: Yup.string().required('Last Name is required'),
//     email: Yup.string().email('Invalid email address').required('Email is required'),
//     skills: Yup.string().required('Skills are required'),
//     aboutMe: Yup.string().required('About Me is required'),
//   });

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Apply for {job?.title}</h2>
//       <Formik
//         initialValues={{ firstName: '', lastName: '', email: '', skills: '', aboutMe: '' }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           alert(JSON.stringify(values, null, 2));
//           // Handle form submission (send data to server, etc.)
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <div className="mb-3">
//               <label htmlFor="firstName" className="form-label">First Name</label>
//               <Field name="firstName" type="text" className="form-control" />
//               <ErrorMessage name="firstName" component="div" className="text-danger" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="lastName" className="form-label">Last Name</label>
//               <Field name="lastName" type="text" className="form-control" />
//               <ErrorMessage name="lastName" component="div" className="text-danger" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email</label>
//               <Field name="email" type="email" className="form-control" />
//               <ErrorMessage name="email" component="div" className="text-danger" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="skills" className="form-label">Skills</label>
//               <Field name="skills" type="text" className="form-control" />
//               <ErrorMessage name="skills" component="div" className="text-danger" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="aboutMe" className="form-label">About Me</label>
//               <Field name="aboutMe" as="textarea" className="form-control" />
//               <ErrorMessage name="aboutMe" component="div" className="text-danger" />
//             </div>
//             <Button type="submit" disabled={isSubmitting}>Submit Application</Button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default JobApplicationForm;
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const JobApplicationForm = () => {
  const location = useLocation();
  const job = location.state?.job; // Retrieve job from the location state
  const [submitted, setSubmitted] = useState(false); // State to track submission

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    skills: Yup.string().required('Skills are required'),
    aboutMe: Yup.string().required('About Me is required'),
  });

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    // Here, you can handle the form submission (e.g., send data to the server)
    setSubmitted(true); // Update state to indicate submission
  };

  return (
    <div className="container mt-5">
      {submitted ? ( // Check if the form has been submitted
        <div className="alert alert-success text-center">
          You have successfully applied for {job?.title}!
        </div>
      ) : (
        <>
          <h2 className="text-center mb-4">Apply for {job?.title}</h2>
          <Formik
            initialValues={{ firstName: '', lastName: '', email: '', skills: '', aboutMe: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit} // Use handleSubmit function
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <Field name="firstName" type="text" className="form-control" />
                  <ErrorMessage name="firstName" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <Field name="lastName" type="text" className="form-control" />
                  <ErrorMessage name="lastName" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="skills" className="form-label">Skills</label>
                  <Field name="skills" type="text" className="form-control" />
                  <ErrorMessage name="skills" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="aboutMe" className="form-label">About Me</label>
                  <Field name="aboutMe" as="textarea" className="form-control" />
                  <ErrorMessage name="aboutMe" component="div" className="text-danger" />
                </div>
                <Button type="submit" disabled={isSubmitting}>Submit Application</Button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default JobApplicationForm;
