import { render, screen } from "@testing-library/react"
import AirPollution from "../AirPollution"

describe("AirPollution", () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  it("shows AirPollution values", () => {
    render(
      <AirPollution
        co={423.8999938964844}
        no2={20.200000762939453}
        o3={0.6000000238418579}
        pm25={8.800000190734863}
        pm10={11.899999618530273}
      />
    )
    const pm25 = screen.getByText(
      "PM2.5 (Particulate matter less than 2.5 microns): 8.80µg/m3"
    )
    const co = screen.getByText("CO (Carbon Monoxide): 423.90µg/m3")
    const no2 = screen.getByText("NO2 (Nitrogen Dioxide): 20.20µg/m3")
    const o3 = screen.getByText("O3 (Ozone): 0.60µg/m3")
    const pm10 = screen.getByText(
      "PM10 (Particulate matter less than 10 microns): 11.90µg/m3"
    )

    expect(pm25).toBeInTheDocument()
    expect(co).toBeInTheDocument()
    expect(no2).toBeInTheDocument()
    expect(o3).toBeInTheDocument()
    expect(pm10).toBeInTheDocument()
  })
})
