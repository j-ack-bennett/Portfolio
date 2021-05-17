import React from 'react';

const AboutMe = () => {
  return (
    <section class="section">
      <div class="section-heading">
        <h3 class="title is-2">About Me</h3>
        {/* <div class="container">
          <p>Web developer with more than <strong>4 years</strong> of well-rounded experience with a degree in the
            field of
            <strong>Computer Science</strong>, extensive knowledge of modern Web techniques and love for <strong>Coffee</strong>.
            Looking for an opportunity to work and upgrade, as well as being involved in an organization that
            believes
            in gaining a competitive edge and giving back to the community.</p>
        </div> */}
      </div>

      <div class="columns has-same-height is-gapless">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <h3 class="title is-4">Profile</h3>

              <div class="content">
                <table class="table-profile">
                  <tr>
                    <th colspan="1"></th>
                    <th colspan="2"></th>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>027 822 9935</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>bennettjack44@gmail.com</td>
                  </tr>
                  <tr>
                    <td>GitHub:</td>
                    <td><a href='https://github.com/j-ack-bennett'>https://github.com/j-ack-bennett</a></td>
                  </tr>
                  <tr>
                    <td>LinkedIn:</td>
                    <td><a href='https://www.linkedin.com/in/j-ack-bennett/'>https://www.linkedin.com/in/j-ack-bennett/</a></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="profile.jpg" alt="Placeholder" />
              </figure>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutMe