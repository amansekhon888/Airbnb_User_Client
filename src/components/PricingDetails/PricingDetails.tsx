
import { Add, Remove } from "@mui/icons-material";
import Flatpickr from "react-flatpickr"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PricingDetails = ({ data }) => {
    const [showMonths, setShowMonths] = useState<number | undefined>(undefined);
    const [selectedDate, setSelectedDate] = useState<Date[] | null>(null);
    const [numNights, setNumNights] = useState(0);
    const [guestCount, setGuestCount] = useState(1);

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setShowMonths(1);
        } else {
            setShowMonths(2);
        }
    }, [])
    useEffect(() => {
        if (selectedDate && selectedDate.length === 2) {
            const checkIn = new Date(selectedDate[0]);
            const checkOut = new Date(selectedDate[1]);
            const nights = Math.max(0, Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24)));
            setNumNights(nights);
        } else {
            setNumNights(0);
        }
    }, [selectedDate]);

    const basePrice = numNights * data?.price_per_night || 0;

    // Calculate Discount
    let discount = 0;
    if (numNights > 30) {
        discount = basePrice * 0.2; // 20% discount
    } else if (numNights > 6) {
        discount = basePrice * 0.1; // 10% discount
    }

    const totalPrice = basePrice - discount + data.cleaning_fee + data.service_fee;


    return (
        <>
            <div className="border-primary bg-primary lg:bg-transparent bg-opacity-5 rounded-xl border lg:border-[#C3C3C3] lg:rounded-2xl p-3">
                <div className="flex items-end text-text1 gap-2">
                    {/* <span className="opacity-50 line-through text-lg">₹3,499</span> */}
                    <span className="text-xl font-medium ">{data?.price_per_night}</span><span className="opacity-50">/night</span>
                </div>
                <div className=" rounded-xl border border-[#c3c3c3] mt-4">
                    <div className="p-2">
                        <Flatpickr
                            options={{
                                mode: "range",
                                dateFormat: "Y-m-d",
                                showMonths: showMonths ?? 1,
                                allowInput: true,
                                minDate: "today",
                                disable: [],
                            }}
                            value={selectedDate || null}
                            onChange={(e) => setSelectedDate(e)}
                            className="px-0 xl:px-3 py-1 placeholder:text-text1 text-text1 border-none w-full focus:ring-0 text-center bg-transparent"
                            placeholder="Check-in - Check-out"
                        />
                    </div>
                    <hr className="border-[#c3c3c3]" />
                    <div className="p-2">
                        <div className='h-10 bg-transparent px-3 xl:px-0 pr-3 flex items-center'>
                            <div className='flex justify-center w-full gap-3 text-text1'>
                                <span>Guests:</span>
                                <div className='flex items-center gap-2'>
                                    <button className='text-primary' onClick={() => setGuestCount((prev) => Math.max(1, prev - 1))} disabled={guestCount === 1}><Remove className='!text-lg' /></button>
                                    <span className='font-medium'>{guestCount}</span>
                                    <button className='text-primary' onClick={() => setGuestCount((prev) => prev + 1)} disabled={guestCount === data.max_guests}><Add className='!text-lg' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <Link to="/confirm-booking" className="btn1 w-full flex items-center justify-center">
                        Book Now
                    </Link>
                    <p className="text-center mt-2 text-text3 text-sm">You won’t be charged yet</p>
                </div>
                {numNights > 0 &&
                    <div className="mt-4">
                        <ul className="flex flex-col gap-1">
                            <li className="flex items-center justify-between text-text3">
                                <span>{data?.price_per_night} x {numNights} nights</span>
                                <span>₹{basePrice}</span>
                            </li>
                            {discount > 0 && (
                                <li className="flex items-center justify-between text-text3">
                                    <span>{numNights > 30 ? "Long stay discount (20%)" : "Long stay discount (10%)"}</span>
                                    <span>-₹{discount}</span>
                                </li>
                            )}
                            <li className="flex items-center justify-between text-text3">
                                <span>Cleaning fee</span>
                                <span>₹{data.cleaning_fee}</span>
                            </li>
                            <li className="flex items-center justify-between text-text3">
                                <span>Service fee</span>
                                <span>₹{data.service_fee}</span>
                            </li>
                            <li className="mt-2 flex items-center justify-between text-text1 font-medium">
                                <span>Total before taxes</span>
                                <span>₹{totalPrice}</span>
                            </li>
                        </ul>
                    </div>
                }

            </div>
        </>
    )
}

export default PricingDetails