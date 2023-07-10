import React from "react"
import Temperature from "../Temperature/Temperature"

const Weather = (): JSX.Element => {
  return (
    <>
      <p>Weather</p>{" "}
      <Temperature
        value={19}
        imageSrc='https://cdn.weatherapi.com/weather/64x64/night/296.png'
        altText='test'
      />
    </>
  )
}

export default Weather
