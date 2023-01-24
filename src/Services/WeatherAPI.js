import {DateTime} from "luxon";

const API_KEY = "1b84701f9363c2c1de05ff608fbd67ff";
const BASE_URL = "https://api.openweathermap.org/data/2.5/"


const getWeatherData = (infoType, searchParams) => {
        const url = new URL(BASE_URL + infoType);
        url.search = new URLSearchParams({...searchParams,appid:API_KEY});
        
        console.log("Fetch Data is called");
        return fetch(url)
        .then((res)=>res.json())
        .then(formattedCurrentWeather);

}

const formattedCurrentWeather = async (data) => {

    console.log(data);
    const {
        coord:{lat,lon},
        main: {temp,feels_like,temp_min,temp_max, humidity},
        name,
        dt,
        sys:{country, sunrise, sunset},
        weather,
        wind : {speed},
    } = await data;

    const {main:details, icon} = weather[0];

    return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,speed,details,icon};

}

const formatToLocalTime = (secs,zone,format="cccc, dd LLL yyyy' | Local time: ' hh:mm a") =>

{
    // create a DateTime object from the current date and time
    const dateTime = DateTime.local().setZone(zone);

    // format the date and time string using the specified format
    return dateTime.toFormat(format);
  }

const iconFromUrl = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getWeatherData;

export {formatToLocalTime, iconFromUrl}; 