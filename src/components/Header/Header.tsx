import { MenuOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import userImg2 from "../../assets/images/userImg2.png";
import { useState } from "react";
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
    "/user-panel/settings/change-password": "Change Password",
    "/user-panel/settings/personal-details/": "Personal Details",
    "/user-panel/settings/block-owner-stay/": "Block Owner Stay",
    "/user-panel/settings/property-details/": "Property Details",
    "/user-panel/settings/": "Settings",
    "/user-panel/help": "Help",
    "/user-panel/help/faq": "Faqs",
    "/user-panel/help/contact-support": "Contact Us",
    "/user-panel/notifications": "Notifications",
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
        const matchedBasePath = Object.keys(pathMap).find((key) =>
            location.pathname.startsWith(key)
        );
        tempTitle = pathMap[matchedBasePath || ""];
    }

    return (
        <div className="px-4 md:px-6 py-4 border-b border-primary h-[68px] flex items-center">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-5">
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
                        to="/user-panel/settings/personal-details"
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
    );
};

export default Header;
