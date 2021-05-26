import React, { useState } from "react"
import { Link } from "react-scroll"

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  }

  window.addEventListener("scroll", checkScrollTop)

  return (
    <Link
      to="home" 
      spy={true} 
      smooth={true} 
      duration={1000} 
      className="scrollTop is-hidden-touch" 
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    >
      <i className="fa fa-arrow-circle-up fa-3x"></i>
    </Link>
  )
}

export default ScrollArrow