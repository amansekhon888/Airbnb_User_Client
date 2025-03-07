import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import cate1 from "../../assets/images/cate1.png"
import mapBg from "../../assets/images/mapBg.png"
// import locationPin from "../../assets/icons/locationPin.png"
import { Link, useParams } from 'react-router-dom';
import { Close, FavoriteBorderOutlined, KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined, ShareOutlined, StarRateRounded } from '@mui/icons-material';
import { Rating } from '@mui/material';
import PricingDetails from '../../components/PricingDetails/PricingDetails'
import { useGetPropertiesByIdQuery } from '../../redux/api/property'

const PropertyDetails = () => {
    const { id } = useParams()
    console.log(id);
    const { data, isLoading } = useGetPropertiesByIdQuery(id)
    console.log(data);


    // Slider reference
    const sliderRef = useRef<Slider | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        // add class instead style
        document.body.classList.add("lg:overflow-hidden")
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove("lg:overflow-hidden")
    };

    const Prev = () => {
        sliderRef.current?.slickPrev();
    };

    const Next = () => {
        sliderRef.current?.slickNext();
    };

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    if (isLoading) return <p>Loading...</p>;

    return (
        <div className='pb-14 md:pb-16'>
            <div className="container mx-auto">
                <div>
                    <ul className="flex items-center gap-1">
                        <li><Link to="/" className="text-text3 hover:underline">Home</Link></li>
                        <li><span><KeyboardArrowRightOutlined className="!text-lg text-text3" /></span></li>
                        <li><p className="text-primary max-w-[180px] text-nowrap text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet consectetur.</p></li>
                    </ul>
                </div>
                <div>
                    <div className="mt-4">
                        <div className="hidden lg:grid grid-cols-2 h-[350px] xl:h-[400px] gap-3 xl:gap-5">
                            {/* First Image */}
                            <div className="h-[350px] xl:h-[400px] rounded-2xl overflow-hidden cursor-pointer" onClick={openModal}>
                                <img src={data?.gallery[0]?.url} alt="Property" className="h-full w-full object-cover" />
                            </div>

                            {/* Next Images in Grid */}
                            <div className="grid grid-cols-2 gap-3 xl:gap-5 h-[350px] xl:h-[400px]">
                                {data?.gallery?.slice(1, 4).map((img, i) => (
                                    <div className="h-full rounded-2xl overflow-hidden cursor-pointer" onClick={openModal}>
                                        <img src={img.url} alt={`Property Image`} className="h-full w-full object-cover" />
                                    </div>
                                ))}
                                {data?.gallery.length > 4 &&
                                    <div className="h-full rounded-2xl overflow-hidden relative cursor-pointer">
                                        <img src={data?.gallery[4]?.url} alt={`Property Image`} className="h-full w-full object-cover" />
                                        {data?.gallery.length > 5 &&
                                            <div className="absolute top-0 left-0 w-full h-full bg-[#151F2580] flex items-center justify-center flex-col" onClick={openModal}>
                                                <p className="text-xl font-semibold text-white">4+</p>
                                                <p className="text-white">View all photos</p>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    {isModalOpen && (
                        <div className="hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 lg:flex items-center justify-center z-50">
                            <div className="relative w-3/4 max-w-4xl">
                                <button
                                    className="absolute top-2 right-2 bg-primary text-white z-10 w-9 h-9 rounded-full flex items-center justify-center opacity-70 hover:opacity-100 duration-300"
                                    onClick={closeModal}
                                >
                                    <Close className="@text-xl" />
                                </button>
                                <div className="slider relative">
                                    <button className="absolute top-1/2 -left-12 -translate-y-1/2 w-8 h-8 flex items-center justify-center z-10 bg-primary rounded-full opacity-70 text-white hover:opacity-100 duration-300" onClick={Prev}><KeyboardArrowLeftOutlined /></button>
                                    <button className="absolute top-1/2 -right-12 -translate-y-1/2 w-8 h-8 flex items-center justify-center z-10 bg-primary rounded-full opacity-70 text-white hover:opacity-100 duration-300" onClick={Next}><KeyboardArrowRightOutlined /></button>
                                    <Slider {...settings} ref={sliderRef}>
                                        <div className="h-[500px]">
                                            <img src={cate1} className="h-full w-full object-cover" />
                                        </div>
                                        <div className="h-[500px]">
                                            <img src={cate1} className="h-full w-full object-cover" />
                                        </div>
                                        <div className="h-[500px]">
                                            <img src={cate1} className="h-full w-full object-cover" />
                                        </div>
                                        <div className="h-[500px]">
                                            <img src={cate1} className="h-full w-full object-cover" />
                                        </div>
                                        <div className="h-[500px]">
                                            <img src={cate1} className="h-full w-full object-cover" />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="slider lg:hidden relative">
                        <button className="absolute top-1/2 left-3 -translate-y-1/2 w-8 h-8 flex items-center justify-center z-10 bg-primary rounded-full opacity-70 text-white hover:opacity-100 duration-300" onClick={Prev}><KeyboardArrowLeftOutlined /></button>
                        <button className="absolute top-1/2 right-3 -translate-y-1/2 w-8 h-8 flex items-center justify-center z-10 bg-primary rounded-full opacity-70 text-white hover:opacity-100 duration-300" onClick={Next}><KeyboardArrowRightOutlined /></button>
                        <Slider {...settings} ref={sliderRef}>
                            {data?.gallery?.map((img, i) => (
                                <div className="h-[300px] sm:h-[400px]">
                                    <img src={img.url} className="h-full w-full object-cover" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="mt-6 sm:mt-10">
                    <div>
                        <div className='flex justify-between items-start gap-6'>
                            <div className="text-text1">
                                <h5 className="text-lg md:text-xl lg:text-2xl font-medium leading-6 mb-2">{data?.title}</h5>
                                <p className="flex items-start gap-2 mt-1 ">
                                    {/* <img src={locationPin} className="w-2.5 md:w-3 mt-1 md:mt-1.5" /> */}
                                    <span className="text-sm md:text-base text-text3 w-full capitalize"> {data?.address
                                        && `${data.address.address}, ${data.address.city}${data.address.state ? `, ${data.address.state}` : ""}, ${data.address.country}, ${data.address.zip_code}`}</span></p>
                                <div className="flex items-end gap-1.5 text-text1 mt-1">
                                    <span><StarRateRounded className='!text-lg' /></span>
                                    <span className="font-medium text-sm">4.5</span>
                                    <span className="font-medium text-sm border-b border-text1">(8 Reviews)</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-end gap-3'>
                                <button className='w-9 h-9 flex items-center justify-center rounded-full border border-border1 text-text3 hover:text-primary hover:border-primary duration-300'>
                                    <ShareOutlined className='!text-lg' />
                                </button>
                                <button className='w-9 h-9 flex items-center justify-center rounded-full border border-border1 text-text3 hover:text-primary hover:border-primary duration-300'>
                                    <FavoriteBorderOutlined className='!text-lg' />
                                </button>
                            </div>
                        </div>
                        <div className='mt-6 lg:hidden'>
                            {/* <PricingDetails data={data} /> */}
                        </div>
                        <div className="lg:flex gap-10 relative">
                            <div className="w-full lg:w-[60%] xl:w-[70%]">
                                <div className='mt-6'>
                                    <div className=''>
                                        <h4 className='text-2xl font-semibold'>About this place</h4>
                                        <div className='mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2'>
                                            <div className='flex flex-col'>
                                                <span className='text-sm text-text3 font-medium'>Beds</span>
                                                <p className='text-text1 font-medium'>3 Beds</p>
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='text-sm text-text3 font-medium'>Baths</span>
                                                <p className='text-text1 font-medium'>1 Bath</p>
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='text-sm text-text3 font-medium'>PLot size</span>
                                                <p className='text-text1 font-medium'>1,440 sq ft</p>
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='text-sm text-text3 font-medium'>Type</span>
                                                <p className='text-text1 font-medium'>Single family home</p>
                                            </div>
                                        </div>
                                        <div className='mt-6'>
                                            <p className='text-text1'>A terrace, a coffee shop/cafe and a garden are just a few of the amenities provided at RS Sarovar Portico Palampur. Free in-room WiFi is available to all guests, along with dry cleaning/laundry services and a bar...</p>
                                            <button className='text-primary underline'>Read more</button>
                                        </div>
                                        <div className='mt-6 text-text1'>
                                            <h6 className='font-medium'>Additional perks include:</h6>
                                            <ul className='flex flex-col list-disc pl-6 gap-1 mt-2'>
                                                <li>Free self-parking and valet parking</li>
                                                <li>Buffet breakfast (surcharge), express check-in and a 24-hour front desk</li>
                                                <li>A front desk safe, a reception hall and luggage storage</li>
                                            </ul>
                                        </div>
                                        <div className='mt-6 text-text1'>
                                            <h6 className='font-medium'>Languages</h6>
                                            <p className='text-text1 mt-1'><span>English, Hindi</span></p>
                                        </div>
                                    </div>
                                    <hr className='border-border1 my-8' />
                                    <div className=''>
                                        <h4 className='text-2xl font-semibold'>What this place offers</h4>
                                        <div className='mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2'>
                                            <p className='font-medium text-text1'>Beach access – Beachfront</p>
                                            <p className='font-medium text-text1'>Kitchen</p>
                                            <p className='font-medium text-text1'>Wifi</p>
                                            <p className='font-medium text-text1'>Dedicated workspace</p>
                                            <p className='font-medium text-text1'>Pool</p>
                                            <button className='text-left font-medium text1 text-primary underline'>Show all 8 amenities</button>
                                        </div>
                                    </div>
                                    <hr className='border-border1 my-8' />
                                    <div className=''>
                                        <div className='flex items-center justify-between gap-2'>
                                            <h4 className='text-2xl font-semibold'>Reviews (8)</h4>
                                            <div><span className='inline-block bg-[#34C759] px-2 py-1 text-white rounded font-medium text-sm'>4.0</span> <span className='text-lg font-medium'>Good</span></div>
                                        </div>
                                        <div className='mt-4'>
                                            <div className='grid md:grid-cols-2 gap-4'>
                                                {Array(4).fill(0).map((i) => (
                                                    <div className='p-4 border border-border1 rounded-xl'>
                                                        <div className='flex items-start justify-between gap-2'>
                                                            <div className='flex gap-3 items-start'>
                                                                <div className='w-11 h-11 rounded bg-gray-600'>
                                                                </div>
                                                                <div>
                                                                    <p className='text-text1 font-medium'>Lora Smith</p>
                                                                    <div>
                                                                        <Rating name="read-only" value={4} readOnly
                                                                            size='small' />
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <span className='text-text3 text-sm'>13/03/2022</span>
                                                        </div>
                                                        <p className='text-text1 mt-3'>“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='mt-8'>
                                            <button className='border border-primary text-primary rounded-md py-2.5 px-4 hover:text-white hover:bg-primary hover:border-primary duration-300 font-medium'>View all 8 reviews</button>
                                        </div>
                                    </div>
                                    <hr className='border-border1 my-8' />
                                    <div className=''>
                                        <h4 className='text-2xl font-semibold'>Where you’ll be</h4>
                                        <p className='text-text3 mt-1'>Dubai, United Arab Emirates</p>
                                        <div className='mt-6'>
                                            <div>
                                                <img src={mapBg} alt="" />
                                            </div>
                                        </div>
                                        <div className='mt-5 text-text1'>
                                            <h6 className='font-medium'>Accessibility of Infrastructure:</h6>
                                            <p className='text-text1 mt-1'>Lorem ipsum dolor sit amet consectetur. Suspendisse eu sollicitudin viverra mauris tristique malesuada tincidunt malesuada. Integer mi dignissim nisl diam. Orci mi id nunc neque nulla ac urna habitant bibendum. Orci rhoncus eget rutrum lectus eu venenatis proin.... <button className='text-primary underline'>Read more</button></p>

                                        </div>
                                    </div>
                                    <hr className='border-border1 my-8' />
                                    <div className=''>
                                        <h4 className='text-2xl font-semibold'>Things to know</h4>
                                        <div className='mt-5 text-text1 grid xs:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8'>
                                            <div>
                                                <h6 className='font-medium'>House rules</h6>
                                                <ul className='mt-2 flex flex-col gap-1.5 leading-5'>
                                                    <li>Check-in after 3:00 pm</li>
                                                    <li>Checkout before 11:00 am</li>
                                                    <li>2 guests maximum</li>
                                                </ul>
                                                <button className='underline underline-offset-4 font-medium mt-2'>Show more</button>
                                            </div>
                                            <div>
                                                <h6 className='font-medium'>Safety & property</h6>
                                                <ul className='mt-2 flex flex-col gap-1.5 leading-5'>
                                                    <li>Carbon monoxide alarm</li>
                                                    <li>Smoke alarm</li>
                                                    <li>Not suitable for children and infants</li>
                                                </ul>
                                                <button className='underline underline-offset-4 font-medium mt-2'>Show more</button>
                                            </div>
                                            <div>
                                                <h6 className='font-medium'>Cancellation policy</h6>
                                                <ul className='mt-2 flex flex-col gap-1.5 leading-5'>
                                                    <li>Free cancellation for 48 hours. Cancel before 13 Jan for a partial refund.</li>
                                                    <li>Review this Host’s full policy for details.</li>
                                                </ul>
                                                <button className='underline underline-offset-4 font-medium mt-2'>Show more</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block lg:w-[40%] xl:w-[30%]">
                                <div className=' sticky top-[120px]'>
                                    {/* <PricingDetails data={data} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PropertyDetails