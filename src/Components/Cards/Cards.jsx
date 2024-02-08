import React from 'react'
import './Cards.css'
export const Cards = ({heart,heading,detail}) => {
  return (
    <div className='cards'>
      <img src={heart} alt="No Image" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className='c-button'>Learn More</button>
    </div>
  )
}
