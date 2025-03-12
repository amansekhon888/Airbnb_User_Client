import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
// import PropertyInfo from "./component/PropertyInfo.tsx";
import { useEditPropertyMutation, useGetPropertiesByIdQuery } from '../../redux/api/property.ts';
import { Form, Formik } from 'formik';
import { initialValues, propertySchema } from '../../Formik/property.ts';
import NewPropertyDetails from '../../Components/AddProperty/NewPropertyDetails.tsx';
import PropertyInfo from '../../Components/AddProperty/PropertyInfo.tsx';
import PricingAndAvailability from '../../Components/AddProperty/PricingAndAvailability.tsx';
import RulesAndPolicies from '../../Components/AddProperty/RulesAndPolicies.tsx';
import AdditionalInformation from '../../Components/AddProperty/AdditionalInformation.tsx';
import { toast } from 'react-toastify';

const EditProperty = () => {
    const { id } = useParams()
    const { data: propertyData, isLoading } = useGetPropertiesByIdQuery(id)
    const [editProperty, { isLoading: EditLoading }] = useEditPropertyMutation()
    const [searchParams, setSearchParams] = useSearchParams();
    const tabParam = searchParams.get("tab");
    const [isMobileView, setIsMobileView] = useState(false);
    console.log(propertyData);

    const mergedInitialValues = propertyData ? { ...initialValues, ...propertyData } : initialValues;
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 992);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const EditPropertyList = [
        { title: "Property Information", Component: <PropertyInfo /> },
        { title: "Property Details", Component: <NewPropertyDetails /> },
        { title: "Pricing & Availability", Component: <PricingAndAvailability /> },
        { title: "House Rules & Policies", Component: <RulesAndPolicies /> },
        { title: "Additional Information", Component: <AdditionalInformation /> },
    ];

    const initialIndex = Math.max(EditPropertyList.findIndex(setting => setting.title.toLowerCase() === tabParam?.toLowerCase()), 0);
    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        setShowComponent(!!tabParam);
    }, [tabParam]);

    const handleBack = () => {
        setShowComponent(false);
        setSearchParams({});
    };

    const handleEdit = async (values, { setSubmitting }) => {
        console.log(values);
        const data = {
            step: initialIndex + 1,
            ...values
        }
        try {
            const response = await editProperty({
                id,
                data,
            }).unwrap();

            console.log("Property updated successfully:", response);
            toast.success("Property updated successfully!");
        } catch (error) {
            console.error("Error updating property:", error);
            toast.error("Failed to update property.");
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <div>
            <div className="text-text1 ">
                <Link to="/my-properties" className='flex items-start'>
                    <span><KeyboardArrowLeftOutlined className='!text-3xl' /></span>
                    <h4 className='text-2xl font-semibold  text-primary'>Lorem ipsum dolor sit amet consectetur</h4>
                </Link>
            </div>
            <div className='mt-5 relative'>
                <div className='flex flex-col lg:flex-row lg:gap-5 '>
                    {isMobileView && showComponent ? "" :
                        <div className='w-full lg:w-[40%] h-[calc(100vh_-_186px)] sticky top-0'>
                            <div className='border border-border1 rounded-xl p-4'>
                                <ul className='flex flex-col gap-4'>
                                    {EditPropertyList.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`pb-4 last:pb-0 border-b last:border-0 border-border1 flex items-center justify-between font-medium cursor-pointer ${activeIndex === index ? "text-primary" : "text-text1"}`}
                                            onClick={() => {
                                                setActiveIndex(index);
                                                setSearchParams({ tab: item.title.toLowerCase() });
                                            }}>
                                            <p className=''>{item.title}</p>
                                            <span>
                                                {activeIndex === index ? (
                                                    <KeyboardArrowRightOutlined />
                                                ) : (
                                                    <span className="underline text-sm">Edit</span>
                                                )}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    }
                    <div className={`w-full lg:w-[60%] ${isMobileView && !showComponent ? "hidden" : "block"}`}>
                        <div className='border border-border1 rounded-xl p-4'>
                            {isLoading || EditLoading ? <div>Loading...</div> :
                                <>
                                    {isMobileView && showComponent ?
                                        <div className="text-lg font-medium text-text1 flex items-center cursor-pointer" onClick={handleBack}>
                                            <KeyboardArrowLeftOutlined className="!text-2xl" />
                                            <h4 className='text-text1 text-xl font-medium'>{EditPropertyList[activeIndex].title}</h4>
                                        </div>
                                        :
                                        <h4 className='text-text1 text-xl font-medium'>{EditPropertyList[activeIndex].title}</h4>
                                    }
                                    <Formik
                                        initialValues={mergedInitialValues}
                                        validationSchema={propertySchema[activeIndex]}
                                        onSubmit={handleEdit}
                                        enableReinitialize
                                    >
                                        {({ dirty, isValid, resetForm, isSubmitting }) => (
                                            <Form>
                                                {EditPropertyList[activeIndex].Component}
                                                <div className="mt-8 flex justify-end gap-3">
                                                    <button
                                                        type="button"
                                                        className={`btn1 border border-text1 !bg-transparent !text-text1 ${dirty ? "hover:!text-red-600 hover:border-red-600" : "opacity-50 cursor-not-allowed"}`}
                                                        disabled={!dirty}
                                                        onClick={() => {
                                                            if (propertyData) resetForm({ values: { ...initialValues, ...propertyData } });
                                                        }}
                                                    >
                                                        Discard
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className={`btn1 ${!dirty || !isValid || isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                                                        disabled={!dirty || !isValid || isSubmitting}
                                                    >
                                                        {isSubmitting ? "Saving..." : "Save"}
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default EditProperty;
