import google from "../../assets/icons/google.png";
import facebook from "../../assets/icons/facebook2.png";
import { Link } from "react-router-dom";
import { ArrowBackOutlined } from "@mui/icons-material";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full md:max-w-[40vw] lg:max-w-[30vw] md:mx-auto">
            <div className="w-full">
                <div className="flex items-center gap-4">
                    <Link to="/" className=" w-7 h-7 rounded flex items-center justify-center  text-primary"><ArrowBackOutlined className="!text-3xl" /></Link>
                    <h2 className='text-xl md:text-[2vw] font-medium text-text1'>Welcome to Airbnb</h2>
                </div>
                <div className="mt-6 md:mt-[2.2vw]">
                    <div className='flex flex-col gap-4 md:gap-[1.5vw]'>
                        <div>
                            <label htmlFor="Email" className='text-text3 mb-1 inline-block md:text-[1.1vw]'>Email</label>
                            <input type="text" className='text-text1 border border-border1 w-full rounded-md md:rounded-[.4vw] focus:ring-0 focus:border-primary placeholder:text-[#C3C3C3] md:text-[1.1vw] py-1.5 md:py-[.6vw] md:px-[.6vw]' placeholder="Enter Email" />
                        </div>
                        <div>
                            <label htmlFor="Email" className='text-text3 mb-1 inline-block md:text-[1.1vw]'>Password</label>
                            <input type="text" className='text-text1 border border-border1 w-full rounded-md md:rounded-[.4vw] focus:ring-0 focus:border-primary placeholder:text-[#C3C3C3] md:text-[1.1vw] py-1.5 md:py-[.6vw] md:px-[.6vw]' placeholder="Enter Password" />
                            <div className="mt-1 md:mt-[.2vw] text-end">
                                <p><Link to="/auth/forgot-password" className="text-red-600 md:text-[.8vw]">Forgot Password?</Link></p>
                            </div>
                        </div>
                        <button className='bg-primary py-2 md:py-[.8vw] text-sm md:text-[1.1vw] text-white font-medium w-full rounded-md md:rounded-[.4vw] hover:bg-primaryHover duration-300'>Login</button>
                    </div>
                    <div className="my-6 md:my-[1.8vw] relative before:absolute before:w-full before:h-[1px] before:bg-border1 flex items-center justify-center w-full">
                        <span className="text-text1 bg-white px-4 relative">or </span>
                    </div>
                    <div className="flex flex-col gap-5 md:gap-[1vw]">
                        <button className="border py-2 md:py-[0.8vw] w-full rounded-md md:rounded-[.4vw] flex items-center justify-center gap-3 border-text1 hover:text-primary hover:border-primary duration-300">
                            <img src={facebook} className="w-4 md:w-[1.4vw]" alt="Facebook Icon" /> Log in
                            with Facebook
                        </button>
                        <button className="border py-2 md:py-[0.8vw] w-full rounded-md md:rounded-[.4vw] flex items-center justify-center gap-[1vw] border-text1 hover:text-primary hover:border-primary duration-300">
                            <img src={google} className="w-4 md:w-[1.4vw]" alt="Google Icon" /> Log in with
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login