import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  const gitUrl='https://github.com/Ayushbikki';
  const linkedinUrl='https://www.linkedin.com/in/ayush-kumar-159341159/';

  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <GithubIcon onClick={event =>  window.location.href= gitUrl} />
        <LinkedInIcon onClick={event =>  window.location.href= linkedinUrl} />
      </div>
    
    </div>
  );
}

export default Footer;
