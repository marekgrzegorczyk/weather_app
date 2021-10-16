import React from "react";

export const ForecastDay = ({eightDayWeather, incrementedDate, incrementedDay, tempSymbol, conversion, add}) => {

    let nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + incrementedDate);
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const finalDate = nextDate.toLocaleDateString("en-US", options).slice(0, 3)

    const multiply = () => {
        return ((parseInt(Math.round(eightDayWeather.daily[incrementedDay].temp.day)) * conversion) + add)
    }

    return (
        <>
            <div className="single-day">
                <div style={{marginBottom: "0.4rem"}}>{finalDate}</div>
                <img
                    src={`https://openweathermap.org/img/wn/${eightDayWeather.daily[incrementedDay].weather[0].icon}@2x.png`}
                    alt="weather_icon"
                    className="weather_icon"
                />
                <div className="single-day__weather-desc" >{eightDayWeather.daily[incrementedDay].weather[0].description}</div>
                <div className="single-day__temp">{multiply()}{tempSymbol}</div>
            </div>
        </>
    )
}
