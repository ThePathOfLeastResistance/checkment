import { useReducer } from "react";

import "./style.css";

function IndexPopup() {
  const [count, increase] = useReducer((c) => c + 1, 0);

  return (
    <div className="p-6 bg-[#F1F6F9] border-2 border-black">
      <div className="flex items-center justify-between">
        <div className="flex mx-2 my-4" role="group">
          <button
            className="inline-block px-2 py-1 border-2 border-black rounded-l hover:bg-black hover:text-white"
            type="button"
          >
            On
          </button>
          <button
            className="inline-block px-2 py-1 border-t-2 border-b-2 border-r-2 border-black rounded-r hover:bg-black hover:text-white"
            type="button"
          >
            Off
          </button>
        </div>
        <h1 className="text-base font-bold	text-[#212A3E] mx-5">Checkmint</h1>
        <div className="flex mx-2 my-4" role="group">
          <button
            className="inline-block px-2 py-1 border-2 border-black rounded-l hover:bg-black hover:text-white"
            type="button"
          >
            Teacher
          </button>
          <button
            className="inline-block px-2 py-1 border-t-2 border-b-2 border-r-2 border-black rounded-r hover:bg-black hover:text-white"
            type="button"
          >
            Student
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center ">
        <div>
          <div className="flex flex-row items-center ">
            <h2>Mode</h2>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="7" cy="6.5" rx="7" ry="6.5" fill="#212A3E" />
              <path
                d="M6.76705 10V4.54545H7.60511V10H6.76705ZM7.19318 3.63636C7.02983 3.63636 6.88897 3.58073 6.7706 3.46946C6.65459 3.35819 6.59659 3.22443 6.59659 3.06818C6.59659 2.91193 6.65459 2.77817 6.7706 2.6669C6.88897 2.55563 7.02983 2.5 7.19318 2.5C7.35653 2.5 7.49621 2.55563 7.61222 2.6669C7.73059 2.77817 7.78977 2.91193 7.78977 3.06818C7.78977 3.22443 7.73059 3.35819 7.61222 3.46946C7.49621 3.58073 7.35653 3.63636 7.19318 3.63636Z"
                fill="white"
              />
            </svg>
          </div>
          <button>Student/Teacher</button>
          <div className="flex flex-row items-center ">
            <h2>AI guess strictness:</h2>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="7" cy="6.5" rx="7" ry="6.5" fill="#212A3E" />
              <path
                d="M6.76705 10V4.54545H7.60511V10H6.76705ZM7.19318 3.63636C7.02983 3.63636 6.88897 3.58073 6.7706 3.46946C6.65459 3.35819 6.59659 3.22443 6.59659 3.06818C6.59659 2.91193 6.65459 2.77817 6.7706 2.6669C6.88897 2.55563 7.02983 2.5 7.19318 2.5C7.35653 2.5 7.49621 2.55563 7.61222 2.6669C7.73059 2.77817 7.78977 2.91193 7.78977 3.06818C7.78977 3.22443 7.73059 3.35819 7.61222 3.46946C7.49621 3.58073 7.35653 3.63636 7.19318 3.63636Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex mx-2 my-4" role="group">
            <button
              className="inline-block px-2 py-1 mx-4 border-2 border-black rounded hover:bg-black hover:text-white"
              type="button"
            >
              High
            </button>
            <button
              className="inline-block px-2 py-1 mx-4 border-2 border-black rounded hover:bg-black hover:text-white"
              type="button"
            >
              Medium
            </button>
            <button
              className="inline-block px-2 py-1 mx-4 border border-black rounded 2 hover:bg-black hover:text-white"
              type="button"
            >
              High
            </button>
          </div>
          <div className="flex flex-row items-center ">
            <h2>AI guess strictness:</h2>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="7" cy="6.5" rx="7" ry="6.5" fill="#212A3E" />
              <path
                d="M6.76705 10V4.54545H7.60511V10H6.76705ZM7.19318 3.63636C7.02983 3.63636 6.88897 3.58073 6.7706 3.46946C6.65459 3.35819 6.59659 3.22443 6.59659 3.06818C6.59659 2.91193 6.65459 2.77817 6.7706 2.6669C6.88897 2.55563 7.02983 2.5 7.19318 2.5C7.35653 2.5 7.49621 2.55563 7.61222 2.6669C7.73059 2.77817 7.78977 2.91193 7.78977 3.06818C7.78977 3.22443 7.73059 3.35819 7.61222 3.46946C7.49621 3.58073 7.35653 3.63636 7.19318 3.63636Z"
                fill="white"
              />
            </svg>
          </div>
          <button>TBH</button>
        </div>
        <div>
          <div>
            <h2 className="flex flex-row items-center ">Display Bar</h2>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="7" cy="6.5" rx="7" ry="6.5" fill="#212A3E" />
              <path
                d="M6.76705 10V4.54545H7.60511V10H6.76705ZM7.19318 3.63636C7.02983 3.63636 6.88897 3.58073 6.7706 3.46946C6.65459 3.35819 6.59659 3.22443 6.59659 3.06818C6.59659 2.91193 6.65459 2.77817 6.7706 2.6669C6.88897 2.55563 7.02983 2.5 7.19318 2.5C7.35653 2.5 7.49621 2.55563 7.61222 2.6669C7.73059 2.77817 7.78977 2.91193 7.78977 3.06818C7.78977 3.22443 7.73059 3.35819 7.61222 3.46946C7.49621 3.58073 7.35653 3.63636 7.19318 3.63636Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex mx-2 my-4" role="group">
            <button
              className="inline-block px-2 py-1 mx-4 border-2 border-black rounded hover:bg-black hover:text-white"
              type="button"
            >
              1
            </button>
            <button
              className="inline-block px-2 py-1 mx-4 border-2 border-black rounded hover:bg-black hover:text-white"
              type="button"
            >
              2
            </button>
            <button
              className="inline-block px-2 py-1 mx-4 border border-black rounded 2 hover:bg-black hover:text-white"
              type="button"
            >
              Custom
            </button>
          </div>
          <div>
            <h2 className="flex flex-row items-center ">Feedback Form:</h2>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="7" cy="6.5" rx="7" ry="6.5" fill="#212A3E" />
              <path
                d="M6.76705 10V4.54545H7.60511V10H6.76705ZM7.19318 3.63636C7.02983 3.63636 6.88897 3.58073 6.7706 3.46946C6.65459 3.35819 6.59659 3.22443 6.59659 3.06818C6.59659 2.91193 6.65459 2.77817 6.7706 2.6669C6.88897 2.55563 7.02983 2.5 7.19318 2.5C7.35653 2.5 7.49621 2.55563 7.61222 2.6669C7.73059 2.77817 7.78977 2.91193 7.78977 3.06818C7.78977 3.22443 7.73059 3.35819 7.61222 3.46946C7.49621 3.58073 7.35653 3.63636 7.19318 3.63636Z"
                fill="white"
              />
            </svg>
          </div>
          <button
            className="inline-block px-2 py-1 mx-4 border border-black rounded 2 hover:bg-black hover:text-white"
            type="button"
          >
            Here
          </button>
          <div className="flex flex-row items-center ">
            <h2>Mode</h2>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="7" cy="6.5" rx="7" ry="6.5" fill="#212A3E" />
              <path
                d="M6.76705 10V4.54545H7.60511V10H6.76705ZM7.19318 3.63636C7.02983 3.63636 6.88897 3.58073 6.7706 3.46946C6.65459 3.35819 6.59659 3.22443 6.59659 3.06818C6.59659 2.91193 6.65459 2.77817 6.7706 2.6669C6.88897 2.55563 7.02983 2.5 7.19318 2.5C7.35653 2.5 7.49621 2.55563 7.61222 2.6669C7.73059 2.77817 7.78977 2.91193 7.78977 3.06818C7.78977 3.22443 7.73059 3.35819 7.61222 3.46946C7.49621 3.58073 7.35653 3.63636 7.19318 3.63636Z"
                fill="white"
              />
            </svg>
          </div>
          <button>light/dark</button>
        </div>
      </div>
    </div>
  );
}

export default IndexPopup;
