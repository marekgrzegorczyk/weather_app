import React, {useEffect, useState} from "react";
import './App.scss';
import {ForecastDay} from "./components/ForecastDay/ForecastDay"
import {ExampleCity} from "./components/ExampleCity/ExampleCity";
import {ChoosenCity} from "./components/ChoosenCity/ChoosenCity";
import {ForecastHour} from "./components/ForecastHour/ForecastHour";

function App() {

    const [query, setQuery] = useState('');
    const [conversion, setConversion] = useState(1)
    const [add, setAdd] = useState(0)
    const [tempSymbol, setTempSymbol] = useState("°C")
    const [weather, setWeather] = useState('');
    const [eightDayWeather, setEightDayWeather] = useState('');
    const [fourCities, setFourCities] = useState('')
    const [isActive, setIsActive] = useState('')

    const api = {
        key: "3f6a2c018fef788f6169811808fd60d3",
        url: "api.openweathermap.org/data/2.5/"
    };

    useEffect(() => {
        fetch(`https://${api.url}group?id=2643743,2950159,2988507,3117735&units=metric&appid=${api.key}`)
            .then((result4) => result4.json())
            .then((result4) => {
                setFourCities(result4)
            })
    }, [])

    const search = event => {
        if (event.key === "Enter") {
            fetch(`https://${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
                .then((result) => result.json())
                .then(result => {
                    setQuery('')
                    setWeather(result)
                    return fetch(
                        `https://${api.url}onecall?lat=${result.coord.lat}7&lon=${result.coord.lon}&exclude=minutely&units=metric&appid=3f6a2c018fef788f6169811808fd60d3`
                    );
                })
                .then((result8) => result8.json())
                .then((result8) => {
                    setEightDayWeather(result8);
                });
        }
    }

    const search2 = city => {
        fetch(`https://${api.url}weather?q=${city}&units=metric&appid=${api.key}`)
            .then((result) => result.json())
            .then(result => {
                setQuery('')
                setWeather(result)
                return fetch(
                    `https://${api.url}onecall?lat=${result.coord.lat}7&lon=${result.coord.lon}&exclude=minutely&units=metric&appid=3f6a2c018fef788f6169811808fd60d3`
                );
            })
            .then((result8) => result8.json())
            .then((result8) => {
                setEightDayWeather(result8);
            });
    }

    const changeUnitFahrenheit = () => {
        setConversion(2)
        setAdd(32)
        setTempSymbol("°F")
        setIsActive("false")
    }

    const changeUnitCelsius = () => {
        setConversion(1)
        setAdd(0)
        setTempSymbol("°C")
        setIsActive('')
    }

    const getBack = () => {
        setWeather("")
    }

    const SevenDayArr = []
    for (let i = 1; i < 8; i++) {
        SevenDayArr.push(<ForecastDay eightDayWeather={eightDayWeather} incrementedDate={i}
                                      incrementedDay={i} tempSymbol={tempSymbol} conversion={conversion} add={add}/>)
    }

    const TwelveHourArr = []
    for (let j = 1; j < 13; j++) {
        TwelveHourArr.push(<ForecastHour eightDayWeather={eightDayWeather}
                                         incrementedDay={j} tempSymbol={tempSymbol} conversion={conversion}
                                         add={add}/>)
    }

    return (
        <>
            <main className="main">
                <div className="top-bar">
                    <div className="search-box-container">
                        <button className="unit-button icon" style={{margin: "0 5px 0 0"}} onClick={getBack}>
                            <span>&#10141;</span>
                        </button>
                        <input
                            className="search-box__search-bar"
                            type="text"
                            placeholder="Find a city..."
                            onChange={e => setQuery(e.target.value)}
                            value={query}
                            onKeyPress={search}
                        />
                        <button onClick={changeUnitFahrenheit}
                                className={`unit-button ${isActive ? "unit-button-active" : ""}`}>°F
                        </button>
                        <button onClick={changeUnitCelsius}
                                className={`unit-button ${isActive ? "" : "unit-button-active"}`}>°C
                        </button>
                    </div>
                </div>
                <div className="container">
                    {(typeof weather.main !== "undefined") ? (
                        <>
                            <ChoosenCity weather={weather} tempSymbol={tempSymbol}
                                         conversion={conversion} add={add}/>
                            {(typeof eightDayWeather.current !== "undefined") ? (
                                <div>
                                    <div className="forecast-hour">{TwelveHourArr} </div>
                                    <div className="forecast-day">{SevenDayArr}</div>
                                </div>
                            ) : (
                                <div className="future-forecast" style={{textAlign: "center"}}>There's no daily forecast
                                    for {weather.name}. </div>)}
                        </>
                    ) : (
                        (typeof fourCities.list !== "undefined") ? (
                            <div className="placeholder-wrapper">
                                <div onClick={() => search2("London")} className="placeholder">
                                    <ExampleCity fourCities={fourCities} number={0} tempSymbol={tempSymbol}
                                                 conversion={conversion} add={add}/>
                                </div>
                                <div onClick={() => search2("Berlin")} className="placeholder">
                                    <ExampleCity fourCities={fourCities} number={1} tempSymbol={tempSymbol}
                                                         conversion={conversion} add={add}/>
                                </div>
                                <div onClick={() => search2("Paris")} className="placeholder">
                                    <ExampleCity fourCities={fourCities} number={2} tempSymbol={tempSymbol}
                                                 conversion={conversion} add={add}/>
                                </div>
                                <div onClick={() => search2("Madrid")} className="placeholder">
                                    <ExampleCity fourCities={fourCities} number={3} tempSymbol={tempSymbol}
                                                         conversion={conversion} add={add}/>
                                </div>
                            </div>
                        ) : (""))}
                </div>
            </main>
        </>
    );
}

export default App;
