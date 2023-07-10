import React, { ImgHTMLAttributes } from "react"
import { StyledImage } from "./Image.style"

const Image: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (props): JSX.Element => (
  <StyledImage {...props} />
)

export default Image
