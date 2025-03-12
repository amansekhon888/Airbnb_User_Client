import { ToggleSwitch } from "flowbite-react";
import { useFormikContext } from "formik";
import { useState } from "react";

const PricingAndAvailability = () => {
    const { values, setFieldValue, handleChange, errors } = useFormikContext();
    // const [instantBooking, setInstantBooking] = useState(values.instant_booking || false);

    return (
        <div className="mt-6">
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    {/* Price per Night */}
                    <div>
                        <label className="text-[15px] text-text1 mb-1 inline-block font-medium">
                            Price per Night
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="price_per_night"
                                value={values.price_per_night}
                                onChange={handleChange}
                                placeholder="0"
                                className="px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-sm underline underline-offset-[3px] font-medium">
                                INR(₹)
                            </span>
                        </div>
                        {errors.price_per_night &&
                            <span className="text-red-500 text-sm mt-1 block">
                                {errors.price_per_night}
                            </span>
                        }
                    </div>

                    {/* Weekend Price */}
                    <div>
                        <label className="text-[15px] text-text1 mb-1 inline-block font-medium">
                            Weekend Price
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="weekend_price"
                                value={values.weekend_price}
                                onChange={handleChange}
                                placeholder="0"
                                className="px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-sm underline underline-offset-[3px] font-medium">
                                INR(₹)
                            </span>
                        </div>
                        {errors.weekend_price &&
                            <span className="text-red-500 text-sm mt-1 block">
                                {errors.weekend_price}
                            </span>
                        }
                    </div>

                    {/* Cleaning Fee */}
                    <div>
                        <label className="text-[15px] text-text1 mb-1 inline-block font-medium">
                            Cleaning Fee
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="cleaning_fee"
                                value={values.cleaning_fee}
                                onChange={handleChange}
                                placeholder="0"
                                className="px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-sm underline underline-offset-[3px] font-medium">
                                INR(₹)
                            </span>
                        </div>
                        {errors.cleaning_fee &&
                            <span className="text-red-500 text-sm mt-1 block">
                                {errors.cleaning_fee}
                            </span>
                        }
                    </div>

                    {/* Service Fee */}
                    <div>
                        <label className="text-[15px] text-text1 mb-1 inline-block font-medium">
                            Service Fee
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="service_fee"
                                value={values.service_fee}
                                onChange={handleChange}
                                placeholder="0"
                                className="px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-sm underline underline-offset-[3px] font-medium">
                                INR(₹)
                            </span>
                        </div>
                        {errors.service_fee &&
                            <span className="text-red-500 text-sm mt-1 block">
                                {errors.service_fee}
                            </span>
                        }
                    </div>
                </div>

                {/* Discounts */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Weekly Discount */}
                    <div>
                        <label className="text-[15px] text-text1 inline-block font-medium">
                            Weekly Rate Discount
                        </label>
                        <p className="text-sm mb-1 text-text3">
                            The following discount will apply to bookings of 7 or more nights.
                        </p>
                        <div className="relative">
                            <input
                                type="text"
                                name="weekly_discount"
                                value={values.weekly_discount}
                                onChange={handleChange}
                                placeholder="0"
                                className="px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text1 text-sm font-medium">
                                % off
                            </span>
                        </div>
                        {errors.weekly_discount &&
                            <span className="text-red-500 text-sm mt-1 block">
                                {errors.weekly_discount}
                            </span>
                        }
                    </div>

                    {/* Monthly Discount */}
                    <div>
                        <label className="text-[15px] text-text1 inline-block font-medium">
                            Monthly Rate Discount
                        </label>
                        <p className="text-sm mb-1 text-text3">
                            The following discount will apply to bookings of 28 or more nights.
                        </p>
                        <div className="relative">
                            <input
                                type="text"
                                name="monthly_discount"
                                value={values.monthly_discount}
                                onChange={handleChange}
                                placeholder="0"
                                className="px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text1 text-sm font-medium">
                                % off
                            </span>
                        </div>
                        {errors.monthly_discount &&
                            <span className="text-red-500 text-sm mt-1 block">
                                {errors.monthly_discount}
                            </span>
                        }
                    </div>
                </div>

                <hr className="my-4 border-border1" />

                {/* First Booking Discount */}
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <label className="text-[15px] text-text1 inline-block font-medium">
                            Offer a 33% discount for your first 3 bookings.
                        </label>
                        <p className="text-text3 text-sm mt-1">
                            Give guests a deal to get bookings and reviews faster.
                        </p>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="discount_first_booking"
                            checked={values.discount_first_booking}
                            onChange={() =>
                                setFieldValue("discount_first_booking", !values.discount_first_booking)
                            }
                            className="rounded"
                        />
                    </div>
                </div>

                {/* <hr className="my-6 border-border1" />

                Instant Booking Toggle
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <label className="text-[15px] text-text1 inline-block font-medium">
                            Instant Booking
                        </label>
                        <p className="text-text3 text-sm mt-1">
                            Guests can book instantly without host approval.
                        </p>
                    </div>
                    <div>
                        <ToggleSwitch
                            checked={instantBooking}
                            onChange={(checked) => {
                                setInstantBooking(checked);
                                setFieldValue("instant_booking", checked);
                            }}
                        />
                    </div>
                </div> */}
            </div>
        </div >
    );
};

export default PricingAndAvailability;
