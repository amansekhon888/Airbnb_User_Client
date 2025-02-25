import { AccessTimeOutlined } from '@mui/icons-material'
import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import { Form } from 'react-router-dom'
import Select from '../../../Components/CommonField/Select'
import TextArea from '../../../Components/CommonField/textarea'

const RulesAndPolicies = () => {
    const formik = useFormik({
        //+ 
        initialValues: {}, //+
        onSubmit: async (values) => {
            console.log(values)
        },
    });

    const CancellationPolicyOptions = [
        { value: 'flexible', label: 'Flexible' },
        { value: 'moderate', label: 'Moderate' },
        { value: 'strict', label: 'Strict' },
    ];
    return (
        <div>
            <p className='text-text3 mt-1'>Set the rules that guests must follow when staying at the property.</p>
            <div className='mt-6'>
                <FormikProvider value={formik}>
                    <Form onSubmit={formik.handleSubmit}>
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                            <div className='col-span-2'>
                                <TextArea name='house_rules' placeholder='Ex. No smoking, no pets, no parties. etc.' label='House Rules' rows={4} inputClass="resize-none" />
                            </div>
                            <div className='col-span-2'>
                                <Select name='cancellation_policy' label='Cancellation Policy' options={CancellationPolicyOptions} />
                            </div>
                            <div className="relative">
                                <label htmlFor="check_in_time" className="text-[15px] text-text1 inline-block font-medium">
                                    Check-in Time
                                </label>
                                <div className="relative mt-1">
                                    <input
                                        id="check_in_time"
                                        type="time"
                                        className="px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md"
                                        {...formik.getFieldProps("check_in_time")}
                                    />
                                    {/* Clock Icon */}
                                    <AccessTimeOutlined className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="check_in_time" className="text-[15px] text-text1 inline-block font-medium">
                                    Check-out Time
                                </label>
                                <div className="relative mt-1">
                                    <input
                                        id="check_in_out"
                                        type="time"
                                        className="px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md"
                                        {...formik.getFieldProps("check_in_out")}
                                    />
                                    {/* Clock Icon */}
                                    <AccessTimeOutlined className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-8 flex gap-3'>
                            <button type='submit' className='btn1 border border-text1 !bg-transparent !text-text1 hover:!text-primary hover:border-primary'>Discard</button>
                            <button type='submit' className='btn1'>Save</button>
                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </div>
    )
}

export default RulesAndPolicies