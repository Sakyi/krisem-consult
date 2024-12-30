import React from 'react'
import Banner from "../../assets/undraw_under-construction_c2y11.svg";

const Hero = () => {
  return (
    <div className="h-[650px] md:h-[500px] bg-gradient-to-r from-blue-950 to-blue-900 pt-20 dark:bg-blue-950">
      <section className="container flex flex-col items-center justify-between px-2 py-6">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">

          {/* Hero text container */}
          <div
            // data-aos="fade-right"
            // data-aos-duration="400"
            // data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">
            WELCOME TO <span className='text-secondary'>KRISEM CONSULT</span> Building Excellence, Creating Value
            </h1>
            <p className="text-sm">
             At Krisem, we transform visions into reality. With years of expertise in construction and project management, we deliver top-notch solutions for residential, commercial, and industrial projects. From concept to completion, our commitment to quality, safety, and sustainability stands out in every project we undertake.
            </p>
            <div className="space-x-4">
              <button className="btn-primary">
                Get Started
              </button>
              <button className="btn-outline">
                Get Started
              </button> 
            </div>
          </div>
          {/* Hero Image Container */}
          <div
            // data-aos="fade-left"
            // data-aos-duration="400"
            // data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero