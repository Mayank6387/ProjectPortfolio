import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name">Mayank</div>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Navbar' activeClass='active' smooth={true}>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='servicess' activeClass='active' smooth={true}><li>Services</li></Link>
                    <Link spy={true} to='Projects' activeClass='active' smooth={true}><li>Projects</li></Link>
                    <Link spy={true} to='Experience' activeClass='active' smooth={true}><li>Experience</li></Link>
                    
                </ul>
            </div>
            <Link spy={true} to='Contact' activeClass='active' smooth={true}><button className='button n-button'>Contact</button></Link>
        </div>
    </div>


  )
}

export default Navbar
