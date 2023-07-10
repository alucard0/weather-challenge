import styled from "styled-components"
import { rem } from "polished"

export const AirPollutionContainer = styled.div`
  text-align: left;
  font-size: ${rem(12)};
  margin-top: ${rem(12)};
  @media (min-width: 700px) {
    margin-left: ${rem(32)};
  }
`
