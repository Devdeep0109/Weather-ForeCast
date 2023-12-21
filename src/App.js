import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

function App() {

  const weather = useWeather();
  console.log(weather);

  useEffect( ()=>{
    // get current location.....
    weather.fetchCurrentUserLocationData()
  } ,[])

  return (
    <div className="App">
      <h1>Weather ForeCast</h1>
      <Input />
      <Button value="Search" onClick={weather.fetchData}/>
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;
