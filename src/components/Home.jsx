import React from 'react'
import { Link } from 'react-scroll'

import image from "../assets/jack.JPG"
import '../styles/styles.css'

const Home = () => {
  return (
    <section id="home" className="hero is-link is-fullheight is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container" style={{ "marginLeft": "180px" }}>Kia ora! I am
          <h1 className="title is-1">
            Jack Bennett
          </h1>
          <h2 className="subtitle is-3">
            Full Stack Software Developer
          </h2>
          <div className="pt-6 scroll">
            <Link className="is-size-5" to="about-me" spy={true} smooth={true} duration={1000}>Click to Scroll Below</Link>
          </div>
        </div>

        <div className="image-wrapper">
          <img className="home-image" src={image} alt="Jack" />
        </div>
      </div>
    </section>
  )
}

export default Home