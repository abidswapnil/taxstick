import AboutUs from "../../components/frontend/about/about_us";
import Title from "../../components/frontend/common/title";
import Image from "next/image";

const Numerics = () => {

  const NumericsList = [
    {
        _id: 1,
        number: "25",
        title: "YEARS EXPERIENCE",
    },
    {
        _id: 2,
        number: "508",
        title: "FILLED TAX PER MONTH",
    },
    {
        _id: 3,
        number: "805",
        title: "HAPPY CLIENTS",
    },
    {
        _id: 4,
        number: "35",
        title: "EXPERT MEMBERS",
    },
  ]

  return (
        <div>
            <div className="container mx-auto">
                    <div className='py-16'>
                        <div className='text-center flex gap-[12%]'>
                        {NumericsList.map((item) => (
                            <div>
                                <p className="header_1 mt-1">{item.number}</p>
                                <p className="header_5 mt-5 text-sm leading-6 text-hover">{item.title}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                
            </div>
        </div>
  )
}

export default Numerics;