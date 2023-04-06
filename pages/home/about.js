const About = () => {

  const AboutData = [
    {
        _id: 1,
        title: "About Taxstick",
        sub_title: "Taxstick is a platform that helps connecting students to accountants.",
        description: "Taxstick Inc. is a platform that helps in connecting students to accountants. It is an easy to use web app that allows students to submit documents to accountants for tax filing and other related services. Our simple, fast and secure platform is catered to students who want to get their taxes filed from home without the hassle of taking buses in snowy weather, booking appointments and waiting in lines at accountant offices.",
    }
  ]

  return (
        <div>
            <div className="container mx-auto">
                    <div className='py-16'>
                        <div className='lg:grid lg:grid-cols-2 gap-[8%] text-justify'>

                            <div className="bg-no-repeat -mt-10 bg-center md:w-full sm:w-1/2 rounded-3xl items-center">
                                <div>
                                   <img src="/Image.png" alt="true" className="xl:w-[653px] sm:w-full rounded-3xl h-[640px] -mb-15" />
                                </div>
                            </div>

                            <div className=''>
                                <h3 className='header_6 text-hover'>{AboutData[0].title}</h3>
                                <p className="header_2 mt-1">
                                    {AboutData[0].sub_title}
                                </p>
                                <p className="focus:outline-none mt-5 pr-12 paragraph text-secondary_gray text-justify">
                                    {AboutData[0].description}
                                </p>

                                <button className="mt-5 pr-8 bg-hover text-white py-2 px-5 text-center items-center rounded-md shadow-3xl">
                                    <span className='text-center'>Learn More</span>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default About;