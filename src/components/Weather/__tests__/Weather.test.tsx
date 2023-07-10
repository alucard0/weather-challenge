import { render, screen, waitFor } from "@testing-library/react"
import Weather from "../Weather"
import WetherResponse from "src/data/weatherResponse.json"

describe("Weather", () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })
  it("renders Weather ", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(WetherResponse))
    render(<Weather />)
    const loading = screen.getByText(/Loading.../i)
    expect(loading).toBeInTheDocument()
    await waitFor(() => {
      const text = screen.getByText(/Weather/i)
      expect(text).toBeInTheDocument()
    })
  })
  it("renders Weather no data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(null))
    render(<Weather />)
    const loading = screen.getByText(/Loading.../i)
    expect(loading).toBeInTheDocument()
    await waitFor(() => {
      const text = screen.getByText(/No data/i)
      expect(text).toBeInTheDocument()
    })
  })
})
