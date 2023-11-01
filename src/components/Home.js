import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-lg">
      <h1> Home</h1>
      <div className="App">

      <Link to="/signup">Sign Up</Link>
    </div>
    </div>
  );
};

export default Home;
