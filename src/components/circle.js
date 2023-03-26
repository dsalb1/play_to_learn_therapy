import React from 'react'

const Circle = (props) => {
  return (
    <div className="circle">
        <div className="text">
            {props.children}
        </div>
    </div>
  )
}

export default Circle