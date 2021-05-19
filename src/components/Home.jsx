import React from "react"
import AOS from "aos"
import { Link } from "react-scroll"

import image from "../assets/jack.JPG"
import "../styles/styles.css"

const Home = () => {
  AOS.init()

  return (
    <section id="home" className="hero is-link is-fullheight is-fullheight-with-navbar">
      <div className="hero-body home-margin">
        <div className="container " data-aos="fade" data-aos-delay={300} data-aos-duration={1000}>Kia ora! I am
          <h1 className="title is-1">Jack Bennett</h1>
          <h2 className="subtitle is-3">Full Stack Software Developer</h2>
          <h3 className="subtitle is-4 pt-2">Based in Te Whanga-nui-a-Tara, Aotearoa.</h3>
          <div className="pt-6 scroll">
            <Link className="is-size-5" to="about-me" spy={true} smooth={true} duration={1000}>Click to Scroll Below</Link>
          </div>
        </div>
        
        <div className="image-wrapper is-hidden-mobile">
          <img className="home-image" src={image} alt="Jack" data-aos="fade-down-right" data-aos-delay={300} data-aos-duration={1000} />
        </div>
      </div>
    </section>
  )
}

export default Home