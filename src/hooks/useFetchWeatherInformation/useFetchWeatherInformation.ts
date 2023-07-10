import { useEffect, useState } from "react"
import { fetchWeatherInformation } from "src/api/fetchWeatherInformation/fetchWeatherInformation"
import { WeatherInformation } from "src/api/fetchWeatherInformation/WeatherInformation.type"

export const useFetchWeatherInformation = (capital: string) => {
  const [weatherInformation, setWeatherInformation] = useState<WeatherInformation | null>(
    null
  )
  const [isFetching, setIsFetching] = useState<boolean>(true)

  const getWeatherInformation = (): void => {
    fetchWeatherInformation(capital)
      .then((data) => data && setWeatherInformation(data))
      .finally(() => {
        setIsFetching(false)
      })
  }

  useEffect(() => {
    getWeatherInformation()
  }, [capital])

  return { weatherInformation, isFetching }
}
