import { getIn, useFormikContext } from "formik";
import React from "react";
import classNames from "classnames";

interface ISelect {
  name: string;
  label?: string;
  placeholder?: string;
  inputClass?: string; 
  labelClass?: string;
  options: Option[];
}

type Option = {
  label: string;
  value: string;
};

const Select: React.FC<ISelect> = ({
  name,
  options,
  label,
  placeholder,
  inputClass,
  labelClass,
}) => {
  const { handleBlur, handleChange, values, errors, touched } = useFormikContext<{ [key: string]: any }>();
  
  const fieldValue = getIn(values, name, "");
  const error = getIn(errors, name);
  const isTouched = getIn(touched, name);

  return (
    <div>
      {!!label && (
        <label
          htmlFor={name}
          className={classNames("text-[15px] text-text1 mb-1 inline-block font-medium", labelClass)}
        >
          {label}
        </label>
      )}
      <select
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        id={name}
        className={classNames(
          "py-2 px-3 text-text1 placeholder:text-text3 border-border1 w-full rounded-md",
          { "border-red-500": error && isTouched }, // Dynamically apply error border
          inputClass
        )}
        value={fieldValue}
      >
        <option hidden value="">
          Select {placeholder}
        </option>
        {options?.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
      {error && isTouched && (
        <span className="text-red-500 text-sm mt-1 block">{error}</span> // Show error message dynamically
      )}
    </div>
  );
};

export default Select;
