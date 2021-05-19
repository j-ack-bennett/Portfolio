import React, { useState } from "react"
import AOS from "aos"
import { Link } from "react-scroll"

const Nav = () => {
  AOS.init()

  const [isBurgerVisible, setIsBurgerVisible] = useState(false)

  const toggleBurger = () => {
    setIsBurgerVisible(currentState => {
      return !currentState
    })
  }

  return (
    <nav className="navbar is-link is-fixed-top" data-aos="fade" data-aos-delay={300} data-aos-duration={800}>
      <div className="navbar-brand">
        <div className={`navbar-burger burger ${isBurgerVisible ? "is-active" : ""}`} onClick={toggleBurger} data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarMenu" className={`navbar-menu ${isBurgerVisible ? "is-active" : ""}`}>
        <div className="navbar-end">
          <Link className="navbar-item" to="about-me" spy={true} smooth={true} duration={2000}>
            <span className="icon">
              <i className="fa fa-child"></i>
            </span>
            <span>About Me</span>
          </Link>

          <Link className="navbar-item" to="skills" spy={true} smooth={true} duration={2000}>
            <span className="icon">
              <i className="fas fa-award"></i>
            </span>
            <span>Skills</span>
          </Link>

          <Link className="navbar-item" to="projects" spy={true} smooth={true} duration={2000}>
            <span className="icon">
              <i className="fa fa-laptop"></i>
            </span>
            <span>Projects</span>
          </Link>

          <Link className="navbar-item" to="resume" spy={true} smooth={true} duration={2000}>
            <span className="icon">
              <i className="fas fa-file-alt"></i>
            </span>
            <span>Resume</span>
          </Link>

          <Link className="navbar-item" to="contact" spy={true} smooth={true} duration={2000}>
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav