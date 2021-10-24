import React from "react";

export const ExampleCityReversed = ({fourCities,number,tempSymbol,conversion,add}) => {

    const multiply = () => {
        return ((parseInt(Math.round(fourCities.list[number].main.temp)) * conversion)+ add)

    }

    return (
        <>
            <div className="location-box">
                <img className="weather_icon"
                     src={`https://openweathermap.org/img/wn/${fourCities.list[number].weather[0].icon}@2x.png`}
                     alt="weather_icon"/>
                <div className="location-box__section">
                    <div
                        className="location-box__location reversed">{fourCities.list[number].name}, {fourCities.list[number].sys.country}</div>
                    <div className="location-box__temp reversed">{multiply()}{tempSymbol}</div>
                    <div className="location-box__city-name reversed">{fourCities.list[number].weather[0].description}</div>
                </div>
            </div>
        </>
    )
}