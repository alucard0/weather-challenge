import styled from "styled-components"
import { rem } from "polished"

export const StyledValue = styled.p`
  font-size: ${rem(48)};
`
export const TemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const TemperatureLabel = styled.p`
  margin-top: 12px;
  align-self: flex-start;
  margin-left: 8px;
`
