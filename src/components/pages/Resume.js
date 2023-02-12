import React from "react";

export default function Resume() {
  return (
    <div className="page">
      <h1>Resume Page</h1>
      <a
        type="button"
        className="btn btn-secondary btn-lg"
        href="/public/ZMB Resume 2023.pdf"
        download
      >Download Me</a>
    </div>
  );
}
