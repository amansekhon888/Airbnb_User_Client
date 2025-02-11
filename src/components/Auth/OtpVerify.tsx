import { Link } from "react-router-dom";
import { ArrowBackOutlined } from "@mui/icons-material";

const OtpVerify = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full md:max-w-[40vw] lg:max-w-[30vw] md:mx-auto">
            <div className="w-full">
                <div className="flex items-center gap-4">
                    <Link to="/auth" className=" w-7 h-7 rounded flex items-center justify-center  text-primary"><ArrowBackOutlined className="!text-3xl" /></Link>
                    <h2 className='text-xl md:text-[2vw] font-medium text-text1'>OTP Verification</h2>
                </div>
                <p className="text-sm md:text-[1vw] mt-2 md:mt-[.6vw] text-text3">Enter the OTP sent on dum******.com</p>
                <div className="mt-6 md:mt-[2vw]">
                    <div className='flex flex-col gap-4 md:gap-[1.5vw]'>
                        <div className="flex items-center gap-4 justify-center">
                            <input type="text" className='text-text1 border border-border1 rounded-md md:rounded-[.4vw] focus:ring-0 focus:border-primary placeholder:text-[#C3C3C3] md:text-[1.1vw] py-1.5 md:py-[.6vw] md:px-[.6vw] w-10 sm:w-12 md:[3.5vw]' maxLength={1} />
                            <input type="text" className='text-text1 border border-border1 rounded-md md:rounded-[.4vw] focus:ring-0 focus:border-primary placeholder:text-[#C3C3C3] md:text-[1.1vw] py-1.5 md:py-[.6vw] md:px-[.6vw] w-10 sm:w-12 md:[3.5vw]' maxLength={1} />
                            <input type="text" className='text-text1 border border-border1 rounded-md md:rounded-[.4vw] focus:ring-0 focus:border-primary placeholder:text-[#C3C3C3] md:text-[1.1vw] py-1.5 md:py-[.6vw] md:px-[.6vw] w-10 sm:w-12 md:[3.5vw]' maxLength={1} />
                            <input type="text" className='text-text1 border border-border1 rounded-md md:rounded-[.4vw] focus:ring-0 focus:border-primary placeholder:text-[#C3C3C3] md:text-[1.1vw] py-1.5 md:py-[.6vw] md:px-[.6vw] w-10 sm:w-12 md:[3.5vw]' maxLength={1} />
                            <input type="text" className='text-text1 border border-border1 rounded-md md:rounded-[.4vw] focus:ring-0 focus:border-primary placeholder:text-[#C3C3C3] md:text-[1.1vw] py-1.5 md:py-[.6vw] md:px-[.6vw] w-10 sm:w-12 md:[3.5vw]' maxLength={1} />
                            <input type="text" className='text-text1 border border-border1 rounded-md md:rounded-[.4vw] focus:ring-0 focus:border-primary placeholder:text-[#C3C3C3] md:text-[1.1vw] py-1.5 md:py-[.6vw] md:px-[.6vw] w-10 sm:w-12 md:[3.5vw]' maxLength={1} />
                        </div>
                        <div>
                            <button className='bg-primary py-2 md:py-[.8vw] text-sm md:text-[1.1vw] text-white font-medium w-full rounded-md md:rounded-[.4vw] hover:bg-primaryHover duration-300'>Verify Now</button>
                            <p className="mt-2 md:mt-[.8vw] md:text-[1.1vw] text-text1 text-center">Didn’t receive the OTP? <button className="font-medium">Resend OTP</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OtpVerify