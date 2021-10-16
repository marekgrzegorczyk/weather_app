import React from "react";

export const ChoosenCity = ({weather, tempSymbol, conversion, add}) => {

    const multiply = () => {
        return ((parseInt(Math.round(weather.main.temp)) * conversion) + add)

    }

    const epochSunrise = weather.sys.sunrise
    const sunriseDate = new Date(epochSunrise * 1000).toString().slice(15, 21)
    const epochSunset = weather.sys.sunset
    const sunsetDate = new Date(epochSunset * 1000).toString().slice(15, 21)


    return (
        <>
            <div className="location-box">
                <div className="location-box__top">
                    <div>
                        <div style={{fontSize: "5vh",}}>{weather.name}, {weather.sys.country}
                        </div>
                        <div>
                            <div style={{fontSize: "10vh", margin: "20px 0 5px 0"}}>{multiply()}{tempSymbol}</div>
                        </div>
                        <div style={{fontSize:"3vh",textTransform: "capitalize"}}>
                            <div>{weather.weather[0].description}</div>
                        </div>
                    </div>
                    <div>
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt="weather_icon"/>
                    </div>
                </div>
                <div className="location-box__bottom">
                    <div className="location-box__desc">
                        <div className="splitter">
                            <p>Pressure</p>
                            <div>{weather.main.pressure}hPa</div>
                        </div>
                        <div className="splitter">
                            <p>Cloudiness</p>
                            <div> {weather.clouds.all}%</div>
                        </div>
                        <div className="splitter">
                            <p>Wind speed</p>
                            <div> {weather.wind.speed}km/h</div>
                        </div>
                        <div className="splitter">
                            <p>Sunrise</p>
                            <div> {sunriseDate}</div>
                        </div>
                        <div className="splitter">
                            <p>Sunset</p>
                            <div> {sunsetDate}</div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
