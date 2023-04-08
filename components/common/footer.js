import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiPhoneCall } from "react-icons/fi";
import { TbWorldWww } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";



const footerData = [
    {
        logo: '/Logo.png',
        title: 'Taxstick is the most prominent tax Firm in USA. They are solving tax matters in a very effective way since its inception. The provide great support to solve your tax problem.',
        serviceData: [
            {
                _id: 1,
                title: 'Tax Checking',
            },
            {
                _id: 2,
                title: 'Franchise opportunities.',
            }
        ],
        contactData: [
            {
                _id: 1,
                title: 'Office Address',
                text: '85 KDA Outer Bypass Road, Khulna 9100.',
            },
            {
                _id: 2,
                title: 'Working Hours',
                text: '9:00 AM TO 5:00 PM - Monday To Friday',
            }
        ],
        supportData: [
            {
                _id: 1,
                icon: <FiPhoneCall className='text-gray-600 p-2' size={35} />,
                value: '+8801404049797',
            },
            {
                _id: 2,
                icon: <TbWorldWww className='text-gray-600 p-2' size={35} />,
                value: 'www.appstick.com.bd',
            },
            {
                _id: 3,
                icon: <TfiEmail className='text-gray-600 p-2' size={35} />,
                value: 'support@appstick.com.bd',
            },
        ],

        icons: [
            {
                _id: 1,
                icon: <FaFacebook className='text-gray-600 p-2' size={35} />,
                link: 'https://www.facebook.com/appstick',
            },
            {
                _id: 2,
                icon: <FaInstagram className='text-gray-600 p-2' size={30} />,
                link: 'https://www.instagram.com/appstick',
            },
            {
                _id: 3,
                icon: <FaTwitter className='text-gray-600 p-2' size={30} />,
                link: 'https://www.twitter.com/appstick',
            },
            {
                _id: 4,
                icon: <FaWhatsapp className='text-gray-600 p-2' size={30} />,
                link: 'https://www.whatsapp.com/appstick',
            },
        ]
    }
]

function Footer() {
    return (
        <>
                 
            <div className="bg-[#292828] mt-[117px] ">
                <div className="container py-6">
                    <div className='grid justify-center md:grid-cols-4 lg:grid-cols-4 lg:gap-[12px] pt-16 pb-20 pl-[20px] md:pl-0'>

                        <div className='md:col-span-1'>
                            {
                                footerData?.map((val) => {
                                    return (
                                        <>

                                            <div className='flex items-center space-x-3'>

                                                <Image src={val.logo} alt width={255} height={43} />
                                            </div>
                                            <p className='my-8 max-w-md paragraph text-gray'>
                                                {val.title}
                                            </p>
                                            <div className='header_3 flex justify-start'>
                                            <a href="">
                                                <p className='paragraph text-hover underline'>Learn More</p>
                                            </a>
                                            </div>

                                        </>
                                    )
                                })
                            }
                        </div>

                        <div className='md:col-span-1 lg:col-span-1 md:mt-16 col-span-1 md:justify-self-center'>
                            <h3 className='header_5 text-gray'>Services</h3>
                            <div className='paragraph mt-7 flex flex-col text-gray'>
                                {
                                    footerData?.map((val) => {
                                        return (
                                            <>
                                                {
                                                    val?.serviceData?.map((val) => {
                                                        return (
                                                            
                                                                <a href='#' className='hover:text-hover mt-2 paragraph' key={val._id}>{val.title}</a>
                                                            
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                    })
                                }


                            </div>
                        </div>

                        <div className='md:col-span-1 lg:col-span-1 md:mt-14 col-span-1 md:justify-self-center'>
                            <h3 className='header_5 text-gray'>Contact Us</h3>
                            <div className='paragraph mt-8 flex flex-col text-gray'>
                                {
                                    footerData?.map((val) => {
                                        return (
                                            <>
                                                {
                                                    val?.contactData?.map((val) => {
                                                        return (
                                                            <div className=" mt-2 ">
                                                                <a href='#' className='hover:text-hover header_6 block' key={val._id}>{val.title}</a>
                                                                <a href='#' className='hover:text-hover paragraph block'>{val.text}</a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='md:col-span-1 lg:col-span-1 mt-[20px] md:mt-14 col-span-1 md:justify-self-center'>
                            <h3 className='header_5 text-gray'>For any kind of support</h3>
                            <div className='mt-8 flex flex-col font-medium text-base text-gray'>
                                {/* all social links */}
                                <div className='flex space-x-3'>
                                {
                                    footerData?.map((val) => {
                                        return (
                                            <>
                                                {
                                                    val?.icons?.map((val) => {
                                                        return (
                                                            
                                                                <a key={val._id} href={val.link} className="paragraph border-[1px] w-10 h-10 border-white rounded-full text-white font-bold flex justify-center items-center hover:bg-hover">
                                                                    {val.icon}
                                                                </a>
                                                               
                                                            
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                    })
                                }
                                    
                                </div>
                                {/* phone, website, email  */}
                                <div className='flex flex-col mt-6'>
                                    {
                                        footerData?.map((val) => {
                                            return (
                                                <>
                                                    {
                                                        val?.supportData?.map((val) => {
                                                            return (
                                                                
                                                                    <div className='flex items-center space-x-3' key={val._id}>
                                                                        {val.icon}
                                                                        <a href='#' className='hover:text-hover'>{val.value}</a>
                                                                    </div>
                                                                
                                                            )
                                                        })
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='bg-secondary_gray max-w-[1920]'>
                    <div className='container py-5'>
                        <div className='flex justify-center items-center space-x-3 text-[16px]'>
                            <p className='text-gray paragraph'>© 2023 Taxstick</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Footer;