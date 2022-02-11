import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Sidebar from './components/Sidebar';
import Expenses from './pages/Expenses';

function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      <Expenses/>
    </Router>
      
    </>
  );
}

export default App;
