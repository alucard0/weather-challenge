import React from "react"
import Image from "../Image/Image"

const Weather = (): JSX.Element => {
  return (
    <>
      <p>Weather</p>{" "}
      <Image src='https://cdn.weatherapi.com/weather/64x64/night/296.png' />
    </>
  )
}

export default Weather
