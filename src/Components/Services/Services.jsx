import React from 'react'
import './Services.css'
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import { Cards } from '../Cards/Cards'
import cv from '../../CV/cv.pdf'
import {motion} from 'framer-motion'
const Services = () => {
    const transition={duration:2,type:'string'};
  return (
    <div className='services' id='servicess'>
    <div className="awesome">
        <span>My</span>
        <span>Services.</span>
        <span>Crafting captivating digital experiences through cutting-edge front-end development,<br/> where innovation meets seamless user interface design to elevate your brand's online presence.</span>
        <a href={cv} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
    </div>
    <div className='card'>
    <motion.div 
     initial={{left:"20rem"}}
     whileInView={{left:'15rem'}}
     transition={transition}
    style={{left:"14rem"}}>
            <Cards heart={heartemoji} heading={"Design"} detail={"Adobe, Sketch, Photoshop, Figma"}></Cards>
        </motion.div>
        <motion.div
         initial={{left:"10rem"}}
         whileInView={{left:'-4rem'}}
         transition={transition}
          style={{top:"12rem" ,right:"16rem"}}>
            <Cards heart={glasses} heading={"Frontend-Devloper"} detail={"HTML, CSS, TailwindCSS, JavaScript, ReactJS"}></Cards>
        </motion.div>
        <motion.div
         initial={{left:"20rem"}}
         whileInView={{left:'15rem'}}
         transition={transition}
          style={{top:"19rem" ,right:"-5rem"}}>
            <Cards heart={humble} heading={"Animations"} detail={"G-sap & Framer Motion"}></Cards>
        </motion.div>
        <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
    </div>
    </div>
  )
}

export default Services