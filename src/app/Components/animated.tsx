import React from "react";

const AnimatedBilanCarbone = () => {
  return (
    <div className="relative w-full h-80 sm:h-96 flex items-center justify-center bg-white rounded-lg overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
          {Array.from({ length: 72 }).map((_, i) => (
            <div key={i} className="border border-gray-200"></div>
          ))}
        </div>
      </div>

      {/* Animated Carbon Elements */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Factory with emissions */}
        <g className="factory-emissions">
          <rect x="60" y="130" width="60" height="40" fill="#e0e0e0" />
          <rect x="75" y="100" width="10" height="30" fill="#d0d0d0" />
          <rect x="95" y="110" width="10" height="20" fill="#d0d0d0" />

          {/* CO2 emissions */}
          <circle cx="80" cy="90" r="5" fill="#9e9e9e">
            <animate
              attributeName="cy"
              from="90"
              to="40"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.8"
              to="0"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="100" cy="100" r="4" fill="#9e9e9e">
            <animate
              attributeName="cy"
              from="100"
              to="50"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.8"
              to="0"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Car with emissions */}
        <g className="car-emissions">
          <rect x="250" y="140" width="40" height="20" rx="5" fill="#bdbdbd" />
          <circle cx="260" cy="160" r="6" fill="#757575" />
          <circle cx="280" cy="160" r="6" fill="#757575" />

          {/* CO2 emissions */}
          <circle cx="290" cy="145" r="3" fill="#9e9e9e">
            <animate
              attributeName="cx"
              from="290"
              to="310"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.8"
              to="0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="290" cy="140" r="2" fill="#9e9e9e">
            <animate
              attributeName="cx"
              from="290"
              to="315"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.8"
              to="0"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Trees absorbing carbon */}
        <g className="trees">
          <path
            d="M150 140 L150 120 L140 130 L150 110 L135 125 L150 100 L130 120 L150 90 L170 120 L150 100 L165 125 L150 110 L160 130 L150 120 Z"
            fill="#81c784"
          />
          <rect x="148" y="140" width="4" height="20" fill="#8d6e63" />

          {/* Carbon absorption animation */}
          <circle cx="170" cy="100" r="3" fill="#66bb6a">
            <animate
              attributeName="cx"
              from="170"
              to="150"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="100"
              to="110"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.6"
              to="0"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="130" cy="110" r="2" fill="#66bb6a">
            <animate
              attributeName="cx"
              from="130"
              to="150"
              dur="5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="110"
              to="105"
              dur="5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.6"
              to="0"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Solar panel */}
        <g className="solar-panel">
          <rect x="330" y="130" width="30" height="20" fill="#64b5f6" />
          <line
            x1="330"
            y1="135"
            x2="360"
            y2="135"
            stroke="#e3f2fd"
            strokeWidth="1"
          />
          <line
            x1="330"
            y1="140"
            x2="360"
            y2="140"
            stroke="#e3f2fd"
            strokeWidth="1"
          />
          <line
            x1="330"
            y1="145"
            x2="360"
            y2="145"
            stroke="#e3f2fd"
            strokeWidth="1"
          />
          <line
            x1="340"
            y1="130"
            x2="340"
            y2="150"
            stroke="#e3f2fd"
            strokeWidth="1"
          />
          <line
            x1="350"
            y1="130"
            x2="350"
            y2="150"
            stroke="#e3f2fd"
            strokeWidth="1"
          />

          {/* Sun rays */}
          <line
            x1="345"
            y1="120"
            x2="345"
            y2="110"
            stroke="#ffee58"
            strokeWidth="1"
          >
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="335"
            y1="125"
            x2="325"
            y2="120"
            stroke="#ffee58"
            strokeWidth="1"
          >
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="355"
            y1="125"
            x2="365"
            y2="120"
            stroke="#ffee58"
            strokeWidth="1"
          >
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </line>
        </g>

        {/* Carbon cycle indicators - circles with paths */}
        <g className="carbon-cycle">
          <circle
            cx="200"
            cy="80"
            r="30"
            fill="none"
            stroke="#e0f2f1"
            strokeWidth="2"
            strokeDasharray="5,3"
          >
            <animate
              attributeName="r"
              values="30;32;30"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          <path
            d="M 180,75 Q 200,60 220,75"
            fill="none"
            stroke="#26a69a"
            strokeWidth="1.5"
            strokeDasharray="3,2"
          >
            <animate
              attributeName="d"
              values="M 180,75 Q 200,60 220,75; M 180,70 Q 200,55 220,70; M 180,75 Q 200,60 220,75"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M 220,85 Q 200,100 180,85"
            fill="none"
            stroke="#78909c"
            strokeWidth="1.5"
            strokeDasharray="3,2"
          >
            <animate
              attributeName="d"
              values="M 220,85 Q 200,100 180,85; M 220,90 Q 200,105 180,90; M 220,85 Q 200,100 180,85"
              dur="7s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>

      {/* Information Text with cleaner styling */}
      <div className="z-10 text-center p-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 animate-fadeIn">
          Other Categories will be added soon!
        </h2>
        <p className="text-sm sm:text-base text-gray-600 animate-slideIn max-w-xs mx-auto">
          Track, measure, and reduce your carbon emissions for a sustainable
          future
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 1.5s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBilanCarbone;
