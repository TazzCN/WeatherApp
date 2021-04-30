import React from 'react'

interface MainTextProps {
  /**
  * Text to be shown
  */
  text: string
}

const MainText: React.FC<MainTextProps> = ({text}) => {
  return (
    <div className="MainText">
      {text} 
    </div>
  ) 
}

export default MainText