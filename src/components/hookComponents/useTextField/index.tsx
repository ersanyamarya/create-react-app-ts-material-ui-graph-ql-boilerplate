import { useState } from 'react'

interface IDataObject {
  value: string | number
  onChange: (arg0: any) => void
  label: string
  type: string
}

const useTextField = (type = 'text', label: string): [string, IDataObject, (data: string) => void] => {
  const [value, setValue] = useState('')

  return [
    value,
    {
      label,
      value,
      type,
      onChange: ({ target }) => {
        setValue(target.value)
      },
    },
    setValue,
  ]
}

export default useTextField
