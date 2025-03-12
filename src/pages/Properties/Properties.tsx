import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cate1 from "../../assets/images/cate1.png"
import { ToggleSwitch } from 'flowbite-react'
import { DeleteOutline, EditOutlined, Visibility } from '@mui/icons-material'
import { useDeletePropertyMutation, useGetPropertiesQuery } from '../../redux/api/property'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const Properties = () => {
    const navigate = useNavigate()
    const [selectedTab, setSelectedTab] = useState("all")
    const { data } = useGetPropertiesQuery({})
    const [deleteProperty, { isLoading }] = useDeletePropertyMutation()
    const tabs = [
        "all",
        "active",
        "inactive",
        "draft",
    ]

    const status = {
        "active": <span className="text-sm text-green-500 bg-green-600 font-medium bg-opacity-10 rounded px-2.5 py-1">Active</span>,
        "inactive": <span className="text-sm text-red-500 bg-red-600 font-medium bg-opacity-10 rounded px-2.5 py-1">In-Active</span>,
        "draft": <span className="text-sm text-yellow-500 bg-yellow-600 font-medium bg-opacity-10 rounded px-2.5 py-1">Draft</span>,
    }
    const filterProperties = selectedTab === "all" ? data : data?.filter((property) => property.status === selectedTab)
    const handleAddProperty = () => {
        const draftProperties = data?.filter((property) => property.status === "draft")
        console.log(draftProperties);

        if (draftProperties.length >= 5) {
            Swal.fire({
                title: "Limit Reached!",
                text: "You already have 3 properties in draft. Please publish or delete a draft before adding a new one.",
                icon: "warning",
                showConfirmButton: false,
                showCloseButton: true,
            });
        } else {
            navigate("/add-property")
        }
    }
    const handleDeleteProperty = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete this property?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                await deleteProperty(id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Property deleted successfully",
                    icon: "success",
                    showConfirmButton: false,
                    showCloseButton: true,
                });
            } catch (error) {
                console.error(error);
                toast.error('Failed to delete property');
            }
        }
    };
    return (
        <div>
            <div className="flex items-center justify-between border-b pb-3 border-primary border-opacity-40">
                <h4 className='text-xl font-semibold text-primary'>Property List ({filterProperties?.length})</h4>
                <div>
                    <button onClick={handleAddProperty} className='btn1 flex items-center justify-center'>Add Property</button>
                </div>
            </div>
            <div className='mt-5'>
                <div>
                    <ul className='flex items-center gap-4'>
                        {tabs.map((tab, i) => (
                            <li key={i} className={`cursor-pointer border border-primary px-5 py-2 text-sm rounded-full hover:bg-primary hover:text-white duration-300 capitalize ${tab === selectedTab && "bg-primary text-white"}`} onClick={() => setSelectedTab(tab)}>{tab}</li>
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
                                        style={{ minWidth: "120px" }}
                                    >
                                        <div className="flex items-center gap-2.5 font-medium text-nowrap">
                                            Actions
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterProperties?.map((property, index) => (
                                    <tr key={index} className="bg-white mb-2">
                                        <td className="py-1.5 px-3 rounded-l-xl">
                                            #{index + 1}
                                        </td>
                                        <td className=" py-1.5 px-3 ">
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
                                                        {property.title}
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=" py-1.5 px-3">
                                            <span className="text-sm text-text1 font-medium ">
                                                {property?.address
                                                    && `${property.address.address}, ${property.address.city}${property.address.state ? `, ${property.address.state}` : ""}, ${property.address.country}, ${property.address.zip_code}`}
                                            </span>
                                        </td>
                                        <td className=" py-1.5 px-3">
                                            <span className="text-sm text-text1 font-medium ">
                                                {property.price_per_night || "-"}
                                            </span>
                                        </td>
                                        <td className="py-1.5 px-3">
                                            {status[property.status]}
                                        </td>
                                        <td className=" py-1.5 px-3">
                                            {property.status === "active" ?
                                                <Link
                                                    to={`/bookings/100`}
                                                    className="mx-auto"
                                                >
                                                    <span className="text-sm text-primary bg-primary font-medium bg-opacity-15 hover:bg-opacity-25 duration-300 rounded px-2 py-1">View</span>
                                                </Link>
                                                : "-"
                                            }
                                        </td>
                                        <td className=" py-1.5 px-3 rounded-r-xl">
                                            {property.status === "active" &&
                                                <div className='flex justify-start gap-2'>
                                                    <Link
                                                        to={`/property/${property._id}`}
                                                    >
                                                        <Visibility className="text-primary !text-xl" />
                                                    </Link>
                                                    <Link
                                                        to={`/property/edit/${property._id}`}
                                                    >
                                                        <EditOutlined className="text-primary !text-xl" />
                                                    </Link>
                                                </div>
                                            }
                                            {property.status === "draft" &&
                                                <div className='flex justify-start gap-2'>
                                                    <Link
                                                        to={`/add-property?draft=${property._id}`}
                                                    >
                                                        <EditOutlined className="text-primary !text-xl" />
                                                    </Link>
                                                    <button onClick={() => handleDeleteProperty(property._id)}>
                                                        <DeleteOutline className="text-red-600 !text-xl" />
                                                    </button>
                                                </div>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Properties