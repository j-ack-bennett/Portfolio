import React from 'react';
import AOS from 'aos'

import 'aos/dist/aos.css'
import '../styles/Skills.css'

const Skills = () => {
  AOS.init({
    delay: 50,
    duration: 1200
  })

  return (
    <section class="section section-spacing">

      <div class="section-heading">
        <h3 class="title is-2">Skills</h3>
      </div>

      <div class="container has-text-centered">

        <div class="columns">
          <div class="column is-one-quarter" data-aos="flip-up">
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">HTML</h4>
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" data-aos="flip-up" data-aos-delay={300}>
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">CSS</h4>
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" data-aos="flip-up" data-aos-delay={600}>
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">JavaScript</h4>
                
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" data-aos="flip-up" data-aos-delay={900}>
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">Git Version Control</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-quarter" data-aos="flip-up">
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">React</h4>
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" data-aos="flip-up">
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">Redux</h4>
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" data-aos="flip-up">
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">React Native</h4>
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" data-aos="flip-up">
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">Node</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-quarter" data-aos="flip-up">
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">Express</h4>
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" data-aos="flip-up">
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">Knex</h4>
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" data-aos="flip-up">
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">SQLite</h4>
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" data-aos="flip-up">
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">RESTful API's</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-quarter" data-aos="flip-up">
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">SASS</h4>
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" data-aos="flip-up">
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">Agile Techniques</h4>
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" data-aos="flip-up">
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">Test Driven Development</h4>
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" data-aos="flip-up">
            <div class="box">
              <div class="content pt-2">
                <h4 class="title is-5">Browser & Server Debugging</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills