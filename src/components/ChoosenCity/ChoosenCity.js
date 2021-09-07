import React from "react";

export const ChoosenCity = ({weather, tempSymbol,conversion,add}) => {

    const multiply = () => {
        return ((parseInt(Math.round(weather.main.temp)) * conversion)+ add)

    }

    let date = String(new window.Date());
    const slicedDate = date.slice(3, 21);

    return (
        <>
            <div className="location-box__big">
                <img className="weather_icon__big"
                     src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                     alt="weather_icon"/>
                    <div
                        className="location-box__location__big ">{weather.name}, {weather.sys.country}</div>
                    <div className="location-box__date__big">{slicedDate}</div>
            </div>
            <div className="info-box">
                <div className="splitter">
                    <div>Weather</div>
                    <div className="info-box__name">{weather.weather[0].description}</div>
                </div>
                <div className="splitter">
                    <div>Temperature</div>
                    <div>{multiply()}{tempSymbol}</div>
                </div>
                <div className="splitter">
                    <div>Pressure</div>
                    <div>{weather.main.pressure}hPa</div>
                </div>
                <div className="splitter">
                    <div>Cloudiness</div>
                    <div>{weather.clouds.all}%</div>
                </div>
                <div className="splitter last">
                    <div>Wind speed</div>
                    <div>{weather.wind.speed}km/h</div>
                </div>
            </div>
        </>
    )
}