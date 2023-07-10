import React, { FC } from "react"
import { AirPollutionContainer } from "./AirPollution.style"
import { formatNumberTwoDecimals } from "src/utils/FormatNumberTwoDecimals/formatNumberTwoDecimals"

type AirPollutionProps = {
  co: Number
  no2: Number
  o3: Number
  pm25: Number
  pm10: Number
}

const AirPollution: FC<AirPollutionProps> = ({
  co,
  no2,
  o3,
  pm25,
  pm10,
}): JSX.Element => (
  <AirPollutionContainer>
    <p>
      {`PM2.5 (Particulate matter less than 2.5 microns): ${formatNumberTwoDecimals(
        pm25
      )}µg/m3`}
    </p>
    <p>{`CO (Carbon Monoxide): ${formatNumberTwoDecimals(co)}µg/m3`}</p>
    <p>{`NO2 (Nitrogen Dioxide): ${formatNumberTwoDecimals(no2)}µg/m3`}</p>
    <p>{`O3 (Ozone): ${formatNumberTwoDecimals(o3)}µg/m3`}</p>
    <p>
      {`PM10 (Particulate matter less than 10 microns): ${formatNumberTwoDecimals(
        pm10
      )}µg/m3`}
    </p>
  </AirPollutionContainer>
)

export default AirPollution
