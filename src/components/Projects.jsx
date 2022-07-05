import React from 'react'
import apollo1 from "../components/Images/apollo1.png"
import apollo2 from "../components/Images/apollo2.png"
import sportsjam1 from "../components/Images/sportjam1.png"
import sportsjam2 from "../components/Images/sportjam2.png"
import "./products.css";
const Projects = () => {
  return (
    <div className='projectMain' >
        <div>
            <h2>Apollo24/7 Clone</h2>
            <span>It's online doctor consultancy website.</span>
            <div>
            <img width="400px" src={apollo1} alt="" />
            <img width="400px" src={apollo2} alt="" />
            </div>
        </div>
        <div>
            <h2>Sportjam Clone</h2>
            <span>Online sport accessories selling website</span>
            <div>
            <img width="400px" src={sportsjam1} alt="" />
            <img width="400px" src={sportsjam2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Projects