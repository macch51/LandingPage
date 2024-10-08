function Testimonial() {
  return (
      <section className="bg-primary relative isolate overflow-hidden px-4 sm:px-6 py-12 sm:py-24 lg:px-8">
        {/* Background styling */}
        <div className="bg-testimonialbg mx-4 sm:mx-8 md:mx-24 rounded-3xl absolute inset-0 -z-10" />
        
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            {/* Quote Block */}
            <blockquote className="text-left text-lg sm:text-xl font-semibold leading-relaxed sm:leading-relaxed text-gray-900">
              <p className="text-primary font-poppins text-semibold leading-relaxed mx-4 sm:mx-8 md:mx-20">
              “Wallet is a great product! All of my most important information is there - credit cards, transit cards, 
              boarding passes, tickets, and more. And I don't need to worry because it's all in one place! Thanks!”
              </p>
            </blockquote>

            {/* User Info */}
            <div className="flex flex-col sm:flex-row mx-4 sm:mx-8 md:mx-20 mt-8 sm:mt-12 items-center gap-y-4 sm:gap-y-0 sm:gap-x-6">
              {/* User Image */}
              <img 
                alt="User Avatar" 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                className="h-16 sm:h-20 w-16 sm:w-20 rounded-full" 
              />

              <div className="text-center sm:text-left">
                {/* User Name */}
                <h3 className="text-base sm:text-lg font-semibold leading-7 tracking-tight text-gray-900">
                  Johnny Owens
                </h3>

                {/* Star Rating */}
                <div className="flex justify-center sm:justify-start items-center mt-2">
                  {Array(5).fill().map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </figure>
        </div>
      </section>
  )
}

export default Testimonial;