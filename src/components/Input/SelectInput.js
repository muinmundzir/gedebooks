import { useState, useEffect } from 'react'

import './SelectInput.css'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const SelectInput = ({ name, placeholder, onChange, value }) => {
  const [years, setYears] = useState(null)

  useEffect(() => {
    addYears()
  }, [])

  const addYears = () => {
    let yearsArray = []
    let currentYear = new Date().getFullYear()
    let earliestYear = 1970
    while (currentYear >= earliestYear) {
      yearsArray.push(currentYear)
      currentYear -= 1
    }
    setYears(yearsArray)
  }

  return (
    <>
      <select
        id="month-dropdown"
        className="select__input"
        name={name}
        onChange={onChange}
        defaultValue={value}
      >
        <option>{placeholder}</option>
        {name === 'month' &&
          MONTHS.map((month) => {
            return (
              <option key={month} value={month}>
                {month}
              </option>
            )
          })}

        {name === 'year' &&
          years &&
          years.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            )
          })}
      </select>
    </>
  )
}

export default SelectInput
