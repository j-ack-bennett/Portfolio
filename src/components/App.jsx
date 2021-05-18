import React from 'react'
import { Route } from 'react-router-dom'

import AboutMe from './AboutMe'
import Contact from './Contact'
import Home from './Home'
import Nav from './Nav'
import Projects from './Projects'
import Resume from './Resume'
import ScrollArrow from './ScrollArrow'
import Skills from './Skills'
import '../styles/App.css'
import '../styles/styles.css'

function App() {
  return (
    <>
      <Nav />
      <ScrollArrow />
      <Route path='/' exact component={Home} />
      <Route to='/' exact component={AboutMe} />
      <Route to='/' exact component={Skills} />
      <Route to='/' exact component={Resume} />
      <Route to='/' exact component={Projects} />
      <Route to='/' exact component={Contact} />
    </>
  )
}

export default App
