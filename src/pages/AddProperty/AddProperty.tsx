import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { checkpointToStepMap, steps } from "../../constants/property.ts";
import { useFetchDraftQuery } from "../../redux/api/property.ts";
import { getFormikInitialValues, useFormikHandlers } from "../../Formik/property.ts";
import NewPropertyDetails from "../../components/AddProperty/NewPropertyDetails.tsx";
import StepLeft from "../../components/AddProperty/StepLeft.tsx";
import PropertyInfo from "../../components/AddProperty/PropertyInfo.tsx";

const AddProperty = () => {
    const [currentStep, setCurrentStep] = useState<steps>("property_info");
    const [progressInfo, setProgressInfo] = useState<Record<steps, 'progress' | 'done' | 'pending'>>({
        property_info: "progress",
        new_property_details: "pending",
        pricing_and_availability: "pending",
        rules_and_policies: "pending",
        additional_information: "pending",
        ready_to_publish: "pending",
    });

    const params = useParams();
    const draftOrPropertyId = params?.property_id || params?.draft_id;

    const { data: draftData, isFetching } = useFetchDraftQuery(draftOrPropertyId, {
        skip: !draftOrPropertyId,
    });

    const { handleProgress, handlePublish } = useFormikHandlers(draftOrPropertyId || "", useNavigate());

    useEffect(() => {
        if (draftData?.completedCheckpoints) {
            const updatedProgress = { ...progressInfo };

            draftData.completedCheckpoints.forEach((checkpoint: string) => {
                const stepKey = checkpointToStepMap[checkpoint as keyof typeof checkpointToStepMap];
                if (stepKey) {
                    updatedProgress[stepKey] = "done";
                }
            });

            const lastCheckpoint = draftData.completedCheckpoints.at(-1);
            if (lastCheckpoint) {
                const nextCheckpoint = `checkpoint${Number(lastCheckpoint.replace("checkpoint", "")) + 1}`;
                setCurrentStep(checkpointToStepMap[nextCheckpoint]);
                setProgressInfo((prev) => ({
                    ...prev,
                    ...updatedProgress,
                    [checkpointToStepMap[nextCheckpoint]]: "progress",
                }));
            }
        }
    }, [draftData]);

    return (
        <Formik
            initialValues={getFormikInitialValues(draftData)}
            onSubmit={(values) => {
                if (currentStep === "additional_information") {
                    handlePublish(values);
                }
            }}
        >
            {({ values }) => (
                <Form className="pb-10 sm:pb-14 md:pb-16">
                    <div className="container mx-auto">
                        <div className="flex flex-col gap-12">
                            <div className="flex w-full gap-8">
                                <StepLeft status={progressInfo["property_info"]} step={1} />
                                <div className="w-full">
                                    <PropertyInfo
                                        handleProgress={() => handleProgress(values, "property_info", "new_property_details", setProgressInfo, setCurrentStep)}
                                        isFormAvailable={currentStep === "property_info"}
                                    />
                                </div>
                            </div>
                            <div className="flex w-full gap-8">
                                <StepLeft status={progressInfo["new_property_details"]} step={2} />
                                <div className="w-full">
                                    <NewPropertyDetails
                                        handleProgress={() => handleProgress(values, "new_property_details", "pricing_and_availability", setProgressInfo, setCurrentStep)}
                                        isFormAvailable={currentStep === "new_property_details"}
                                    />
                                </div>
                            </div>

                            {/* <StepLeft status={progressInfo["pricing_and_availability"]} step={3} />
                            <PricingAndAvailability
                                values={values.pricing_and_availability}
                                setFieldValue={setFieldValue}
                                handleProgress={() => handleProgress(values, "pricing_and_availability", "rules_and_policies", setProgressInfo, setCurrentStep)}
                                isFormAvailable={currentStep === "pricing_and_availability"}
                            />

                            <StepLeft status={progressInfo["rules_and_policies"]} step={4} />
                            <RulesAndPolicies
                                values={values.rules_and_policies}
                                setFieldValue={setFieldValue}
                                handleProgress={() => handleProgress(values, "rules_and_policies", "additional_information", setProgressInfo, setCurrentStep)}
                                isFormAvailable={currentStep === "rules_and_policies"}
                            />

                            <StepLeft status={progressInfo["additional_information"]} step={5} />
                            <AdditionalInformation
                                values={values.additional_information}
                                setFieldValue={setFieldValue}
                                handleProgress={() => handleProgress(values, "additional_information", "ready_to_publish", setProgressInfo, setCurrentStep)}
                                isFormAvailable={currentStep === "additional_information"}
                            /> */}

                            {/* Final Publish Button */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={progressInfo["additional_information"] !== "done"}
                                    className={`btn1 ${progressInfo["additional_information"] === "done" ? "opacity-100" : "opacity-40"
                                        }`}
                                >
                                    {params?.property_id ? "Update Property" : "Publish Listing"}
                                </button>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default AddProperty;
