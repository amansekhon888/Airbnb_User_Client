import { NavLink, useNavigate } from "react-router-dom";
import {
    ApartmentOutlined,
    HelpOutline,
    Logout,
} from "@mui/icons-material";
import { logo } from "../../assets/images";
import { useLogoutMutation } from "../../redux/api/auth";
import Cookies from "js-cookie";

const Sidebar = () => {
    // const { id } = useParams();
    const navigate = useNavigate();
    const [LogoutMutation, { isLoading }] = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await LogoutMutation({}).unwrap(); 
            Cookies.remove('client-token')
            navigate("/auth"); 
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <div className="bg-primary py-6 h-full">
            <div className="px-5">
                <img src={logo} className="w-32 lg:w-36 mx-auto" />
            </div>
            <div className="px-4">
                <hr className="my-8" />
            </div>
            <ul className="">
                <li>
                    <NavLink
                        to="/my-properties"
                        className={({ isActive }) =>
                            `text - sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-primaryHover uppercase flex items-center gap-3 border-l-[6px] ${isActive
                                ? "border-[#fff3dd] bg-primaryHover"
                                : "border-transparent"
                            }`
                        }
                    >
                        <ApartmentOutlined /> Properties
                    </NavLink>
                </li>
                <li className="px-4">
                    <hr className="my-8" />
                </li>
                <li>
                    <NavLink
                        to="/user-panel/help"
                        className={({ isActive }) =>
                            `text - sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-primaryHover uppercase flex items-center gap-3 border-l-[6px] ${isActive
                                ? "border-[#fff3dd] bg-primaryHover"
                                : "border-transparent"
                            }`
                        }
                    >
                        <HelpOutline /> Help
                    </NavLink>
                </li>
                <li>
                    <button
                        className={`w-full text-sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-primaryHover uppercase flex items-center gap-3 border-l-[6px] border-transparent`}
                        onClick={handleLogout}
                        disabled={isLoading}
                    >
                        <Logout /> Log Out
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
