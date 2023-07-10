import React, { useState, ChangeEvent } from "react"
import { WeatherContainer } from "./Weather.style"
import Temperature from "../Temperature/Temperature"
import Forecast from "../Forecast/Forecast"
import AirPollution from "../AirPollution/AirPollution"
import { useFetchWeatherInformation } from "src/hooks/useFetchWeatherInformation/useFetchWeatherInformation"
import { USA_STATES } from "src/data/usaStates"
import Select from "../Select/Select"

const Weather = (): JSX.Element => {
  const [currentUsaState, setCurrentUsaState] = useState("Montgomery")
  const { isFetching, weatherInformation } = useFetchWeatherInformation(currentUsaState)

  const onChangeState = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target
    setCurrentUsaState(value)
  }

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
      <Select options={USA_STATES} onChange={onChangeState} />
      <Temperature value={tempC} imageSrc={icon} altText={text} />
      <Forecast wind={wind} humidity={humidity} precipitation={precipitation} />
      {airQuality && <AirPollution {...airQuality} />}
    </WeatherContainer>
  )
}

export default Weather
