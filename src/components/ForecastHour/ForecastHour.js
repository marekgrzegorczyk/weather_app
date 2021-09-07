import React from "react";

export const ForecastHour = ({humanDate,eightDayWeather, incrementedDay, tempSymbol,conversion,add}) => {

    const multiply = () => {
        return ((parseInt(Math.round(eightDayWeather.hourly[incrementedDay].temp)) * conversion)+ add)
    }
    return (
        <>
                <div style = {{marginBottom:"10px"}}
                     className="future-forecast-daily__single-day">
                    <div className="future-forecast-daily__section">
                        <div>{humanDate}</div>
                        <div
                            style={{textTransform: "capitalize"}}>{eightDayWeather.hourly[incrementedDay].weather[0].description}</div>
                    </div>
                    <div className="future-forecast-daily__2ndsection">
                        <div>
                            {multiply()}
                            {tempSymbol}</div>
                        <img
                            src={`https://openweathermap.org/img/wn/${eightDayWeather.hourly[incrementedDay].weather[0].icon}@2x.png`}
                            alt="weather_icon"/>
                    </div>
                </div>
        </>
    )
}