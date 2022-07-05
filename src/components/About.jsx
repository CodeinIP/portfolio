import React from 'react'
import img from '../components/Images/img1.jpg'
import './about.css'
const About = () => {
  return (
    <div className="aboutMain">
      <div className='aboutMeText' >
        <div>
          <p>
            Hello, Iam <b>Inder Pal</b>
          </p>
        </div>
        <div className='introText' >
          <p>I am a Full Stack Web Developer. I love building simple,<br/> clean websites and User Interfaces that are easy to use and beautiful to look at.</p>
        </div>
      </div>
      <div className="imgDiv">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default About
