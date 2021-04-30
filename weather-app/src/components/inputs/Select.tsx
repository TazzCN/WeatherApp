import React from 'react'

interface OptionsProps {
  value: string
  label: string
}

interface SelectProps {
  /**
  * Options for the select component
  */
  options: OptionsProps[]
  /**
  * Initial Value for the select
  */
  initialValue?: string
  /**
  * Function to execute when value changes
  */
  onValueChange: (e: string) => void
  /**
  * Label on the select component
  */
  label?: string
}

const Select:React.FC<SelectProps> = ({
  options,
  onValueChange,
  initialValue = undefined,
  label
}) => {
  const [value, setValue] = React.useState<string>(initialValue || (options.length > 0 ? options[0].value : ''))
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  React.useEffect(() => {
    onValueChange(value)
  }, [value, onValueChange])
  
  return (
    <label>
          {label}
          <select value={value} onChange={handleChange}>
            {options.map(({value, label}, i) => <option key={i}value={value}>{label}</option>)}
          </select>
    </label>
  )
}

export default Select