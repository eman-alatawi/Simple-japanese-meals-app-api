import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <p>Ⓒ Copy right for Eman Alatawi 2021</p>
        <div className=" iconsContainer  ">
          <div className="me-4">
            <a href="https://www.linkedin.com/in/eman-alatawi/" target="_blank" rel="noreferrer">
              <span className="icon">
                <LinkedInIcon />
              </span>
            </a>
          </div>

          <div>
            <a href="https://github.com/eman-alatawi" target="_blank" rel="noreferrer">
              <span className="icon me-4">
                <GitHubIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
