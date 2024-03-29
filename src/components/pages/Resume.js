import React from "react";

export default function Resume() {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("ZMB Resume 2023.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "ZMB Resume 2023.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <div className="page">
        <h1 className="page-title">Resume</h1>
        <div className="page-body resume-container">
          <h3>Click on below button to download my resume</h3>
          <button onClick={onButtonClick}>Download Resume</button>
        </div>
      </div>
    </>
  );
}
// source: https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/
