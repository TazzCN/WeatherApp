import React from 'react'
import Select from './Select'
import useLocations from '../../hooks/useLocations'

interface LocationSelectProps {  
  /**
  * Function to execute when value of select changes
  */
  onLocationChange: (e:string) => void
}

const LocationSelect:React.FC<LocationSelectProps> = ({
    onLocationChange }) => {
  const locations = useLocations()
  return (
        <Select 
          initialValue={(locations.length > 0 ? locations[0].location : '')} 
          options={locations.map(({location}) => ({label: location, value: location}))} 
          onValueChange={onLocationChange}
        />
    )
}

export default LocationSelect