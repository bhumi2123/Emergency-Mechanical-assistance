import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Mech assistance </h1>
        <p> Always keep going</p>
        <Link to="/menu">
          <button> GET HELP </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
