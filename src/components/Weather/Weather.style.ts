import { rem } from "polished"
import styled from "styled-components"

export const WeatherContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`
export const WeatherWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${rem(16)};
  margin: ${rem(12)};
`
