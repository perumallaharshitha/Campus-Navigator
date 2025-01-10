import React from 'react';
import './Home.css'; // External CSS file for better structure

function Home() {
  return (
    <div>
      <header className="header">
        <h1>Header Title</h1>
      </header>
      <div className="home-container">
        <div className="content">
          <h1>Home Page</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit, maxime doloribus. Officia omnis sint sunt numquam
            aspernatur voluptatem, deleniti rem iure repellendus quaerat minus
            placeat cumque molestias ad corporis magni!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
