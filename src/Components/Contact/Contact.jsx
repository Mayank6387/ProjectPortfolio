import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from 'react' 
import {motion} from 'framer-motion'
function Contact() {
    const transition={duration:5,type:'spring'}
    const [done,setDone]=useState(false);
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sx570sb', 'template_1p0eiqo', form.current, 'zaZvczCWWgjYPtuaz')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{fontSize:"2rem"}}>Get in Touch</span>
                <span  style={{fontSize:"2.7rem"}}>Contact me.</span>
                <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
            </div>
        </div>
        <motion.div initial={{left:"2%"}}
    whileInView={{left:"8%"}}
    transition={{transition}}
    className="c-right">
            <form  ref={form} onSubmit={sendEmail}>
            <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="email" name='user_email' className='user' placeholder='E-mail'  />
               <textarea name="message" className="user" placeholder="Message"></textarea>
               <input type="submit" value="Send" className='button bt'/>
               <span>{done && "Thanks For Contacting Me."}</span>
               <div className="blur c-blur" style={{background:"var(--purple)"}}></div>
            </form>
        </motion.div>

    </div>
  )
}

export default Contact