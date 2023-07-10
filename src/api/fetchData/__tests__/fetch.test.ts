import { fetchData } from "../fetchData"
import fetchMock from "jest-fetch-mock"

describe("Fetch", () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it("response success", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "12345" }))
    type TestRequest = {
      data: string
    }

    fetchData<TestRequest>("https://api.weatherapi.com/v1/current.json").then(
      (data) => data && expect(data).toEqual({ data: "12345" })
    )

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://api.weatherapi.com/v1/current.json"
    )
  })

  it("response error", async () => {
    fetchMock.mockReject(new Error("fake error message"))
    type TestRequest = {
      data: string
    }

    fetchData<TestRequest>("https://api.weatherapi.com/v1/current.json")

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://api.weatherapi.com/v1/current.json"
    )
  })
})
