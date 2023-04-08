import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from 'react-icons/ai';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: function (i) {
        return (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    background: "gray",
                    borderRadius: "50%",
                    marginTop: "20px",
                    marginLeft: "20px",
                    marginRight: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#D58F76",
                    
                }}
            />
        );
    },
};


const TestimonialsData = [
    {
        id: 1,
        name: "John Doe",
        image: "/Ellipse 18.png",
        title: "Im very satisfied with the team at Lawreto Attorneys. The are so much professional and outstanding. I’m especially grateful for my handling attorney. They take so much care of my cases that i am so greatful to them."
    },
    {
        _id: 2,
        name: "Marry Jane",
        image: "/Ellipse 20.png",
        title: "Im very satisfied with the team at Lawreto Attorneys. The are so much professional and outstanding. I’m especially grateful for my handling attorney. They take so much care of my cases that i am so greatful to them."
    },
    {
        _id: 3,
        name: "Jacob Smith",
        image: "/Ellipse 20.png",
        title: "Im very satisfied with the team at Lawreto Attorneys. The are so much professional and outstanding. I’m especially grateful for my handling attorney. They take so much care of my cases that i am so greatful to them."
    },

]



const Testimonials = () => {
    return (
        <>
            
            <div className="container  bg-#F8DED5 items-center flex mt-12" >
                <div className="text-center w-full">
                    <h3 className="header_6 text-hover  text-center">Testimonial’s</h3>
                    <h3 className="header_2 text-center">
                        What Our Client Says
                        <br />
                        <span className="header_2 mt-2"> about Us </span>
                    </h3>
                    <Slider {...settings} >
                        {
                            TestimonialsData.map((val) => {
                                return(
                                    <Card val={val} key={val._id}/>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}



const Card = ({ val }) => {
    return (
        <>
            <div className="carousel-item active relative float-left w-full">

                <img className="rounded-full shadow-lg m-7 mx-auto"
                    src={val.image} alt="true" width={100} />
                <div className="flex flex-wrap justify-center">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                        <ul className="flex justify-center mb-0">
                            <li>
                                <AiFillStar className="w-5 h-5" style={{ color: 'D58F76' }} />
                            </li>
                            <li>
                                <AiFillStar className="w-5 h-5" style={{ color: 'D58F76' }} />
                            </li>
                            <li>
                                <AiFillStar className="w-5 h-5" style={{ color: 'D58F76' }} />
                            </li>
                            <li>
                                <AiFillStar className="w-5 h-5" style={{ color: 'D58F76' }} />
                            </li>
                            <li>
                                <AiFillStar className="w-5 h-5" style={{ color: 'D58F76' }} />
                            </li>
                        </ul>
                        <p className="header_5 mt-6">
                            {val.title}
                        </p>

                        {/* reviewer name */}
                        <div className="flex flex-wrap justify-center">
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12">
                                <p className="mt-6 items-right px-6">
                                    ___________  <span className='header_5 text-center px-3'>{val.name}</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonials