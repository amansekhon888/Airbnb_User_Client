import React from "react";
import PhoneInput from "react-phone-input-2";
import { icon29 } from "../../assets/icons/index.ts";
import classNames from 'classnames';

interface PhoneInputProps {
    label: string;
    name: string;
    value: string;
    labelClass?: string;
    defaultCountry?: string;
    customClass?: string;
    errorMessage?: string;
    onChange: (value: string) => void;
}

const PhoneFormikInput: React.FC<PhoneInputProps> = ({
    label,
    name,
    value,
    defaultCountry = "IN",
    errorMessage,
    customClass,
    labelClass,
    onChange,
}) => {    
    return (
        <div className="phoneInput">
            {!!label && <label className={classNames("text-[15px] text-[#040404] mb-2 inline-block", labelClass)}>{label}</label>}
            <div className={` ${customClass} `}>
                <PhoneInput
                    value={value}
                    country={defaultCountry} // Set default country
                    placeholder="Enter phone number"
                    onChange={onChange} // Trigger the onChange handler from props
                    inputProps={{
                        id: `${name}-${defaultCountry}`,
                        name: {name}
                    }}
                />
            </div>
            {errorMessage && (
                <p className="text-red-500 text-sm ml-3 mt-1">{errorMessage}</p>
            )}
        </div>
    );
};

export default PhoneFormikInput;
