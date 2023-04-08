const Contact = () => {

  const ContactData = [
    {
      title: 'Join thousands of other satisfied clients and start your journey towards better tax returns and maximum benefits.'
    }
  ]

  return (
    <div className="py-20">
      <div className="relative">
        <img src="/Rectangle 19.png" className="max-w-full" />
        <p className="header_5 mr-[5%] text-white lg:w-[480px] w-fit pt-5 absolute top-1/2 transform -translate-y-1/2">
          {ContactData[0].title}
        </p>
      </div>
    </div>
  )
}

export default Contact