import { CheckCircleOutlineOutlined, CloseOutlined, FileUploadOutlined, MoreVertOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import { Modal, Progress } from "flowbite-react";
import { useUploadMultipleImagesMutation } from "../../redux/baseApi";
import { toast } from "react-toastify";
import { TailSpin, ThreeDots } from 'react-loader-spinner'

const AddPhotos = () => {
    const [openModal, setOpenModal] = useState(false);
    const { values, setFieldValue, errors } = useFormikContext();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadPending, setUploadPending] = useState(false);
    const [uploadMultipleImages] = useUploadMultipleImagesMutation();
    const [dropdownOpen, setDropdownOpen] = useState(null);

    // Handle Image Selection
    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
        setPreviewImages(files.map(file => URL.createObjectURL(file)));
    };

    // Upload Images with Progress
    const uploadImages = async () => {
        if (selectedFiles.length === 0) return;

        const formData = new FormData();
        console.log(selectedFiles);
        
        selectedFiles.forEach((file) => formData.append("images", file));

        try {
            setUploadPending(true)
            setUploadProgress(5);
            const interval = setInterval(() => {
                setUploadProgress((prev) => (prev < 90 ? prev + 2 : prev));
            }, 400);
            const response = await uploadMultipleImages(formData).unwrap();
            clearInterval(interval);
            setUploadProgress(100);

            const uploadedImages = response.map((img, index) => ({
                url: img.url,
                caption: `Image ${values.gallery.length + index + 1}`,
                isPrimary: false,
            }));

            const updatedGallery = values.gallery.length === 0
                ? [{ ...uploadedImages[0], isPrimary: true }, ...uploadedImages.slice(1)]
                : [...values.gallery, ...uploadedImages];

            setFieldValue("gallery", updatedGallery);
            setUploadPending(false)
            toast.success(
                <span>
                    <strong>{response.length}</strong> image`s uploaded
                </span>,
                {
                    position: "bottom-center",
                    className: "text-nowrap w-max pr-7",
                }
            );
        } catch (error) {
            console.error("Upload failed:", error);
            setUploadPending(false)
            setUploadProgress(0);
        }
    };
    useEffect(() => {
        if (uploadProgress === 100) {
            setTimeout(() => {
                setPreviewImages([]);
                setOpenModal(false);
                setUploadProgress(0);
            }, 1000);
        }
    }, [uploadProgress]);

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown-menu")) {
                setDropdownOpen(null);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const setMainImage = (index) => {
        const updatedGallery = values.gallery.map((img, i) => ({
            ...img,
            isPrimary: i === index,
        }));
        setFieldValue("gallery", updatedGallery);
        setDropdownOpen(null);
    };
    const deleteImage = ({ index, type }) => {
        if (type === "prev") {
            const updatedGallery = previewImages.filter((_, i) => i !== index);
            setPreviewImages(updatedGallery);
            setDropdownOpen(null);
        } else {
            const updatedGallery = values.gallery.filter((_, i) => i !== index);
            setFieldValue("gallery", updatedGallery);
            setDropdownOpen(null);
        }
    };

    return (
        <div>
            <label className="text-[15px] text-text1 mb-1 inline-block font-medium">Photos</label>
            <div className="border border-border1 rounded-md p-4">
                <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 gap-2 sm:gap-4">
                    {values.gallery.map((image, index) => (
                        <div key={index} className="h-[180px] sm:h-[200px] relative border-[3px] border-primary rounded-xl overflow-hidden">
                            {image.isPrimary && (
                                <div className="absolute top-0 left-0 rounded-br-xl bg-primary text-white text-sm px-3 py-1">
                                    Main photo
                                </div>
                            )}
                            <img src={image.url} alt="Property" className="w-full h-full object-cover" />
                            <button type="button" className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                                onClick={(e) => { e.stopPropagation(); toggleDropdown(index); }}>
                                <MoreVertOutlined />
                                {dropdownOpen === index && (
                                    <div className="absolute top-full right-0 w-max dropdown-menu pt-1">
                                        <div className="bg-white shadow-md rounded-md py-2 border border-gray-300 min-w-[80px]">
                                            <div className="block w-full text-xs font-medium px-3 py-2 text-left hover:bg-gray-100 cursor-pointer"
                                                onClick={() => setMainImage(index)}>
                                                Set as Main
                                            </div>
                                            <div className="block w-full text-xs font-medium px-3 py-2 text-left hover:bg-gray-100 cursor-pointer"
                                                onClick={() => deleteImage({ index })}>
                                                Delete
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </button>
                        </div>
                    ))}
                    <div className="h-[180px] sm:h-[200px] relative">
                        <button type="button" className="w-full h-full cursor-pointer border rounded-xl flex flex-col gap-2 items-center justify-center" onClick={() => setOpenModal(true)}>
                            <p className="text-center">Add Photos</p>
                        </button>
                    </div>
                </div>
            </div>
            {errors.gallery && <span className="text-red-500 text-sm mt-1 block">{errors.gallery}</span>}

            <Modal show={openModal} onClose={() => { setOpenModal(false); setPreviewImages([]) }} size='xl'>
                <Modal.Body className="p-0 rounded-lg">
                    <div className="flex items-center justify-between px-4 py-4 border-b border-border1 sticky top-0 z-20 bg-white">
                        <div>
                            <h4 className="text-text1 text-lg font-semibold">Upload photos</h4>
                            <p className="text-xs text-text3">{previewImages.length > 0 ? previewImages.length : "No"} items selected</p>
                        </div>
                        <button type="button" disabled={uploadPending} className="text-text1" onClick={() => { setOpenModal(false); setPreviewImages([]) }}><CloseOutlined /></button>
                    </div>
                    {uploadProgress > 0 &&
                        <div><Progress progress={uploadProgress} size="sm" className="!*:rounded-none" /></div>
                    }
                    <div className='px-6 py-4 max-h-[470px] overflow-x-hidden'>
                        <div className="grid grid-cols-2 gap-4">
                            {previewImages.map((src, index) => (
                                <div key={index} className="h-[180px] sm:h-[200px] relative border rounded-xl overflow-hidden">
                                    <img src={src} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                                    {uploadProgress > 0 &&
                                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10 flex items-center justify-center">
                                            <span>
                                                {uploadPending ?
                                                    <TailSpin
                                                        visible={true}
                                                        height="30"
                                                        width="30"
                                                        color="#fff"
                                                        ariaLabel="tail-spin-loading"
                                                        radius="1"
                                                        wrapperStyle={{}}
                                                        wrapperClass=""
                                                    />
                                                    :
                                                    <CheckCircleOutlineOutlined className="!text-4xl text-white" />
                                                }
                                            </span>
                                        </div>
                                    }
                                    <button type="button" className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                                        onClick={(e) => { e.stopPropagation(); toggleDropdown(`modal-${index}`); }}>
                                        <MoreVertOutlined />
                                        {dropdownOpen === `modal-${index}` && (
                                            <div className="absolute top-full right-0 w-max dropdown-menu pt-1">
                                                <div className="bg-white shadow-md rounded-md py-2 border border-gray-300 min-w-[80px]">
                                                    <div className="block w-full text-xs font-medium px-3 py-2 text-left hover:bg-gray-100 cursor-pointer"
                                                        onClick={() => deleteImage({ index, type: "prev" })}>
                                                        Delete
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </button>
                                </div>
                            ))}
                            <div className="h-[180px] sm:h-[200px] relative w-full">
                                <label htmlFor="file-upload" className="w-full h-full cursor-pointer border-2 border-dashed rounded-xl flex flex-col gap-2 items-center justify-center">
                                    <FileUploadOutlined className="!text-3xl" />
                                    <p className="text-center"><span className="text-primary underline underline-offset-3">Upload a file</span></p>
                                </label>
                                <input type="file" id="file-upload" multiple hidden onChange={handleFileSelect} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between px-6 py-4 border-t border-border1 sticky bottom-0 z-20 bg-white">
                        {previewImages.length ?
                            <button className='btn3' type="button" disabled={uploadPending} onClick={() => { setOpenModal(false); setPreviewImages([]) }}>Cancel</button>
                            : <span></span>
                        }
                        <button className='btn1 min-w-[100px] flex items-center justify-center' type="button" onClick={uploadImages} disabled={previewImages.length === 0 || uploadPending}>
                            {uploadPending ? <ThreeDots
                                visible={true}
                                height="40"
                                width="40"
                                color="#fff"
                                radius="9"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            /> : "Upload"}
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AddPhotos;
