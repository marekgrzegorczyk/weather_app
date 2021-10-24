import React from "react";

export const ExampleCity = ({fourCities,number,tempSymbol,conversion,add}) => {

    const multiply = () => {
        return ((parseInt(Math.round(fourCities.list[number].main.temp)) * conversion)+ add)

    }


    return (
        <>
            <div className="location-box">
                <div className="location-box__section">
                    <div
                        className="location-box__location">{fourCities.list[number].name}, {fourCities.list[number].sys.country}</div>
                    <div className="location-box__temp">{multiply()}{tempSymbol}</div>
                    <div className="location-box__city-name">{fourCities.list[number].weather[0].description}</div>
                </div>
                <img className="weather_icon"
                     src={`https://openweathermap.org/img/wn/${fourCities.list[number].weather[0].icon}@2x.png`}
                     alt="weather_icon"/>
            </div>
        </>
    )
}