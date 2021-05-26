import React from "react"

import pictureOne from "../assets/profile3.jpg"
import pictureTwo from "../assets/profile.jpg"

const AboutMe = () => {  
  return (
    <section id="about-me" className="section section-spacing">
      <div className="container">
        <div className="section-heading">
          <h3 className="title is-2" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={400}>About Me</h3>
        </div>
      
        <div className="has-text-centered" data-aos="fade-down" data-aos-duration={1000} data-aos-delay={400}>
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

        <div className="columns is-centered mt-6">
          <div className="column is-half" data-aos="fade-left" data-aos-duration={1000} data-aos-delay={400}>
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src={pictureOne} alt="Enspiral Dev Academy Kahu 2021 cohort" />
                </figure>
              </div>
            </div>
          </div>

          <div className="column is-half" data-aos="fade-right" data-aos-duration={1000} data-aos-delay={400}>
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src={pictureTwo} alt="Enspiral Dev Academy final group project team" />
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