import * as Yup from "yup";

export const initialValues = {
    // Step 1: Property Info
    title: "",
    property_type: "",
    category: "",
    description: "",
    type_of_place: "",
    availability_dates: {
        start_date: "",
        end_date: ""
    },
    gallery: [],
    address: {
        address: "",
        city: "",
        state: "",
        country: "",
        zip_code: "",
        latitude: "",
        longitude: "",
    },

    // Step 2: Property Details
    bedrooms: 1,
    beds: 1,
    max_guests: 1,
    bathrooms: 1,
    amenities: [],

    // Step 3: Pricing & Availability
    price_per_night: "",
    cleaning_fee: "",
    service_fee: "",
    weekly_discount: "",
    monthly_discount: "",
    weekend_price: "",
    discount_first_booking: false,

    // Step 4: Rules & Policies
    house_rules: "",
    cancellation_policy: {
        type: "",
        description: ""
    },
    safety_and_property: "",
    check_in_time: "",
    check_out_time: "",

    // Step 5: Additional Information
    is_self_checkin: false,
    pet_allowed: false,
    notes: {
        general_note: "",
        attraction_note: "",
    }
};

const propertyInfo = Yup.object().shape({
    title: Yup.string()
        .required("Property title is required")
        .min(5, "Title should be at least 5 characters"),

    property_type: Yup.string().required("Property type is required"),

    category: Yup.string().required("Category is required"),

    type_of_place: Yup.string().required("Type of place is required"),

    availability_dates: Yup.object().shape({
        start_date: Yup.date().required("Start date is required"),
        end_date: Yup.date()
            .required("End date is required")
            .min(Yup.ref("start_date"), "End date must be after start date"),
    }),
    description: Yup.string().required("Description is required"),
    gallery: Yup.array().min(5, "At least 5 images are required").required("At least 5 images are required"),

    address: Yup.object().shape({
        address: Yup.string().required("Address is required"),
        state: Yup.string().required("State is required"),
        city: Yup.string().required("City is required"),
        country: Yup.string().required("Country is required"),
        zip_code: Yup.string()
            .required("Zip Code is required")
            .matches(/^[0-9]{6}$/, "Invalid Zip Code"),
    }),
})

const propertyAmenities = Yup.object().shape({
    amenities: Yup.array().min(5, "At least 5 amenities are required").required("At least 5 amenities are required"),
})
const PricingAndAvailability = Yup.object().shape({
    price_per_night: Yup.number()
        .required("Price per night is required")
        .positive("Price must be a positive number"),
    cleaning_fee: Yup.number().min(0, "Cleaning fee cannot be negative").default(0),
    service_fee: Yup.number().min(0, "Service fee cannot be negative").default(0),
    weekly_discount: Yup.number().min(0, "Weekly discount cannot be negative").default(0),
    monthly_discount: Yup.number().min(0, "Monthly discount cannot be negative").default(0),
    weekend_price: Yup.number().min(0, "Weekend price cannot be negative").default(0),
    discount_first_booking: Yup.boolean(),
})
const RulesAndPolicies = Yup.object().shape({
    house_rules: Yup.string().required("House rules are required"),
    cancellation_policy: Yup.object().shape({
        type: Yup.string().required("Cancellation policy type is required"),
        description: Yup.string(),
    }),
    safety_and_property: Yup.string(),
    check_in_time: Yup.string().required("Check-in time is required"),
    check_out_time: Yup.string().required("Check-out time is required"),
})

const AdditionalInformation = Yup.object().shape({
    is_self_checkin: Yup.boolean(),
    pet_allowed: Yup.boolean(),
    notes: Yup.object().shape({
        general_note: Yup.string(),
        attraction_note: Yup.string(),
    }),
})

export const propertySchema = [
    propertyInfo,
    propertyAmenities,
    PricingAndAvailability,
    RulesAndPolicies,
    AdditionalInformation,
]