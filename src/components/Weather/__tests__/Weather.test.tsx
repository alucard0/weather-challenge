import { render, screen } from "@testing-library/react"
import Weather from "../Weather"

describe("Weather", () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })
  test("renders Weather ", () => {
    render(<Weather />)
    const text = screen.getByText(/Weather/i)
    expect(text).toBeInTheDocument()
  })
})
