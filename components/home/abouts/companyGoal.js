const Goal = () => {
  const companyGoalData = [
    {
      title: 'Our Company Goal',
      description: 'We started in 2018 and have served as many as 5000 students across Ontario.',
    }
  ];
  return (
    <div className="container flex-auto -mt-32 sm:flex flex-col items-center relative">
        <img src="/BG.png" alt="" className="mt-[12%]" />
        <div className="absolute top-1/2 left-20 flex gap-[35%]">
            <div>
              <div className="header_2 text-white">
                {companyGoalData[0].title}
              </div>
              <div className="paragraph text-white lg:w-[480px] w-fit pt-5">
                {companyGoalData[0]?.description}
              </div>
            </div>
            {/* <img src="/Image58.png" /> */}
        </div>
    </div>
  );
}

export default Goal;