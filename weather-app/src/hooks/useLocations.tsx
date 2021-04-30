import { Location } from '../common'
import LocationData from '../data/LocationData'

// Hook to return locations only from Location Data
const useLocations = (): Location[] => LocationData.map(({location}) => ({location})) 

export default useLocations