import React, { FC, ChangeEventHandler } from "react"

type SelectProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>
  options: {
    id: string
    value: string
    label: string
  }[]
}

const Select: FC<SelectProps> = ({ options, onChange }): JSX.Element => {
  return (
    <select onChange={onChange}>
      {options.map(({ value, label, id }) => {
        return (
          <option key={id} value={value}>
            {label}
          </option>
        )
      })}
    </select>
  )
}

export default Select
