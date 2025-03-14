"use client";
import { FiArrowDownCircle, FiInfo } from "react-icons/fi";
import Sidebar from "../Components/Sidebar";
import AnimatedBilanCarbone from "../Components/animated";
import TableData from "../Components/tabledata";
import { JSX, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import CustomersDemo from "../Components/table";
const products = [
  { name: "Product 1" },
  { name: "Product 2" },

  // Add more products as needed
];
const years = ["2019", "2020", "2021", "2022", "2023", "2024"];

export default function Vc() {
  const [selectedYear, setSelectedYear] = useState("2019");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1  ml-6 bg-gray-50">
          <div className="w-full bg-white rounded-xl min-h-screen shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex r gap-6">
                <h1 className="text-xl ml-4 md:text-2xl text-gray-900 font-bold flex items-center">
                  Facility Combustion
                </h1>

                <img src="/usine.png" alt="usine" className="w-10 h-10 mb-4" />
              </div>
             

              {/* Info section */}
              <div className="mt-6 mb-6 bg-gray-50 rounded-lg p-5 border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                    <FiInfo className="text-gray-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      These are emissions that occur from sources owned or
                      directly controlled by the company. Examples: Emissions
                      from burning fuels in equipment, boilers, furnaces, or
                      generators. Emissions from chemical reactions in
                      industrial processes (e.g., cement production).
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Please be thorough as much as possible. Changes will be
                      saved automatically Click on measure to measure the
                      footprint of this category
                    </p>
                  </div>
                </div>
              </div>
              <TableData />
              <div className="mt-18"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
