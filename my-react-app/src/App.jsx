import React from 'react';
import { Navigate } from 'react-router-dom';
import './App.css';

function App() {
  // Redirect root path to dashboard
  return <Navigate to="/dashboard" />;
}

export default App;
