import React from "react";

export const ForecastDay = ({eightDayWeather, incrementedDate, incrementedDay, tempSymbol}) => {

    let nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + incrementedDate);
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const finalDate = nextDate.toLocaleDateString("en-US", options).slice(0,3)

    return (
        <>
            <div className="future-forecast__single-day">
                <div className="future-forecast__section">
                    <div>{finalDate}</div>
                    <div
                        style={{textTransform: "capitalize"}}>{eightDayWeather.daily[incrementedDay].weather[0].description}</div>
                </div>
                <div className= "future-forecast__2ndsection">
                    <div>{Math.round(eightDayWeather.daily[incrementedDay].temp.day)}{tempSymbol}</div>
                    <img
                        src={`https://openweathermap.org/img/wn/${eightDayWeather.daily[incrementedDay].weather[0].icon}@2x.png`}
                        alt="weather_icon"/>
                </div>
            </div>
        </>
    )
}