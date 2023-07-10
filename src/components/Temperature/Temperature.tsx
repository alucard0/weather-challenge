import React from "react"
import Image from "../Image/Image"
import { StyledValue, TemperatureContainer, TemperatureLabel } from "./Temperature.style"

type TemperatureProps = {
  value: Number
  imageSrc: string
  altText: string
}

const Temperature: React.FC<TemperatureProps> = ({
  value,
  imageSrc,
  altText,
}): JSX.Element => (
  <TemperatureContainer>
    <Image src={imageSrc} alt={altText} />
    <StyledValue>{`${value}`}</StyledValue>
    <TemperatureLabel>°C | °F</TemperatureLabel>
  </TemperatureContainer>
)

export default Temperature
