import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import Login from './containers/Login';

function App() {
  return (
    <Router>
      <div>
        <Route path="/login"
               component={LoginPage} 
        />
        <Route path="/register"
               component={Register} 
        />
        <Route path="/home"
               component={Homepage} 
        />
        <Route path="/user" // example URL: .../user?id=200193454
               component={Profile} 
        />
      </div>
    </Router>
  );
}

function LoginPage() {
  return (
    <Login/>
  );
}

function Register() {
  return (
    <div id="register">
      <p>The register page</p>
    </div>
  )
}

function Homepage() {
  return (
    <div id="homepage">
      <p>The homepage</p>
    </div>
  );
}

function Profile() {
 return (
  <div id="profile"></div>
 );
}

export default App;
