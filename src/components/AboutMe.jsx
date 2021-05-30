import React from "react"

import pictureOne from "../assets/profile3.jpg"
import pictureTwo from "../assets/profile.jpg"

const AboutMe = () => {  
  return (
    <section id="about-me" className="section section-spacing">
      <div className="container">
        <div className="section-heading">
          <h3 className="title is-2 has-text-black" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={400}>About Me</h3>
        </div>
      
        <div className="has-text-centered" data-aos="fade-down" data-aos-duration={1000} data-aos-delay={400}>
          <p className="subtitle has-text-black">
            As a full-stack web developer, I enjoy learning through problem solving, expanding my technical knowledge 
            and challenging my development approaches. I value working on projects that can have a positive 
            impact on society and bring communities together.
          </p>
          <p className="subtitle has-text-black">
            During my time at Enspiral Dev Academy, I learnt in a fast-paced software development environment by 
            working independently and in teams to apply agile techniques when creating full-stack applications. 
            My peers and I collaborated by engaging in detailed planning sessions at the beginning of each 
            project and provided one another with consistent communication and feedback throughout the process. 
            This ensured we were able to deliver each MVP to the highest possible standard.
          </p>
          <p className="subtitle has-text-black">
            I am now broadening my horizons by learning new programming languages and frameworks, 
            all while solidifying my current knowledge.
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