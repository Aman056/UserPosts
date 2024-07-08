// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Users from './Components/Users';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { DataProvider } from './Context__API/DataContaxt';
import { UserProvider } from './Context__API/UserContext.js';
import { UserCommentProvider } from './Context__API/UserComment.js';
function App() {
  return (
    <Router>
      <div className="App">
        <UserProvider>
          <UserCommentProvider>
            <DataProvider>
              <Nav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
              </Routes>
            </DataProvider>
          </UserCommentProvider>
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
