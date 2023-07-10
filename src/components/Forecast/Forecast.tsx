import React, { FC } from "react"
import { ForecastContainer } from "./Forecast.style"

type ForecastProps = {
  wind: Number
  humidity: Number
  precipitation: Number
}

const Forecast: FC<ForecastProps> = ({ wind, humidity, precipitation }): JSX.Element => (
  <ForecastContainer>
    <p>Precipitation: {`${precipitation}mm`}</p>
    <p>Wind: {`${wind}km/h`}</p>
    <p>Humidity: {`${humidity}%`}</p>
  </ForecastContainer>
)

export default Forecast
