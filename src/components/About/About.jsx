import React, { useState } from 'react'
import style from "./About.module.css";
import { useEffect } from 'react';
export default function About() {
  return(
    <>
     <div className="container relative bg-neww">
        <div className="flex flex-col justify-center content-center pt-10 items-center text-center ">
        <h2 className="text-4xl font-bold text-white p-4 m-3">ABOUT COMPONENET</h2>
        <div className="flex aitems-center justify-center mb-3">
          <div className="line me-2 m-2 bg-white">
            </div>
            <i className="fa-solid fa-star text-white"></i>
        <div className="line ms-2 bg-white m-2"></div></div>
        <p className=" text-white m-1">Graphic Artist - Web Designer - Illustrator</p>
        <div className="flex justify-center content-center items-center p-10">
        <p className=" text-white m-5 p-5 w-1/2 text-lg">Freelancer is a free bootstrap theme created by Route.The download includes 
         the complete  source files including HTML,CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.</p>
          <p className=" text-white m-5 p-5 w-1/2 text-lg">Freelancer is a free bootstrap theme created by Route.The download includes 
         the complete  source files including HTML,CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.</p>
           </div>
        </div>
      </div>
    
    </>
  )
}
