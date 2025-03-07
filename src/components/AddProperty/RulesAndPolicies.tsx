import { useFormikContext } from "formik";
import Input from "../CommonField/Input";
import TextArea from "../CommonField/textarea";
import Select from "../CommonField/Select";
import { AccessTimeOutlined } from "@mui/icons-material";

const RulesAndPolicies = () => {
    const { values, handleChange, setFieldValue } = useFormikContext();

    const CancellationPolicyOptions = [
        { value: "flexible", label: "Flexible" },
        { value: "moderate", label: "Moderate" },
        { value: "non-refundable", label: "Strict" },
    ];

    return (
        <div className="mt-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* House Rules */}
                <div className="col-span-2">
                    <TextArea
                        name="house_rules"
                        placeholder="Ex. No smoking, no pets, no parties. etc."
                        label="House Rules"
                        rows={4}
                        inputClass="resize-none"
                        value={values.house_rules}
                        onChange={handleChange}
                    />
                </div>

                {/* Cancellation Policy */}
                <div className="col-span-2">
                    <Select
                        name="cancellation_policy.type"
                        label="Cancellation Policy"
                        options={CancellationPolicyOptions}
                        value={values.cancellation_policy.type}
                        onChange={(e) => setFieldValue("cancellation_policy.type", e.target.value)}
                    />
                </div>

                {/* Cancellation Description */}
                <div className="col-span-2">
                    <TextArea
                        name="cancellation_policy.description"
                        placeholder="Cancellation Description"
                        rows={4}
                        inputClass="resize-none"
                        value={values.cancellation_policy.description}
                        onChange={handleChange}
                    />
                </div>

                {/* Check-in Time */}
                <div className="relative">
                    <label htmlFor="check_in_time" className="text-[15px] text-text1 inline-block font-medium">
                        Check-in Time
                    </label>
                    <div className="relative mt-1">
                        <input
                            id="check_in_time"
                            name="check_in_time"
                            type="time"
                            value={values.check_in_time}
                            onChange={handleChange}
                            className="px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md"
                        />
                        <AccessTimeOutlined className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Check-out Time */}
                <div className="relative">
                    <label htmlFor="check_out_time" className="text-[15px] text-text1 inline-block font-medium">
                        Check-out Time
                    </label>
                    <div className="relative mt-1">
                        <input
                            id="check_out_time"
                            name="check_out_time"
                            type="time"
                            value={values.check_out_time}
                            onChange={handleChange}
                            className="px-3 py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md"
                        />
                        <AccessTimeOutlined className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Safety & Property */}
                <div className="col-span-2">
                    <TextArea
                        name="safety_and_property"
                        placeholder="Safety & property"
                        label="Safety & Property"
                        rows={4}
                        inputClass="resize-none"
                        value={values.safety_and_property}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default RulesAndPolicies;
