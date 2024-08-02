import React from 'react';
import style from "./Home.module.css";
import avatar from './avataaars.svg'; // Adjust the path according to your project structure

export default function Home() {
  return (
    <>
      <div className="container relative bg-neww ">
        <div className="flex flex-col justify-center content-center pt-10 items-center">
        <img src={avatar} alt="" className="w-1/6" />
        <h2 className="text-4xl font-bold text-white p-4 m-3">START FRAMEWORK</h2>
        <div className="flex aitems-center justify-center mb-3">
          <div className="line me-2 m-2 bg-white">
            </div>
            <i className="fa-solid fa-star text-white"></i>
        <div className="line ms-2 bg-white m-2"></div></div>
        <p className=" text-white m-1">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}

