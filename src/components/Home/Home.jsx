import React from 'react';
import { Link } from 'react-router-dom';
import './Home.module.css';

function Home(props) {
  return (
    <div clasName="Container">
      <div >
        <h1>
          <Link to="/login">Login</Link>
          </h1>
          <br />
          <h1>
          <Link to="/Signup">Signup</Link>
          </h1>
        
      </div>
      <br />
      <br />
      <br />
      <h2>{props.name?`Welcome - ${props.name}`:"Login please"} </h2>
    </div>
  )
}

export default Home;