import React from "react";

const Home = () => {
  return (
    <div className="flex sticky flex-col md:flex-row h-screen">
      <div className="md:w-1/2 h-1/2 md:h-full relative">
        <img
          src="./self.jpg"
          className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0"
          alt="Flowbite Logo"
        />
      </div>

      <div className="md:w-1/2 md:h-full h-1/2 bg-cover bg-[url('./bg1.gif')] flex items-center justify-center text-center text-white">
        <div className="text-center px-8">
          <h1 className="text-3xl md:text-5xl font-bold outline-8 text-black drop-shadow-[2px_2px_2px_black] mb-4">
            Full Stack
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-[2px_2px_2px_black]">
            Web Developer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
