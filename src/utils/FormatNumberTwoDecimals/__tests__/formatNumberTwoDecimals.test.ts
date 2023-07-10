import { render, screen } from "@testing-library/react"
import { formatNumberTwoDecimals } from "../formatNumberTwoDecimals"

describe("Format number with two decimals", () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  it("shows a number with 2 decimals", () => {
    const formattedNumber = formatNumberTwoDecimals(8.55552)

    expect(formattedNumber).toEqual("8.56")
  })
})
