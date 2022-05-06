import React from 'react'
import './Story.css';

function Story({ storyUrl, title, icon }) {
  return (
    <div className='story'>
        <img src={storyUrl} className="story__image" />
        <img src={icon} className="story__icon" />
        <h3>{title}</h3>
    </div>
  )
}

export default Story