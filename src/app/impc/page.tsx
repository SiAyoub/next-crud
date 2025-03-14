"use client";
import { IoCarSportOutline, IoSettingsOutline } from "react-icons/io5";
import Navbar from "../Components/navbar";
import Sidebar from "../Components/Sidebar";
import { BiBuildings } from "react-icons/bi";
import { FaCarRear } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import AnimatedBilanCarbone from "../Components/animated";
import EmissionsExplainer from "../Components/emissioninfo";
import { FiArrowRightCircle, FiArrowDownCircle } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function impc() {
 
  return (
    <div className="min-h-screen bg-gray-50">
     
      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <div className="flex-1 p-3 sm:p-4 md:p-6">
          <div className="w-full bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-md ">
            <div className="flex-col p-6">
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl text-gray-900 font-bold">
                  Impact Categories
                </h1>
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium mt-4 py-1 px-4 rounded-lg flex items-center text-sm transition duration-300">
                  2019
                  <FiArrowDownCircle className="ml-2" size={16} />
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4 md:mt-5">
                  <button
                  
                    type="button"
                    className="  bg-white  rounded-lg shadow-md border-l-12 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                  >
                    <div className="bg-white p-3 md:p-4 flex items-center">
                      <div className="text-green-400 text-xl sm:text-2xl md:text-4xl mr-3 sm:mr-4">
                        <BiBuildings />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-base sm:text-lg md:text-2xl text-gray-900 line-clamp-2">
                          Facility Combustion
                        </h2>
                      </div>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="bg-white rounded-lg shadow-md border-l-12 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                  >
                    <div className="bg-white p-3 md:p-4 flex items-center">
                      <div className="text-green-400 text-xl sm:text-2xl md:text-4xl mr-3 sm:mr-4">
                        <IoCarSportOutline />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-base sm:text-lg md:text-2xl text-gray-900 line-clamp-2">
                          Vehicle Combustion
                        </h2>
                      </div>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="bg-white rounded-lg shadow-md border-l-12 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                  >
                    <div className="bg-white p-3 md:p-4 flex items-center">
                      <div className="text-green-400 text-xl sm:text-2xl md:text-4xl mr-3 sm:mr-4">
                        <SlEnergy />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-base sm:text-lg md:text-2xl text-gray-900 line-clamp-2">
                          Purchased Electricity
                        </h2>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="mt-6">
                  <EmissionsExplainer />
                  </div>
              </div>
            </div>
          </div>
          <div className="">
            <AnimatedBilanCarbone />
          </div>
        </div>
      </div>
      
    </div>
  );
}
