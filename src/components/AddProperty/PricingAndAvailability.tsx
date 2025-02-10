import { ToggleSwitch } from "flowbite-react"
import { useState } from "react";

const PricingAndAvailability = () => {
    const [switch3, setSwitch3] = useState(true);
    return (
        <div>
            <h2 className='text-text1 text-2xl font-medium'>Pricing & Availability</h2>
            <p className='text-text3 mt-1'>Set the pricing and availability details for the property.</p>
            <div className='mt-6'>
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="" className='text-[15px] text-text1 mb-1 inline-block font-medium'>Price per Night</label>
                            <div className="relative">
                                <input type="text" placeholder='0' className='px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md' />
                                <span className='absolute right-3 top-1/2 -translate-y-1/2 text-primary text-sm underline underline-offset-[3px] font-medium'>INR(₹)</span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='text-[15px] text-text1 mb-1 inline-block font-medium'>Cleaning Fee</label>
                            <div className="relative">
                                <input type="text" placeholder='0' className='px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md' />
                                <span className='absolute right-3 top-1/2 -translate-y-1/2 text-primary text-sm underline underline-offset-[3px] font-medium'>INR(₹)</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="" className='text-[15px] text-text1 inline-block font-medium'>Weekly Rate Discount</label>
                            <p className="text-sm mb-1 text-text3">The following discount will apply to bookings which are for 7 or more nights.</p>
                            <div className="relative">
                                <input type="text" placeholder='0' className='px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md' />
                                <span className='absolute right-3 top-1/2 -translate-y-1/2 text-text1 text-sm font-medium'>% off</span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='text-[15px] text-text1 inline-block font-medium'>Monthly Rate Discount</label>
                            <p className="text-sm mb-1 text-text3">The following discount will apply to bookings which are for 28 or more nights.</p>
                            <div className="relative">
                                <input type="text" placeholder='0' className='px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md' />
                                <span className='absolute right-3 top-1/2 -translate-y-1/2 text-text1 text-sm font-medium'>% off</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-border1" />
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <label htmlFor="" className='text-[15px] text-text1 inline-block font-medium'>Offer a 33% discount for your first 3 bookings.</label>
                        <h4 className='text-text1 text-xl font-medium'></h4>
                        <p className='text-text3 text-sm mt-1'>Give guests a deal to get bookings and reviews faster.</p>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" className="rounded" />
                    </div>
                </div>
                <hr className="my-6 border-border1" />
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <label htmlFor="" className='text-[15px] text-text1 inline-block font-medium'>Instant Booking</label>
                        <h4 className='text-text1 text-xl font-medium'></h4>
                        <p className='text-text3 text-sm mt-1'>Guests can book instantly without host approval.</p>
                    </div>
                    <div>
                        <ToggleSwitch checked={switch3} onChange={setSwitch3} />
                    </div>
                </div>
                <div className='mt-8'>
                    <button type='submit' className='btn1 w-full'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default PricingAndAvailability