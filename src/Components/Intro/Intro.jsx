import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import boy from '../../img/boy.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import Floating from '../Floating div/Floating'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'


const Intro = () => {

   const transition={duration:3,type:'spring'};
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hii! I Am</span>
                <span>Mayank Gupta.</span>
                <span>Frontend Developer With Experience in Web Designing And Development.</span>
            </div>
            <Link spy={true} to='Contact' activeClass='active' smooth={true}><button className='button i-button'>Hire Me</button></Link>
            <div className="i-icons">
              <a target="_blank" href="https://github.com/Mayank6387">
              <img src={Github} alt="No image" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/mayank-gupta-7570a4249/"><img src={LinkedIn} alt="No image" /></a> 
            </div>
        </div>

        <div className="i-right">
        <img src={Vector1} alt="No Image" />
        <img src={Vector2} alt="No Image" />
        <img src={boy} alt="No Image" />
        <motion.img 
        initial={{left:"-36%"}}
        whileInView={{left:"-24%"}}
        transition={transition}
        
        src={glassesimoji} alt="No Image" />
       
        <motion.div 
        initial={{left:'68%'}}
        whileInView={{left:'72%'}}
        transition={transition}
        style={{top:"-4%",left:"68%"}}
        classname='fd' >
          <Floating  crown={crown} txt1="Web" txt2="Developer"></Floating>
        </motion.div>
        
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className='blur' style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
    </div>
    </div>
  )
}

export default Intro