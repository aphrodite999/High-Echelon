
import React, { useState, useRef, useEffect } from 'react';
import grayLogo from "../../images/repeating/testimonials/HESeal.svg";
import googleLogo from "../../images/reviews/google.png";

// Data


const data = [
    {
      quote:
        "Communication, respect, and responsiveness are very important to me and I cannot say enough about Kevin and MacAsh when it comes to these attributes. I highly recommend them not only for this but for the superior rates he was able to secure me. Great communication every step of the way via email, call, and text.",
      name: "Person's Name",
      subname: "Optional Subheading",
    },
    {
      quote:
        "There's no shortage of lenders and brokers out there. It's a very competitive space but Kevin set the bar high. I refinanced with him and the entire process was easy, quick, and efficient. I was always kept in the loop from applying to closing and felt like Kevin gave his 100% attention to my loan. Thank you!!",
      name: "RefugioBautista, Elgin, IL",
      subname: "Optional Subheadings",
    },
  ];

const Carousel = () => {
  const sliderLength = data.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const movePrev = () => {
      setCurrentIndex((sliderLength + currentIndex - 1) % sliderLength);
  };

  const moveNext = () => {
      setCurrentIndex((currentIndex + 1) % sliderLength);
  };

  return (
    <div className="container">
        <div className="flex items-center justify-center">
            <button
            onClick={movePrev}
            className="mr-2"
            >
            <i onClick={movePrev} className="fa fa-arrow-circle-left mr-3 text-primary-100 text-4xl"></i>
            </button>
            <div className="my-12 mb-12 flex items-center">
                {data.map((resource, index) => {
                    return (
                        index==currentIndex ? (
                            <div 
                                key={index}
                                className="relative text-primary-700 gap-y-10 py-6 md:px-44 sm:px-4 bg-primary-500">
                                <div className="text-center">
                                    <p className="font-xl font-black mb-1">{resource.name}</p>
                                    <p className="font-lg font-gray-300">{resource.subname}</p>
                                </div>
                                <p className="my-10 px-3 text-typography-body bg-offwhite">
                                    {resource.quote}
                                </p>
                                <img
                                    src={grayLogo}
                                    alt="gray Logo"
                                    className="absolute -bottom-14 -right-7"
                                />
                                <div className="flex justify-center h-20">
                                    <img
                                        src={googleLogo}
                                        alt="google Logo"
                                        className="h-5 w-15"
                                    />
                                </div>
                            </div>
                        ) : 
                        (
                            <>
                            </>
                        )
                    
                    );
                })}
            </div>     
            <button
            onClick={moveNext}
            className="ml-2"
        >
            <i onClick={moveNext} className="fa fa-arrow-circle-right ml-3 text-primary-100 text-4xl"></i>
            </button>
        </div>
        <div className="flex justify-center">
            {data.map((resource, index) => {
                return(
                    index==currentIndex ?
                        <div className="w-8 h-2 bg-primary-100 mr-2 rounded"></div>
                    :
                        <div className="w-2 h-2 bg-primary-100 mr-2 rounded-full"></div>
                );
            })}
        </div>
    </div>
  );
};

export default Carousel;