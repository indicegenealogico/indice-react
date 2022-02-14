import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon /> <GithubIcon /> 
      </div>
      <p> &copy; 2021 IndiceGenealogico.net</p>
    </div>
  );
}

export default Footer;
