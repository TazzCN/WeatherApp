import LocationData from '../data/LocationData'

// Hook to return temperture of location simulating api
const useTemperature = (location: string | undefined): number | undefined => location ? LocationData.find(({location: l}) => l === location)?.temperature : undefined

export default useTemperature