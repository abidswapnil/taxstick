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
        <div className="flex relative">
            <div className="container mx-auto">
                <div className='text-center flex gap-[12%]'>
                {NumericsList.map((item) => (
                    <div>
                        <p className="header_1 mt-[15%]">{item.number}</p>
                        <p className="header_5 mt-5 text-sm leading-6 text-hover">{item.title}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
  )
}

export default Numerics;