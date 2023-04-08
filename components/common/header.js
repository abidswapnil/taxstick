import React, { useState } from 'react';
import Image from 'next/image';
import { FiPhoneCall, FiUser, FiFacebook } from 'react-icons/fi';
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const headerData = [
    {
        logo: '/img/Logo.png',
        phone: '+8801404049797',
        icons: [
            {
                _id: 1,
                icon: <FiFacebook className='p-2' size={32} />,
                link: '#',
            },
            {
                _id: 2,
                icon: <FaTwitter className='p-2' size={32} />,
                link: '#',
            },
            {
                _id: 3,
                icon: <FaInstagram className='p-2' size={32} />,
                link: '#',
            },
            {
                _id: 4,
                icon: <FaWhatsapp className='p-2' size={32} />,
                link: '#',
            }
        ],
        menuData: [
            {
                _id: 1,
                name: 'HOME',
                href: "/",
            },
            {
                _id: 2,
                name: 'ABOUT',
                href: "/",
            },
            {
                _id: 3,
                name: 'TAX BENEFICIARY',
                href: "/",
            },
            {
                _id: 4,
                name: 'MORE',
                href: "/",
            },
            {
                _id: 5,
                name: 'CONTACT',
                href: "/",
            }
        ]
    }
]

const Header = () => {
    const [show, setShow] = useState(null);

    return (
        <div className="h-full w-full z-10">
            {/* Code block starts */}
            <nav className="xl:block hidden">
                <div className="py-2 xl:py-0">
                    <div className="flex items-center justify-between">

                        <div className="flex 2xl:mx-64 xl:mx-32 pt-[30px] w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                            <div className="flex items-center">
                                <Image src={headerData[0]?.logo} alt="logo" width={235} height={100} />
                            </div>
                        </div>
                        <div className="flex flex-col">

                            <div className="flex flex-row py-5">
                                <div className="flex-1 w-32">
                                    <div className='flex items-center space-x-3 text-white justify-center'>
                                        <FiPhoneCall className='p-1' size={32} />
                                        <a href='#' className='hover:text-hover text-base'>{headerData[0]?.phone}</a>
                                        <FiUser className='p-1' size={32} />
                                        <a href='#' className='hover:text-hover text-base '>Logging / Register</a>
                                    </div>
                                </div>
                                <div className="flex-1 w-64">
                                    <div className='flex space-x-3 text-white justify-center'>
                                        {
                                            headerData?.map((item) => {
                                                return (
                                                    <>
                                                        {
                                                            item?.icons?.map((icon) => {
                                                                return (
                                                                    <>
                                                                        <a href={icon.link} key={icon._id} className="border-[1px] w-10 h-10 border-white rounded-full text-white font-bold flex justify-center items-center hover:bg-hover">
                                                                            {icon.icon}
                                                                        </a>
                                                                    </>
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
                            <div className="flex bg-slate-50 xl:pr-[275px] 2xl:pr-[640px] rounded-md">
                                <div className="hidden xl:flex lg:flex py-6">
                                    {
                                        headerData?.map((item) => {
                                            return (
                                                <>
                                                    {
                                                        item?.menuData?.map((menu) => {
                                                            return (
                                                                <>
                                                                    <a href={menu.href} key={menu._id} className="flex px-5 items-center text-sm leading-5 text-black hover:text-hover hover:font-semibold transition duration-150 ease-in-out">
                                                                        {menu.name}
                                                                    </a>
                                                                </>
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
            </nav>
            <nav>
                <div className="py-4 px-6 w-full flex lg:hidden justify-between items-center fixed top-0 z-40">
                    <div className="w-24">
                        <Image src={headerData[0]?.logo} alt="logo" width={120} height={120} />
                    </div>
                    <div className="flex items-center">

                        <div id="menu" className="text-white" onClick={() => setShow(!show)}>
                            {show ? (
                                ""
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={4} y1={6} x2={20} y2={6} />
                                    <line x1={4} y1={12} x2={20} y2={12} />
                                    <line x1={4} y1={18} x2={20} y2={18} />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
                {/*Mobile responsive sidebar*/}
                <div className={show ? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 " : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"}>
                    <div className="bg-gray-800 opacity-50 w-full h-full" onClick={() => setShow(!show)} />
                    <div className="w-64 z-40 fixed overflow-y-auto top-0 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                        <div className="px-6 h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="mt-6 flex w-full items-center justify-between">
                                        <div className="flex items-center justify-between w-full">

                                            <div id="cross" className="text-white" onClick={() => setShow(!show)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1={18} y1={6} x2={6} y2={18} />
                                                    <line x1={6} y1={6} x2={18} y2={18} />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="f-m-m">
                                        {
                                            headerData?.map((item) => {
                                                return (
                                                    <>
                                                        {
                                                            item?.menuData?.map((menu) => {
                                                                return (
                                                                    <>
                                                                        <a href={menu.href} key={menu._id} className="flex px-5 items-center text-sm leading-5 transition duration-150 ease-in-out">
                                                                            <li className="text-white pt-8">
                                                                                <div className="flex items-center justify-between">
                                                                                    <div className="flex items-center">
                                                                                        <p className="text-white hover:text-hover xl:text-base md:text-xl text-base ml-3">{menu.name}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </a>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="w-full pt-4">
                                    <div className="flex-col text-white">
                                        <div className="flex space-x-3 py-2">
                                            <FiPhoneCall className='p-1' size={32} />
                                            <a href='#' className='hover:text-hover'>{headerData[0]?.phone}</a>
                                        </div>
                                        <div className="flex space-x-3 py-2">
                                            <FiUser className='p-1' size={32} />
                                            <a href='#' className='hover:text-hover'>Logging / Register</a>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-300 py-3">
                                        <div className="w-full flex items-center justify-between pt-1">

                                            <div className="flex w-64">
                                                <div className='flex space-x-3 text-white'>
                                                    {
                                                        headerData?.map((item) => {
                                                            return (
                                                                <>
                                                                    {
                                                                        item?.icons?.map((icon) => {
                                                                            return (
                                                                                <>
                                                                                    <a href={icon.link} key={icon._id} className="border-[1px] w-10 h-10 border-white rounded-full text-white font-bold flex justify-center items-center hover:bg-hover">
                                                                                        {icon.icon}
                                                                                    </a>
                                                                                </>
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
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Code block ends */}
        </div>
    )
}

export default Header;
