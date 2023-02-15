import React from "react";

export default function About() {
  return (
    <div className="page">
      <h1 className="page-title">About</h1>
      <div className="page-body about-container">
        <p>
          <div className="aboutMe">
            {" "}
            <h3>Hi! My name is Zack. </h3>
            Welcome to my amazing new React portfolio. I made it just for you!
            <br />
            <br />
            I am a retired teacher on my way to becoming a web-developer. I have been learning how to code on and off for the past few years, and I recent decided to dive headlong into UNC's Coding Bootcamp.
            <br />
            <br />
            Would you believe that this is the most flattering recent picture I have of myself?          
          </div>
          <div className="zacksPic">
            {" "}
            <img src="IMG_20220411_091329.jpg" alt="Zachary Berkley" />
          </div>
        </p>
      </div>
    </div>
  );
}
