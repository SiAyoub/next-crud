"use client";
import { IoCarSportOutline, IoSettingsOutline } from "react-icons/io5";
import Navbar from "../Components/navbar";
import Sidebar from "../Components/Sidebar";
import { BiBuildings } from "react-icons/bi";
import { FaCarRear } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import AnimatedBilanCarbone from "../Components/animated";
import EmissionsExplainer from "../Components/emissioninfo";

import { FiArrowRightCircle, FiArrowDownCircle, FiInfo } from "react-icons/fi";
import { JSX, useState } from "react";
export default function mesure() {
  const [selectedYear, setSelectedYear] = useState("2019");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showYearDropdown, setShowYearDropdown] = useState(false);

//   const years = ["2019", "2020", "2021", "2022", "2023", "2024"];

  type CategoryColor = "emerald" | "blue" | "amber";

  const categories = [
    {
      id: "facility",
      title: "Facility Combustion",
      iconPath: "/usine.png", // Using the image file
      color: "emerald",
    },
    {
      id: "vehicle",
      title: "Vehicle Combustion",
      iconPath: "/voiture.png", // Using the image file
      color: "blue",
    },
    {
      id: "electricity",
      title: "Purchased Electricity",
      iconPath: "/idee-ampoule.png",
      color: "amber",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1  ml-6 bg-gray-50">
          <div className="w-full bg-white rounded-xl min-h-screen shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              {/* Header with year selector */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl md:text-2xl text-gray-900 font-bold flex items-center">
                  Carbon Measurement
                </h1>
                 
                {/* <div className="relative">
                  <button
                    onClick={() => setShowYearDropdown(!showYearDropdown)}
                    className="bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-lg flex items-center transition duration-300"
                  >
                    {selectedYear}
                    <FiArrowDownCircle className="ml-2" size={16} />
                  </button>

                  {showYearDropdown && (
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg z-10 border border-gray-100">
                      {years.map((year) => (
                        <button
                          key={year}
                          className="block w-full text-left px-4 py-2 text-black hover:bg-green-500 transition duration-150"
                          onClick={() => {
                            setSelectedYear(year);
                            setShowYearDropdown(false);
                          }}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  )}
                </div> */}
                
              </div>
              {/* Info section */}
              <div className="mt-6 mb-6 bg-gray-50 rounded-lg p-5 border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                    <FiInfo className="text-gray-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      Understanding Emissions Categories
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      These categories represent the primary sources of
                      greenhouse gas emissions in your operations. Tracking each
                      category helps identify areas for potential reduction and
                      optimization. Select a category above to begin measuring
                      your carbon footprint.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Category selection cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {categories.map((category) => {
                  const isSelected = selectedCategory === category.id;
                  const colorMap = {
                    emerald: "bg-emerald-500",
                    blue: "bg-blue-500",
                    amber: "bg-amber-500",
                  };
                  const bgColor = colorMap[category.color as CategoryColor];

                  return (
                    <button
                      key={category.id}
                      type="button"
                      className={`bg-white  rounded-xl shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden ${
                        isSelected ? "ring-2 ring-offset-2 ring-gray-800" : ""
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <div className={`h-2 ${bgColor}`}></div>
                      <div className="p-4 flex items-center">
                        <div className="mr-4 p-2 bg-gray-50 rounded-lg flex items-center justify-center w-12 h-12">
                          <img
                            src={category.iconPath}
                            alt={category.title}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <h2 className="text-lg md:text-xl text-gray-900 font-medium">
                            {category.title}
                          </h2>
                          <p className="text-sm text-gray-500 mt-1">
                            Click to measure
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="mt-20  opacity-65">
                <AnimatedBilanCarbone />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#4DB848] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="font-bold">Turning Data Into Climate Action</h3>
              <p className="text-green-100 text-sm">
                © 2024 Proverdy. Tous droits réservés.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-green-100 hover:text-white">
                Aide
              </a>
              <a href="#" className="text-green-100 hover:text-white">
                Contact
              </a>
              <a href="#" className="text-green-100 hover:text-white">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
