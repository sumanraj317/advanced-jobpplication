
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
