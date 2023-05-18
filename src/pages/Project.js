import React from "react";
import codegreen from '../assets/codegreen.webp'
import bakery from '../assets/bakery.jpg'
import movie from '../assets/movie.jpg'

const Project = () => {
  return (
    <>
      <div className="min-h-min mb-10"> 
        <h1 className="text-6xl text-yellow-400 text-center font-oswald mb-11 md:mt-0 mt-7">PROJECTS</h1>
        <div className=" flex flex-col md:flex-row " >
          <div className="w-full rounded-lg shadow-md lg:max-w-sm px-5">
            <img
              className="object-cover w-full h-48 rounded-md bg-slate-50"
              src={codegreen}
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                Code Green
              </h4>
              <p className="mb-2 leading-normal text-white ">
              It is a application based website which can be used to calculate the net Carbon Emissions of a
               code snippet and give detailed descriptions about its further optimization
              </p>
              <button onClick={()=> {
                 window.location.href = 'https://github.com/gospeller986/CODE-GREEN'
              }} className="text-white border-2 py-2 px-4 mt-5 hover:text-black hover:bg-white">
              Github 🔗
              </button>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm px-5 pt-4 md:pt-0 ">
            <img
              className="object-cover w-full h-48 rounded-md"
              src={bakery}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                Bakery Application
              </h4>
              <p className="mb-2 leading-normal text-white ">
              A website for selling cakes which enables the seller to categorise the cakes and add new cakes for sales along with images.
               It is also capable of deleting or updating the cakes .
              </p>
              <button onClick={()=>{
                window.location.href = 'https://github.com/gospeller986/Bakery-Application'
              }} className="text-white border-2 py-2 px-4 mt-5 hover:text-black hover:bg-white">
                Github 🔗
              </button>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm px-5 pt-4 md:pt-0">
            <img
              className="object-cover w-full h-48 rounded-md"
              src={movie}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                Movie Booking Application
              </h4>
              <p className="mb-2 leading-normal text-white ">
              The movie booking app is a mobile application developed in React Native that allows users
               to easily browse and book movies from their mobile device with Stripe integration .
              </p>
              <button onClick={()=>{
                  window.location.href = 'https://github.com/gospeller986/MovieBookingApp_ReacNative'
              }} className="text-white border-2 py-2 px-4 mt-5 hover:text-black hover:bg-white">
              Github 🔗
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
