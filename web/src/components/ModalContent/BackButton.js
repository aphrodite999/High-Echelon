import React from "react";

const BackButton = ({ onClick }) => {
  return (
    <button
      className="group text-primary-400 lg:absolute mt-10 lg:mt-0 bottom-0 flex items-center space-x-2"
      type="button"
      onClick={onClick}
    >
      <div className="w-10 h-10 rounded-full border border-gray-100 flex justify-center items-center group-hover:bg-primary-400 group-hover:text-white transition-colors duration-300 ease-linear">
        <i className="far fa-arrow-left"></i>
      </div>
      <span className="font-bold">Go Back</span>
    </button>
  );
};

export default BackButton;
