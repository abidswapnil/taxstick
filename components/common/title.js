const Title = ({ heading, paragraph }) => {
  return (
      <div className="bg-white text-center py-20 px-80 font-medium">
          <div className="container">
              <h3 className="font-normal text-[15px] text-left text-accent">About Taxstick</h3>
              <h1 className="font-normal text-[30px] text-twContent-header text-left">{heading}</h1>
              <p className="font-normal text-lg text-twContent-light mt-[20px] text-left py-2">{paragraph}</p>
              <button className="px-4 py-2 my-7 bg-accent text-white rounded-md flex justify-start">Learn More</button>
          </div>
      </div>
  );
}

export default Title;