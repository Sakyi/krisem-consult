import React from 'react'

const Hero1 = () => {
  return (
    <div className="bg-blue-500 h-screen flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-lg md:text-2xl mb-8">Your journey to awesomeness begins here</p>
      <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
        Get Started
      </button>
    </div>
  </div>
  )
}

export default Hero1
