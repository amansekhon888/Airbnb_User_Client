import PropertyInfo from "../../Components/AddProperty/PropertyInfo.tsx"
import StepLeft from "../../Components/AddProperty/StepLeft.tsx"
import NewPropertyDetails from "../../Components/AddProperty/NewPropertyDetails.tsx"
import PricingAndAvailability from "../../Components/AddProperty/PricingAndAvailability.tsx"
import RulesAndPolicies from "../../Components/AddProperty/RulesAndPolicies.tsx"
import AdditionalInformation from "../../Components/AddProperty/AdditionalInformation.tsx"
import { Link } from "react-router-dom"
import { KeyboardArrowLeftOutlined } from "@mui/icons-material"
const AddProperty = () => {
    return (
        <div className='pb-10 sm:pb-14 md:pb-16'>
            <div className="mb-5">
                <p className="text-xl font-semibold"><Link to="/my-properties" className="flex items-center gap-3"><span><KeyboardArrowLeftOutlined className="!text-3xl" /> <span className="text-primary">Add Property</span></span></Link></p>
            </div>
            <div className="flex flex-col gap-12">
                <div className="flex w-full gap-8">
                    <StepLeft status="done" step={1} />
                    <div className="w-full">
                        <PropertyInfo />
                    </div>
                </div>
                <div className="flex w-full gap-8">
                    <StepLeft status="progress" step={2} />
                    <div className="w-full">
                        <NewPropertyDetails />
                    </div>
                </div>
                <div className="flex w-full gap-8">
                    <StepLeft status="progress" step={3} />
                    <div className="w-full">
                        <PricingAndAvailability />
                    </div>
                </div>
                <div className="flex w-full gap-8">
                    <StepLeft status="progress" step={4} />
                    <div className="w-full">
                        <RulesAndPolicies />
                    </div>
                </div>
                <div className="flex w-full gap-8">
                    <StepLeft status="progress" step={5} />
                    <div className="w-full">
                        <AdditionalInformation />
                    </div>
                </div>
                <div className="flex w-full gap-5 justify-end">
                    <button type='submit' className='border border-text1 text-text1 h-[46px] px-6 rounded-lg font-medium hover:border-primary hover:text-primary duration-300'>Publish Listing</button>
                    <button type='submit' className='btn1 '>Publish Listing</button>
                </div>
            </div>
        </div>
    )
}

export default AddProperty