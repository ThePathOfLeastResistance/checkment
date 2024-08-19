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
          <button></button>
          <button></button>
          <button></button>
          <button></button>
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
