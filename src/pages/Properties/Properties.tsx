import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cate1 from "../../assets/images/cate1.png"
import { ToggleSwitch } from 'flowbite-react'
import { EditOutlined, Visibility } from '@mui/icons-material'

const Properties = () => {
    const [selectedTab, setSelectedTab] = useState("All")
    const [switch3, setSwitch3] = useState(true);

    const tabs = [
        "All",
        "Active",
        "In-Active",
        "Drafts",
    ]
    return (
        <div>
            <div className="flex items-center justify-between border-b pb-3 border-primary border-opacity-40">
                <h4 className='text-xl font-semibold text-primary'>Property List (2)</h4>
                <div>
                    <Link to="/add-property" className='btn1 flex items-center justify-center'>Add Property</Link>
                </div>
            </div>
            <div className='mt-5'>
                <div>
                    <ul className='flex items-center gap-4'>
                        {tabs.map((tab, i) => (
                            <li key={i} className={`cursor-pointer border border-primary px-5 py-2 text-sm rounded-full hover:bg-primary hover:text-white duration-300 ${tab === selectedTab && "bg-primary text-white"}`} onClick={() => setSelectedTab(tab)}>{tab}</li>
                        ))}
                    </ul>
                </div>
                <div className='mt-3'>
                    <div className="relative overflow-x-auto">
                        <table
                            className="w-full border-separate min-w-full"
                            style={{ borderSpacing: "0 10px" }}
                        >
                            <thead className="text-sm text-[#8B8B8B] font-medium">
                                <tr>
                                    <th scope="col" className="py-2 px-3">
                                        <div className="flex items-center gap-2.5 font-medium">#</div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 px-3"
                                        style={{ minWidth: "270px" }}
                                    >
                                        <div className="flex items-center gap-2.5 font-medium text-nowrap">
                                            Name
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 px-3"
                                        style={{ minWidth: "220px" }}
                                    >
                                        <div className="flex items-center gap-2.5 font-medium text-nowrap">
                                            Address{" "}
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 px-3"
                                        style={{ minWidth: "130px" }}
                                    >
                                        <div className="flex items-center gap-2.5 font-medium text-nowrap">
                                            Price Per Night
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 px-3"
                                        style={{ minWidth: "140px" }}
                                    >
                                        <div className="flex items-center gap-2.5 font-medium text-nowrap">
                                            Status
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 px-3"
                                        style={{ minWidth: "140px" }}
                                    >
                                        <div className="flex items-center gap-2.5 font-medium text-nowrap">
                                            Bookings
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 px-3"
                                        style={{ minWidth: "100px" }}
                                    >
                                        <div className="flex items-center gap-2.5 font-medium text-nowrap">
                                            Actions
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white mb-2">
                                    <td className="py-3 px-3 rounded-l-xl">
                                        #1
                                    </td>
                                    <td className=" py-3 px-3 ">
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={cate1}
                                                    className="border-2 border-[#E8E1F6] rounded-lg w-16 h-12 object-cover"
                                                    alt=""
                                                />
                                                <Link
                                                    to={"#"}
                                                    className="text-sm text-text1 font-medium  hover:text-primary duration-300 block)] w-[250px]"
                                                >
                                                    Skyline Residences
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=" py-3 px-3">
                                        <span className="text-sm text-text1 font-medium ">
                                            5th Avenue, New York, USA
                                        </span>
                                    </td>
                                    <td className=" py-3 px-3">
                                        <span className="text-sm text-text1 font-medium ">
                                            1000
                                        </span>
                                    </td>
                                    <td className=" py-3 px-3">
                                        <div className="">
                                            <ToggleSwitch
                                                checked={switch3}
                                                onChange={setSwitch3}
                                                className="*:focus:!shadow-none *:focus:!ring-0 toggleBtn flex items-center"
                                            />
                                        </div>
                                    </td>
                                    <td className=" py-3 px-3">
                                        <Link
                                            to={`/bookings/100`}
                                            className="mx-auto"
                                        >
                                            <span className="text-sm text-primary bg-primary font-medium bg-opacity-15 hover:bg-opacity-25 duration-300 rounded px-2 py-1">View</span>
                                        </Link>
                                    </td>
                                    <td className=" py-3 px-3 rounded-r-xl">
                                        <Link
                                            to={`/admin/property-details/1`}
                                            className="mx-auto"
                                        >
                                            <Visibility className="text-primary" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr className="bg-white mb-2">
                                    <td className="py-3 px-3 rounded-l-xl">
                                        #2
                                    </td>
                                    <td className=" py-3 px-3 ">
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={cate1}
                                                    className="border-2 border-[#E8E1F6] rounded-lg w-16 h-12 object-cover"
                                                    alt=""
                                                />
                                                <Link
                                                    to={"#"}
                                                    className="text-sm text-text1 font-medium  hover:text-primary duration-300 block)] w-[250px]"
                                                >
                                                    Skyline Residences
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=" py-3 px-3">
                                        <span className="text-sm text-text1 font-medium ">
                                            5th Avenue, New York, USA
                                        </span>
                                    </td>
                                    <td className=" py-3 px-3">
                                        <span className="text-sm text-text1 font-medium ">
                                            1000
                                        </span>
                                    </td>
                                    <td className=" py-3 px-3">
                                        <span className="text-sm text-yellow-500 bg-yellow-600 font-medium bg-opacity-10 rounded px-2.5 py-1">Draft</span>
                                    </td>
                                    <td className=" py-3 px-3">
                                        -
                                    </td>
                                    <td className=" py-3 px-3 rounded-r-xl">
                                        <Link
                                            to={`/property/1`}
                                            className="mx-auto text-primary"
                                        >

                                            <EditOutlined />
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Properties