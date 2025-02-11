import authBg from "../../assets/images/authBg.png"
import Login from "../../components/Auth/Login"
import ForgotPassword from "../../components/Auth/ForgotPassword.tsx"
import OtpVerify from "../../components/Auth/OtpVerify.tsx"
import ResetPassword from "../../components/Auth/ResetPassword.tsx"
import { useLocation } from "react-router-dom"

const Auth = () => {
    const location = useLocation()

    return (
        <div className="min-h-screen p-[2vw] flex items-center justify-center">
            <div className="w-full">
                <div className='grid md:grid-cols-2 w-full max-w-[450px] md:max-w-full mx-auto px-4 md:px-0'>
                    <div className="hidden md:block relative">
                        <img src={authBg} className="h-[calc(100vh_-_4vw)] w-full object-cover object-center " />
                    </div>
                    <div className="md:pr-[2vw] w-full">
                        {location.pathname === "/auth" ?
                            <Login />
                            : location.pathname === "/auth/forgot-password" ?
                            <ForgotPassword />
                            : location.pathname === "/auth/reset-password" ?
                            <ResetPassword />
                            :
                            <OtpVerify/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth