import React from 'react'

const SimpleBanner = () => {
  return (
    <div className="bg-primary">
    <div data-aos="fade-up" className="container py-8 md:py-12">
      <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
        <div className=" order-2 flex flex-col items-center gap-4 text-center text-white dark:text-white md:col-span-2  md:items-start md:text-left ">
          <h1 className="text-3xl font-bold ">Lets Make Your Dream A Reality</h1>
          <p className="">
          Whether you're looking for residential, commercial, industrial, or infrastructure development, our team is equipped to manage and execute your vision with precision and professionalism.
          </p>
          <button className="rounded-md !bg-white px-4 py-2 text-sm  !text-black transition-colors duration-300 hover:bg-white/90">
            Get Started
          </button>
        </div>
        <div className="order-1 px-2">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/O9F4rXp1Ogc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SimpleBanner