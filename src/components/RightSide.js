import React from 'react'
import './RightSide.css'

function RightSide(props) {
  return (
    
        <div className='right_section'>
                <h1 className='right_title'>{props.title}</h1>
                <p className='right_p'>{props.children}</p>

        </div>
   
  )
}

export default RightSide