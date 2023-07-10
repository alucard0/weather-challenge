import { render } from "@testing-library/react"
import Image from "../Image"

describe("Image", () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  test("alt contains correct value", () => {
    render(<Image src='test.png' alt='test alt' />)
    const testImage = document.querySelector("img") as HTMLImageElement
    expect(testImage.src).toContain("test.png")
  })

  test("src contains correct value", () => {
    render(<Image src='test.png' alt='test alt' />)
    const testImage = document.querySelector("img") as HTMLImageElement
    expect(testImage.alt).toContain("test alt")
  })
})
