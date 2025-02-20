import { Form } from "formik";
import mapBg from "../../assets/images/mapBg.png";
import {
    CityOptions,
    propertyCategoryOptions,
    propertyTypeOptions,
    StateOptions,
} from "../../constants/property";
import Input from "../CommonField/Input";
import Select from "../CommonField/Select";
import TextArea from "../CommonField/textarea";

interface PropertyInfoProps {
    handleProgress: () => void;
    isFormAvailable: boolean;
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({
    handleProgress,
    isFormAvailable,
}) => {
    if (!isFormAvailable) return null;

    return (
        <div>
            <h2 className="text-text1 text-2xl font-medium">Property Information</h2>
            <p className="text-text3 mt-1">
                Basic property details that are essential for setting up the listing.
            </p>
            <div className="mt-6">
                <Form onSubmit={handleProgress}>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="col-span-2">
                            <Input
                                name="property_info.propertyTitle"
                                placeholder="Enter property name"
                                label="Property Title"
                            />
                        </div>
                        <div className="">
                            <Select
                                name="property_info.propertyType"
                                label="Property Type"
                                options={propertyTypeOptions}
                            />
                        </div>
                        <div className="">
                            <Select
                                name="property_info.propertyCategoryId"
                                label="Property Category"
                                options={propertyCategoryOptions}
                            />
                        </div>
                        <div className="col-span-2">
                            <TextArea
                                name="property_info.propertyDescription"
                                placeholder="Enter property description"
                                label="Property Description"
                                rows={3}
                                inputClass="resize-none"
                            />
                        </div>
                        <div className="col-span-2">
                            <Input
                                name="property_info.propertyAddress"
                                placeholder="Enter address"
                                label="Address"
                            />
                        </div>
                        <div className="">
                            <Select
                                name="property_info.propertyState"
                                label="County / State"
                                options={StateOptions}
                            />
                        </div>
                        <div className="">
                            <Select
                                name="property_info.propertyCity"
                                label="City"
                                options={CityOptions}
                            />
                        </div>
                        <div className="">
                            <Input
                                name="property_info.propertyLandmark"
                                placeholder="Enter Landmark"
                                label="Landmark"
                            />
                        </div>
                        <div className="">
                            <Input
                                name="property_info.propertyZipcode"
                                placeholder="Enter Zip Code"
                                label="Zip Code"
                            />
                        </div>
                        <div className="col-span-2 mt-3">
                            <div className="h-[300px] rounded-xl overflow-hidden">
                                <img src={mapBg} className="h-[300px] w-full object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="btn1 w-full">
                            Next
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default PropertyInfo;
