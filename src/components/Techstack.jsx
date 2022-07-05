import React from 'react'
import htmlLogo from '../components/Images/htmlLogo.png'
import cssLogo from '../components/Images/cssLogo.png'
import jsLogo from '../components/Images/jsLogo.png'
import reactLogo from '../components/Images/reactLogo.png'
const Techstack = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '24px',
        fontWeight: 'bolder',
        backgroundColor:"lightcyan",
        padding:"20px"
      }}
    >
      <div>
        <img src={htmlLogo} width="80px" alt="" />
        <h4>HTML</h4>
      </div>
      <div>
        <img src={cssLogo} width="80px" alt="" />
        <h4>CSS</h4>
      </div>
      <div>
        <img src={jsLogo} width="80px" alt="" />
        <h4>JAVASCRIPT</h4>
      </div>
      <div>
        <img src={reactLogo} width="80px" alt="" />
        <h4>REACT</h4>
      </div>
    </div>
  )
}

export default Techstack
