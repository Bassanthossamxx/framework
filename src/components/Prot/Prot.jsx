import React from 'react';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
// Import necessary styles here, if any.

export default function Prot() {
  return (
    <>
      <div className="container relative">
        <div className="text-gray-800 text-center p-5 m-5">
          <h1 className="text-4xl p-5 font-bold">
            PORTFOLIO COMPONENT
          </h1>
          <div className="flex items-center justify-center mb-3">
            <div className="line me-2 m-2 bg-gray-800"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-2 bg-gray-800 m-2"></div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-5 p-7 m-10">
            <div className="relative r mb-4">
              <img src={pic1} alt="" className="rounded-lg" />
              <div className="wone flex items-center justify-center imghover">
                <i className="fa-solid fa-plus text-white sized"></i>
              </div>
            </div>
            <div className="relative r mb-4">
              <img src={pic2} alt="" className="rounded-lg" />
              <div className="wone flex items-center justify-center imghover">
                <i className="fa-solid fa-plus text-white sized"></i>
              </div>
            </div>
            <div className="relative r mb-4">
              <img src={pic3} alt="" className="rounded-lg" />
              <div className="wone flex items-center justify-center imghover">
                <i className="fa-solid fa-plus text-white sized"></i>
              </div>
            </div>
            <div className="relative r">
              <img src={pic1} alt="" className="rounded-lg" />
              <div className="wone flex items-center justify-center imghover">
                <i className="fa-solid fa-plus text-white sized"></i>
              </div>
            </div>
            <div className="relative r">
              <img src={pic2} alt="" className="rounded-lg" />
              <div className="wone flex items-center justify-center imghover">
                <i className="fa-solid fa-plus text-white sized"></i>
              </div>
            </div>
            <div className="relative r">
              <img src={pic3} alt="" className="rounded-lg" />
              <div className="wone flex items-center justify-center imghover">
                <i className="fa-solid fa-plus text-white sized"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

