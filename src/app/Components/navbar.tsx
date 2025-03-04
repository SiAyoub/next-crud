const Navbar = () => {
    return (
      <div>
        <nav className="bg-white text-green-700 shadow-lg">
          <div className="max-w-7xl ">
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="flex items-center py-4 px-2">
                  <img
                    src="/J9jiyHG - Imgur.png"
                    alt="logo"
                    className="w-auto h-8"
                  />
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  <a
                    href="#home"
                    className="py-4 px-3 hover:bg-green-600 transition duration-300 rounded"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="py-4 px-3 hover:bg-green-600 transition duration-300 rounded"
                  >
                    About
                  </a>
                  <a
                    href="#members"
                    className="py-4 px-3 hover:bg-green-600 transition duration-300 rounded"
                  >
                    Members
                  </a>
                  <a
                    href="#contact"
                    className="py-4 px-3 hover:bg-green-600 transition duration-300 rounded"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button className="mobile-menu-button">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}
export default Navbar;