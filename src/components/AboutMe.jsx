import React from "react"
import AOS from "aos"

import "../styles/styles.css"

import pictureOne from "../assets/profile3.jpg"
import pictureTwo from "../assets/profile.jpg"

const AboutMe = () => {
  AOS.init()
  
  return (
    <section id="about-me" className="section section-spacing">
      <div className="section-heading">
        <h3 className="title is-2" data-aos="zoom-in">About Me</h3>
      </div>
      
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-full" data-aos="fade-down">
            <div className="card">
              <div className="card-content has-text-centered">
                <p className="subtitle">
                  As a full stack web developer, I strive to fuel my passion for tech and expand my knowledge everyday. Working on projects that challenge my development 
                  approaches and have a positive impact on society definitely help contribute to this.</p>
                <p className="subtitle">
                  Throughout my time at Enspiral Dev Academy, I learnt what it was like to work in a fast-paced software development team environment.
                  Creating full stack applications both individually and in groups, helped me apply agile techniques to these projects. This gave the best possible outcome in terms of
                  completing an MVP to the highest possible standard, staying committed to proper planning, communication and feedback.
                </p>
                <p className="subtitle">
                  I am now broadening my horizons by learning new programming languages and frameworks, all while solidifying my current knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="columns is-centered">
          <div className="column is-half" data-aos="fade-left">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src={pictureOne} alt="Placeholder" />
                </figure>
              </div>
            </div>
          </div>

          <div className="column is-half" data-aos="fade-right">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src={pictureTwo} alt="Placeholder" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe