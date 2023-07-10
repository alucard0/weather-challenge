import React from "react"
import { ResumeContainer, ResumeTitle } from "./Resume.style"

const Resume = ({ weatherCondition }: { weatherCondition: string }): JSX.Element => (
  <ResumeContainer>
    <ResumeTitle>Weather</ResumeTitle>
    <p>{weatherCondition}</p>
  </ResumeContainer>
)

export default Resume
