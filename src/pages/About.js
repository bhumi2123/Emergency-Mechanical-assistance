import React from "react";
import road from "../assets/road.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${road})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        At Emergency Mechanical Assistant, we are on a mission to provide you with swift and reliable assistance during vehicle emergencies. We understand the stress and uncertainty that can accompany a breakdown on the road, and we're here to simplify the process of seeking help. Our commitment is straightforward: your safety, convenience, and peace of mind are our top priorities. 
        </p>

        <h1>
        What Sets Us Apart
        </h1>
        <p>What sets us apart is not just our technological prowess but also our dedication to a human-centric approach. We don't just dispatch mechanics; we dispatch empathy and support. Our network of skilled mechanics is not just about fixing vehicles; it's about restoring your mobility and your confidence. We're more than just a web application; we're a catalyst for community resilience and business continuity.</p>
      </div>
    </div>
  );
}

export default About;
