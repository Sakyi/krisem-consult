import React from 'react'

const BannerDetails = ({reverse}) => {

  const text1 = "We Work On Projects That Get Trending In the World Of Construction"
  const text1D = "The industry is undergoing a profound transformation, propelled by technological advancements, changing demographics, and a growing emphasis on sustainability. We are revolutionizing how we design and build for the future."
  const text2 = "Find A Career In Construction."
  const text2D = "At Krisem, we are always looking for passionate, skilled professionals to join our team. We offer a dynamic work environment where innovation, creativity, and dedication are encouraged. If you’re looking to be part of an industry-leading construction consortium, we invite you to explore our current job openings."

  return (
    <section className="bg-slate-100 dark:bg-slate-900 dark:text-white p-4">
      <div className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
        {/* text container */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className= {`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${reverse ? "md:order-last" : ""}`}
          >
            <h1 className="text-2xl md:text-4xl ">
              {reverse ? text1 : text2}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
           {reverse ? text1D : text2D}
            </p>
            <p className='text-left text-sm text-slate-600 dark:text-slate-400'>{reverse ? "Here are the six key trends that we see shaping the future of the global construction industry." : ""}</p>
            {
              reverse ? ( <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">
                  Smart and connected infrastructure
                  </li>
                  <li className="font-medium">
                  Skilled workforce and digital transformation
                  </li>
                  <li className="font-medium">Sustainable construction</li>
                </ul>
              </div>):
              ""
            }
           
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                Get Started
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className={reverse ? "order-1" : ""}
          >
            <img
              src={reverse ? "https://images.pexels.com/photos/4254157/pexels-photo-4254157.jpeg?auto=compress&cs=tinysrgb&w=600" : "https://images.pexels.com/photos/8488034/pexels-photo-8488034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
              alt="No image"
              className="rounded-md max-auto w-full hover:drop-shadow-md shadow-blue-100 shadow-2xl transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerDetails