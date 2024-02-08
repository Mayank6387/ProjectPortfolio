import React from 'react'
import "./Floating.css"
const Floating = ({crown,txt1,txt2}) => {
  return (
    <div className='Floatingdiv'>
         <img src={crown} alt="" />
        <span>
           {txt1}
           <br />
           {txt2}
        </span>
    </div>
  )
}

export default Floating