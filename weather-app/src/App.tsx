import React from 'react';
import useWeather from './hooks/useWeather'
import Content from './components/frame/Content'
import CentralDisplay from './components/dataDisplay/CentralDisplay'

function App() {
  const { location, topText, temperature } = useWeather()
  return (
    <div className='App'>
      <Content>
        <CentralDisplay topText={topText} location={location} temperature={temperature}/>
      </Content>
    </div>
  );
}

export default App;
