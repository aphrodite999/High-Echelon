import React from "react";

const UtilityNav = () => {
  return (
    <div id="utlity-navigation" className="bg-primary-700 py-1.5">
      <div className="container">
        <div className="flex justify-end items-center text-sm text-white">
          <div className="flex justify-between md:justify-end w-full md:w-auto space-x-8">
            <div className="flex items-center">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1.5"
              >
                <path
                  d="M1.08124.769072L4.33117.019088c.35312-.081249.71561.103122.85936.434365L6.6905 3.95338c.13125.30624.04375.66561-.21562.87498L4.58117 6.37833c1.12498 2.39682 3.09056 4.39057 5.53743 5.53737l1.5499-1.8937c.2125-.25937.5688-.34687.875-.21562l3.4999 1.49992c.3344.1469.5188.5094.4375.8625l-.75 3.25c-.0781.3375-.3781.5812-.7312.5812C6.99674 16 .5 9.51576.5 1.50031c0-.35.240621-.653115.58124-.731238z"
                  fill="#D2B15E"
                />
              </svg>
              <a
                href="tel:773-501-3997"
                className="text-sm font-semibold text-white hover:text-primary-100"
              >
                (773) 501-3997
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="https://www.blink.mortgage/app/signup/p/macashhomeloansllc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white hover:text-primary-100"
              >
                Client Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UtilityNav;
