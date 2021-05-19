import React, { useState } from "react"
import AOS from "aos"

import image from "../assets/swopzies.png"
import "../styles/styles.css"

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false)

  AOS.init()

  const handleShowDialog = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="section section-spacing" id="projects">
      <div className="container">
        <div className="section-heading">
          <h3 className="title is-2" data-aos="fade-down">Projects</h3>
          <div data-aos="fade-up">
            <p className="subtitle is-5 pt-5">
              I'm currently focussed on learning to develop iOS applications. As this is a reasonbly new realm of development for me, 
              I decided to start with learning React Native. Having previous experience with React has allowed me to transition into React Native a lot easier than using a different framework. 
              Ultimately I would like to build app's with a native framework like Swift, but I am making do with the operating systems I currently have available to me.
            </p>
            <p className="subtitle is-5">
              My aim is to bring my ideas to fruition and build mobile applications that will have positive effects on our community.
              UI and UX design always comes forefront to me, so as a developer I always incorporate simple functionality and appealing features for the user. Having operated iOS devices
              for a long time now, I've picked up on small things through various app's that I know could easily be improved for a better user experience.
            </p>
            <p className="subtitle is-5">
              I also have a keen interest in developing small web projects to solidify my knowledge in specific front-end and back-end technologies. 
              These can be found on my GitHub account linked in my contact section, some of which are still a work in progress.
            </p>
          </div>
        </div>

        <br />

        <div className="columns" data-aos="fade-up" data-aos-delay={200} data-aos-duration={1000}>
          <div className="column is-8 is-offset-2">
            <div className="box">
              <h4 className="title is-4 has-text-centered">Swopzies</h4>
              <img className="image" src={image} onClick={handleShowDialog} alt="Swopzies website example" />
              {isOpen && (
                <dialog
                  className="dialog"
                  style={{ position: "absolute" }}
                  open
                  onClick={handleShowDialog}
                >
                  <img 
                    className="image-modal"
                    src={image}
                    onClick={handleShowDialog}
                    alt="Swopzies website example"
                  />
                </dialog>
              )}
              <p className="subtitle pt-6 has-text-centered">
                <em>A platform to exchange skills and crafts through bartering goods and services.</em>
              </p>
              
              <br />
              
              <p className="subtitle has-text-centered">
                This was built as an idea to bring useful technology to our community, incorporating easy to use functionality with a focus on 
                simple features for people with impaired capabilities.
                As the product owner of this project, my team and I managed to surpass our minimum viable product within just a week. As a team, we adopted progressive techniques such as
                agile methologies, giving and receiving feedback, daily meetups and role diversity to name a few.
              </p>

              <div className="buttons has-addons is-centered">
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