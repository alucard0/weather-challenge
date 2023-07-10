import { render, screen } from "@testing-library/react"
import Temperature from "../Temperature"

describe("Temperature", () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  it("shows temperature value", () => {
    render(<Temperature value={19} imageSrc='test.png' altText='test alt' />)
    const temperatureValue = screen.getByText(/19/i)
    expect(temperatureValue).toBeInTheDocument()
  })
})
