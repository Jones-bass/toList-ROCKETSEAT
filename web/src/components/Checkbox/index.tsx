import { Check } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  checked: boolean
  onChange: (isChecked: boolean) => void
}

export function Checkbox({ checked, onChange, ...props }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked)

  function handleChange() {
    setIsChecked(!isChecked)
    onChange(!isChecked)
  }

  return (
    <CheckboxContainer {...props} onClick={handleChange}>
      <CheckboxIndicator asChild>
        {checked ? <Check weight="bold" /> : null}
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
