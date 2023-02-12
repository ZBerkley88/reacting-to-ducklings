import React from "react";

export default function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>
        <img
          class="zacksPic"
          src="IMG_20220411_091329.jpg"
          alt="Zachary Berkley"
        />
        <div className="aboutMe">
          {" "}
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus
          cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit
          at.
        </div>
      </p>
    </div>
  );
}
