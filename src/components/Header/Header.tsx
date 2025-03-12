import { MenuOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import userImg2 from "../../assets/images/userImg2.png";
import { useState } from "react";
import { logo } from "../../assets/images";
// import NotificationBell from "../NotificationCenter/NotificationBell";

interface IsProps {
    isCollapse: boolean;
    setIsCollapse: (value: boolean) => void;
    isSidebarShow: boolean;
    setSideBarShow: (value: boolean) => void;
}

const pathMap: { [key: string]: string } = {
    "/": "Dashboard",
    "/my-properties": "My Properties",
    "/add-property": "Add Property",
};

const Header = ({
    isCollapse,
    setIsCollapse,
    isSidebarShow,
    setSideBarShow,
}: IsProps) => {
    const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
    const location = useLocation();
    const handleToggleCollapse = () => {
        setIsCollapse(!isCollapse);
    };
    const handleToggleSideBar = () => {
        setSideBarShow(!isSidebarShow);
    };
    let tempTitle = pathMap[location.pathname];

    if (!tempTitle) {
        if (location.pathname.startsWith("/property/edit/")) {
            tempTitle = "Edit Property"; // Handle /property/edit/:id
        } else if (location.pathname.startsWith("/bookings/")) {
            tempTitle = "Booking Details"; // Handle /bookings/:id
        } else {
            tempTitle = "Dashboard";
        }
    }

    return (
        <div className={`${location.pathname != "/add-property" && "px-4 md:px-6"} py-4 border-b border-primary h-[68px] flex items-center`}>
            <div className={`w-full ${location.pathname === "/add-property" && "container mx-auto"}`}>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-5">
                        {location.pathname === "/add-property" ?
                            <div className="">
                                <img src={logo} className="w-32 lg:w-36 mx-auto invert" />
                            </div>
                            :
                            <div>
                                <button
                                    className="text-gray-500 hidden md:inline-block"
                                    onClick={handleToggleCollapse}
                                >
                                    <MenuOutlined className="!text-3xl" />
                                </button>
                                <button
                                    className="text-gray-500 md:hidden"
                                    onClick={handleToggleSideBar}
                                >
                                    <MenuOutlined className="!text-3xl" />
                                </button>
                            </div>
                        }
                        {location.pathname === "/user-panel/properties" && (
                            <div className="hidden sm:block">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="py-1 rounded focus:ring-0 focus:border-primary"
                                    placeholder="Search"
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        <h5 className="text-lg text-primary font-medium">{tempTitle}</h5>
                    </div>
                    <div className="flex items-center gap-5">
                        {/* <NotificationBell /> */}
                        <Link
                            to="/profile"
                            className="w-7 h-7 rounded-full border border-primary flex items-center justify-center overflow-hidden"
                        >
                            <img
                                src={userImg2}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
