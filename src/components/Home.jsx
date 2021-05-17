import React from 'react'
import { Link } from 'react-scroll'

import '../styles/styles.css'

const Home = () => {
  return (
    <section class="hero is-link is-fullheight is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">Kia ora! I am
          <h1 class="title is-1">
            Jack Bennett
          </h1>
          <h2 class="subtitle is-3">
            Full Stack Software Developer
          </h2>
          <div className="pt-6 scroll">
            <Link className="is-size-5" to="about-me" spy={true} smooth={true} duration={1000}>Click to Scroll Below</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home