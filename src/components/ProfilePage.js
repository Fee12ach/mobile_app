import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div>
      <h1>ProfilePage</h1>
      <nav>
        <Link to="/">Login</Link>
      </nav>
    </div>
  );
};

export default ProfilePage;
