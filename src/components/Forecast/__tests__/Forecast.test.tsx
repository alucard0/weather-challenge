import { render, screen } from "@testing-library/react"
import Forecast from "../Forecast"

describe("Forecast", () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  it("shows Forecast value", () => {
    render(<Forecast wind={38} humidity={89} precipitation={1.8} />)
    const precipitation = screen.getByText(/Precipitation: 1.8mm/i)
    const wind = screen.getByText(/Wind: 38km\/h/i)
    const humidity = screen.getByText(/Humidity: 89%/i)

    expect(precipitation).toBeInTheDocument()
    expect(wind).toBeInTheDocument()
    expect(humidity).toBeInTheDocument()
  })
})
