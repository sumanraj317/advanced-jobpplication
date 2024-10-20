// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import JobList from './components/JobList';
// import JobDetailsModal from './components/JobDetailsModal';
// import JobApplicationForm from './components/JobApplicationForm';
// import AdminPanel from './components/AdminPanel';
// import Home from './components/Home';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import BackButton from './components/BackButton';

// const App = () => {
//   return (

//     <div>
//    <BackButton />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/job-list" element={<JobList />} /> 
//         <Route path="/details" element={<JobDetailsModal />} />
//         <Route path="/apply" element={<JobApplicationForm />} />
//         <Route path="/admin" element={<AdminPanel />} />
  
//       </Routes>
//       </div>
   
//   );
// };

// export default App;
// import React, { useContext } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import JobList from './components/JobList';
// import JobDetailsModal from './components/JobDetailsModal';
// import JobApplicationForm from './components/JobApplicationForm';
// import AdminPanel from './components/AdminPanel';
// import Home from './components/Home';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import BackButton from './components/BackButton';
// import { AuthContext } from './components/AuthContext'; // Import AuthContext

// const App = () => {
//   const { isLoggedIn } = useContext(AuthContext); // Get login status from AuthContext

//   return (
//     <div>
//       <BackButton />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         {isLoggedIn && ( // Only show these routes if logged in
//           <>
//             <Route path="/job-list" element={<JobList />} />
//             <Route path="/admin" element={<AdminPanel />} />
//           </>
//         )}
//         <Route path="/details" element={<JobDetailsModal />} />
//         <Route path="/apply" element={<JobApplicationForm />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
// src/App.js
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import JobList from './components/JobList';
// import JobDetailsModal from './components/JobDetailsModal';
// import JobApplicationForm from './components/JobApplicationForm';
// import AdminPanel from './components/AdminPanel';
// import Home from './components/Home';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import BackButton from './components/BackButton';
// import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component

// const App = () => {
//   return (
//     <div>
//       <BackButton />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/job-list" element={<ProtectedRoute element={<JobList />} />} /> 
//         <Route path="/details" element={<JobDetailsModal />} />
//         <Route path="/apply" element={<JobApplicationForm />} />
//         <Route path="/admin" element={<ProtectedRoute element={<AdminPanel />} />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobList from './components/JobList';
import JobApplicationForm from './components/JobApplicationForm';
import AdminPanel from './components/AdminPanel';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import BackButton from './components/BackButton';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component

const App = () => {
  return (
    <div>
      <BackButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/job-list" element={<ProtectedRoute element={<JobList />} />} /> 
        <Route path="/apply" element={<JobApplicationForm />} />
        <Route path="/admin" element={<ProtectedRoute element={<AdminPanel />} />} />
      </Routes>
    </div>
  );
};

export default App;
