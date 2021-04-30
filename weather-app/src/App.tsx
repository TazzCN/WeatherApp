import React from 'react'
import useWeather from './hooks/useWeather'
import Content from './components/frame/Content'
import Header from './components/frame/Header'
import CentralDisplay from './components/dataDisplay/CentralDisplay'
import LocationSelect from './components/inputs/LocationSelect'

const App: React.FC = () => {
  const [locationSelected, setLocationSelected] = React.useState<string | undefined>()
  const { location, topText, temperature } = useWeather(locationSelected)
  return (
    <div className='App'>
      <Header>
        <LocationSelect onLocationChange={setLocationSelected}/>
      </Header>
      <Content>
        <CentralDisplay topText={topText ?? 'Loading'} location={location ?? ''} temperature={temperature ?? ''}/>
      </Content>
    </div>
  )
}

export default App
