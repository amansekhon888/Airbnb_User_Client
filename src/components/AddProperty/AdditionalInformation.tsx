import { useFormikContext } from "formik";
import React, { useState } from "react";
import TextArea from "../CommonField/textarea";
import { ToggleSwitch } from "flowbite-react";

const AdditionalInformation = () => {
    const { values, handleChange, setFieldValue } = useFormikContext();
    const [selfCheckIn, setSelfCheckIn] = useState(values.is_self_checkin || false);

    return (
        <div className="mt-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Pet Policy */}
                <div className="col-span-2">
                    <label htmlFor="pet_policy" className="text-[15px] text-text1 inline-block font-medium">
                        Pet Policy
                    </label>
                    <div className="flex items-center gap-8 mt-2">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="pet_allowed"
                                id="pet_policy_yes"
                                checked={values.pet_allowed === true}
                                onChange={() => setFieldValue("pet_allowed", true)}
                                className=""
                            />
                            <label htmlFor="pet_policy_yes" className="text-text1">
                                Pets Allowed
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="pet_allowed"
                                id="pet_policy_no"
                                checked={values.pet_allowed === false}
                                onChange={() => setFieldValue("pet_allowed", false)}
                                className=""
                            />
                            <label htmlFor="pet_policy_no" className="text-text1">
                                No Pets
                            </label>
                        </div>
                    </div>
                </div>

                {/* Notes for Guests */}
                <div className="col-span-2">
                    <TextArea
                        name="notes.general_note"
                        placeholder="Ex. Key pickup available at the front desk. Contact me for late check-in."
                        label="Notes for Guests"
                        rows={4}
                        inputClass="resize-none"
                        value={values.notes.general_note}
                        onChange={handleChange}
                    />
                </div>

                {/* Nearby Attractions */}
                <div className="col-span-2">
                    <TextArea
                        name="notes.attraction_note"
                        placeholder="Ex. 5 minutes from Central Park, 10 minutes from Times Square."
                        label="Nearby Attractions"
                        rows={4}
                        inputClass="resize-none"
                        value={values.notes.attraction_note}
                        onChange={handleChange}
                    />
                </div>

                <hr className="my-4 border-border1 col-span-2" />

                {/* Self Check-in Toggle */}
                <div className="flex items-center justify-between col-span-2">
                    <div>
                        <label htmlFor="is_self_checkin" className="text-[15px] text-text1 inline-block font-medium">
                            Self Check-in
                        </label>
                        <p className="text-text3 text-sm mt-1">
                            Guests can check in themselves using a smart lock or key box.
                        </p>
                    </div>
                    <div>
                        <ToggleSwitch
                            checked={selfCheckIn}
                            onChange={(checked) => {
                                setSelfCheckIn(checked);
                                setFieldValue("is_self_checkin", checked);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalInformation;
