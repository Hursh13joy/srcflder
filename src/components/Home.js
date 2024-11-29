import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      {/* This is the Home Page */}
      <h1 className="display-4 text-primary">Welcome to the Home Page!</h1>
      <p className="lead text-muted">
        This is a simple home page built using React and styled with Bootstrap.
      </p>
      <button className="btn btn-primary mt-3">Learn More</button>
    </div>
  );
};

export default Home;
