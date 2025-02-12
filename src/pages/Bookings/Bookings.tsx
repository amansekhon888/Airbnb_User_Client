import { CloseOutlined, VisibilityOutlined } from '@mui/icons-material';
import { Modal } from 'flowbite-react';
import React, { useState } from 'react'

const Bookings = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            <div className="relative overflow-x-auto">
                <table
                    className="w-full border-separate min-w-full"
                    style={{ borderSpacing: "0 10px" }}
                >
                    <thead className="text-sm text-[#8B8B8B] font-medium">
                        <tr className='*:font-medium'>
                            <th
                                scope="col"
                                className="py-2 px-3"
                                style={{ minWidth: "30px" }}
                            >
                                <div className="flex items-center gap-2.5">
                                    #
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-3"
                                style={{ minWidth: "120px" }}
                            >
                                <div className="flex items-center gap-2.5">
                                    Reservation
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-3"
                                style={{ minWidth: "200px" }}
                            >
                                <div className="flex items-center gap-2.5">
                                    User
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-3"
                                style={{ minWidth: "120px" }}
                            >
                                <div className="flex items-center gap-2.5">
                                    Number
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-3"
                                style={{ minWidth: "120px" }}
                            >
                                <div className="flex items-center gap-2.5">
                                    Check-in
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-3"
                                style={{ minWidth: "120px" }}
                            >
                                <div className="flex items-center gap-2.5">
                                    Check-out
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-3"
                                style={{ minWidth: "120px" }}
                            >
                                <div className="flex items-center gap-2.5">
                                    Nights
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-3"
                                style={{ minWidth: "120px" }}
                            >
                                <div className="flex items-center gap-2.5">
                                    Price
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-3"
                                style={{ minWidth: "60px" }}
                            >
                                <div className="flex items-center gap-2.5">
                                    Actions
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white mb-2">
                            <td className="py-3 px-3 rounded-l-xl">
                                <span className="text-text1 text-center font-medium text-sm">
                                    #1
                                </span>
                            </td>
                            <td className="py-3 px-3">
                                <span className="text-text1 text-center font-medium text-sm">
                                    RS-12345678
                                </span>
                            </td>
                            <td className="py-3 px-3 ">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <p className="text-sm text-text1 font-medium capitalize">
                                                Inder
                                            </p>
                                            <p className="text-xs text-text1 font-medium">
                                                inder@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 px-3">
                                <span className="text-text1 text-center font-medium text-sm">
                                    7814546244
                                </span>
                            </td>
                            <td className="py-3 px-3">
                                <span className="text-text1 text-center font-medium text-sm">
                                    10-10-2025
                                </span>
                            </td>
                            <td className="py-3 px-3">
                                <span className="text-text1 text-center font-medium text-sm">
                                    10-10-2025
                                </span>
                            </td>
                            <td className="py-3 px-3">
                                <span className="text-text1 text-center font-medium text-sm">
                                    9
                                </span>
                            </td>
                            <td className="py-3 px-3">
                                <span className="text-text1 text-center font-medium text-sm">
                                    2000
                                </span>
                            </td>
                            <td className="py-3 px-3 rounded-r-xl text-left max-w-[60px]">
                                <button className="text-[#bb9e6c] hover:text-primaryDark duration-300"
                                    onClick={() => { setOpenModal(true) }}
                                >
                                    <VisibilityOutlined className="!text-xl " />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Body className=''>
                    <div className='flex items-center justify-between'>
                        <h4 className="text-2xl font-medium text-primary">Booking Details</h4>
                        <button className="" onClick={() => setOpenModal(false)}><CloseOutlined className="!text-xl" /></button>
                    </div>
                    <div className="">
                        <div className='mt-5'>
                            <h6 className="uppercase text-text1 font-medium tracking-wide">
                                Guest Details
                            </h6>
                            <hr className="border-primary my-2" />
                            <div>
                                <ul className="flex flex-col gap-1">
                                    <li className="flex items-center justify-between text-gray-700">
                                        <span>Name:</span>
                                        <span className="font-medium">Inder</span>
                                    </li>
                                    <li className="flex items-center justify-between text-gray-700">
                                        <span>Email:</span>
                                        <span className="font-medium">inder@gmail.com</span>
                                    </li>
                                    <li className="flex items-center justify-between text-gray-700">
                                        <span>Phone:</span>
                                        <span className="font-medium">1234567897</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h6 className="uppercase text-text1 font-medium tracking-wide">Reservation</h6>
                            <hr className="border-primary my-2" />
                            <ul className="flex flex-col gap-1">
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Reservation:</span>
                                    <span className="font-medium">RS-123456789</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Check-in:</span>
                                    <span className="font-medium">10-10-2025</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Check-out:</span>
                                    <span className="font-medium">10-10-2025</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Nights:</span>
                                    <span className="font-medium">9</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-5">
                            <h6 className="uppercase text-text1 font-medium tracking-wide">Finances</h6>
                            <hr className="border-primary my-2" />
                            <ul className="flex flex-col gap-1">
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Stay Charges:</span>
                                    <span className="font-medium">1000</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Tourism Tax:</span>
                                    <span className="font-medium">200</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>VAT Tax:</span>
                                    <span className="font-medium">100</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-700 text-xl">
                                    <span className="font-medium">Total Amount:</span>
                                    <span className="font-medium">1300</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Bookings