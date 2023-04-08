import Image from "next/image"

const Hero = () => {
    return (
        <>
          <div className="py-[10%]">  
            <div className="w-full table absolute top-0 -z-10">
                    <div className="grid grid-cols-3 max-w-[1920]">
                        <div className="top-0 h-[1002px]" style={{ backgroundImage: `url('../../img/1.png')` }}>
                            <div className="bg-[#1e1d2bf2] h-[1002px]"></div>
                        </div>
                        <div className="top-0 h-[1002px] col-span-2" style={{ backgroundImage: `url('../../img/2.png')` }}>
                            <div className="bg-[#12181be6] h-[1002px]"></div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="grid grid-rows-1 lg:grid-cols-2 pt-3 gap-5">
                        <div className="flex justify-start lg:justify-center">
                            <div className="mt-12 lg:mt-32">
                                <h3 className='text-hover text-2xl mt-32'>WelCome to Taxtick!</h3>
                                <h1 className="text-white my-5 text-6xl">
                                    About Taxstick
                                </h1>
                                <p className="text-white py-8">
                                    Home / About Us
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </>
    )
}

export default Hero
