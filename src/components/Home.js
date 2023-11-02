import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-lg">
      <h1> Home</h1>
        <div className="App">
          <div>
            <Link to="/signup">Sign Up</Link>
          </div>
        
        <div>
          <Link to="/signin">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
