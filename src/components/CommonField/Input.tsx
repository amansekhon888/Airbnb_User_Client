import { useFormikContext } from 'formik'
import React, { useCallback, useState } from 'react'

import classNames from 'classnames';
import { Visibility, VisibilityOffOutlined } from '@mui/icons-material';

interface IInput {
    name: string,
    label?: string,
    type?: string,
    value?: string | number,
    placeholder?: string,
    inputClass?: string,  //  i am taking label class, input class in differnet because of tailwind , as passing tailwind class is easy as compared to giving parent class and writing manual css
    labelClass?: string,
    disabled?: boolean,
    error?: string
}


const Input: React.FC<IInput> = ({ name, label, type = "text", value, placeholder, inputClass, labelClass, disabled, error }) => {
    const { handleBlur, handleChange, values } = useFormikContext()

    const [isPasswordShow, setIsPasswordShow] = useState(false)
    const handlePasswordVisibility = useCallback(() => {
        setIsPasswordShow(!isPasswordShow)
    }, [isPasswordShow])

    return (
        <div className="">
            {!!label && <label className={classNames("text-[15px] text-text1 mb-1 inline-block font-medium", labelClass)}>{label}</label>}
            <div className='relative'>
                <input
                    disabled={disabled}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={type !== "password" ? type : isPasswordShow ? "text" : type}
                    name={name}
                    className={classNames(`${type === "password" ? "pr-10 pl-3" : "px-3"} py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md`, inputClass)}
                    placeholder={placeholder}
                    value={(value ?? (values as { [key: string]: string })?.[name])}
                />
                {type === "password" &&
                    <span className='cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-[#8B8B8B]' onClick={handlePasswordVisibility}>
                        {isPasswordShow ?
                            <Visibility className='!text-xl' />
                            :
                            <VisibilityOffOutlined className='!text-xl' />
                        }
                    </span>
                }
                {error && (
                    <span className="text-red-500 text-sm mt-1 block">{error}</span> // Display error message
                )}
            </div>
        </div>
    )
}

export default Input