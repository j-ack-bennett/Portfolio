import React from "react"
import AOS from "aos"
import { saveAs } from "file-saver"

const Resume = () => {
  AOS.init()

  const saveFile = () => {
    saveAs(
      process.env.PUBLIC_URL + "/cv.pdf",
      "JackBennettCV.pdf"
    )
  }

  return (
    <section id="resume" className="section section-spacing" data-aos="fade-up">
      <div className="section-heading">
        <h3 className="title is-2">Resume</h3>
        <h4 className="subtitle is-5">More about my previous work experience and skills</h4>
        <button className="button is-link is-medium" onClick={saveFile}>
          <span className="icon">
            <i className="fas fa-file-alt"></i>
          </span>
          <span>Download My Resume</span>
        </button>
      </div>
    </section>
  )
}

export default Resume