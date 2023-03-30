import axios from 'axios';
import React, { useState } from 'react';

const Home = () => {
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [currentTemp, setCurrentTemp] = useState(0);
    const [high, setHigh] = useState(0);
    const [low, setLow] = useState(0);
    const [description, setDescription] = useState('');
    const [sunrise, setSunrise] = useState(0);
    const [sunset, setSunset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    let srTime = new Date(sunrise * 1000);
    let formattedSR = srTime.toLocaleString();

    let ssTime = new Date(sunset * 1000);
    let formattedSS = ssTime.toLocaleString();

    const handleForm = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios.get(`https://us-zipcode.api.smartystreets.com/lookup?key=${process.env.REACT_APP_API_KEY01}&city=&state=&zipcode=${zip}`)
        .then((res)=>{
            setCity(res.data[0].zipcodes[0].default_city);
            setState(res.data[0].zipcodes[0].state_abbreviation);
    
            Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data[0].zipcodes[0].latitude}&lon=${res.data[0].zipcodes[0].longitude}&appid=${process.env.REACT_APP_API_KEY02}&units=imperial`)
            ])
            .then(([weatherRes])=>{
                setCurrentTemp(weatherRes.data.main.temp)
                setHigh(weatherRes.data.main.temp_max)
                setLow(weatherRes.data.main.temp_min)
                setDescription(weatherRes.data.weather[0].description)
                setSunrise(weatherRes.data.sys.sunrise)
                setSunset(weatherRes.data.sys.sunset)
                setIsLoading(false);
            })
            .catch((err)=>{console.log(err)})
        })
        .catch((err)=>{console.log(err)})
    }

    return (
        <div>
            <div className='searchBox-container'>
                <form onSubmit={handleForm}>
                    <input
                        type='text'
                        className='zipCode'
                        placeholder='Enter your zip code...'
                        value={zip}
                        onChange={(e) => {
                            setZip(e.target.value);
                        }}
                        required
                    />
                    <button className='search-icon'>
                        <i className='fa-solid fa-magnifying-glass'></i>
                    </button>
                </form>
            </div>
            {isLoading ? (
                <div className='loading-container'>
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            ) : !city ? (
                <div className='placeholder-container'>
                    <p className='enter-zip'>Get the weather by entering your zip code!</p>
                </div>
            ) : (
                <div className='content-container'>
                    <div className='weather-card'>
                        <h3 className='location-name'>
                            {city}, {state}
                        </h3>
                        <p className='main-temp'>{Math.round(currentTemp)}°</p>
                        <p className='description'>{description}</p>
                        <div className='high-low'>
                            <p>H: {Math.round(high)}°</p>
                            <p>L: {Math.round(low)}°</p>
                        </div>
                    </div>
                    <div className='sunrise-sunset'>
                        <div className='sunrise'>
                            <p className='ss-title'>Sunrise</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" id="sunrise"><g fill="none" fillRule="evenodd" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1 1)"><path d="M16 16a5 5 0 00-10 0M11 0v7M3.22 8.22l1.42 1.42M0 16h2M20 16h2M17.36 9.64l1.42-1.42M22 20H0M7 4l4-4 4 4"></path></g></svg>
                            <p className='time'>{formattedSR}</p>
                        </div>
                        <div className='sunset'>
                            <p className='ss-title'>Sunset</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" id="sunset"><path fill="none" fillRule="evenodd" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17a5 5 0 0 0-10 0M12 8V1M4.22 9.22l1.42 1.42M1 17h2M21 17h2M18.36 10.64l1.42-1.42M23 21H1M16 4l-4 4-4-4"></path></svg>
                            <p className='time'>{formattedSS}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;