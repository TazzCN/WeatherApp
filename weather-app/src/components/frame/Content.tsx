import React from 'react'

interface ContentProps {
  /**
  * React Children within Frame
  */
  children: React.ReactNode
}

const Content:React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="Content">
      {children}
    </div>
  )
}

export default Content
