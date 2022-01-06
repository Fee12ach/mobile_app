import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <nav>
        <Link to="/">Login</Link>
      </nav>
    </div>
  );
};

export default HomePage;
