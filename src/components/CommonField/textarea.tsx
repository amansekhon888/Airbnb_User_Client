import { getIn, useFormikContext } from 'formik'
import React from 'react'
import classNames from 'classnames';

interface IInput {
    name: string,
    label?: string,
    placeholder?: string,
    divClass?: string,
    inputClass?: string,
    labelClass?: string,
    disabled?: boolean,
    isRequired?: boolean
    rows?: number
}

const TextArea: React.FC<IInput> = ({ name, disabled, label, placeholder, inputClass, labelClass, isRequired = false, rows = 2 }) => {
    const { handleBlur, handleChange, values, errors, touched } = useFormikContext()
    const fieldValue = getIn(values, name, "");
    const error = getIn(errors, name);
    const isTouched = getIn(touched, name);

    return (
        <div>
            {!!label && <label className={classNames("text-[15px] text-text1 mb-1 inline-block font-medium", labelClass)}>{isRequired ? <>{label} <span>*</span></> : label}</label>}
            <textarea
                disabled={disabled}
                onChange={handleChange}
                onBlur={handleBlur}
                name={name}
                rows={rows}
                className={classNames("py-2 px-3 text-text1 placeholder:text-text3 border-border1 w-full rounded-md",
                    { "border-red-500": error && isTouched },
                    inputClass)}
                placeholder={placeholder}
                value={fieldValue}
            ></textarea>
            {error && isTouched && (
                <span className="text-red-500 text-sm mt-1 block">{error}</span> // Show error message dynamically
            )}
        </div>
    )
}

export default TextArea