import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './Components/TopButtons';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import getWeatherData from './Services/WeatherAPI';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [query, setQuery] = useState({q:"Calgary"});
  const [input, setInput] = useState("weather");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherData(input,{...query,units});
      console.log(data);
      setWeather(data);
    }
    fetchData();
  }, [query, units]);
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery}/>

      {weather && (
        <div>
          <TimeAndLocation weather = {weather}/>
          <TemperatureAndDetails weather = {weather} />
          <Forecast title="hourly forecast" />
          <Forecast title="daily forecast" />
        </div>
      )}

    </div>
  );
}

export default App;
