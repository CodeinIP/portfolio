import React from 'react'
import './Header.css'
import pdf from  "../components/Images/my-resume.pdf"
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container d-flex">
          <div className="logo">
            <h1>Portfolio</h1>
          </div>
          <div className="navlink">
            <ul className="link f_flex uppercase">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href={pdf} download>Download-Resume</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
