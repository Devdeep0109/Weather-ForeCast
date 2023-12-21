import {createContext, useContext ,useState} from 'react';
import {getWeatherDataForCity , getWeatherDataForLocation} from '../api';

const WeatherContext = createContext(null);

export const useWeather = () =>{
    return useContext(WeatherContext);
}

export const WeatherProvider = (props)=>{
    const [data, setData]  = useState(null); 
    const [searchCity , setSearchCity] = useState(null);


    // for fetching current location of user..........
    const fetchCurrentUserLocationData = ()=>{

        navigator.geolocation.getCurrentPosition( (position) =>
        {
            console.log(position);
            getWeatherDataForLocation(position.coords.latitude ,position.coords.longitude
            ).then((data) =>setData(data));
        }
        );
    }

    const fetchData = async() =>{
        const response = await getWeatherDataForCity(searchCity);
        setData(response);
    }

    return <WeatherContext.Provider value={
        {data, setSearchCity , searchCity ,fetchData ,fetchCurrentUserLocationData}
    }>{props.children}</WeatherContext.Provider>
};