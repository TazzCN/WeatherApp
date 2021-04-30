import useTemperature from './useTemperature'
import useCurrentTemperature from './useCurrentTemp'
import { TOP, NOTOP } from '../consts/mainText'

// Function to work out what string to show to the user depending on the temperature 
const getCurrentTopText = (temp: number | undefined, curTemp: number | undefined): string | undefined => {
  if(temp !== undefined && curTemp !== undefined) {
    return curTemp >= temp ? NOTOP : TOP
  } else {
    return undefined
  }
}

// Hook to work out the location, temperature and topText to show to the user depending on the location selected
const useWeather = (locationSelected: string | undefined): { location: string | undefined, temperature: string | undefined, topText: string | undefined } => {
  const temperature = useTemperature(locationSelected)
  const currentTemperature = useCurrentTemperature()
  const topText = getCurrentTopText(temperature, currentTemperature) 
  return { location: locationSelected, temperature: `${currentTemperature}C`, topText: topText  }
}

export default useWeather
