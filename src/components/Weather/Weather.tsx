import React from "react"
import { WeatherContainer } from "./Weather.style"
import Temperature from "../Temperature/Temperature"
import Forecast from "../Forecast/Forecast"

const Weather = (): JSX.Element => {
  return (
    <WeatherContainer>
      <p>Weather</p>{" "}
      <Temperature
        value={19}
        imageSrc='https://cdn.weatherapi.com/weather/64x64/night/296.png'
        altText='test'
      />
      <Forecast wind={38} humidity={89} precipitation={1.8} />
    </WeatherContainer>
  )
}

export default Weather
