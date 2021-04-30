import React from 'react'

interface ContentProps {
  children: React.ReactNode
}

const Content:React.FC<ContentProps> = ({children}) => {
  return (
    <div className="Content">
      {children}
    </div>
  )
}

export default Content