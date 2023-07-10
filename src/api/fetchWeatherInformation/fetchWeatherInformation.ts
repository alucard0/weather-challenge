import { fetchData } from "../fetchData/fetchData"
import { WeatherInformation } from "./WeatherInformation.type"

const apiURL = "https://api.weatherapi.com/v1/current.json"

export const fetchWeatherInformation = (capital: string): Promise<WeatherInformation> => {
  const key = process.env.REACT_APP_WEATHER_API
  const url = `${apiURL}?key=${key}&q=${capital}&aqi=yes`
  return fetchData<WeatherInformation>(url) as Promise<WeatherInformation>
}
