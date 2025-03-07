import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowBackOutlined } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { useSendOtpMutation, useVerifyOtpMutation } from "../../redux/api/auth";

interface HandleSubmitEvent extends React.MouseEvent<HTMLButtonElement> {}
const OtpVerify = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const inputMode = location.state?.inputMode;
    const loginKey = location.state?.loginKey;
    const [otp, setOtp] = useState(Array(6).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [verifyOtp, { isLoading: isVerifying }] = useVerifyOtpMutation();
    const [sendOtp, { isLoading }] = useSendOtpMutation();
    const [timer, setTimer] = useState(60); 
    const [isResendDisabled, setIsResendDisabled] = useState(true);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setIsResendDisabled(false);
        }
    }, [timer]);

    const maskLoginKey = (key: string) => {
        if (key.includes("@")) {
            const [name, domain] = key.split("@");
            return `***${name.slice(-2)}@${domain}`;
        } else {
            return `***${key.slice(-3)}`;
        }
    };

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return; 
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").trim();
        if (!/^\d{6}$/.test(pastedData)) return; 

        const newOtp = pastedData.split("").slice(0, 6); 
        setOtp(newOtp);
        inputRefs.current[5]?.focus();
    };

    const handleSubmit = async () => {
        const otpCode = otp.join("");
        await verifyOtp(otpCode);
        navigate("/auth/reset-password")
    }

    const handleResendOtp = async (e: HandleSubmitEvent) => {
        e.preventDefault();
        if (isResendDisabled) return; 

        await sendOtp({ loginKey: loginKey, inputMode: inputMode });

        setTimer(60); 
        setIsResendDisabled(true);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full w-full md:max-w-[40vw] lg:max-w-[30vw] md:mx-auto">
            <div className="w-full">
                <div className="flex items-center gap-4">
                    <Link to="/auth" className=" w-7 h-7 rounded flex items-center justify-center  text-primary"><ArrowBackOutlined className="!text-3xl" /></Link>
                    <h2 className='text-xl md:text-[2vw] font-medium text-text1'>OTP Verification</h2>
                </div>
                <p className="text-sm md:text-[1vw] mt-2 md:mt-[.6vw] text-text3">Enter the OTP sent on {maskLoginKey(loginKey)}</p>
                <div className="mt-6 md:mt-[2vw]">
                    <div className='flex flex-col gap-4 md:gap-[1.5vw]'>
                        <div className="flex items-center gap-4 justify-center">
                            {otp.map((digit, index) => (
                                <input key={index} type="text" className='text-text1 text-center border border-border1 rounded-md md:rounded-[.4vw] focus:ring-0 focus:border-primary placeholder:text-[#C3C3C3] md:text-[1.4vw] py-1.5 md:py-[.6vw] md:px-[.6vw] w-10 sm:w-12 md:[3.5vw] font-medium' ref={(el) => (inputRefs.current[index] = el)} value={digit} maxLength={1} onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)} onPaste={handlePaste} />
                            ))}
                        </div>
                        <div>
                            <button className='bg-primary py-2 md:py-[.8vw] text-sm md:text-[1.1vw] text-white font-medium w-full rounded-md md:rounded-[.4vw] hover:bg-primaryHover duration-300' onClick={handleSubmit}>{isVerifying ? "Verifying..." : "Verify Now"}</button>
                            <p className="mt-2 md:mt-[.8vw] md:text-[1.1vw] text-text1 text-center">Didn’t receive the OTP? <button className="font-medium" onClick={handleResendOtp}>{isLoading ? "Resending..." : isResendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OtpVerify