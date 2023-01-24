import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  const gitUrl='https://github.com/Ayushbikki';
  const linkedinUrl='https://www.linkedin.com/in/ayush-kumar-159341159/';
  const notify =()=>{
    alert('mailto: ayush.bikki222@gmail.com')
  }
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Ayush</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon onClick={event =>  window.location.href= linkedinUrl}/>
          <EmailIcon onClick={notify}/>
          <GithubIcon onClick={event =>  window.location.href= gitUrl}/>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS,
             BootStrap, MaterialUI,StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,
              MySQL, MongoDB, MS SQL,JWT Authentication
            </span>
          </li>
          <li className="item">
            <h2>Tools & Technologies </h2>
            <span>Webpack,Babel,Jira,MS Office,Git,NPM</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
