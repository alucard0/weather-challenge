import { Location } from "./location.interface"
import { CurrentWeather } from "./CurrentWeather.interface"

export type WeatherInformation = {
  location: Location
  current: CurrentWeather
}
