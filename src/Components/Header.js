import React from "react";
import TypeWriter from "react-typewriter";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    
    <header id="home">
      <ParticlesBg type="circle" bg={true} />


      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <Fade clear duration={1200}>
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom duration={1200}>
              <h1 className="responsive-headline">
                <TypeWriter typing={0.5}>
                  {name ? `I'm ${name}.` : null}
                </TypeWriter>
              </h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>
                Based in {city}. <span>{occupation}</span> {description}.
              </h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">{networks}</ul>
            </Fade>
          </div>
        </div>
      </Fade>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
