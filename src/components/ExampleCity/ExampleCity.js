import React from "react";

export const ExampleCity = ({fourCities, number, tempSymbol, conversion, add}) => {

    const multiply = () => {
        return ((parseInt(Math.round(fourCities.list[number].main.temp)) * conversion) + add)

    }


    return (
        <>
            <div className="location-box placeholder">
                <img src={`https://openweathermap.org/img/wn/${fourCities.list[number].weather[0].icon}@2x.png`}
                     alt="weather_icon"/>
                <div>
                    <div style={{fontSize: '7vh'}}>{multiply()}{tempSymbol}</div>
                    <div>{fourCities.list[number].name}, {fourCities.list[number].sys.country}</div>
                    <div className="location-box__city-name">{fourCities.list[number].weather[0].description}</div>
                </div>
            </div>
        </>
    )
}
