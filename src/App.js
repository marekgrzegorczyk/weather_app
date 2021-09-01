import React, {useEffect, useState} from "react";
import './App.scss';
import {ForecastDay} from "./components/ForecastDay/ForecastDay"
import {ExampleCity} from "./components/ExampleCity/ExampleCity";
import {ExampleCityReversed} from "./components/ExampleCityReversed/ExampleCityReversed";
import {ChoosenCity} from "./components/ChoosenCity/ChoosenCity";

function App() {
    const [query, setQuery] = useState('');
    const [temperature, setTemperature] = useState("metric")
    const [tempSymbol, setTempSymbol] = useState("°C")
    const [weather, setWeather] = useState('');
    const [eightDayWeather, setEightDayWeather] = useState('');
    const [fourCities, setFourCities] = useState('')
    const [isActive,setIsActive] = useState('')

    const Arr = []
    for (let i=1; i < 8; i++) {
        Arr.push(<ForecastDay eightDayWeather={eightDayWeather} incrementedDate={i}
                              incrementedDay={i} tempSymbol={tempSymbol}/>) }
    let date = String(new window.Date());
    const slicedDate = date.slice(3, 21);

    const api = {
        key: "3f6a2c018fef788f6169811808fd60d3",
        url: "api.openweathermap.org/data/2.5/"
    };

    const search = event => {
        if (event.key === "Enter") {
            fetch(`https://${api.url}weather?q=${query}&units=${temperature}&appid=${api.key}`)
                .then((result) => result.json())
                .then(result => {
                    setQuery('')
                    setWeather(result)
                    return fetch(
                        `https://${api.url}onecall?lat=${result.coord.lat}7&lon=${result.coord.lon}&exclude=minutely,hourly&units=${temperature}&appid=3f6a2c018fef788f6169811808fd60d3`
                    );
                })
                .then((result8) => result8.json())
                .then((result8) => {
                    setEightDayWeather(result8);
                });
        }
    };

    const changeUnitFahrenheit = () => {
        setTemperature("imperial")
        setTempSymbol("°F")
        setIsActive("false")
        fetch(`https://${api.url}group?id=2643743,2950159,2988507,3117735&units=imperial&appid=${api.key}`)
            .then((result4) => result4.json())
            .then((data4) => {
                setFourCities(data4)
            })
    }

    const changeUnitCelsius = () => {
        setTemperature("metric")
        setTempSymbol("°C")
        setIsActive('')
        fetch(`https://${api.url}group?id=2643743,2950159,2988507,3117735&units=metric&appid=${api.key}`)
            .then((result4) => result4.json())
            .then((data4) => {
                setFourCities(data4)
            })
    }

    useEffect(() => {
        fetch(`https://${api.url}group?id=2643743,2950159,2988507,3117735&units=${temperature}&appid=${api.key}`)
            .then((result4) => result4.json())
            .then((data4) => {
                setFourCities(data4)
            })
    }, [])

    return (
        <>
            <main className="main">
                {/*<div id='map' style='width: 400px; height: 300px;'></div>*/}
                {/*<script>*/}
                {/*    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JpZ29yaTkzIiwiYSI6ImNrdDBheGtxZjA3YTkydnA5dXJoMTgxNW0ifQ.LgoiMPvL69tcym28bTtBdw';*/}
                {/*    var map = new mapboxgl.Map({*/}
                {/*    container: 'map',*/}
                {/*    style: 'mapbox://styles/mapbox/streets-v11'*/}
                {/*});*/}
                {/*</script>*/}
                <div className="search-box">
                    <div className="search-box-container">
                        <input
                            className="search-box__search-bar"
                            type="text"
                            placeholder="Find a city..."
                            onChange={e => setQuery(e.target.value)}
                            value={query}
                            onKeyPress={search}
                        />
                        <button onClick={changeUnitFahrenheit} className={`unit-button ${isActive ? "unit-button-active" : ""}`}>°F</button>
                        <button onClick={changeUnitCelsius} className={`unit-button ${isActive ? "" : "unit-button-active"}`}>°C</button>
                    </div>
                </div>
                <div className="container">
                    {(typeof weather.main !== "undefined") ? (
                        <div className="wrapper">
                            <ChoosenCity weather={weather} slicedDate={slicedDate} tempSymbol={tempSymbol}/>
                            {(typeof eightDayWeather.current !== "undefined") ? (
                                <div className="future-forecast shadow">
                                    <p className="future-forecast__header"
                                       style={{fontSize: "30px", textAlign: "center"}}>7 Day Forecast
                                        for {weather.name} </p>
                                    <div className="future-forecast__wrapper">
                                    {Arr}
                                    </div>
                                </div>) : ('')}
                        </div>
                    ) : (
                        (typeof fourCities.list !== "undefined") ? (
                            <>
                                <ExampleCity fourCities={fourCities} number={0} tempSymbol={tempSymbol}/>
                                <ExampleCityReversed fourCities={fourCities} number={1} tempSymbol={tempSymbol}/>
                                <ExampleCity fourCities={fourCities} number={2} tempSymbol={tempSymbol}/>
                                <ExampleCityReversed fourCities={fourCities} number={3} tempSymbol={tempSymbol}/>
                            </>
                        ) : (""))}
                </div>
            </main>
        </>
    );
}

export default App;
