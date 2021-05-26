import React from "react"
import { Route } from "react-router-dom"
import AOS from "aos"

import AboutMe from "./AboutMe"
import Contact from "./Contact"
import Footer from "./Footer"
import Home from "./Home"
import Nav from "./Nav"
import Projects from "./Projects"
import Resume from "./Resume"
import ScrollArrow from "./ScrollArrow"
import Skills from "./Skills"
import "aos/dist/aos.css"
import "../styles/styles.css"
import "../App.scss"

function App() {
  AOS.init()

  return (
    <>
      <Nav />
      <ScrollArrow />
      <Route path="/" exact component={Home} />
      <Route to="/" exact component={AboutMe} />
      <Route to="/" exact component={Skills} />
      <Route to="/" exact component={Projects} />
      <Route to="/" exact component={Resume} />
      <Route to="/" exact component={Contact} />
      <Footer />
    </>
  )
}

export default App
