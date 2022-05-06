import React from 'react'
import './InputOption.css';

function InputOption({ Icon, src, title, photo, color }) {
  return (
    <div className="input__option">
        {Icon ? <Icon src={src} alt={title} className="input__optionIcon" sx={{ fontSize: 35 }} /> : <img src={photo} className="input__optionIcon" width="35" /> }
        <h3 className='input__optionTitle'>{title}</h3>
    </div>
  )
}

export default InputOption