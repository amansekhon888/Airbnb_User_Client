import { steps } from "../constants/property";
import { usePublishDraftMutation, useSaveDraftMutation } from "../redux/api/property";

export const getFormikInitialValues = (draftData: any) => ({
    property_info: draftData?.checkpoints[0]?.data || {
        propertyTitle: "",
        propertyCity: "",
        propertyType: "",
        propertyCategoryId: "",
        propertyPlaceType: "",
        propertyAvailabilityDates: {
            startDate: "",
            endDate: "",
        },
        propertyCountry: "",
        propertyState: "",
        propertyDescription: "",
        propertyGallery: [],
        propertyAddress: "",
        propertyLandmark: "",
        propertyZipcode: "",
        propertyCoordinates: {
            latitude: "",
            longitude: "",
        },
    },
    new_property_details: draftData?.checkpoints[1]?.data || {},
    pricing_and_availability: draftData?.checkpoints[2]?.data || {},
    rules_and_policies: draftData?.checkpoints[3]?.data || {},
    additional_information: draftData?.checkpoints[4]?.data || {},
});

export const useFormikHandlers = (draftOrPropertyId: string, navigate: any) => {
    const [saveDraft] = useSaveDraftMutation();
    const [publishDraft] = usePublishDraftMutation();

    const handleProgress = async (values: any, step: steps, nextStep: steps, setProgressInfo: any, setCurrentStep: any) => {
        await saveDraft({ draftId: draftOrPropertyId, data: values });
        setProgressInfo((prev: any) => ({ ...prev, [step]: "done", [nextStep]: "progress" }));
        setCurrentStep(nextStep);
    };

    const handlePublish = async (values: any) => {
        await publishDraft({ draftId: draftOrPropertyId, data: values });
        // showToast("success", "Property published successfully!");
        navigate(`/my-properties`);
    };

    return { handleProgress, handlePublish };
};
