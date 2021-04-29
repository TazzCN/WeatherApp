import React from 'react'
import MainText from '../MainText'
import SecondaryText from '../SecondaryText'

interface CentralDisplayProps {
  topText: string
  location: string
  temperature: string
}

const CentralDisplay: React.FC<CentralDisplayProps> = ({
  topText,
  location,
  temperature
}) => {
  return (
    <div className="CentralDisplay">
      <MainText text={topText}/>
        <div className="CentralDisplay-SecondaryInformation">
          <SecondaryText text={location}/>
          <SecondaryText text={temperature}/>
        </div>
    </div>
  )
}

export default CentralDisplay