import { Form, FormikProvider, useFormik } from 'formik'
import Input from '../CommonField/Input';
import Select from '../CommonField/Select';
import TextArea from '../CommonField/textarea';
import mapBg from "../../assets/images/mapBg.png"

const PropertyInfo = () => {
    const formik = useFormik({
        //+ 
        initialValues: {}, //+
        onSubmit: async (values) => {
            console.log(values)
        },
    });

    const propertyTypeOptions = [
        { value: 'apartment', label: 'Apartment' },
        { value: 'house', label: 'House' },
        { value: 'condo', label: 'Condo' },
        { value: 'townhouse', label: 'Townhouse' },
        { value: 'villa', label: 'Villa' },
    ];
    const propertyCategoryOptions = [
        { value: 'house_rental', label: 'House Rental' },
        { value: 'apartment_rental', label: 'Apartment Rental' },
        { value: 'condo_rental', label: 'Condo Rental' },
        { value: 'townhouse_rental', label: 'Townhouse Rental' },
    ];
    const StateOptions = [
        { value: 'Alabama', label: 'Alabama' },
        { value: 'Alaska', label: 'Alaska' },
        { value: 'Arizona', label: 'Arizona' },
        { value: 'Arkansas', label: 'Arkansas' },
    ]
    const CityOptions = [
        { value: 'Birmingham', label: 'Birmingham' },
        { value: 'Chicago', label: 'Chicago' },
        { value: 'Denver', label: 'Denver' },
        { value: 'New York', label: 'New York' },
    ]
    return (
        <div>
            <h2 className='text-text1 text-2xl font-medium'>Property Information</h2>
            <p className='text-text3 mt-1'>Basic property details that are essential for setting up the listing.</p>
            <div className='mt-6'>
                <FormikProvider value={formik}>
                    <Form onSubmit={formik.handleSubmit}>
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                            <div className='col-span-2'>
                                <Input name='property_name' placeholder='Enter property name' label='Property Title' />
                            </div>
                            <div className=''>
                                <Select name='property_type' label='Property Type' options={propertyTypeOptions} />
                            </div>
                            <div className=''>
                                <Select name='property_category' label='Property Category' options={propertyCategoryOptions} />
                            </div>
                            <div className='col-span-2'>
                                <TextArea name='property_description' placeholder='Enter property description' label='Property Description' rows={3} inputClass='resize-none' />
                            </div>
                            <div className='col-span-2'>
                                <Input name='property_address' placeholder='Enter address' label='Address' />
                            </div>
                            <div className=''>
                                <Select name='state' label='County / State' options={StateOptions} />
                            </div>
                            <div className=''>
                                <Select name='city' label='City' options={CityOptions} />
                            </div>
                            <div className=''>
                                <Input name='landmark' placeholder='Enter Landmark' label='Landmark' />
                            </div>
                            <div className=''>
                                <Input name='zipcode' placeholder='Enter Zip Code' label='Zip Code' />
                            </div>
                            <div className='col-span-2 mt-3'>
                                <div className='h-[300px] rounded-xl overflow-hidden'>
                                    <img src={mapBg} className='h-[300px] w-full object-cover' />
                                </div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <button type='submit' className='btn1 w-full'>Next</button>
                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </div >
    )
}

export default PropertyInfo