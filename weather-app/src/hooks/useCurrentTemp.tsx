import React from 'react'
import {getRandomInt} from '../utils/temperature'

// Hook to return random number between 0 and 30 to simulate weather api
const useCurrentTemperature = (): number => {
  const currentTemperature = React.useMemo(() => getRandomInt(0,30), [])
  return currentTemperature
}


export default useCurrentTemperature