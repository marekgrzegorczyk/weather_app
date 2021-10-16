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
                <div className="location-box__left">
                    <div
                        className="location-box__location__big ">{weather.name}, {weather.sys.country}
                    </div>
                    <div>
                        <div>{multiply()}{tempSymbol}</div>
                    </div>
                    <div>
                        <div>{weather.weather[0].description}</div>
                    </div>

                    <div>
                        <div>Pressure {weather.main.pressure}hPa</div>
                    </div>
                    <div>
                        <div>Cloudiness {weather.clouds.all}%</div>
                    </div>
                    <div>
                        <div>Wind speed {weather.wind.speed}km/h</div>
                    </div>
                    <div>
                        <div>Sunrise {sunriseDate}</div>
                    </div>
                    <div>
                        <div>Sunset {sunsetDate}</div>
                    </div>
                </div>
                <div className="location-box__right">
                    <img className="weather_icon"
                         src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                         alt="weather_icon"/>
                </div>
            </div>

        </>
    )
}
