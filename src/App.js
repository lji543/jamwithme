import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const CLIENT_ID = '<YOUR_CLIENT_ID>';
  const API_KEY = '<YOUR_API_KEY>';

  let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  let SCOPES = "https://www.googleapis.com/auth/calendar.readonly";


  return (
    <div className="App">
      <button id="authorize_button">Authorize</button>
      <button id="signout_button">Sign Out</button>


    </div>
  );
}

export default App;
