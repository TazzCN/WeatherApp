import React from 'react';
import useWeather from './hooks/useWeather'
import CentralDisplay from './components/frame/CentralDisplay'

function App() {
  const { location, topText, temperature } = useWeather()
  return (
    <div className='App'>
      <div className='App-Content'>
        <CentralDisplay topText={topText} location={location} temperature={temperature}/>
      </div>
    </div>
  );
}

export default App;
