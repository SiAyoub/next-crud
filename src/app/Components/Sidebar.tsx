import { FiUser } from "react-icons/fi";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { PiBuildingsLight } from "react-icons/pi";
import { CiDatabase, CiFileOn } from "react-icons/ci";
import { BsBuilding } from "react-icons/bs";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div className="w-full md:w-64 bg-white text-black border-[1px] rounded-2xl border-gray-200 min-h-screen">
      <div className=" w-full">
        <h5 className="text-lg font-semibold ml-4 mt-4">Home</h5>
        <ul className="mt-0 space-y-2 p-2">
          <li className="group p-2 ">
            <a href="#dashboard" className="flex items-center space-x-2 ml-10">
              <IoHomeOutline />

              <span>Dashboard</span>
            </a>
            <div className="w-full bg-green-400 h-0.5 opacity-0 group-hover:opacity-100 transition duration-200"></div>
          </li>
          <ul />
          <h5 className="text-lg font-semibold ml-2 mt-4">Carbon Management</h5>
          <li className="group p-2">
            <a href="#reports" className="flex items-center space-x-2 ml-10">
              <CiDatabase />

              <span>Overview</span>
            </a>
            <div className="w-full bg-green-400 h-0.5 opacity-0 group-hover:opacity-100 transition duration-200"></div>
          </li>
          <li className="p-2">
            <a href="#users" className="flex items-center space-x-2 ml-10">
              <IoSettingsOutline />
              <span>Mesure</span>
            </a>
            <div className="w-full bg-[#4DB848] h-0.5 opacity-100 "></div>
          </li>

          <h5 className="text-lg font-semibold ml-2 mt-4">Report</h5>

          <li className="group p-2">
            <a href="#users" className="flex items-center space-x-2 ml-10">
              <CiFileOn />

              <span>GHG Report</span>
            </a>
            <div className="w-full bg-green-400 h-0.5 opacity-0 group-hover:opacity-100 transition duration-200"></div>
          </li>
          <h5 className="text-lg font-semibold ml-2 mt-4">Settings</h5>
          <li className="group p-2">
            <a href="#reports" className="flex items-center space-x-2 ml-10">
              <FiUser />

              <span>Operational Profile</span>
            </a>
            <div className="w-full bg-green-400 h-0.5 opacity-0 group-hover:opacity-100 transition duration-200"></div>
          </li>
          <li className="group p-2 ">
            <a href="#settings" className="flex items-center space-x-2 ml-10">
              <HiOutlineBuildingOffice />

              <span>Organizational Profile</span>
            </a>
            <div className="w-full bg-green-400 h-0.5 opacity-0 group-hover:opacity-100 transition duration-200"></div>
          </li>
          <li className="group p-2">
            <a href="#" className="flex items-center space-x-2 ml-10">
              <FiUser />

              <span>User management</span>
            </a>
            <div className="w-full bg-green-400 h-0.5 opacity-0 group-hover:opacity-100 transition duration-200"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
