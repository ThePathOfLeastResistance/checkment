import { useReducer } from "react";

import "./style.css";

function IndexPopup() {
  const [count, increase] = useReducer((c) => c + 1, 0);

  return (
    <div>
      <div>
        <button onClick={increase}>Increase</button>
        <h1>Checkmint</h1>
        <button></button>
      </div>
      <div>
        <div>
          <div>
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
          <div>
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
          <button>High Medium Light</button>
          <div>
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
          <button>High Medium Light</button>
        </div>
        <div>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default IndexPopup;
