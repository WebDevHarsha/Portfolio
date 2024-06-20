import React from "react";

const Home = () => {
  return (
    <div className="flex sticky flex-col md:flex-row h-screen">
      <div className="md:w-1/2 h-1/2 md:h-full relative">
        <img
          src="./self.jpg"
          className="absolute inset-0 w-full h-full object-cover  hover:grayscale-0"
          
        />
      </div>

      <div className="md:w-1/2 md:h-full h-1/2 bg-cover bg-[url('./bg1.gif')] flex items-center justify-center text-center text-white">
        <div className="text-center px-8">
          <h1 className="text-3xl md:text-5xl font-bold outline-8 text-black drop-shadow-[2px_2px_2px_black] mb-4">
            Heyo, This is <span className="bg-gradient-to-r from-yellow-500  to-orange-400 inline-block text-transparent bg-clip-text">Sri Harsha</span>! 👋
          </h1>
          <h1 className="text-xl md:text-xl font-bold drop-shadow-[2px_2px_2px_black]">
          A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nextjs / Nodejs / React Native and some other cool libraries and frameworks.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
