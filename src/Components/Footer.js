import React from "react";
import Fade from "react-reveal";

const Footer = ({ data }) => {
  if (data) {
    var networks = data.social.map(function (network) {
      return (
        <li key={ network.name }>
          <a href={ network.url }>
            <i className={ network.className }></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">{ networks }</ul>

            <ul className="copyright">
              <li>
                <span style={ { color: "#fff" } }>2023 || Made by &copy;{ " " }</span>
                <a
                  title="Atul"
                  href="https://linktr.ee/imatul"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span style={ { color: "#3d3d" } }>Atul</span>
                </a>
              </li>
            </ul>
          </div>
        </Fade>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
