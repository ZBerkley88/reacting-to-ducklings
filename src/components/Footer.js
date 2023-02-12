import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div id="footer">
      <div className="social-media">
        <a href="https://github.com/ZBerkley88"><FiGithub size={20} /></a>
        <a href="https://www.instagram.com/i.saw.these.things/"><FiInstagram size={20} /></a>
        <a href="https://www.linkedin.com/in/zachary-berkley-aa5716240/"><FiLinkedin size={20} /></a>
      </div>
    </div>
  );
}

export default Footer;