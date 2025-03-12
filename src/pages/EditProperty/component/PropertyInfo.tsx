import { useFormikContext } from 'formik';
import Input from '../../../Components/CommonField/Input';
import Select from '../../../Components/CommonField/Select';
import TextArea from '../../../Components/CommonField/textarea';
import { mapBg } from '../../../assets/images';
import AddPhotos from './AddPhotos';
import { useGetCategoriesQuery } from '../../../redux/api/property';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useState } from 'react';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const mapContainerStyle = {
    width: "100%",
    height: "300px",
};
const PropertyInfo = () => {
    const { values, setFieldValue, errors, touched, setTouched } = useFormikContext();
    const { data: categories } = useGetCategoriesQuery({})
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    });

    const [selectedLocation, setSelectedLocation] = useState({
        lat: Number(values.address.latitude) || 28.6,
        lng: Number(values.address.longitude) || 77.1,
    });

    const handleMapClick = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        setSelectedLocation({ lat, lng });

        setFieldValue("address.latitude", Number(lat));
        setFieldValue("address.longitude", Number(lng));
    };
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
    return (
        <div>
            <p className='text-text3 mt-1'>Basic property details that are essential for setting up the listing.</p>
            <div className='mt-6'>
                <div className='grid grid-cols-1 gap-4 xl:grid-cols-2'>
                    <div className='xl:col-span-2'>
                        <Input name='title' placeholder='Enter property name' label='Property Title' />
                    </div>
                    <div className=''>
                        <Select name='property_type' label='Property Type' options={propertyTypeOptions} />
                    </div>
                    <div className=''>
                        <label
                            htmlFor="category"
                            className={"text-[15px] text-text1 mb-1 inline-block font-medium"}
                        >
                            Property Category
                        </label>
                        <select
                            name="category"
                            id="category"
                            className={`py-2 px-3 text-text1 placeholder:text-text3 border-border1 w-full rounded-md ${errors.category && touched.category && "border-red-500"}`}
                            value={values.category}
                            onChange={(e) => setFieldValue("category", e.target.value)}
                            onBlur={() => setTouched({ ...touched, category: true })}
                        >
                            <option hidden value="">
                                Select Category
                            </option>
                            {categories?.map((category, index) => (
                                <option value={category._id} key={index}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {errors.category && touched.category && (
                            <span className="text-red-500 text-sm mt-1 block">{errors.category}</span> // Show error message dynamically
                        )}
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
                    <div className='xl:col-span-2'>
                        <TextArea name='description' placeholder='Enter property description' label='Property Description' rows={3} inputClass='resize-none' />
                    </div>
                    <div className='xl:col-span-2'>
                        <AddPhotos />
                    </div>
                    <div className='col-span-2'>
                        <Input name='address.address' placeholder='Enter address' label='Address' />
                    </div>
                    <div>
                        <Input name="address.city" placeholder="Enter city" label="City" />
                    </div>
                    <div>
                        <Input name='address.zip_code' placeholder='Enter Zip Code' label='Zip Code' />
                    </div>
                    <div>
                        <label className="text-[15px] text-text1 mb-1 inline-block font-medium">Country</label>
                        <CountryDropdown
                            value={values.address.country}
                            onChange={(val) => setFieldValue("address.country", val)}
                            className={`py-2 px-3 text-text1 placeholder:text-text3 w-full rounded-md border ${errors.address?.country && touched.address?.country ? "border-red-500" : "border-border1"}`}
                        />
                        {errors.address?.country && touched.address?.country && (
                            <span className="text-red-500 text-sm mt-1 block">{errors.address.country}</span>
                        )}
                    </div>
                    <div>
                        <label className="text-[15px] text-text1 mb-1 inline-block font-medium">State</label>
                        <RegionDropdown
                            country={values.address.country}
                            value={values.address.state}
                            onChange={(val) => setFieldValue("address.state", val)}
                            className={`py-2 px-3 text-text1 placeholder:text-text3 w-full rounded-md border selectContny ${errors.address?.state && touched.address?.state ? "border-red-500" : "border-border1"}`}
                        />
                        {errors.address?.state && touched.address?.state && (
                            <span className="text-red-500 text-sm mt-1 block">{errors.address.state}</span>
                        )}
                    </div>
                    <div className='col-span-2'>
                        {isLoaded ? (
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                center={selectedLocation}
                                zoom={10}
                                onClick={handleMapClick}
                            >
                                {selectedLocation.lat && selectedLocation.lng && (
                                    <Marker position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }} />
                                )}
                            </GoogleMap>
                        ) : (
                            <p>Loading Map...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyInfo