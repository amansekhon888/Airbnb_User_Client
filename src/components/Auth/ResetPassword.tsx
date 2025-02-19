import { Link, useNavigate } from "react-router-dom";
import { ArrowBackOutlined } from "@mui/icons-material";
import { useChangePasswordMutation } from "../../redux/api/auth";
import { FormikProvider, useFormik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [sessionExpired, setSessionExpired] = useState(false);
    const [changePassword, { isLoading }] = useChangePasswordMutation();

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .matches(/[A-Z]/, "Must contain at least one uppercase letter")
                .matches(/[0-9]/, "Must contain at least one number")
                .matches(/[@$!%*?&]/, "Must contain at least one special character")
                .required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Passwords do not match")
                .required("Confirm password is required"),
        }),
        onSubmit: async (values) => {
            const response = await changePassword(values.password);
            if (response.error && 'data' in response.error && !(response.error.data as { success?: boolean }).success) {
                setSessionExpired(true);
            } else {
                navigate("/auth")
            }
        },
    });

    return (
        <div className="flex flex-col items-center justify-center h-full w-full md:max-w-[40vw] lg:max-w-[30vw] md:mx-auto">
            {!sessionExpired && (
                <div className="w-full">
                    <div className="flex items-center gap-4">
                        <Link to="/auth" className="w-7 h-7 rounded flex items-center justify-center text-primary">
                            <ArrowBackOutlined className="!text-3xl" />
                        </Link>
                        <h2 className="text-xl md:text-[2vw] font-medium text-text1">Reset Password</h2>
                    </div>
                    <div className="mt-6 md:mt-[2.2vw]">
                        <FormikProvider value={formik}>
                            <Form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 md:gap-[1.5vw]">
                                <div>
                                    <label htmlFor="password" className="text-text3 mb-1 inline-block md:text-[1.1vw]">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="text-text1 border border-border1 w-full rounded-md md:rounded-[.4vw] focus:ring-0 focus:border-primary placeholder:text-[#C3C3C3] md:text-[1.1vw] py-1.5 md:py-[.6vw] md:px-[.6vw]"
                                        placeholder="Enter New Password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {formik.touched.password && formik.errors.password && (
                                        <p className="text-red-600 text-xs mt-1">{formik.errors.password}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="confirmPassword" className="text-text3 mb-1 inline-block md:text-[1.1vw]">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className="text-text1 border border-border1 w-full rounded-md md:rounded-[.4vw] focus:ring-0 focus:border-primary placeholder:text-[#C3C3C3] md:text-[1.1vw] py-1.5 md:py-[.6vw] md:px-[.6vw]"
                                        placeholder="Enter Confirm Password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirmPassword}
                                    />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                        <p className="text-red-600 text-xs mt-1">{formik.errors.confirmPassword}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={formik.isSubmitting || isLoading}
                                    className="bg-primary py-2 md:py-[.8vw] text-sm md:text-[1.1vw] text-white font-medium w-full rounded-md md:rounded-[.4vw] hover:bg-primaryHover duration-300"
                                >
                                    {isLoading || formik.isSubmitting ? "Processing..." : "Continue"}
                                </button>
                            </Form>
                        </FormikProvider>
                    </div>
                </div>
            )}
            {sessionExpired && (
                <Link to="/auth" className="text-red-600 text-center mb-2">
                    Session Expired! Please log in again.
                </Link>
            )}
        </div>
    );
};

export default ResetPassword;
