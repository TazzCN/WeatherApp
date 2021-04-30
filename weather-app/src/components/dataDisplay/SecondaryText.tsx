import React from 'react'

interface SecondaryTextProps {
  /**
  * Text to be shown
  */
  text: string
}

const SecondaryText: React.FC<SecondaryTextProps> = ({ text }) => {
  return (
    <h2 className='SecondaryText'>
      {text}
    </h2>
  )
}

export default SecondaryText
