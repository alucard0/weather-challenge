import React from "react"
import { WeatherContainer } from "./Weather.style"
import Temperature from "../Temperature/Temperature"
import Forecast from "../Forecast/Forecast"
import AirPollution from "../AirPollution/AirPollution"

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
      <AirPollution
        co={423.8999938964844}
        no2={20.200000762939453}
        o3={0.6000000238418579}
        pm25={8.800000190734863}
        pm10={11.899999618530273}
      />
    </WeatherContainer>
  )
}

export default Weather
