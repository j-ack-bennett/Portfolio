import React from "react"
import { saveAs } from "file-saver"

const Resume = () => {
  const saveFile = () => {
    saveAs(
      process.env.PUBLIC_URL + "/cv.pdf",
      "JackBennettCV.pdf"
    )
  }

  return (
    <section id="resume" className="section section-spacing" data-aos="fade-right" data-aos-duration={1000} data-aos-delay={400} data-aos-offset={300}>
      <div className="section-heading">
        <h3 className="title is-2 has-text-black">Resume</h3>
        <h4 className="subtitle is-5 has-text-black">More about my previous work experience and skills</h4>
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