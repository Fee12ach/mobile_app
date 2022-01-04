import React from "react";
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <div>
      <h1>IndexPage</h1>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default IndexPage;
