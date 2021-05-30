import React from "react"

import image from "../assets/swopzies.png"

const Projects = () => {
  return (
    <section id="projects" className="section section-spacing">
      <div className="container">
        <div className="section-heading">
          <h3 className="title is-2 has-text-black" data-aos="fade-down" data-aos-duration={1000} data-aos-delay={400}>Projects</h3>
        </div>

        <div className="has-text-centered" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={400}>
          <p className="subtitle has-text-black">
            At the moment, I am learning to develop mobile applications. I am currently developing projects using React Native, as I have prior experience using React as a front-end JavaScript library.
          </p>
          <p className="subtitle has-text-black">
            I aim to bring my ideas to fruition and build mobile applications that will have positive effects on our community. I incorporate simple functionality and appealing features for the user through careful consideration of UI and UX design.
          </p>
          <p className="subtitle has-text-black">
            I also have a keen interest in developing web projects to solidify my knowledge in front-end and back-end technologies. These projects can be found on my GitHub account linked in my contact section, some of which are still a work in progress.
          </p>
        </div>

        <br />

        <div className="columns is-centered" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={400}>
          <div className="column is-full">
            <div className="box">
              <h4 className="title is-4 has-text-centered">Swopzies</h4>
              <div className="card">
                <div className="card-image has-text-centered">
                  <figure className="image">
                    <img src={image} alt="Swopzies website example" />
                  </figure>
                </div>
              </div>
              <p className="subtitle pt-6 has-text-centered">
                <em>A platform to exchange skills and crafts through bartering goods and services.</em>
              </p>
              
              <br />
              
              <p className="subtitle has-text-centered has-text-black">
                Swopzies was built with the intention of bringing the community together through the exchange 
                of goods and services. As the product owner of this project, my team and I incorporated 
                easy-to-use functionality, simple features and design to increase accessibility for users, 
                including those who may have impaired capabilities.
              </p>
              <p className="subtitle has-text-centered has-text-black">
                As a result of careful planning, we managed to surpass our MVP within just a week. 
                During this project, we applied progressive techniques such as agile methodologies, 
                regularly giving and receiving feedback, having daily check-ins and communicating 
                consistently to manage code conflicts.
              </p>

              <div className="buttons is-centered">
                <a href="https://swopzies.herokuapp.com/" className="button is-link">View Website</a>
                <a href="https://github.com/j-ack-bennett/Swopzies" className="button is-link">View GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects