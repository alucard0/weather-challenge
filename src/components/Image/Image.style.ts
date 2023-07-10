import { ComponentPropsWithoutRef } from "react"
import styled from "styled-components"

export const StyledImage = styled.img<ComponentPropsWithoutRef<"img">>`
  max-width: 100%;
  height: auto;
`
