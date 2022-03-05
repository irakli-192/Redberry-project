import React from 'react'
import './Error.css'

function Error(props) {
  return (
    <div>
        <p className='require'>{props.error}</p>
    </div>
  )
}

export default Error;