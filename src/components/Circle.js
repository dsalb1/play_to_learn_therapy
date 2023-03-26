import React from 'react';

const Circle = ({children}) => {
  return (
    <div className="circle">
        <div className="text">
            {children}
        </div>
    </div>
  )
}

export default Circle;