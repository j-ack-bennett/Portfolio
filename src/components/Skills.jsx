import React from 'react';
import AOS from 'aos'

import 'aos/dist/aos.css'
import '../styles/styles.css'

const Skills = () => {
  AOS.init({
    delay: 50,
    duration: 1200
  })

  return (
    <section id="skills" className="section section-spacing">

      <div className="section-heading">
        <h3 className="title is-2" data-aos="fade-up">Skills</h3>
      </div>

      <div className="container has-text-centered">

        <div className="columns" data-aos="flip-up" data-aos-delay={100}>
          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">HTML</h4>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">CSS</h4>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">JavaScript</h4>
                
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">Git Version Control</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="columns" data-aos="flip-up" data-aos-delay={200}>
          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">React</h4>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">Redux</h4>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">React Native</h4>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">Node</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="columns" data-aos="flip-up" data-aos-delay={300}>
          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">Express</h4>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">Knex</h4>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">SQLite</h4>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">RESTful API's</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="columns" data-aos="flip-up" data-aos-delay={400}>
          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">SASS</h4>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">Agile Techniques</h4>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">Test Driven Development</h4>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="box">
              <div className="content pt-2">
                <h4 className="title is-5">Browser & Server Debugging</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills