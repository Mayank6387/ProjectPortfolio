import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
const Footer = () => {
  return (
    <div className="foot">
        <img src={wave} style={{width:"100%"}} alt="" />
        <span>Made with ❤️ by Mayank.</span>
    </div>
  )
}

export default Footer