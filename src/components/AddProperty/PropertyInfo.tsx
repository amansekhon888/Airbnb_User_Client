import Input from '../CommonField/Input';
import Select from '../CommonField/Select';
import TextArea from '../CommonField/textarea';
import mapBg from "../../assets/images/mapBg.png"
import AddPhotos from './AddPhotos';

const PropertyInfo = ({ setCurrentStep }) => {
    setCurrentStep(1)

    const propertyTypeOptions = [
        { value: 'apartment', label: 'Apartment' },
        { value: 'house', label: 'House' },
        { value: 'condo', label: 'Condo' },
        { value: 'townhouse', label: 'Townhouse' },
        { value: 'villa', label: 'Villa' },
    ];
    const typeofPlaceOptions = [
        { value: 'any', label: 'Any' },
        { value: 'room', label: 'Room' },
        { value: 'home', label: 'Home' },
    ];
    const propertyCategoryOptions = [
        { value: '67bdfc967028ece27a2307dc', label: 'Beach' },
        { value: '67be00705a0144ce64abb460', label: 'Hill' },
        { value: '67be02ac30ad68a43661e9cb', label: 'plain' },
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
            <div className='mt-6'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                    <div className='col-span-2'>
                        <Input name='title' placeholder='Enter property name' label='Property Title' />
                    </div>
                    <div className=''>
                        <Select name='property_type' label='Property Type' options={propertyTypeOptions} />
                    </div>
                    <div className=''>
                        <Select name='category' label='Property Category' options={propertyCategoryOptions} />
                    </div>
                    <div className=''>
                        <Select name='type_of_place' label='Type of place' options={typeofPlaceOptions} />
                    </div>
                    <div className=''>
                        <label htmlFor="" className='text-[15px] text-text1 mb-1 inline-block font-medium'>Availability Dates</label>
                        <div className='grid grid-cols-2 gap-4'>
                            <Input type='date' name='availability_dates.start_date' placeholder='Enter Start Date' />
                            <Input type='date' name='availability_dates.end_date' placeholder='Enter End Date' />
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <TextArea name='description' placeholder='Enter property description' label='Property Description' rows={3} inputClass='resize-none' />
                    </div>
                    <div className='col-span-2'>
                        <AddPhotos />
                    </div>
                    <div className='col-span-2'>
                        <Input name='address.address' placeholder='Enter address' label='Address' />
                    </div>
                    <div className=''>
                        <Select name='address.state' label='County / State' options={StateOptions} />
                    </div>
                    <div className=''>
                        <Select name='address.city' label='City' options={CityOptions} />
                    </div>
                    <div className=''>
                        <Input name='address.country' placeholder='Enter country' label='country' />
                    </div>
                    <div className=''>
                        <Input name='address.zip_code' placeholder='Enter Zip Code' label='Zip Code' />
                    </div>
                    <div className='col-span-2 mt-3'>
                        <div className='h-[300px] rounded-xl overflow-hidden'>
                            <img src={mapBg} className='h-[300px] w-full object-cover' />
                        </div>
                    </div>
                </div>
                {/* <div className='mt-8'>
                    <button className='btn1 w-full'>Next</button>
                </div> */}
            </div>
        </div >
    )
}

export default PropertyInfo