import google from "../../assets/icons/google.png";
import facebook from "../../assets/icons/facebook2.png";
import { Link } from "react-router-dom";
import { ArrowBackOutlined } from "@mui/icons-material";

const ForgotPassword = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full md:max-w-[40vw] lg:max-w-[30vw] md:mx-auto">
            <div className="w-full">
                <div className="flex items-center gap-4">
                    <Link to="/auth" className=" w-7 h-7 rounded flex items-center justify-center  text-primary"><ArrowBackOutlined className="!text-3xl" /></Link>
                    <h2 className='text-xl md:text-[2vw] font-medium text-text1'>Forgot Password?</h2>
                </div>
                <div className="mt-6 md:mt-[2.2vw]">
                    <div className='flex flex-col gap-4 md:gap-[1.5vw]'>
                        <div>
                            <label htmlFor="Email" className='text-text3 mb-1 inline-block md:text-[1.1vw]'>Email</label>
                            <input type="text" className='text-text1 border border-border1 w-full rounded-md md:rounded-[.4vw] focus:ring-0 focus:border-primary placeholder:text-[#C3C3C3] md:text-[1.1vw] py-1.5 md:py-[.6vw] md:px-[.6vw]' placeholder="Enter Email" />
                        </div>
                        <button className='bg-primary py-2 md:py-[.8vw] text-sm md:text-[1.1vw] text-white font-medium w-full rounded-md md:rounded-[.4vw] hover:bg-primaryHover duration-300'>Send Reset Email</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ForgotPassword