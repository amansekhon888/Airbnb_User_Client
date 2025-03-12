import { useFormikContext, getIn } from "formik";
import React, { useCallback, useState } from "react";
import classNames from "classnames";
import { Visibility, VisibilityOffOutlined } from "@mui/icons-material";

interface IInput {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  inputClass?: string;
  labelClass?: string;
  disabled?: boolean;
}

const Input: React.FC<IInput> = ({
  name,
  label,
  type = "text",
  placeholder,
  inputClass,
  labelClass,
  disabled,
}) => {
  const { handleBlur, handleChange, values, errors, touched } = useFormikContext<{ [key: string]: any }>();

  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const handlePasswordVisibility = useCallback(() => {
    setIsPasswordShow(!isPasswordShow);
  }, [isPasswordShow]);

  let fieldValue = getIn(values, name, "");
  const error = getIn(errors, name);
  const isTouched = getIn(touched, name);
  if (type === "date" && fieldValue) {
    fieldValue = new Date(fieldValue).toISOString().split("T")[0]
  }

  return (
    <div>
      {!!label && (
        <label className={classNames("text-[15px] text-text1 mb-1 inline-block font-medium", labelClass)}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          disabled={disabled}
          onChange={(e) => {
            if (type === "date") {
              const formattedDate = e.target.value ? new Date(e.target.value).toISOString().split("T")[0] : "";
              handleChange({ target: { name, value: formattedDate } });
            } else {
              handleChange(e)
            }
          }
          }
          onBlur={handleBlur}
          type={type !== "password" ? type : isPasswordShow ? "text" : "password"}
          name={name}
          className={classNames(
            `${type === "password" ? "pr-10 pl-3" : "px-3"} py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md`,
            inputClass,
            { "border-red-500": error && isTouched } // Apply error styling dynamically
          )}
          placeholder={placeholder}
          value={fieldValue}
        />
        {type === "password" && (
          <span className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-[#8B8B8B]" onClick={handlePasswordVisibility}>
            {isPasswordShow ? <Visibility className="!text-xl" /> : <VisibilityOffOutlined className="!text-xl" />}
          </span>
        )}
      </div>
      {error && isTouched && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
    </div>
  );
};

export default Input;
