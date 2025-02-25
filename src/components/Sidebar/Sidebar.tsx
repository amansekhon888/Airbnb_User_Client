import { NavLink, useParams } from "react-router-dom";
import {
    ApartmentOutlined,
    CalendarMonthOutlined,
    HelpOutline,
    HomeWorkOutlined,
    Logout,
    ReceiptLongOutlined,
    SettingsOutlined,
} from "@mui/icons-material";
import { logo } from "../../assets/images";

const Sidebar = () => {
    const { id } = useParams();
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
                        to="/dashboard"
                        className={({ isActive }) =>
                            `text - sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-primaryHover uppercase flex items-center gap-3 border-l-[6px] ${isActive
                                ? "border-[#fff3dd] bg-primaryHover"
                                : "border-transparent"
                            }`
                        }
                    >
                        <ApartmentOutlined /> Dashboard
                    </NavLink>
                </li>
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
                    >
                        <Logout /> Log Out
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
