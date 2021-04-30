import React from 'react'

interface HeaderProps {
  /**
  * React Children within Frame
  */
  children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({children}) => {
  return (
    <div className="Header">
      {children}
    </div>
  )
}

export default Header