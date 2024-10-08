"use client";
import React, { useState } from "react";

const Accordion = ({ header, content }: { header: any; content: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f4f4f4] rounded-md px-1 py-2">
      <button
        className="flex justify-between items-center w-full px-3 md:py-1 md:px-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {" "}
          {isOpen ? (
            <span className="a0">{header?.iconAfter}</span>
          ) : (
            <span className="">{header?.iconBefore}</span>
          )}
          <span className="md:text-lg font-medium text-sm">
            {header?.title}
          </span>
        </div>
        <span className="text-4xl">
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16H24"
                stroke="#212121"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.1146 20.0963C35.1146 20.4253 34.9839 20.7408 34.7512 20.9735C34.5186 21.2061 34.2031 21.3368 33.8741 21.3368H21.4696V33.7413C21.4696 34.0703 21.3389 34.3858 21.1063 34.6184C20.8737 34.8511 20.5581 34.9817 20.2292 34.9817C19.9002 34.9817 19.5847 34.8511 19.352 34.6184C19.1194 34.3858 18.9887 34.0703 18.9887 33.7413V21.3368H6.5842C6.25521 21.3368 5.9397 21.2061 5.70707 20.9735C5.47444 20.7408 5.34375 20.4253 5.34375 20.0963C5.34375 19.7674 5.47444 19.4518 5.70707 19.2192C5.9397 18.9866 6.25521 18.8559 6.5842 18.8559H18.9887V6.45139C18.9887 6.1224 19.1194 5.80689 19.352 5.57426C19.5847 5.34163 19.9002 5.21094 20.2292 5.21094C20.5581 5.21094 20.8737 5.34163 21.1063 5.57426C21.3389 5.80689 21.4696 6.1224 21.4696 6.45139V18.8559H33.8741C34.2031 18.8559 34.5186 18.9866 34.7512 19.2192C34.9839 19.4518 35.1146 19.7674 35.1146 20.0963Z"
                fill="#212121"
              />
            </svg>
          )}
        </span>
      </button>
      <div
        className={`animate-in ease-out duration-1000 fade-in overflow-hidden ${
          isOpen ? "md:h-20 h-40" : "h-0 md:h-0"
        }`}
      >
        <div className="p-4">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
