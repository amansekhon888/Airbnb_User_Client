import { Add, Remove } from "@mui/icons-material";
import { useFormikContext } from "formik";
import React from "react";

const NewPropertyDetails = () => {
    const { values, setFieldValue } = useFormikContext();

    const Amenities = [
        {
            title: "Recommended Amenities",
            subtitle: "Travelers prefer these amenities when booking homes",
            items: [
                "Air conditioning",
                "Breakfast",
                "Cable TV",
                "Fireplace",
                "Kitchen",
                "Private entrance",
                "Smoke detector",
                "Washer",
                "Wifi",
            ],
        },
        {
            title: "Guest’s favorites",
            subtitle: "Most of our successful properties provide these amenities.",
            items: [
                "Closet",
                "Dryer",
                "Essentials",
                "Heating",
                "Iron",
                "Laptop friendly workspace",
                "TV",
                "Hangers",
                "Hair dryer",
            ],
        },
        {
            title: "Kitchen",
            subtitle:
                "Guests often book homes because of the kitchen, make sure you let travelers know what to expect in your kitchen spaces.",
            items: [
                "Coffee maker",
                "Cooking basics",
                "Dishes and silverware",
                "Dishwasher",
                "Microwave",
                "Oven",
                "Refrigerator",
                "Stove",
            ],
        },
        {
            title: "Safety and Cleanliness",
            subtitle: "Safety features that guests often look for when booking homes.",
            items: [
                "Fire extinguisher",
                "First aid kit",
                "Smoke detector",
                "Carbon monoxide detector",
                "Lock on bedroom door",
                "Private entrance",
                "Safety card",
                "Window guards",
                "Bedroom comforts",
            ],
        },
        {
            title: "Others",
            subtitle: "Other amenities that guests often look for when booking homes.",
            items: [
                "Carbon monoxide detector",
                "First aid kit",
                "Free parking on premises",
                "Gym",
                "Hot tub",
                "Pool",
                "Self check-in",
                "Pets allowed",
                "Wheelchair accessible",
            ],
        },
    ];

    // Function to handle number changes
    const handleNumberChange = (field, operation) => {
        setFieldValue(field, Math.max(0, values[field] + (operation === "increase" ? 1 : -1)));
    };

    // Function to handle checkbox selection
    const handleAmenityChange = (amenity) => {
        if (values.amenities.includes(amenity)) {
            setFieldValue("amenities", values.amenities.filter((item) => item !== amenity));
        } else {
            setFieldValue("amenities", [...values.amenities, amenity]);
        }
    };

    return (
        <div className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
                {/* Bedrooms */}
                <div className="flex items-center justify-between gap-4 border border-border1 px-3 py-2 rounded-md">
                    <label className="text-text1">Number of Bedrooms</label>
                    <div className="flex items-center gap-3">
                        <button
                            className="text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md"
                            onClick={() => handleNumberChange("bedrooms", "decrease")}
                            type="button"
                        >
                            <Remove className="!text-sm" />
                        </button>
                        <span className="text-text1 font-semibold min-w-[20px] text-center text-sm">{values.bedrooms}</span>
                        <button
                            className="text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md"
                            onClick={() => handleNumberChange("bedrooms", "increase")}
                            type="button"
                        >
                            <Add className="!text-sm" />
                        </button>
                    </div>
                </div>

                {/* Beds */}
                <div className="flex items-center justify-between gap-4 border border-border1 px-3 py-2 rounded-md">
                    <label className="text-text1">Number of Beds</label>
                    <div className="flex items-center gap-3">
                        <button
                            className="text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md"
                            onClick={() => handleNumberChange("beds", "decrease")}
                            type="button"
                        >
                            <Remove className="!text-sm" />
                        </button>
                        <span className="text-text1 font-semibold min-w-[20px] text-center text-sm">{values.beds}</span>
                        <button
                            className="text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md"
                            onClick={() => handleNumberChange("beds", "increase")}
                            type="button"
                        >
                            <Add className="!text-sm" />
                        </button>
                    </div>
                </div>

                {/* Max Guests */}
                <div className="flex items-center justify-between gap-4 border border-border1 px-3 py-2 rounded-md">
                    <label className="text-text1">Maximum Guests</label>
                    <div className="flex items-center gap-3">
                        <button
                            className="text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md"
                            onClick={() => handleNumberChange("max_guests", "decrease")}
                            type="button"
                        >
                            <Remove className="!text-sm" />
                        </button>
                        <span className="text-text1 font-semibold min-w-[20px] text-center text-sm">{values.max_guests}</span>
                        <button
                            className="text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md"
                            onClick={() => handleNumberChange("max_guests", "increase")}
                            type="button"
                        >
                            <Add className="!text-sm" />
                        </button>
                    </div>
                </div>

                {/* Bathrooms */}
                <div className="flex items-center justify-between gap-4 border border-border1 px-3 py-2 rounded-md">
                    <label className="text-text1">Number of Bathrooms</label>
                    <div className="flex items-center gap-3">
                        <button
                            className="text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md"
                            onClick={() => handleNumberChange("bathrooms", "decrease")}
                            type="button"
                        >
                            <Remove className="!text-sm" />
                        </button>
                        <span className="text-text1 font-semibold min-w-[20px] text-center text-sm">{values.bathrooms}</span>
                        <button
                            className="text-text1 font-bold w-5 h-5 flex items-center justify-center border border-text1 rounded-md"
                            onClick={() => handleNumberChange("bathrooms", "increase")}
                            type="button"
                        >
                            <Add className="!text-sm" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Amenities Selection */}
            {Amenities.map((category, index) => (
                <div key={index}>
                    <hr className="my-8 border-border1" />
                    <h4 className="text-text1 text-xl font-medium">{category.title}</h4>
                    <p className="text-text3 mt-1">{category.subtitle}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                        {category.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={values.amenities.includes(item)}
                                    onChange={() => handleAmenityChange(item)}
                                    className="rounded"
                                />
                                <label className="text-text1">{item}</label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewPropertyDetails;
