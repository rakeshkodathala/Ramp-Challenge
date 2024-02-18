import classNames from "classnames"
import { useRef, useEffect, useState } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    if (onChange) {
      onChange(event.target.checked)
    }
  }

  //   return (
  //     <div className="RampInputCheckbox--container" data-testid={inputId}>
  //       <label
  //         htmlFor={inputId}
  //         className={classNames("RampInputCheckbox--label", {
  //           "RampInputCheckbox--label-checked": isChecked,
  //           "RampInputCheckbox--label-disabled": disabled,
  //         })}
  //       />
  //       <input
  //         id={inputId}
  //         type="checkbox"
  //         className="RampInputCheckbox--input"
  //         checked={isChecked}
  //         disabled={disabled}
  //         onChange={handleChange}
  //       />
  //     </div>
  //   )
  // }

  // import classNames from "classnames"
  // import { useRef, useEffect, useState } from "react"
  // import { InputCheckboxComponent } from "./types"

  // export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  //   const inputId = useRef(`RampInputCheckbox-${id}`).current

  //   // State to manage the local checked state

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <label
        htmlFor={inputId}
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": isChecked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
    </div>
  )
}
