import React from 'react';

export default function Contact() {
  return (
    <>
      <div className="mb-4">
        <div className="pt-3 container relative">
          <div className="text-gray-800 text-center p-5 m-5">
            <h1 className="text-4xl p-5 font-bold">
              CONTACT SECTION
            </h1>
            <div className="flex items-center justify-center mb-3">
              <div className="line me-2 m-2 bg-gray-800"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-2 bg-gray-800 m-2"></div>
            </div>
          </div>
          <form action="" className="w-1/2 mx-auto mt-5 flex flex-col m-4 p-3">
            <input
              id="userName"
              type="text"
              placeholder="Username"
              name="userName"
              className="form-control border-0 border-b p-5 relative mb-3 focus:border-custom"
            />
            <input
              id="userAge"
              type="number"
              placeholder="userAge"
              name="userAge"
              className="form-control border-0 border-b p-5 relative mb-3 focus:border-custom"
            />
            <input
              id="userEmail"
              type="email"
              placeholder="userEmail"
              name="userEmail"
              className="form-control border-0 border-b p-5 relative mb-3 focus:border-custom"
            />
            <input
              id="Userpassword"
              type="text"
              placeholder="Userpassword"
              name="Userpassword"
              className="form-control border-0 border-b p-5 relative mb-3 focus:border-custom"
            />
            <button className="mt-5 text-white p-3 w-1/5 text-center rounded-lg items-center justify-items-center self-center" style={{ backgroundColor: '#1abc9c' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

