import React from 'react';
import Bar from './Bar';
import teng from "./img/eng.jpg";

function Content() {
  return (
    <div className="relative h-screen mb-[350px]">
      {/* Bar Components */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Bar />
      </div>

      {/* Image */}
      <img
        src={teng}
        alt=""
        className="w-full h-half-screen object-cover z-0"
      />

      {/* Content Overlay */}
      <div className="absolute md:top-3/4 md:left-14 rounded-md p-4 bg-gray-400 bg-opacity-80 text-white hover:translate-y-1 delay-50 z-20">
        <h1 className="text-[40px] md:text-6xl">Recognised Leader in the Service Industry</h1>
        <p className="text-xl md:text-2xl">Empowering Lives Through Unmatched Service Quality</p>
        <p className="text-[15px] md:text-xl pb-9">Discover Excellence in Service at Torchbearer Technologies</p>
        <button className="p-3 rounded-md bg-orange-400">Contact US</button>
      </div>
    </div>
  );
}

export default Content;
