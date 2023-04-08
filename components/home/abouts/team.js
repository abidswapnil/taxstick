import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const membersData = [
    {
        _id: 1,
        name: 'Rafael',
        img: '/Ellipse 18.png',
        socials: [
            {
                _id: 1,
                icon: <FiFacebook />,
                href: 'https://www.facebook.com/'
            },
            {
                _id: 2,
                icon: <FaInstagram />,
                href: 'https://www.instagram.com/'
            },
            {
                _id: 3,
                icon: <FaTwitter />,
                href: 'https://www.twitter.com/'
            },
            {
                _id: 4,
                icon: <FaWhatsapp />,
                href: 'https://www.whatsapp.com/'
            }
        ]

    },
    {
        _id: 2,
        name: 'Maria',
        img: '/Ellipse 20.png',
        socials: [
            {
                _id: 1,
                icon: <FiFacebook />,
                href: 'https://www.facebook.com/'
            },
            {
                _id: 2,
                icon: <FaInstagram />,
                href: 'https://www.instagram.com/'
            },
            {
                _id: 3,
                icon: <FaTwitter />,
                href: 'https://www.twitter.com/'
            },
            {
                _id: 4,
                icon: <FaWhatsapp />,
                href: 'https://www.whatsapp.com/'
            }
        ]
    },
    {
        _id: 3,
        name: 'Ana',
        img: '/Ellipse 18.png',
        socials: [
            {
                _id: 1,
                icon: <FiFacebook />,
                href: '#'
            },
            {
                _id: 2,
                icon: <FaInstagram />,
                href: '#'
            },
            {
                _id: 3,
                icon: <FaTwitter />,
                href: '#'
            },
            {
                _id: 4,
                icon: <FaWhatsapp />,
                href: '#'
            }
        ]
    }
]
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false

            }
        },
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                dots: false,
            }
        },
        {
            breakpoint: 810,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                dots: false,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
    ]
};
const Members = () => {
    return (
        <>
            <div className='py-20 hero_font_family bg-#FAF7F6'>
                <div className='py-16'>
                    <div className='lg:grid lg:grid-cols-2 text-justify p-[2%] justify-items-center lg:justify-items-end'>
                        <div className='container w-[434px]'>
                            <h3 className='header_6 text-hover'>Our Team</h3>
                            <h1 className="focus:outline-none header_2 mt-2">
                                Meet Our
                                <br />
                                Expert Member
                            </h1>
                            <p className="focus:outline-none mt-5 paragraph text-secondary_gray">
                                Taxstick Inc. is a platform that helps in connecting students to accountants.
                                It is an easy to use web app that allows students to submit documents to accountants for tax filing and other related services
                            </p>
                        </div>
                        <div className='w-full'>
                            <Slider {...settings}>
                                {
                                    membersData?.map((member) => {
                                        return (
                                            <Team member={member} key={member?._id} />

                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const Team = ({ member }) => {
    return (
        <>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow">
                <div className="pt-12 pb-12">
                    <div className="flex justify-center z-0">
                        <img src={member.img} alt className="rounded-full group-hover:rounded-[100px] w-[230px] h-[230px] xl:w-[270px] xl:h-[270px] transform transition duration-500 group-hover:scale-y-125" />
                    </div>
                    <div className="absolute inset-0 flex translate-y-[62%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="text-center header_5 text-white pb-2 mb-28 lg:mb-24 lg:pb-8">{member.name}</h1>
                        <div className="flex space-x-2 lg:space-x-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {
                                member.socials?.map((social) => {
                                    return (
                                        <a href={social.href} className="border-[1px] w-10 h-10 border-white rounded-full text-hover font-bold flex justify-center items-center hover:bg-white">
                                            {social.icon}
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Members
