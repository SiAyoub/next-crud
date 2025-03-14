import React, { FC, useState } from "react";
import { FiArrowRightCircle, FiZap, FiTrendingUp } from "react-icons/fi";
import { FaIndustry, FaTint } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const EmissionsExplainer: FC = () => {
  return (
    <>
      <div className=" bg-gray-50 rounded p-4  mx-auto">
        <div className="border-b pb-3 mb-4">
          <h1 className="text-xl font-bold text-gray-800">Emissions Types</h1>
          <p className="text-sm text-gray-600">
            Direct emissions from company-owned sources
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-50 p-3 rounded-lg  border-gray-200">
            <h2 className="text-base font-medium text-gray-800 flex items-center">
              <FiZap className="text-amber-500 mr-2" size={16} />
              Stationary
            </h2>
            <p className="text-sm text-gray-600">Boilers & generators</p>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg  border-gray-200">
            <h2 className="text-base font-medium text-gray-800 flex items-center">
              <FiTrendingUp className="text-blue-500 mr-2" size={16} />
              Mobile
            </h2>
            <p className="text-sm text-gray-600">Company vehicles</p>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg  border-gray-200">
            <h2 className="text-base font-medium text-gray-800 flex items-center">
              <FaIndustry className="text-purple-500 mr-2" size={16} />
              Process
            </h2>
            <p className="text-sm text-gray-600">Manufacturing</p>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg  border-gray-200">
            <h2 className="text-base font-medium text-gray-800 flex items-center">
              <FaTint className="text-red-500 mr-2" size={16} />
              Fugitive
            </h2>
            <p className="text-sm text-gray-600">System leaks</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmissionsExplainer;
