import PropertyInfo from "../../Components/AddProperty/PropertyInfo.tsx";
import StepLeft from "../../Components/AddProperty/StepLeft.tsx";
import NewPropertyDetails from "../../Components/AddProperty/NewPropertyDetails.tsx";
import PricingAndAvailability from "../../Components/AddProperty/PricingAndAvailability.tsx";
import RulesAndPolicies from "../../Components/AddProperty/RulesAndPolicies.tsx";
import AdditionalInformation from "../../Components/AddProperty/AdditionalInformation.tsx";
import { Link, useSearchParams } from "react-router-dom";
import { KeyboardArrowDownOutlined, KeyboardArrowLeftOutlined, KeyboardArrowUpOutlined } from "@mui/icons-material";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { initialValues } from "../../Formik/property.ts";
import { useAddPropertyMutation, useGetPropertiesByIdQuery } from "../../redux/api/property.ts";
import Header from "../../components/Header/Header.tsx";
import { toast } from "react-toastify";

const steps = [
    { component: PropertyInfo, title: "Property Info", des: "Basic property details that are essential for setting up the listing." },
    { component: NewPropertyDetails, title: "Property Details", des: "Specific details about the property to help guests understand what’s being offered." },
    { component: PricingAndAvailability, title: "Pricing & Availability", des: "Set the pricing and availability details for the property." },
    { component: RulesAndPolicies, title: "Rules & Policies", des: "Set the rules that guests must follow when staying at the property." },
    { component: AdditionalInformation, title: "Additional Information", des: "Any extra details to further customize the listing." },
];

const AddProperty = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("draft");
    const { data: propertyData, isLoading } = useGetPropertiesByIdQuery(id, { skip: !id });

    const [currentStep, setCurrentStep] = useState(0);
    const [expandedStep, setExpandedStep] = useState(0);
    const [propertyId, setPropertyId] = useState(id || "");
    const [draftStepsCompleted, setDraftStepsCompleted] = useState(0);
    const [addPropertyFun, { isLoading: isSaving }] = useAddPropertyMutation();

    console.log(propertyData);
    console.log("propertyId:", propertyId);
    console.log("currentStep:", currentStep);
    console.log("expandedStep:", expandedStep);

    // ✅ Update steps only when `propertyData` is available
    useEffect(() => {
        if (propertyData) {
            setDraftStepsCompleted(propertyData.draft_steps_completed || 0);
            setCurrentStep(propertyData.draft_steps_completed || 0);
            setExpandedStep(propertyData.draft_steps_completed || 0); // ✅ Expands the last completed step
        }
    }, [propertyData]);

    // ✅ Merged API data with initial values
    const mergedInitialValues = propertyData ? { ...initialValues, ...propertyData } : initialValues;

    // 🔹 Handle Form Submission
    const handleFormSubmit = async (values) => {
        console.log(`Step ${currentStep} Data:`, values);

        const requestData = {
            ...values,
            draft_steps_completed: Math.max(draftStepsCompleted, currentStep), // Prevent decreasing draftStepsCompleted
        };

        // If it's a new property (no draft ID), create a new one
        if (!propertyId) {
            requestData.step = currentStep;
        } else {
            requestData.id = propertyId;
            requestData.step = currentStep;
        }

        try {
            const response = await addPropertyFun(requestData).unwrap();
            console.log("Response:", response);

            if (response._id) {
                setPropertyId(response._id); // Store property ID after first submission
            }
            toast.success(`${steps[currentStep - 1].title} Successfully Updated`)

            // ✅ Ensure `draftStepsCompleted` does not decrease
            setDraftStepsCompleted(response.draft_steps_completed);

            // ✅ If updating a previous step, keep `expandedStep` unchanged
            // ✅ If submitting a new step, update `expandedStep`
            setExpandedStep(response.draft_steps_completed);
        } catch (error) {
            console.error("Error saving property:", error);
        }
    };
    const handelPublish = async () => {
        const requestData = {
            step: 6,
            id: propertyId
        }
        try {
            const response = await addPropertyFun(requestData).unwrap();
            console.log("Response:", response);
            toast.success("Property saved successfully")
        } catch (error) {
            console.error("Error saving property:", error);
        }
    }
    return (
        <>
            <Header />
            <div className="container mx-auto">
                <div className="pt-10 pb-16">
                    <div>
                        <div className="mb-5">
                            <p className="text-xl font-semibold">
                                <Link to="/my-properties" className="flex items-center gap-3">
                                    <span><KeyboardArrowLeftOutlined className="!text-3xl" /> <span className="text-primary">Back</span></span>
                                </Link>
                            </p>
                        </div>

                        {/* Wait for property data before rendering the form */}
                        {isLoading ? (
                            <p>Loading property details...</p>
                        ) : (
                            <Formik initialValues={mergedInitialValues} onSubmit={handleFormSubmit} enableReinitialize>
                                {() => (
                                    <Form>
                                        <div className="flex flex-col gap-12">
                                            {steps.map((step, index) => {
                                                const status =
                                                    index < draftStepsCompleted ? "done" :
                                                        index === draftStepsCompleted ? "progress" :
                                                            "pending";

                                                const isExpanded = expandedStep === index || status === "progress";

                                                return (
                                                    <div key={index} className="flex w-full gap-8">
                                                        <StepLeft status={status} step={index + 1} />
                                                        <div className="w-full">
                                                            <div
                                                                className="flex items-center justify-between cursor-pointer"
                                                                onClick={() => {
                                                                    if (status !== "pending") {
                                                                        setExpandedStep(isExpanded ? -1 : index);
                                                                    }
                                                                }}
                                                            >
                                                                <div>
                                                                    <h2 className="text-text1 text-2xl font-medium">{step.title}</h2>
                                                                    <p className="text-text3 mt-1">{step.des}</p>
                                                                </div>
                                                                <span>{isExpanded ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}</span>
                                                            </div>
                                                            {isExpanded && (
                                                                <>
                                                                    <div>
                                                                        <step.component setCurrentStep={setCurrentStep} />
                                                                    </div>
                                                                    <div className="flex w-full gap-5 justify-between mt-6">
                                                                        <button type="submit" className="btn1 w-full" onClick={() => {
                                                                            setCurrentStep(index + 1); console.log("index:", index + 1);
                                                                        }} disabled={isSaving}>
                                                                            {isSaving ? "Saving..." : draftStepsCompleted >= index ? "Update" : "Save & Next"}
                                                                        </button>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        )}
                        <div className="mt-10 flex items-center justify-end gap-4">
                            <button className="btn2">Preview</button>
                            <button className="btn1" onClick={handelPublish}>Publish</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProperty;
