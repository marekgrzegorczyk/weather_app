import React from "react";

export const ForecastHour = ({eightDayWeather, incrementedDay, tempSymbol, conversion, add}) => {

    const multiply = () => {
        return ((parseInt(Math.round(eightDayWeather.hourly[incrementedDay].temp)) * conversion) + add)
    }

    const epochDate = eightDayWeather.hourly[incrementedDay].dt
    const humanDate = new Date(epochDate * 1000).toLocaleString().slice(-8).slice(0, 5);

    return (
        <>
            <div className="single-hour">
                <div>{humanDate}</div>
                <div>
                    {multiply()}
                    {tempSymbol}
                </div>
                {/*<div*/}
                {/*    style={{textTransform: "capitalize"}}>{eightDayWeather.hourly[incrementedDay].weather[0].description}*/}
                {/*</div>*/}

                <img
                    src={`https://openweathermap.org/img/wn/${eightDayWeather.hourly[incrementedDay].weather[0].icon}@2x.png`}
                    alt="weather_icon"
                    className="weather_icon"
                />
            </div>
        </>
    )
}
