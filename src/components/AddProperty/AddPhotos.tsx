import { FileUploadOutlined, MoreHorizOutlined } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { useFormikContext } from "formik";

const AddPhotos = () => {
    const { values, setFieldValue, errors } = useFormikContext();
    const [isDropdownOpen, setDropdownOpen] = useState(null);
    const dropdownRef = useRef(null);

    // Toggle dropdown
    const toggleDropdown = (index) => {
        setDropdownOpen((prev) => (prev === index ? null : index));
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handle Image Upload
    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        if (files.length === 0) return;

        const newImages = files.map((file, index) => ({
            url: URL.createObjectURL(file),
            caption: `Image ${values.gallery.length + index + 1}`,
            isPrimary: false
        }));

        // If gallery is empty, set the first uploaded image as main
        const updatedGallery = values.gallery.length === 0
            ? [{ ...newImages[0], isPrimary: true }, ...newImages.slice(1)]
            : [...values.gallery, ...newImages];

        setFieldValue("gallery", updatedGallery);
    };

    // Set Image as Main
    const setMainImage = (index) => {
        setFieldValue("gallery", (prevGallery) => {
            return prevGallery.map((img, imgIndex) => ({
                ...img,
                isPrimary: imgIndex === index
            }));
        });
        setDropdownOpen(null);
    };

    // Delete Image
    const deleteImage = (index) => {
        setFieldValue("gallery", (prevGallery) => {
            let updatedGallery = prevGallery.filter((_, imgIndex) => imgIndex !== index);

            // If the deleted image was the main, set the first remaining image as main
            if (updatedGallery.length > 0 && !updatedGallery.some(img => img.isPrimary)) {
                updatedGallery[0] = { ...updatedGallery[0], isPrimary: true };
            }

            return updatedGallery;
        });

        setDropdownOpen(null);
    };

    return (
        <div>
            <label className="text-[15px] text-text1 mb-1 inline-block font-medium">Photos</label>
            <div className="border border-border1 rounded-md p-4">
                <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 gap-2 sm:gap-4">
                    {/* Show images only if gallery is NOT empty */}
                    {values.gallery.length > 0 ? (
                        <>
                            {values.gallery.map((image, index) => (
                                <div key={index} className="h-[180px] sm:h-[200px] relative border-[3px] border-primary rounded-xl overflow-hidden">
                                    {/* Main Photo Label */}
                                    {image.isPrimary && (
                                        <div className="absolute top-0 left-0 rounded-br-xl bg-primary text-white text-sm px-3 py-1">
                                            Main photo
                                        </div>
                                    )}
                                    {/* Dropdown Menu */}
                                    <div className="absolute top-2 right-2" ref={(el) => (dropdownRef.current = el)}>
                                        <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full cursor-pointer"
                                            onClick={() => toggleDropdown(index)}>
                                            <MoreHorizOutlined />
                                        </div>
                                        {isDropdownOpen === index && (
                                            <div className="absolute top-8 right-0 w-max bg-white shadow-md rounded-md py-2 border border-gray-300">
                                                <div className="block w-full text-sm px-3 py-2 text-left hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => setMainImage(index)}>
                                                    Set as Main
                                                </div>
                                                <div className="block w-full text-sm px-3 py-2 text-left hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => deleteImage(index)}>
                                                    Delete
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* Image Preview */}
                                    <img src={image.url} alt="Property" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            {/* Upload Button Always Visible */}
                            <div className="h-[180px] sm:h-[200px] relative">
                                <label htmlFor="file-upload" className="w-full h-full cursor-pointer border rounded-xl flex flex-col gap-2 items-center justify-center">
                                    <span>
                                        <FileUploadOutlined className="!text-3xl" />
                                    </span>
                                    <p className="text-center">
                                        Drag an image here <br /> or <span className="text-primary underline underline-offset-3">upload a file</span>
                                    </p>
                                </label>
                                <input type="file" id="file-upload" multiple hidden onChange={handleImageUpload} />
                            </div>
                        </>
                    ) : (
                        /* Only show upload button if no images exist */
                        <div className="h-[180px] sm:h-[200px] relative w-full">
                            <label htmlFor="file-upload" className="w-full h-full cursor-pointer border rounded-xl flex flex-col gap-2 items-center justify-center">
                                <span>
                                    <FileUploadOutlined className="!text-3xl" />
                                </span>
                                <p className="text-center">
                                    Drag an image here <br /> or <span className="text-primary underline underline-offset-3">upload a file</span>
                                </p>
                            </label>
                            <input type="file" id="file-upload" multiple hidden onChange={handleImageUpload} />
                        </div>
                    )}
                </div>
            </div>
            {errors.gallery &&
                <span className="text-red-500 text-sm mt-1 block">
                    {errors.gallery}
                </span>
            }
        </div>
    );
};

export default AddPhotos;
