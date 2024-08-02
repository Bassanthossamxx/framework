import React, { useState } from 'react'
import style from "./Footer.module.css";
import { useEffect } from 'react';
export default function Footer() {
  return (
  <>
  <div className="footer flex flex-col text-white">
    <div className="flex justify-center items-center content-center  bg-gray-700 text-center">
 <div className="box w-1/3 p-20">
<h1 className="text-3xl font-bold">LOCATION</h1>
<h5 className='text-lg p-2'>2215 John Daniel Drive</h5>
<h6 className='text-base p-3'>Clark, MO 65243</h6>
 </div>
 <div className="box w-1/3 p-20 text-center">
<h1 className="text-2xl font-bold">AROUND THE WEB</h1>
<i class="fa-brands fa-facebook text-2xl p-1 m-2"></i>
<i class="fa-brands fa-linkedin text-2xl p-1 m-1"></i>
<i class="fa-brands fa-twitter text-2xl p-1 m-1"></i>
<i class="fa-solid fa-globe text-2xl p-1 m-1"></i>

 </div>
 <div className="box w-1/3 p-20 text-center">
<h1 className="text-3xl font-bold">ABOUT FREELANCER</h1>
<p className='text-base p-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
 </div>
    </div>


    <div className="flex justify-center items-center content-center  bg-gray-800">
      <div className="m-3 p-3">
      <p className="text-lg capitalize">Copyright © Your Website 2021</p>
      </div>
    </div>
  </div>
  </>
  )
}
