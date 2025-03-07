import { steps } from "../constants/property";
import { usePublishDraftMutation, useSaveDraftMutation } from "../redux/api/property";

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
    bedrooms: 0,
    beds: 0,
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
        type:"",
        description:""
    },
    safety_and_property: "",
    check_in_time: "",
    check_out_time: "",

    // Step 5: Additional Information
    is_self_checkin: false,
    pet_allowed: false,
    notes:{
        general_note: "",
        attraction_note: "",
    }
};



// export const useFormikHandlers = (draftOrPropertyId: string, navigate: any) => {
//     const [saveDraft] = useSaveDraftMutation();
//     const [publishDraft] = usePublishDraftMutation();

//     const handleProgress = async (values: any, step: steps, nextStep: steps, setProgressInfo: any, setCurrentStep: any) => {
//         await saveDraft({ draftId: draftOrPropertyId, data: values });
//         setProgressInfo((prev: any) => ({ ...prev, [step]: "done", [nextStep]: "progress" }));
//         setCurrentStep(nextStep);
//     };

//     const handlePublish = async (values: any) => {
//         await publishDraft({ draftId: draftOrPropertyId, data: values });
//         // showToast("success", "Property published successfully!");
//         navigate(`/my-properties`);
//     };

//     return { handleProgress, handlePublish };
// };
