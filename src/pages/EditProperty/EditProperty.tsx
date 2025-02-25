import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PropertyInfo from "./component/PropertyInfo.tsx";
import PropertyDetails from "./component/PropertyDetails.tsx";
import PricingAndAvailability from "./component/PricingAndAvailability.tsx";
import RulesAndPolicies from "./component/RulesAndPolicies.tsx";
import AdditionalInformation from "./component/AdditionalInformation.tsx";

const EditProperty = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const tabParam = searchParams.get("tab");
    const [isMobileView, setIsMobileView] = useState(false);

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
        { title: "Property Details", Component: <PropertyDetails /> },
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
                            {isMobileView && showComponent ?
                                <div className="text-lg font-medium text-text1 flex items-center cursor-pointer" onClick={handleBack}>
                                    <KeyboardArrowLeftOutlined className="!text-2xl" />
                                    <h4 className='text-text1 text-xl font-medium'>{EditPropertyList[activeIndex].title}</h4>
                                </div>
                                :
                                <h4 className='text-text1 text-xl font-medium'>{EditPropertyList[activeIndex].title}</h4>
                            }
                            {EditPropertyList[activeIndex].Component}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default EditProperty;
