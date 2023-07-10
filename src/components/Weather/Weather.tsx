import React from "react"
import { WeatherContainer } from "./Weather.style"
import Temperature from "../Temperature/Temperature"
import Forecast from "../Forecast/Forecast"
import AirPollution from "../AirPollution/AirPollution"
import { useFetchWeatherInformation } from "src/hooks/useFetchWeatherInformation/useFetchWeatherInformation"

const Weather = (): JSX.Element => {
  const { isFetching, weatherInformation } = useFetchWeatherInformation("Mexico")

  if (isFetching) return <p>Loading...</p>
  if (weatherInformation === null) return <p>No data</p>

  const {
    temp_c: tempC,
    wind_kph: wind,
    humidity,
    precip_mm: precipitation,
    air_quality: airQuality,
  } = weatherInformation.current
  const { text, icon } = weatherInformation.current.condition

  return (
    <WeatherContainer>
      <p>Weather</p>
      <Temperature value={tempC} imageSrc={icon} altText={text} />
      <Forecast wind={wind} humidity={humidity} precipitation={precipitation} />
      {airQuality && <AirPollution {...airQuality} />}
    </WeatherContainer>
  )
}

export default Weather
