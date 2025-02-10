import { FileUploadOutlined, MoreHorizOutlined } from "@mui/icons-material"
import cate1 from "../../assets/images/cate1.png"
import cate2 from "../../assets/images/cate2.png"
import cate3 from "../../assets/images/cate3.png"
import { useEffect, useRef, useState } from "react"

const AddPhotos = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Toggle dropdown
    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div>
            <label className={`text-[15px] text-text1 mb-1 inline-block font-medium`}>Photos</label>
            <div className='border border-border1 rounded-md p-4'>
                <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 gap-2 sm:gap-4">
                    <div className='h-[180px] sm:h-[200px] relative border-[3px] border-primary rounded-xl overflow-hidden '>
                        <div className="absolute top-0 left-0 rounded-br-xl bg-primary text-white text-sm px-3 py-1">
                            Main photo
                        </div>
                        <div className="absolute top-2 right-2" ref={dropdownRef}>
                            <button
                                className="w-6 h-6 flex items-center justify-center bg-white rounded-full"
                                onClick={toggleDropdown}
                            >
                                <MoreHorizOutlined />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-8 right-0 w-max bg-white shadow-md rounded-md py-2 border border-gray-300">
                                    <button className="block w-full text-sm px-3 py-2 text-left hover:bg-gray-100">
                                        Set as Main
                                    </button>
                                    <button className="block w-full text-sm px-3 py-2 text-left hover:bg-gray-100">
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                        <img src={cate1} className="w-full h-full object-cover" />
                    </div>
                    <div className='h-[180px] sm:h-[200px] relative'>
                        <div className="absolute top-2 right-2" ref={dropdownRef}>
                            <button
                                className="w-6 h-6 flex items-center justify-center bg-white rounded-full"
                                onClick={toggleDropdown}
                            >
                                <MoreHorizOutlined />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-8 right-0 w-max bg-white shadow-md rounded-md py-2 border border-gray-300">
                                    <button className="block w-full text-sm px-3 py-2 text-left hover:bg-gray-100">
                                        Set as Main
                                    </button>
                                    <button className="block w-full text-sm px-3 py-2 text-left hover:bg-gray-100">
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                        <img src={cate1} className="w-full h-full object-cover rounded-xl " />
                        <div className="px-3 absolute bottom-3 w-full">
                            <select name="" id="" className="w-full bg-white border border-border1 rounded-md px-2 py-1 mt-2">
                                <option value="">Select Category</option>
                                <option value="">Category 1</option>
                                <option value="">Category 2</option>
                                <option value="">Category 3</option>
                            </select>
                        </div>
                    </div>
                    <div className='h-[180px] sm:h-[200px] relative'>
                        <div className="absolute top-2 right-2" ref={dropdownRef}>
                            <button
                                className="w-6 h-6 flex items-center justify-center bg-white rounded-full"
                                onClick={toggleDropdown}
                            >
                                <MoreHorizOutlined />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-8 right-0 w-max bg-white shadow-md rounded-md py-2 border border-gray-300">
                                    <button className="block w-full text-sm px-3 py-2 text-left hover:bg-gray-100">
                                        Set as Main
                                    </button>
                                    <button className="block w-full text-sm px-3 py-2 text-left hover:bg-gray-100">
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                        <img src={cate1} className="w-full h-full object-cover rounded-xl " />
                        <div className="px-3 absolute bottom-3 w-full">
                            <select name="" id="" className="w-full bg-white border border-border1 rounded-md px-2 py-1 mt-2">
                                <option value="">Select Category</option>
                                <option value="">Category 1</option>
                                <option value="">Category 2</option>
                                <option value="">Category 3</option>
                            </select>
                        </div>
                    </div>
                    <div className='h-[180px] sm:h-[200px] relative'>
                        <div className="absolute top-2 right-2" ref={dropdownRef}>
                            <button
                                className="w-6 h-6 flex items-center justify-center bg-white rounded-full"
                                onClick={toggleDropdown}
                            >
                                <MoreHorizOutlined />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-8 right-0 w-max bg-white shadow-md rounded-md py-2 border border-gray-300">
                                    <button className="block w-full text-sm px-3 py-2 text-left hover:bg-gray-100">
                                        Set as Main
                                    </button>
                                    <button className="block w-full text-sm px-3 py-2 text-left hover:bg-gray-100">
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                        <img src={cate1} className="w-full h-full object-cover rounded-xl " />
                        <div className="px-3 absolute bottom-3 w-full">
                            <select name="" id="" className="w-full bg-white border border-border1 rounded-md px-2 py-1 mt-2">
                                <option value="">Select Category</option>
                                <option value="">Category 1</option>
                                <option value="">Category 2</option>
                                <option value="">Category 3</option>
                            </select>
                        </div>
                    </div>
                    <div className='h-[180px] sm:h-[200px] relative'>
                        <label htmlFor="file" className="w-full h-full cursor-pointer border rounded-xl flex flex-col gap-2 items-center justify-center">
                            <span><FileUploadOutlined className="!text-3xl" /></span>
                            <p className="text-center">Drag an image here <br /> or <span className="text-primary underline underline-offset-3">upload a file</span></p>
                        </label>
                        <input type="file" name="" id="file" hidden />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPhotos