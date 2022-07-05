import React from 'react'
import gitIcon from "../components/Images/githubIcon.png"
import linkedInIcon from "../components/Images/linkedinLogo.png"
import './contact.css'
const Contact = () => {
  return (
    <div className='contactMain' >
        <div className="git">
            <a href="https://github.com/CodeinIP">
                <img src={gitIcon} alt="" />
                <span>CodeinIP</span>
            </a>
        </div>
        <div className="linkedIn">
            <a href="https://www.linkedin.com/in/inder231/">
                <img src={linkedInIcon} width="80px" alt="" />
                <span>inder231</span>
            </a>
        </div>
    </div>
  )
}

export default Contact