
const Sidebar = () => {
    return (
    
      <div className="w-full md:w-64 bg-white text-green-700 shadow-lg">
        <div className=" w-full">
          <h2 className="text-xl font-semibold ml-4 mt-4">Main Menu</h2>
          <ul className="mt-4 space-y-2">
            <li className="p-2 hover:bg-gray-500   transition duration-200  hover:text-white">
              <a href="#dashboard" className="flex items-center space-x-2 ml-2">
                <span>Dashboard</span>
              </a>
            </li>
            <li className="p-2 bg-gray-500   transition duration-200  text-white">
              <a href="#users" className="flex items-center space-x-2 ml-2">
                <span>Users</span>
              </a>
            </li>
            <li className="p-2 hover:bg-gray-500   transition duration-200  hover:text-white">
              <a href="#settings" className="flex items-center space-x-2 ml-2">
                <span>Settings</span>
              </a>
            </li>
            <li className="p-2 hover:bg-gray-500   transition duration-200  hover:text-white">
              <a href="#reports" className="flex items-center space-x-2 ml-2">
                <span>Reports</span>
              </a>
            </li>
          </ul>
        </div>
            </div>
            
    );
}

export default Sidebar;