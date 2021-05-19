import React from "react"
import AOS from "aos"
import { sendForm } from "emailjs-com"

const Contact = () => {
  AOS.init()

  const sendEmail = (e) => {
    e.preventDefault()
    sendForm("contact_service", "contact_form", e.target, "user_KN5iQsWY5AoWSoPUgz9Am")
      .then(result => {
        console.log(result.text)
      }, error => {
        console.log(error.text)
      })
  }

  return (
    <form id="contact" className="section section-spacing" onSubmit={sendEmail} data-aos="fade-up">
      <div className="container">
        <div className="section-heading">
          <h3 className="title is-2">Contact</h3>
          <h4 className="subtitle is-5 pt-5">Send me an email, contact me on LinkedIn or checkout my GitHub!</h4>
        </div>

        <br />

        <div className="columns">
          <div className="column is-6 is-offset-3">
            <div className="box">
              <div className="field">
                <input type="hidden" name="contact_number" />
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" name="user_name" />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input className="input" type="email" name="user_email" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea className="textarea" name="message"></textarea>
                </div>
              </div>

              <div className="field is-grouped has-text-centered" style={{ justifyContent: "space-between"}}>
                <div className="control">
                  <button className="button is-link is-large">
                    <span className="icon">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span>Submit</span></button>
                </div>
                <div className="buttons are-large">
                  <a href="https://www.linkedin.com/in/j-ack-bennett/" className="button is-link">
                  <span className="icon">
                    <i className="fab fa-linkedin"></i>
                  </span>
                  </a>
                  <a href="https://github.com/j-ack-bennett/" className="button is-link">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Contact