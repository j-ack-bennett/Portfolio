import React from 'react'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav className="navbar is-link is-fixed-top">
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-end">

          <Link className="navbar-item" to="about-me" spy={true} smooth={true} duration={1000}>
            <span className="icon">
              <i className="fa fa-child"></i>
            </span>
            <span>About Me</span>
          </Link>

          <Link className="navbar-item" to="skills" spy={true} smooth={true} duration={1000}>
            <span className="icon">
              <i className="fas fa-award"></i>
            </span>
            <span>Skills</span>
          </Link>

          <Link className="navbar-item" to="resume" spy={true} smooth={true} duration={1000}>
            <span className="icon">
              <i className="fas fa-file-alt"></i>
            </span>
            <span>Resume</span>
          </Link>

          <a className="navbar-item" href="#portfolio">
            <span className="icon">
              <i className="	fa fa-laptop"></i>
            </span>
            <span>Projects</span>
          </a>

          <a className="navbar-item" href="#contact">
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span>Contact</span>
          </a>

        </div>
      </div>
    </nav>
  )
}

export default Nav