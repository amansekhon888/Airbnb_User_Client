import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import AddPhotos from './AddPhotos'

const NewPropertyDetails = () => {

    const Amenities = [
        {
            title: 'Recommended Amenities',
            subtitle: 'Travelers prefer these amenities when booking homes',
            items: ['Air conditioning', 'Breakfast', 'Cable TV', 'Fireplace', 'Kitchen', 'Private entrance', 'Smoke detector', 'Washer', 'Wifi'],
        },
        {
            title: 'Guest’s favorites',
            subtitle: 'Most of our successful properties provide these amenities.',
            items: ['Closet', "Dryer", "Essentials", "Heating", "Iron", "Laptop friendly workspace", "TV", "Hangers", "Hair dryer"],
        },
        {
            title: 'Kitchen',
            subtitle: 'Guests often book homes because of the kitchen, make sure you let travelers know what to expect in your kitchen spaces.',
            items: ['Coffee maker', 'Cooking basics', 'Dishes and silverware', 'Dishwasher', 'Microwave', 'Oven', 'Refrigerator', 'Stove'],
        },
        {
            title: 'Safety and Cleanlinesss',
            subtitle: 'Safety features that guests often look for when booking homes.',
            items: ['Fire extinguisher', 'First aid kit', 'Smoke detector', 'Carbon monoxide detector', 'Lock on bedroom door', 'Private entrance', 'Safety card', 'Window guards', 'Bedroom comforts'],
        },
        {
            title: 'Others',
            subtitle: 'Other amenities that guests often look for when booking homes.',
            items: ['Carbon monoxide detector', 'First aid kit', 'Free parking on premises', 'Gym', 'Hot tub', 'Pool', 'Self check-in', 'Pets allowed', 'Wheelchair accessible'],
        }
    ]
    return (
        <div>
            <h2 className='text-text1 text-2xl font-medium'>Property Details</h2>
            <p className='text-text3 mt-1'>Specific details about the property to help guests understand what’s being offered.</p>
            <div className='mt-6'>
                <div>
                    <div className='grid md:grid-cols-2 gap-4'>
                        <div className='flex items-center justify-between gap-4 border border-border1 px-3 py-2 rounded-md'>
                            <label htmlFor="" className='text-text1 '>Number of Bedrooms</label>
                            <div className="flex items-center gap-3">
                                <button className='text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md opacity-30' disabled><Remove className='!text-sm' /></button>
                                <span className='text-text1 font-bold'>0</span>
                                <button className='text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md'><Add className='!text-sm' /></button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-4 border border-border1 px-3 py-2 rounded-md'>
                            <label htmlFor="" className='text-text1 '>Number of Beds</label>
                            <div className="flex items-center gap-3">
                                <button className='text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md'><Remove className='!text-sm' /></button>
                                <span className='text-text1 font-bold'>1</span>
                                <button className='text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md'><Add className='!text-sm' /></button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-4 border border-border1 px-3 py-2 rounded-md'>
                            <label htmlFor="" className='text-text1 '>Maximum Guests</label>
                            <div className="flex items-center gap-3">
                                <button className='text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md'><Remove className='!text-sm' /></button>
                                <span className='text-text1 font-bold'>1</span>
                                <button className='text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md'><Add className='!text-sm' /></button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-4 border border-border1 px-3 py-2 rounded-md'>
                            <label htmlFor="" className='text-text1 '>Number of Bathrooms</label>
                            <div className="flex items-center gap-3">
                                <button className='text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md'><Remove className='!text-sm' /></button>
                                <span className='text-text1 font-bold'>1</span>
                                <button className='text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md'><Add className='!text-sm' /></button>
                            </div>
                        </div>
                    </div>
                    <AddPhotos />
                    {/* Amenities Map */}
                    <div>
                        {
                            Amenities.map((amenity, index) => (
                                <>
                                    <hr className='my-8 border-border1' />
                                    <div key={index}>
                                        <h4 className='text-text1 text-xl font-medium'>{amenity.title}</h4>
                                        <p className='text-text3 mt-1'>{amenity.subtitle}</p>
                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
                                            {
                                                amenity.items.map((item, index) => (
                                                    <div key={index} className='flex items-center gap-2'>
                                                        <input type="checkbox" name="" id="" className='rounded' />
                                                        <label htmlFor="" className='text-text1'>{item}</label>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    <div className='mt-8'>
                        <button type='submit' className='btn1 w-full'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPropertyDetails